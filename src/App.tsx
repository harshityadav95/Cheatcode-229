import { useEffect, useMemo, useState } from 'react'
import {
  ArrowDown,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Code2,
  Copy,
  Database,
  ExternalLink,
  FileText,
  GitBranch,
  Library,
  ListFilter,
  Loader2,
  Menu,
  Moon,
  Network,
  NotebookPen,
  PlayCircle,
  Search,
  Sparkles,
  Shuffle,
  Sun,
  Target,
} from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { patterns, problems, type Problem } from '@/data/problems'
import './App.css'

type DifficultyFilter = Problem['difficulty'] | 'All'
type ThemeMode = 'light' | 'dark'
type Route = { kind: 'landing' } | { kind: 'problem'; slug: string } | { kind: 'leetcode'; slug: string }
type CatalogMode = 'curated' | 'leetcode'

interface ImportedProblemIndex {
  number: number
  title: string
  slug: string
  difficulty: Problem['difficulty'] | 'Unknown'
  tags: string[]
  source: string
  rating: string
  url: string
  videoUrl: string
  detailPath: string
}

interface ImportedProblemDetail extends ImportedProblemIndex {
  descriptionHtml: string
  solutionText: string
  solutionMarkdown: string
  code: Record<string, { label: string; language: string; code: string }>
  sourcePath: string
}

interface CodeSnippet {
  label: string
  language: string
  code: string
}

const difficulties: DifficultyFilter[] = ['All', 'Easy', 'Medium', 'Hard']
const notesStoragePrefix = 'cheatcode-229:notes:'
const themeStorageKey = 'cheatcode-229:theme'
const routeHashPattern = /^#\/(problems|leetcode)\/(.+)$/

function hashRoute(): Route {
  const match = window.location.hash.match(routeHashPattern)
  if (!match) {
    return { kind: 'landing' }
  }
  return match[1] === 'leetcode' ? { kind: 'leetcode', slug: match[2] } : { kind: 'problem', slug: match[2] }
}

function loadStoredNotes() {
  const storedNotes: Record<string, string> = {}
  if (typeof window === 'undefined') {
    return storedNotes
  }

  try {
    for (let index = 0; index < window.localStorage.length; index += 1) {
      const key = window.localStorage.key(index)
      if (key?.startsWith(notesStoragePrefix)) {
        storedNotes[key.slice(notesStoragePrefix.length)] = window.localStorage.getItem(key) ?? ''
      }
    }
  } catch {
    return {}
  }

  return storedNotes
}

function loadStoredTheme(): ThemeMode {
  if (typeof window === 'undefined') {
    return 'light'
  }

  try {
    const storedTheme = window.localStorage.getItem(themeStorageKey)
    return storedTheme === 'dark' ? 'dark' : 'light'
  } catch {
    return 'light'
  }
}

function App() {
  const [route, setRoute] = useState<Route>(hashRoute)
  const [query, setQuery] = useState('')
  const [pattern, setPattern] = useState('All')
  const [difficulty, setDifficulty] = useState<DifficultyFilter>('All')
  const [notesBySlug, setNotesBySlug] = useState<Record<string, string>>(loadStoredNotes)
  const [theme, setTheme] = useState<ThemeMode>(loadStoredTheme)
  const [importedProblems, setImportedProblems] = useState<ImportedProblemIndex[]>([])
  const [importedDetail, setImportedDetail] = useState<ImportedProblemDetail | null>(null)
  const [importedLoading, setImportedLoading] = useState(false)
  const [importedError, setImportedError] = useState('')

  useEffect(() => {
    const onHashChange = () => {
      setRoute(hashRoute())
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    let active = true
    fetch('/leetcode-main-data/index.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Unable to load LeetCode clone index (${response.status})`)
        }
        return response.json() as Promise<{ problems: ImportedProblemIndex[] }>
      })
      .then((payload) => {
        if (active) {
          setImportedProblems(payload.problems)
        }
      })
      .catch((error: unknown) => {
        if (active) {
          setImportedError(error instanceof Error ? error.message : 'Unable to load LeetCode clone index')
        }
      })
    return () => {
      active = false
    }
  }, [])

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    root.style.colorScheme = theme

    try {
      window.localStorage.setItem(themeStorageKey, theme)
    } catch {
      // Theme remains usable even when browser storage is unavailable.
    }
  }, [theme])

  const activeSlug = route.kind === 'problem' ? route.slug : problems[0].slug
  const activeProblem = useMemo(() => problems.find((problem) => problem.slug === activeSlug) ?? problems[0], [activeSlug])
  const activeImportedProblem = useMemo(
    () => importedProblems.find((problem) => problem.slug === (route.kind === 'leetcode' ? route.slug : '')),
    [importedProblems, route],
  )
  const noteText = notesBySlug[activeProblem.slug] ?? ''
  const curatedLeetcodeIds = useMemo(() => new Set(problems.map((problem) => problem.leetcode)), [])

  const filteredProblems = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    return problems.filter((problem) => {
      const matchesQuery =
        !normalized ||
        problem.title.toLowerCase().includes(normalized) ||
        String(problem.leetcode).includes(normalized) ||
        problem.pattern.toLowerCase().includes(normalized)
      const matchesPattern = pattern === 'All' || problem.pattern === pattern
      const matchesDifficulty = difficulty === 'All' || problem.difficulty === difficulty
      return matchesQuery && matchesPattern && matchesDifficulty
    })
  }, [difficulty, pattern, query])

  const filteredImportedProblems = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    return importedProblems.filter((problem) => {
      if (curatedLeetcodeIds.has(problem.number)) {
        return false
      }
      const matchesQuery =
        !normalized ||
        problem.title.toLowerCase().includes(normalized) ||
        String(problem.number).includes(normalized) ||
        problem.tags.some((tag) => tag.toLowerCase().includes(normalized))
      const matchesDifficulty = difficulty === 'All' || problem.difficulty === difficulty
      return matchesQuery && matchesDifficulty
    })
  }, [curatedLeetcodeIds, difficulty, importedProblems, query])

  useEffect(() => {
    if (route.kind !== 'leetcode' || !activeImportedProblem) {
      return
    }

    let active = true
    Promise.resolve()
      .then(() => {
        if (active) {
          setImportedLoading(true)
          setImportedError('')
          setImportedDetail(null)
        }
        return fetch(activeImportedProblem.detailPath)
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Unable to load ${activeImportedProblem.title} (${response.status})`)
        }
        return response.json() as Promise<ImportedProblemDetail>
      })
      .then((payload) => {
        if (active) {
          setImportedDetail(payload)
        }
      })
      .catch((error: unknown) => {
        if (active) {
          setImportedDetail(null)
          setImportedError(error instanceof Error ? error.message : 'Unable to load imported problem')
        }
      })
      .finally(() => {
        if (active) {
          setImportedLoading(false)
        }
      })
    return () => {
      active = false
    }
  }, [activeImportedProblem, route])

  const currentIndex = problems.findIndex((problem) => problem.slug === activeProblem.slug)
  const previousProblem = problems[Math.max(0, currentIndex - 1)]
  const nextProblem = problems[Math.min(problems.length - 1, currentIndex + 1)]
  const completion = Math.max(1, Math.round((activeProblem.id / problems.length) * 100))

  const openProblem = (problem: Problem) => {
    window.location.hash = `/problems/${problem.slug}`
  }

  const openImportedProblem = (problem: ImportedProblemIndex) => {
    window.location.hash = `/leetcode/${problem.slug}`
  }

  const browseProblems = () => {
    openProblem(activeProblem)
  }

  const openRandomProblem = () => {
    const randomProblem = problems[Math.floor(Math.random() * problems.length)]
    openProblem(randomProblem)
  }

  const openLeetCodeClone = () => {
    const firstImported = filteredImportedProblems[0] ?? importedProblems.find((problem) => !curatedLeetcodeIds.has(problem.number))
    if (firstImported) {
      openImportedProblem(firstImported)
    }
  }

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  const updateNote = (value: string) => {
    setNotesBySlug((currentNotes) => {
      const nextNotes = { ...currentNotes }
      if (value.trim()) {
        nextNotes[activeProblem.slug] = value
      } else {
        delete nextNotes[activeProblem.slug]
      }
      return nextNotes
    })

    try {
      const key = `${notesStoragePrefix}${activeProblem.slug}`
      if (value.trim()) {
        window.localStorage.setItem(key, value)
      } else {
        window.localStorage.removeItem(key)
      }
    } catch {
      // Notes remain editable even when browser storage is unavailable.
    }
  }

  const showLanding = route.kind === 'landing'
  const catalogMode: CatalogMode = route.kind === 'leetcode' ? 'leetcode' : 'curated'

  return (
    <TooltipProvider>
      <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-100">
        <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur dark:border-slate-800 dark:bg-slate-950/95">
          <div className="mx-auto flex max-w-[1500px] items-center gap-3 px-4 py-3 lg:px-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open problem list">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[92vw] max-w-md p-0">
                <CatalogBrowser
                  mode={catalogMode}
                  activeSlug={activeProblem.slug}
                  activeImportedSlug={activeImportedProblem?.slug ?? ''}
                  curatedProblems={filteredProblems}
                  importedProblems={filteredImportedProblems}
                  query={query}
                  pattern={pattern}
                  difficulty={difficulty}
                  importedLoaded={importedProblems.length > 0}
                  onQueryChange={setQuery}
                  onPatternChange={setPattern}
                  onDifficultyChange={setDifficulty}
                  onOpenProblem={openProblem}
                  onOpenImportedProblem={openImportedProblem}
                  onOpenCurated={browseProblems}
                  onOpenImported={openLeetCodeClone}
                />
              </SheetContent>
            </Sheet>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <Code2 className="size-5 text-cyan-700 dark:text-cyan-300" />
                <div className="truncate text-lg font-semibold tracking-normal">Cheatcode 229</div>
                <Badge variant="secondary" className="hidden sm:inline-flex">
                  DSA 2026
                </Badge>
              </div>
              <p className="truncate text-sm text-slate-600 dark:text-slate-400">
                229 curated problems plus imported LeetCode clone statements and solutions
              </p>
            </div>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={toggleTheme}
                  aria-label={theme === 'dark' ? 'Switch to white theme' : 'Switch to dark theme'}
                >
                  {theme === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />}
                </Button>
              </TooltipTrigger>
              <TooltipContent>{theme === 'dark' ? 'White theme' : 'Dark theme'}</TooltipContent>
            </Tooltip>

            <Button variant="outline" size="sm" asChild>
              <a href="https://github.com/harshityadav95/Cheatcode-229" target="_blank" rel="noreferrer">
                <GitBranch className="size-4" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            </Button>
          </div>
        </header>

        {showLanding && (
          <LandingHero
            problemCount={problems.length}
            patternCount={patterns.length}
            importedCount={importedProblems.length}
            onBrowse={browseProblems}
            onRandomProblem={openRandomProblem}
            onLeetCodeClone={openLeetCodeClone}
          />
        )}

        {!showLanding && route.kind !== 'leetcode' && (
          <ProblemWorkspace
            activeProblem={activeProblem}
            completion={completion}
            previousProblem={previousProblem}
            nextProblem={nextProblem}
            filteredProblems={filteredProblems}
            query={query}
            pattern={pattern}
            difficulty={difficulty}
            catalogMode={catalogMode}
            importedProblems={filteredImportedProblems}
            activeImportedSlug={activeImportedProblem?.slug ?? ''}
            importedLoaded={importedProblems.length > 0}
            noteText={noteText}
            onQueryChange={setQuery}
            onPatternChange={setPattern}
            onDifficultyChange={setDifficulty}
            onOpenProblem={openProblem}
            onOpenImportedProblem={openImportedProblem}
            onOpenCurated={browseProblems}
            onOpenImported={openLeetCodeClone}
            onUpdateNote={updateNote}
          />
        )}
        {!showLanding && route.kind === 'leetcode' && (
          <ImportedProblemWorkspace
            problem={activeImportedProblem}
            detail={activeImportedProblem ? importedDetail : null}
            loading={importedLoading}
            error={importedError}
            filteredProblems={filteredImportedProblems}
            query={query}
            difficulty={difficulty}
            catalogMode={catalogMode}
            activeCuratedSlug={activeProblem.slug}
            activeImportedSlug={activeImportedProblem?.slug ?? route.slug}
            importedLoaded={importedProblems.length > 0}
            onQueryChange={setQuery}
            onDifficultyChange={setDifficulty}
            onOpenProblem={openProblem}
            onOpenImportedProblem={openImportedProblem}
            onOpenCurated={browseProblems}
            onOpenImported={openLeetCodeClone}
          />
        )}
      </main>
    </TooltipProvider>
  )
}

function LandingHero({
  problemCount,
  patternCount,
  importedCount,
  onBrowse,
  onRandomProblem,
  onLeetCodeClone,
}: {
  problemCount: number
  patternCount: number
  importedCount: number
  onBrowse: () => void
  onRandomProblem: () => void
  onLeetCodeClone: () => void
}) {
  return (
    <section className="landing-hero relative isolate overflow-hidden bg-slate-950 text-white">
      <img
        src="/cheatcode-hero.png"
        alt=""
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-slate-950/65" />
      <div className="mx-auto flex h-full max-w-[1500px] items-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <Badge className="border border-cyan-300/40 bg-cyan-300/15 text-cyan-50">
            DSA 2026
          </Badge>
          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-normal text-white sm:text-5xl lg:text-6xl">
              Cheatcode 229
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-100 sm:text-lg">
              A focused interview workspace for problem statements, proof sketches, diagrams, and Python/Go solution files.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              type="button"
              size="lg"
              className="h-10 bg-white text-slate-950 hover:bg-cyan-50"
              onClick={onBrowse}
            >
              <ArrowDown className="size-4" />
              Browse problems
            </Button>
            <Button
              type="button"
              variant="outline"
              size="lg"
              className="h-10 border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white"
              onClick={onRandomProblem}
            >
              <Shuffle className="size-4" />
              Random problem
            </Button>
            <Button
              type="button"
              variant="outline"
              size="lg"
              className="h-10 border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white"
              onClick={onLeetCodeClone}
              disabled={importedCount === 0}
            >
              <Library className="size-4" />
              LeetCode clone
            </Button>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-200">
            <span>
              <strong className="text-white">{problemCount}</strong> problems
            </span>
            <span>
              <strong className="text-white">{patternCount}</strong> patterns
            </span>
            <span>
              <strong className="text-white">{importedCount || '3,962'}</strong> imported LeetCode records
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProblemWorkspace({
  activeProblem,
  completion,
  previousProblem,
  nextProblem,
  filteredProblems,
  query,
  pattern,
  difficulty,
  catalogMode,
  importedProblems,
  activeImportedSlug,
  importedLoaded,
  noteText,
  onQueryChange,
  onPatternChange,
  onDifficultyChange,
  onOpenProblem,
  onOpenImportedProblem,
  onOpenCurated,
  onOpenImported,
  onUpdateNote,
}: {
  activeProblem: Problem
  completion: number
  previousProblem: Problem
  nextProblem: Problem
  filteredProblems: Problem[]
  query: string
  pattern: string
  difficulty: DifficultyFilter
  catalogMode: CatalogMode
  importedProblems: ImportedProblemIndex[]
  activeImportedSlug: string
  importedLoaded: boolean
  noteText: string
  onQueryChange: (value: string) => void
  onPatternChange: (value: string) => void
  onDifficultyChange: (value: DifficultyFilter) => void
  onOpenProblem: (problem: Problem) => void
  onOpenImportedProblem: (problem: ImportedProblemIndex) => void
  onOpenCurated: () => void
  onOpenImported: () => void
  onUpdateNote: (value: string) => void
}) {
  return (
    <div id="catalog" className="grid w-full grid-cols-1 lg:grid-cols-[360px_minmax(0,1fr)] 2xl:grid-cols-[380px_minmax(0,1fr)]">
      <aside className="hidden border-r border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 lg:block">
        <div className="sticky top-[65px] h-[calc(100vh-65px)]">
          <CatalogBrowser
            mode={catalogMode}
            activeSlug={activeProblem.slug}
            activeImportedSlug={activeImportedSlug}
            curatedProblems={filteredProblems}
            importedProblems={importedProblems}
            query={query}
            pattern={pattern}
            difficulty={difficulty}
            importedLoaded={importedLoaded}
            onQueryChange={onQueryChange}
            onPatternChange={onPatternChange}
            onDifficultyChange={onDifficultyChange}
            onOpenProblem={onOpenProblem}
            onOpenImportedProblem={onOpenImportedProblem}
            onOpenCurated={onOpenCurated}
            onOpenImported={onOpenImported}
          />
        </div>
      </aside>

      <section className="min-w-0 bg-slate-50/70 px-3 py-3 dark:bg-slate-950 sm:px-5 lg:px-6">
        <div className="mx-auto max-w-[1800px]">
          <ProblemHeader
            problem={activeProblem}
            completion={completion}
            previousProblem={previousProblem}
            nextProblem={nextProblem}
            onOpenProblem={onOpenProblem}
          />

          <div className="mt-3 xl:hidden">
            <MobileProblemTabs problem={activeProblem} noteText={noteText} onUpdateNote={onUpdateNote} />
          </div>

          <div className="mt-3 hidden gap-3 xl:grid xl:grid-cols-[minmax(0,1fr)_minmax(390px,0.72fr)] 2xl:grid-cols-[minmax(0,1fr)_minmax(460px,0.7fr)]">
            <div className="min-w-0 space-y-3">
              <ProblemStatementPane problem={activeProblem} />
              <ApproachPane problem={activeProblem} />
            </div>

            <aside className="sticky top-[77px] max-h-[calc(100vh-89px)] min-w-0 space-y-3 overflow-y-auto pr-1">
              <SolutionTabs problem={activeProblem} />
              <ReferenceDiagramPanel problem={activeProblem} />
              <PracticeChecklist problem={activeProblem} />
              <NotesCard value={noteText} onChange={onUpdateNote} />
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}

function CatalogBrowser({
  mode,
  activeSlug,
  activeImportedSlug,
  curatedProblems,
  importedProblems,
  query,
  pattern,
  difficulty,
  importedLoaded,
  onQueryChange,
  onPatternChange,
  onDifficultyChange,
  onOpenProblem,
  onOpenImportedProblem,
  onOpenCurated,
  onOpenImported,
}: {
  mode: CatalogMode
  activeSlug: string
  activeImportedSlug: string
  curatedProblems: Problem[]
  importedProblems: ImportedProblemIndex[]
  query: string
  pattern: string
  difficulty: DifficultyFilter
  importedLoaded: boolean
  onQueryChange: (value: string) => void
  onPatternChange: (value: string) => void
  onDifficultyChange: (value: DifficultyFilter) => void
  onOpenProblem: (problem: Problem) => void
  onOpenImportedProblem: (problem: ImportedProblemIndex) => void
  onOpenCurated: () => void
  onOpenImported: () => void
}) {
  return (
    <div className="flex h-full min-h-0 flex-col bg-white dark:bg-slate-950">
      <div className="grid grid-cols-2 gap-2 border-b border-slate-200 p-3 dark:border-slate-800">
        <Button
          type="button"
          variant={mode === 'curated' ? 'default' : 'outline'}
          size="sm"
          onClick={onOpenCurated}
          className="justify-start"
        >
          <Code2 className="size-4" />
          229 List
        </Button>
        <Button
          type="button"
          variant={mode === 'leetcode' ? 'default' : 'outline'}
          size="sm"
          onClick={onOpenImported}
          disabled={!importedLoaded}
          className="justify-start"
        >
          <Library className="size-4" />
          LeetCode
        </Button>
      </div>
      <div className="min-h-0 flex-1">
        {mode === 'leetcode' ? (
          <ImportedProblemBrowser
            activeSlug={activeImportedSlug}
            problems={importedProblems}
            query={query}
            difficulty={difficulty}
            importedLoaded={importedLoaded}
            onQueryChange={onQueryChange}
            onDifficultyChange={onDifficultyChange}
            onOpenProblem={onOpenImportedProblem}
          />
        ) : (
          <ProblemBrowser
            activeSlug={activeSlug}
            problems={curatedProblems}
            query={query}
            pattern={pattern}
            difficulty={difficulty}
            onQueryChange={onQueryChange}
            onPatternChange={onPatternChange}
            onDifficultyChange={onDifficultyChange}
            onOpenProblem={onOpenProblem}
          />
        )}
      </div>
    </div>
  )
}

interface BrowserProps {
  activeSlug: string
  problems: Problem[]
  query: string
  pattern: string
  difficulty: DifficultyFilter
  onQueryChange: (value: string) => void
  onPatternChange: (value: string) => void
  onDifficultyChange: (value: DifficultyFilter) => void
  onOpenProblem: (problem: Problem) => void
}

function ProblemBrowser({
  activeSlug,
  problems: visibleProblems,
  query,
  pattern,
  difficulty,
  onQueryChange,
  onPatternChange,
  onDifficultyChange,
  onOpenProblem,
}: BrowserProps) {
  return (
    <div className="flex h-full flex-col bg-white dark:bg-slate-950">
      <div className="space-y-3 border-b border-slate-200 p-4 dark:border-slate-800">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
          <Input
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Search title, number, pattern"
            className="pl-9"
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Select value={pattern} onValueChange={onPatternChange}>
            <SelectTrigger aria-label="Filter by pattern">
              <SelectValue placeholder="Pattern" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All patterns</SelectItem>
              {patterns.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={difficulty} onValueChange={(value) => onDifficultyChange(value as DifficultyFilter)}>
            <SelectTrigger aria-label="Filter by difficulty">
              <SelectValue placeholder="Difficulty" />
            </SelectTrigger>
            <SelectContent>
              {difficulties.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span>{visibleProblems.length} visible</span>
          <span>{problems.length} total</span>
        </div>
      </div>
      <ScrollArea className="min-h-0 flex-1">
        <div className="space-y-2 p-3">
          {visibleProblems.map((problem) => (
            <button
              key={problem.slug}
              type="button"
              onClick={() => onOpenProblem(problem)}
              className={`w-full rounded-lg border p-3 text-left transition ${
                problem.slug === activeSlug
                  ? 'border-cyan-300 bg-cyan-50 shadow-sm dark:border-cyan-500/60 dark:bg-cyan-950/40'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-slate-700 dark:hover:bg-slate-900'
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 w-9 shrink-0 rounded-md bg-slate-900 px-1.5 py-1 text-center text-xs font-semibold text-white dark:bg-slate-100 dark:text-slate-950">
                  {problem.id}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-semibold text-slate-950 dark:text-slate-100">
                    {problem.leetcode}. {problem.title}
                  </span>
                  <span className="mt-1 flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-[10px]">
                      {problem.pattern}
                    </Badge>
                    <Badge variant="secondary" className="text-[10px]">
                      {problem.difficulty}
                    </Badge>
                  </span>
                </span>
              </div>
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

function ImportedProblemBrowser({
  activeSlug,
  problems: visibleProblems,
  query,
  difficulty,
  importedLoaded,
  onQueryChange,
  onDifficultyChange,
  onOpenProblem,
}: {
  activeSlug: string
  problems: ImportedProblemIndex[]
  query: string
  difficulty: DifficultyFilter
  importedLoaded: boolean
  onQueryChange: (value: string) => void
  onDifficultyChange: (value: DifficultyFilter) => void
  onOpenProblem: (problem: ImportedProblemIndex) => void
}) {
  return (
    <div className="flex h-full flex-col bg-white dark:bg-slate-950">
      <div className="space-y-3 border-b border-slate-200 p-4 dark:border-slate-800">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
          <Input
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Search all LeetCode problems"
            className="pl-9"
          />
        </div>
        <Select value={difficulty} onValueChange={(value) => onDifficultyChange(value as DifficultyFilter)}>
          <SelectTrigger aria-label="Filter by difficulty">
            <SelectValue placeholder="Difficulty" />
          </SelectTrigger>
          <SelectContent>
            {difficulties.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span>{importedLoaded ? `${visibleProblems.length} visible` : 'Loading clone data'}</span>
          <span>229 excluded</span>
        </div>
      </div>
      <ScrollArea className="min-h-0 flex-1">
        <div className="space-y-2 p-3">
          {!importedLoaded && (
            <div className="flex items-center gap-2 rounded-lg border border-slate-200 p-3 text-sm text-slate-600 dark:border-slate-800 dark:text-slate-300">
              <Loader2 className="size-4 animate-spin" />
              Loading LeetCode clone
            </div>
          )}
          {visibleProblems.map((problem) => (
            <button
              key={problem.slug}
              type="button"
              onClick={() => onOpenProblem(problem)}
              className={`w-full rounded-lg border p-3 text-left transition ${
                problem.slug === activeSlug
                  ? 'border-cyan-300 bg-cyan-50 shadow-sm dark:border-cyan-500/60 dark:bg-cyan-950/40'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-slate-700 dark:hover:bg-slate-900'
              }`}
            >
              <span className="flex items-start gap-3">
                <span className="mt-0.5 w-12 shrink-0 rounded-md bg-slate-900 px-1.5 py-1 text-center text-xs font-semibold text-white dark:bg-slate-100 dark:text-slate-950">
                  {problem.number}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-semibold text-slate-950 dark:text-slate-100">
                    {problem.title}
                  </span>
                  <span className="mt-1 flex flex-wrap gap-1">
                    {problem.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-[10px]">
                        {tag}
                      </Badge>
                    ))}
                    <Badge variant="secondary" className="text-[10px]">
                      {problem.difficulty}
                    </Badge>
                  </span>
                </span>
              </span>
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

function ProblemHeader({
  problem,
  completion,
  previousProblem,
  nextProblem,
  onOpenProblem,
}: {
  problem: Problem
  completion: number
  previousProblem: Problem
  nextProblem: Problem
  onOpenProblem: (problem: Problem) => void
}) {
  const leetcodeReference = getLeetCodeReference(problem)

  return (
    <Card className="rounded-lg border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <CardContent className="p-3 sm:p-4">
        <div className="flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between">
          <div className="min-w-0 space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-950">#{problem.id}</Badge>
              <Badge variant="outline">LC {problem.leetcode}</Badge>
              <Badge variant={problem.difficulty === 'Hard' ? 'destructive' : 'secondary'}>{problem.difficulty}</Badge>
              <Badge variant="outline">{problem.pattern}</Badge>
              {problem.sources.slice(0, 2).map((source) => (
                <Badge key={source} variant="outline" className="hidden sm:inline-flex">
                  {source}
                </Badge>
              ))}
            </div>
            <div>
              <h2 className="break-words text-2xl font-semibold tracking-normal text-slate-950 dark:text-slate-100 sm:text-3xl">
                {problem.title}
              </h2>
              <div className="mt-2 flex flex-wrap gap-2">
                {problem.companies.slice(0, 4).map((company) => (
                  <Badge key={company} variant="secondary">
                    {company}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-2">
            <Button variant="default" size="sm" asChild>
              <a
                href={leetcodeReference.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${problem.leetcode}. ${problem.title} on LeetCode`}
              >
                <ExternalLink className="size-4" />
                LeetCode
              </a>
            </Button>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => onOpenProblem(previousProblem)}
                  disabled={problem.id === 1}
                  aria-label="Previous problem"
                >
                  <ChevronLeft className="size-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Previous</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => onOpenProblem(nextProblem)}
                  disabled={problem.id === problems.length}
                  aria-label="Next problem"
                >
                  <ChevronRight className="size-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Next</TooltipContent>
            </Tooltip>
          </div>
        </div>
        <div className="mt-3 grid gap-2 sm:grid-cols-[1fr_auto] sm:items-center">
          <Progress value={completion} className="h-2" />
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{completion}% through sheet</span>
        </div>
      </CardContent>
    </Card>
  )
}

function ImportedProblemWorkspace({
  problem,
  detail,
  loading,
  error,
  filteredProblems,
  query,
  difficulty,
  catalogMode,
  activeCuratedSlug,
  activeImportedSlug,
  importedLoaded,
  onQueryChange,
  onDifficultyChange,
  onOpenProblem,
  onOpenImportedProblem,
  onOpenCurated,
  onOpenImported,
}: {
  problem?: ImportedProblemIndex
  detail: ImportedProblemDetail | null
  loading: boolean
  error: string
  filteredProblems: ImportedProblemIndex[]
  query: string
  difficulty: DifficultyFilter
  catalogMode: CatalogMode
  activeCuratedSlug: string
  activeImportedSlug: string
  importedLoaded: boolean
  onQueryChange: (value: string) => void
  onDifficultyChange: (value: DifficultyFilter) => void
  onOpenProblem: (problem: Problem) => void
  onOpenImportedProblem: (problem: ImportedProblemIndex) => void
  onOpenCurated: () => void
  onOpenImported: () => void
}) {
  return (
    <div id="catalog" className="grid w-full grid-cols-1 lg:grid-cols-[360px_minmax(0,1fr)] 2xl:grid-cols-[380px_minmax(0,1fr)]">
      <aside className="hidden border-r border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 lg:block">
        <div className="sticky top-[65px] h-[calc(100vh-65px)]">
          <CatalogBrowser
            mode={catalogMode}
            activeSlug={activeCuratedSlug}
            activeImportedSlug={activeImportedSlug}
            curatedProblems={problems}
            importedProblems={filteredProblems}
            query={query}
            pattern="All"
            difficulty={difficulty}
            importedLoaded={importedLoaded}
            onQueryChange={onQueryChange}
            onPatternChange={() => undefined}
            onDifficultyChange={onDifficultyChange}
            onOpenProblem={onOpenProblem}
            onOpenImportedProblem={onOpenImportedProblem}
            onOpenCurated={onOpenCurated}
            onOpenImported={onOpenImported}
          />
        </div>
      </aside>

      <section className="min-w-0 bg-slate-50/70 px-3 py-3 dark:bg-slate-950 sm:px-5 lg:px-6">
        <div className="mx-auto max-w-[1800px]">
          <ImportedProblemHeader problem={problem} loading={loading} />

          {error && (
            <Card className="mt-3 rounded-lg border-red-200 bg-red-50 text-red-900 dark:border-red-900/60 dark:bg-red-950/30 dark:text-red-100">
              <CardContent className="p-4">{error}</CardContent>
            </Card>
          )}

          <div className="mt-3 xl:hidden">
            <ImportedMobileTabs problem={problem} detail={detail} loading={loading} />
          </div>

          <div className="mt-3 hidden gap-3 xl:grid xl:grid-cols-[minmax(0,1fr)_minmax(390px,0.72fr)] 2xl:grid-cols-[minmax(0,1fr)_minmax(460px,0.7fr)]">
            <div className="min-w-0 space-y-3">
              <ImportedDescriptionPane detail={detail} loading={loading} />
              <ImportedEditorialPane detail={detail} loading={loading} />
            </div>
            <aside className="sticky top-[77px] max-h-[calc(100vh-89px)] min-w-0 space-y-3 overflow-y-auto pr-1">
              <SolutionCodePanel snippets={detailToSnippets(detail)} />
              {problem && <VideoResourcePanel title={problem.title} url={problem.videoUrl} />}
              {detail?.sourcePath && (
                <Card className="rounded-lg border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
                  <CardHeader className="border-b border-slate-200 pb-3 dark:border-slate-800">
                    <CardTitle className="text-base">Source</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    Imported from <code>{detail.sourcePath}</code>.
                  </CardContent>
                </Card>
              )}
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}

function ImportedProblemHeader({ problem, loading }: { problem?: ImportedProblemIndex; loading: boolean }) {
  return (
    <Card className="rounded-lg border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <CardContent className="p-3 sm:p-4">
        <div className="flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between">
          <div className="min-w-0 space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-950">
                {problem ? `LC ${problem.number}` : 'LeetCode'}
              </Badge>
              {problem?.difficulty && <Badge variant={problem.difficulty === 'Hard' ? 'destructive' : 'secondary'}>{problem.difficulty}</Badge>}
              {problem?.rating && <Badge variant="outline">Rating {problem.rating}</Badge>}
              {problem?.source && <Badge variant="outline">{problem.source}</Badge>}
            </div>
            <div>
              <h2 className="break-words text-2xl font-semibold tracking-normal text-slate-950 dark:text-slate-100 sm:text-3xl">
                {problem?.title ?? (loading ? 'Loading problem' : 'Problem not found')}
              </h2>
              {problem && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {problem.tags.slice(0, 6).map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
          {problem && (
            <div className="flex shrink-0 flex-wrap items-center gap-2">
              <Button variant="default" size="sm" asChild>
                <a href={problem.url} target="_blank" rel="noreferrer" aria-label={`Open ${problem.number}. ${problem.title} on LeetCode`}>
                  <ExternalLink className="size-4" />
                  LeetCode
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href={problem.videoUrl} target="_blank" rel="noreferrer" aria-label={`Search YouTube for ${problem.title} solution`}>
                  <PlayCircle className="size-4" />
                  YouTube
                </a>
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

function ImportedMobileTabs({
  problem,
  detail,
  loading,
}: {
  problem?: ImportedProblemIndex
  detail: ImportedProblemDetail | null
  loading: boolean
}) {
  return (
    <Tabs defaultValue="description" className="gap-3">
      <TabsList className="grid h-auto w-full grid-cols-4">
        <TabsTrigger value="description" className="min-h-9 px-1 text-xs sm:text-sm">
          <FileText className="size-3.5" />
          <span className="hidden min-[390px]:inline">Problem</span>
        </TabsTrigger>
        <TabsTrigger value="editorial" className="min-h-9 px-1 text-xs sm:text-sm">
          <Sparkles className="size-3.5" />
          <span className="hidden min-[390px]:inline">Editorial</span>
        </TabsTrigger>
        <TabsTrigger value="code" className="min-h-9 px-1 text-xs sm:text-sm">
          <Code2 className="size-3.5" />
          <span className="hidden min-[390px]:inline">Code</span>
        </TabsTrigger>
        <TabsTrigger value="video" className="min-h-9 px-1 text-xs sm:text-sm">
          <PlayCircle className="size-3.5" />
          <span className="hidden min-[390px]:inline">Video</span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="description" className="mt-0">
        <ImportedDescriptionPane detail={detail} loading={loading} />
      </TabsContent>
      <TabsContent value="editorial" className="mt-0">
        <ImportedEditorialPane detail={detail} loading={loading} />
      </TabsContent>
      <TabsContent value="code" className="mt-0">
        <SolutionCodePanel snippets={detailToSnippets(detail)} />
      </TabsContent>
      <TabsContent value="video" className="mt-0">
        {problem ? <VideoResourcePanel title={problem.title} url={problem.videoUrl} /> : <LoadingCard />}
      </TabsContent>
    </Tabs>
  )
}

function ImportedDescriptionPane({ detail, loading }: { detail: ImportedProblemDetail | null; loading: boolean }) {
  if (loading || !detail) {
    return <LoadingCard />
  }

  return (
    <Card className="rounded-lg border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <CardHeader className="border-b border-slate-200 pb-3 dark:border-slate-800">
        <CardTitle className="flex items-center gap-2 text-base">
          <BookOpen className="size-4 text-emerald-700 dark:text-emerald-300" />
          Description
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 sm:p-5">
        <div className="leetcode-html" dangerouslySetInnerHTML={{ __html: detail.descriptionHtml }} />
      </CardContent>
    </Card>
  )
}

function ImportedEditorialPane({ detail, loading }: { detail: ImportedProblemDetail | null; loading: boolean }) {
  if (loading || !detail) {
    return <LoadingCard />
  }

  return (
    <Card className="rounded-lg border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <CardHeader className="border-b border-slate-200 pb-3 dark:border-slate-800">
        <CardTitle className="flex items-center gap-2 text-base">
          <Sparkles className="size-4 text-amber-700 dark:text-amber-300" />
          Editorial
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 sm:p-5">
        <p className="whitespace-pre-wrap text-sm leading-7 text-slate-700 dark:text-slate-300">
          {detail.solutionText || 'No editorial text was included in the imported source.'}
        </p>
      </CardContent>
    </Card>
  )
}

function LoadingCard() {
  return (
    <Card className="rounded-lg border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <CardContent className="flex min-h-32 items-center gap-2 p-4 text-sm text-slate-600 dark:text-slate-300">
        <Loader2 className="size-4 animate-spin" />
        Loading problem data
      </CardContent>
    </Card>
  )
}

function detailToSnippets(detail: ImportedProblemDetail | null): CodeSnippet[] {
  if (!detail) {
    return []
  }
  const order = ['python', 'go', 'java', 'cpp', 'typescript', 'javascript', 'rust', 'csharp', 'c', 'kotlin', 'swift', 'sql']
  return Object.entries(detail.code)
    .sort(([left], [right]) => order.indexOf(left) - order.indexOf(right))
    .map(([, value]) => value)
}

function getLeetCodeReference(problem: Problem) {
  return problem.references.find((reference) => reference.kind === 'problem') ?? problem.references[0]
}

function getEdgeItems(problem: Problem) {
  return problem.edgeChecklist
    .split(';')
    .map((item) => item.trim())
    .filter(Boolean)
}

function MobileProblemTabs({
  problem,
  noteText,
  onUpdateNote,
}: {
  problem: Problem
  noteText: string
  onUpdateNote: (value: string) => void
}) {
  return (
    <Tabs defaultValue="description" className="gap-3">
      <TabsList className="grid h-auto w-full grid-cols-4">
        <TabsTrigger value="description" className="min-h-9 px-1 text-xs sm:text-sm">
          <FileText className="size-3.5" />
          <span className="hidden min-[390px]:inline">Problem</span>
        </TabsTrigger>
        <TabsTrigger value="approach" className="min-h-9 px-1 text-xs sm:text-sm">
          <Sparkles className="size-3.5" />
          <span className="hidden min-[390px]:inline">Plan</span>
        </TabsTrigger>
        <TabsTrigger value="solution" className="min-h-9 px-1 text-xs sm:text-sm">
          <Code2 className="size-3.5" />
          <span className="hidden min-[390px]:inline">Code</span>
        </TabsTrigger>
        <TabsTrigger value="notes" className="min-h-9 px-1 text-xs sm:text-sm">
          <NotebookPen className="size-3.5" />
          <span className="hidden min-[390px]:inline">Notes</span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="description" className="mt-0">
        <ProblemStatementPane problem={problem} />
      </TabsContent>
      <TabsContent value="approach" className="mt-0 space-y-3">
        <ApproachPane problem={problem} />
        <ReferenceDiagramPanel problem={problem} />
        <PracticeChecklist problem={problem} />
      </TabsContent>
      <TabsContent value="solution" className="mt-0">
        <SolutionTabs problem={problem} />
      </TabsContent>
      <TabsContent value="notes" className="mt-0">
        <NotesCard value={noteText} onChange={onUpdateNote} />
      </TabsContent>
    </Tabs>
  )
}

function ProblemStatementPane({ problem }: { problem: Problem }) {
  const edgeItems = getEdgeItems(problem)

  return (
    <Card className="rounded-lg border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <CardHeader className="border-b border-slate-200 pb-3 dark:border-slate-800">
        <CardTitle className="flex items-center gap-2 text-base">
          <BookOpen className="size-4 text-emerald-700 dark:text-emerald-300" />
          Description
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 p-4 sm:p-5">
        <section className="space-y-3">
          <h3 className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">Problem statement</h3>
          <p className="max-w-4xl text-[15px] leading-7 text-slate-800 dark:text-slate-200">{problem.prompt}</p>
        </section>

        <ExampleBlock problem={problem} />

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="flex min-h-20 items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-900">
            <Clock3 className="mt-0.5 size-4 shrink-0 text-cyan-700 dark:text-cyan-300" />
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">Time complexity</p>
              <p className="mt-1 font-mono text-sm text-slate-950 dark:text-slate-100">{problem.time}</p>
            </div>
          </div>
          <div className="flex min-h-20 items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-900">
            <Database className="mt-0.5 size-4 shrink-0 text-violet-700 dark:text-violet-300" />
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">Space complexity</p>
              <p className="mt-1 font-mono text-sm text-slate-950 dark:text-slate-100">{problem.space}</p>
            </div>
          </div>
        </div>

        {edgeItems.length > 0 && (
          <section className="space-y-3">
            <h3 className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">Constraints and edge cases</h3>
            <ul className="grid gap-2 sm:grid-cols-2">
              {edgeItems.map((item) => (
                <li
                  key={item}
                  className="flex min-w-0 items-start gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm leading-6 text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                >
                  <CheckCircle2 className="mt-1 size-3.5 shrink-0 text-emerald-600 dark:text-emerald-300" />
                  <span className="min-w-0 break-words">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <ReferenceLinks problem={problem} />
        <VideoLinkBlock title={problem.title} url={problem.videoUrl} />
      </CardContent>
    </Card>
  )
}

function ApproachPane({ problem }: { problem: Problem }) {
  return (
    <Card className="rounded-lg border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <CardHeader className="border-b border-slate-200 pb-3 dark:border-slate-800">
        <CardTitle className="flex items-center gap-2 text-base">
          <Sparkles className="size-4 text-amber-700 dark:text-amber-300" />
          Editorial
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 sm:p-5">
        <Accordion type="multiple" defaultValue={['intuition', 'optimized']} className="w-full">
          <AccordionItem value="intuition">
            <AccordionTrigger>Intuition</AccordionTrigger>
            <AccordionContent className="text-slate-700 dark:text-slate-300">{problem.intuition}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="brute">
            <AccordionTrigger>Brute force baseline</AccordionTrigger>
            <AccordionContent className="text-slate-700 dark:text-slate-300">{problem.brute}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="optimized">
            <AccordionTrigger>Optimized approach</AccordionTrigger>
            <AccordionContent className="text-slate-700 dark:text-slate-300">{problem.optimized}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="proof">
            <AccordionTrigger>Invariant and proof sketch</AccordionTrigger>
            <AccordionContent className="space-y-3 text-slate-700 dark:text-slate-300">
              <p>{problem.invariant}</p>
              <p>{problem.proof}</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}

function ReferenceDiagramPanel({ problem }: { problem: Problem }) {
  return (
    <Card className="rounded-lg border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <CardHeader className="border-b border-slate-200 pb-3 dark:border-slate-800">
        <CardTitle className="flex items-center gap-2 text-base">
          <Network className="size-4 text-cyan-700 dark:text-cyan-300" />
          Diagram
        </CardTitle>
      </CardHeader>
      <CardContent className="p-3 sm:p-4">
        <ConceptDiagram problem={problem} />
      </CardContent>
    </Card>
  )
}

function PracticeChecklist({ problem }: { problem: Problem }) {
  return (
    <Card className="rounded-lg border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <CardHeader className="border-b border-slate-200 pb-3 dark:border-slate-800">
        <CardTitle className="flex items-center gap-2 text-base">
          <ListFilter className="size-4 text-violet-700 dark:text-violet-300" />
          Checklist
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 sm:p-5">
        <Tabs defaultValue="clarify" className="gap-3">
          <TabsList className="grid h-auto w-full grid-cols-3">
            <TabsTrigger value="clarify" className="min-h-8 text-xs sm:text-sm">Clarify</TabsTrigger>
            <TabsTrigger value="pitfalls" className="min-h-8 text-xs sm:text-sm">Pitfalls</TabsTrigger>
            <TabsTrigger value="drills" className="min-h-8 text-xs sm:text-sm">Drills</TabsTrigger>
          </TabsList>
          <TabsContent value="clarify" className="mt-0">
            <ChecklistGroup icon="target" items={problem.clarify} />
          </TabsContent>
          <TabsContent value="pitfalls" className="mt-0 space-y-3">
            <ChecklistGroup items={problem.pitfalls} />
            {problem.implementationCheckpoints.length > 0 && (
              <>
                <Separator />
                <ChecklistGroup title="Implementation" items={problem.implementationCheckpoints} />
              </>
            )}
          </TabsContent>
          <TabsContent value="drills" className="mt-0 space-y-3">
            <ChecklistGroup items={problem.drills} />
            {problem.followUps.length > 0 && (
              <>
                <Separator />
                <ChecklistGroup title="Follow-ups" items={problem.followUps} />
              </>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

function ChecklistGroup({
  title,
  icon,
  items,
}: {
  title?: string
  icon?: 'target'
  items: string[]
}) {
  return (
    <div>
      {title && <h3 className="mb-2 text-sm font-semibold text-slate-900 dark:text-slate-100">{title}</h3>}
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
            {icon === 'target' ? (
              <Target className="mt-1 size-3.5 shrink-0 text-cyan-700 dark:text-cyan-300" />
            ) : (
              <CheckCircle2 className="mt-1 size-3.5 shrink-0 text-emerald-600 dark:text-emerald-300" />
            )}
            <span className="min-w-0 break-words">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ExampleBlock({ problem }: { problem: Problem }) {
  return (
    <section className="overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="border-b border-slate-200 px-3 py-2 text-sm font-semibold text-slate-900 dark:border-slate-800 dark:text-slate-100">
        Example
      </div>
      <div className="grid gap-3 p-3 sm:grid-cols-2">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">Input</p>
          <pre className="mt-2 overflow-x-auto rounded-md bg-slate-950 p-3 text-sm text-slate-50">
          <code>{problem.example.input}</code>
          </pre>
        </div>
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">Output</p>
          <pre className="mt-2 overflow-x-auto rounded-md bg-slate-950 p-3 text-sm text-slate-50">
          <code>{problem.example.output}</code>
          </pre>
        </div>
        <p className="text-sm leading-6 text-slate-600 dark:text-slate-300 sm:col-span-2">{problem.example.why}</p>
      </div>
    </section>
  )
}

function ReferenceLinks({ problem }: { problem: Problem }) {
  return (
    <section className="rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-900">
      <p className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">References</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {problem.references.map((reference) => (
          <a
            key={reference.url}
            href={reference.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-8 items-center gap-1.5 rounded-md border border-slate-200 bg-white px-2.5 py-1 text-sm font-medium text-slate-700 transition hover:border-cyan-300 hover:text-cyan-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-cyan-500 dark:hover:text-cyan-300"
          >
            <ExternalLink className="size-3.5" />
            {reference.kind === 'problem' ? `${problem.leetcode}. ${problem.title} on LeetCode` : reference.label}
          </a>
        ))}
      </div>
    </section>
  )
}

function SolutionTabs({ problem }: { problem: Problem }) {
  const snippets: CodeSnippet[] = [
    {
      label: problem.sourcePythonCode ? 'Python (source)' : 'Python',
      language: 'python',
      code: problem.sourcePythonCode ?? problem.pythonCode,
    },
    {
      label: problem.sourceGoCode ? 'Go (source)' : 'Go',
      language: 'go',
      code: problem.sourceGoCode ?? problem.goCode,
    },
  ]
  return <SolutionCodePanel snippets={snippets} />
}

function SolutionCodePanel({ snippets }: { snippets: CodeSnippet[] }) {
  const defaultValue = snippets[0]?.label ?? 'empty'

  return (
    <Card className="rounded-lg border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <CardHeader className="border-b border-slate-200 pb-3 dark:border-slate-800">
        <CardTitle className="flex items-center gap-2 text-base">
          <Code2 className="size-4 text-slate-800 dark:text-slate-200" />
          Solution Code
        </CardTitle>
      </CardHeader>
      <CardContent className="p-3 sm:p-4">
        {snippets.length > 0 ? (
          <Tabs defaultValue={defaultValue}>
            <TabsList className="grid h-auto w-full grid-cols-2 sm:grid-cols-3">
              {snippets.map((snippet) => (
                <TabsTrigger key={snippet.label} value={snippet.label} className="min-h-8 text-xs sm:text-sm">
                  {snippet.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {snippets.map((snippet) => (
              <TabsContent key={snippet.label} value={snippet.label} className="mt-4">
                <CodeBlock language={snippet.language} code={snippet.code} />
              </TabsContent>
            ))}
          </Tabs>
        ) : (
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
            No solution snippets were imported for this problem.
          </div>
        )}
      </CardContent>
    </Card>
  )
}

function VideoResourcePanel({ title, url }: { title: string; url: string }) {
  return (
    <Card className="rounded-lg border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <CardHeader className="border-b border-slate-200 pb-3 dark:border-slate-800">
        <CardTitle className="flex items-center gap-2 text-base">
          <PlayCircle className="size-4 text-red-700 dark:text-red-300" />
          Video
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <Button variant="outline" size="sm" asChild>
          <a href={url} target="_blank" rel="noreferrer" aria-label={`Search YouTube for ${title} solution`}>
            <ExternalLink className="size-4" />
            YouTube solution search
          </a>
        </Button>
      </CardContent>
    </Card>
  )
}

function VideoLinkBlock({ title, url }: { title: string; url: string }) {
  return (
    <section className="rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-900">
      <p className="flex items-center gap-2 text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">
        <PlayCircle className="size-3.5 text-red-700 dark:text-red-300" />
        Video
      </p>
      <Button variant="outline" size="sm" className="mt-2" asChild>
        <a href={url} target="_blank" rel="noreferrer" aria-label={`Search YouTube for ${title} solution`}>
          <ExternalLink className="size-4" />
          YouTube solution search
        </a>
      </Button>
    </section>
  )
}

function NotesCard({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <Card className="rounded-lg border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <CardHeader className="border-b border-slate-200 pb-3 dark:border-slate-800">
        <CardTitle className="flex items-center gap-2 text-base">
          <NotebookPen className="size-4 text-sky-700 dark:text-sky-300" />
          Notes
        </CardTitle>
      </CardHeader>
      <CardContent className="p-3 sm:p-4">
        <Textarea
          aria-label="Problem notes"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="min-h-40 resize-y bg-white leading-6 dark:bg-slate-900"
        />
      </CardContent>
    </Card>
  )
}

function CodeBlock({ language, code }: { language: string; code: string }) {
  const copy = async () => {
    await navigator.clipboard.writeText(code)
  }

  return (
    <div className="overflow-hidden rounded-lg border border-slate-800 bg-slate-950 dark:border-slate-700">
      <div className="flex items-center justify-between border-b border-slate-800 px-3 py-2">
        <span className="font-mono text-xs uppercase tracking-wide text-slate-400">{language}</span>
        <Button variant="ghost" size="sm" className="h-8 text-slate-200 hover:text-slate-950 dark:hover:text-slate-50" onClick={copy}>
          <Copy className="size-4" />
          Copy
        </Button>
      </div>
      <pre className="max-h-[520px] overflow-auto p-4 text-sm leading-6 text-slate-50">
        <code>{code}</code>
      </pre>
    </div>
  )
}

function ConceptDiagram({ problem }: { problem: Problem }) {
  const seed = problem.diagram.seed
  const cells = Array.from({ length: 6 }, (_, index) => (seed + index * 7) % 10)
  const label = problem.diagram.type.replace(/^\w/, (char) => char.toUpperCase())
  const tokens = problem.diagramNotes
    .concat([problem.example.input, problem.example.output])
    .map((note) => note.replace(/\s+/g, ' ').trim())
    .filter((note) => note && note.length <= 26)
    .slice(0, 6)
  const caption = truncateText(problem.diagramNotes.at(-1) ?? problem.invariant, 74)

  return (
    <div className="rounded-lg border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-cyan-50 p-3 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-cyan-950/30">
      <svg viewBox="0 0 420 260" role="img" aria-label={`${problem.title} concept diagram`} className="h-auto w-full">
        <rect x="8" y="8" width="404" height="244" rx="8" fill="var(--diagram-panel)" stroke="var(--diagram-border)" />
        <text x="24" y="34" fill="var(--diagram-text)" className="text-[15px] font-semibold">
          {label} model
        </text>
        <text x="24" y="55" fill="var(--diagram-muted-text)" className="text-[11px]">
          {problem.pattern} / state invariant
        </text>
        <DiagramBody type={problem.diagram.type} cells={cells} seed={seed} tokens={tokens} />
        <text x="24" y="228" fill="var(--diagram-muted-text)" className="text-[11px]">
          {caption}
        </text>
      </svg>
    </div>
  )
}

function truncateText(value: string, maxLength: number) {
  return value.length > maxLength ? `${value.slice(0, maxLength - 3)}...` : value
}

function diagramLabel(tokens: string[], cells: number[], index: number) {
  return truncateText(tokens[index] ?? String(cells[index % cells.length]), 8)
}

function DiagramBody({
  type,
  cells,
  seed,
  tokens,
}: {
  type: Problem['diagram']['type']
  cells: number[]
  seed: number
  tokens: string[]
}) {
  if (type === 'tree') {
    return (
      <g>
        {[
          [210, 78],
          [130, 128],
          [290, 128],
          [86, 180],
          [168, 180],
          [252, 180],
          [334, 180],
        ].map(([x, y], index) => (
          <g key={`${x}-${y}`}>
            {index > 0 && <line x1={index < 3 ? 210 : index < 5 ? 130 : 290} y1={index < 3 ? 96 : 146} x2={x} y2={y - 18} stroke="var(--diagram-line)" strokeWidth="2" />}
            <circle cx={x} cy={y} r="18" fill={index === seed % 7 ? 'var(--diagram-tree-active)' : 'var(--diagram-cell)'} stroke="var(--diagram-text)" />
            <text x={x} y={y + 4} textAnchor="middle" fill="var(--diagram-text)" className="text-[12px] font-semibold">
              {diagramLabel(tokens, cells, index)}
            </text>
          </g>
        ))}
      </g>
    )
  }

  if (type === 'graph') {
    const nodes = [
      [88, 118],
      [172, 82],
      [260, 112],
      [326, 176],
      [158, 188],
    ]
    return (
      <g>
        {[
          [0, 1],
          [1, 2],
          [2, 3],
          [3, 4],
          [4, 0],
          [1, 4],
        ].map(([a, b]) => (
          <line key={`${a}-${b}`} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke="var(--diagram-soft-line)" strokeWidth="2" />
        ))}
        {nodes.map(([x, y], index) => (
          <g key={`${x}-${y}`}>
            <circle cx={x} cy={y} r="20" fill={index === seed % 5 ? 'var(--diagram-graph-active)' : 'var(--diagram-cell)'} stroke="#16a34a" />
            <text x={x} y={y + 4} textAnchor="middle" fill="var(--diagram-text)" className="text-[12px] font-semibold">
              {diagramLabel(tokens, cells, index)}
            </text>
          </g>
        ))}
      </g>
    )
  }

  if (type === 'dp') {
    return (
      <g>
        {Array.from({ length: 5 }).map((_, row) =>
          Array.from({ length: 6 }).map((__, col) => (
            <g key={`${row}-${col}`}>
              <rect
                x={58 + col * 50}
                y={74 + row * 26}
                width="44"
                height="22"
                rx="4"
                fill={(row + col + seed) % 4 === 0 ? 'var(--diagram-dp-active)' : 'var(--diagram-cell)'}
                stroke="var(--diagram-border)"
              />
              <text x={80 + col * 50} y={89 + row * 26} textAnchor="middle" fill="var(--diagram-muted-text)" className="text-[10px]">
                {row === 0 && col < tokens.length ? truncateText(tokens[col], 6) : 'dp'}
              </text>
            </g>
          )),
        )}
        <path d="M70 198 C140 162, 210 172, 330 88" fill="none" stroke="#0891b2" strokeWidth="3" strokeDasharray="6 5" />
      </g>
    )
  }

  if (type === 'heap') {
    return (
      <g>
        {[0, 1, 2, 3, 4, 5].map((index) => {
          const positions = [
            [210, 82],
            [150, 132],
            [270, 132],
            [112, 186],
            [188, 186],
            [308, 186],
          ]
          const [x, y] = positions[index]
          return (
            <g key={index}>
              {index > 0 && <line x1={index < 3 ? 210 : index < 5 ? 150 : 270} y1={index < 3 ? 100 : 150} x2={x} y2={y - 18} stroke="var(--diagram-line)" />}
              <circle cx={x} cy={y} r="18" fill="var(--diagram-heap-active)" stroke="#7c3aed" />
              <text x={x} y={y + 4} textAnchor="middle" fill="var(--diagram-text)" className="text-[12px] font-semibold">
                {diagramLabel(tokens, cells, index)}
              </text>
            </g>
          )
        })}
        <text x="304" y="78" className="fill-violet-700 text-[11px] font-semibold dark:fill-violet-300">
          top
        </text>
      </g>
    )
  }

  const pointerA = 60 + (seed % 4) * 54
  const pointerB = 330 - (seed % 3) * 42
  return (
    <g>
      {cells.map((_, index) => (
            <g key={index}>
          <rect x={54 + index * 52} y="104" width="44" height="44" rx="6" fill={index <= seed % 6 ? 'var(--diagram-cell-active)' : 'var(--diagram-cell)'} stroke="var(--diagram-text)" />
          <text x={76 + index * 52} y="131" textAnchor="middle" fill="var(--diagram-text)" className="text-[13px] font-semibold">
            {diagramLabel(tokens, cells, index)}
          </text>
        </g>
      ))}
      <path d={`M${pointerA} 88 L${pointerA + 16} 102 L${pointerA - 16} 102 Z`} fill="#0f766e" />
      <path d={`M${pointerB} 166 L${pointerB + 16} 150 L${pointerB - 16} 150 Z`} fill="#b45309" />
      <text x={pointerA - 18} y="80" className="fill-teal-700 text-[11px] font-semibold dark:fill-teal-300">
        read
      </text>
      <text x={pointerB - 18} y="184" className="fill-amber-700 text-[11px] font-semibold dark:fill-amber-300">
        state
      </text>
      <line x1="56" y1="162" x2="350" y2="162" stroke="var(--diagram-soft-line)" strokeDasharray="6 5" />
    </g>
  )
}

export default App
