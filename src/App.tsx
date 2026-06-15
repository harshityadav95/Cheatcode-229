import {
  useEffect,
  useMemo,
  useState,
  type CSSProperties,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from 'react'
import {
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
type Route = { kind: 'home' } | { kind: 'problem'; slug: string } | { kind: 'leetcode'; slug: string }
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
const sidebarWidthStorageKey = 'codeleet:sidebar-width'
const defaultSidebarWidth = 376
const minSidebarWidth = 300
const maxSidebarWidth = 560
const routeHashPattern = /^#\/(problems|leetcode)\/(.+)$/

function hashRoute(): Route {
  const match = window.location.hash.match(routeHashPattern)
  if (!match) {
    return { kind: 'home' }
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

function clampSidebarWidth(value: number) {
  return Math.min(maxSidebarWidth, Math.max(minSidebarWidth, Math.round(value)))
}

function loadStoredSidebarWidth() {
  if (typeof window === 'undefined') {
    return defaultSidebarWidth
  }

  try {
    const storedWidth = Number(window.localStorage.getItem(sidebarWidthStorageKey))
    return Number.isFinite(storedWidth) ? clampSidebarWidth(storedWidth) : defaultSidebarWidth
  } catch {
    return defaultSidebarWidth
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
  const [homeMode, setHomeMode] = useState<CatalogMode>('curated')
  const [sidebarWidth, setSidebarWidth] = useState(loadStoredSidebarWidth)

  useEffect(() => {
    const onHashChange = () => {
      setRoute(hashRoute())
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    let active = true
    const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '')
    fetch(`${baseUrl}/leetcode-main-data/index.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Unable to load CodeLeet problem data (${response.status})`)
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
          setImportedError(error instanceof Error ? error.message : 'Unable to load CodeLeet problem data')
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
      const matchesQuery =
        !normalized ||
        problem.title.toLowerCase().includes(normalized) ||
        String(problem.number).includes(normalized) ||
        problem.tags.some((tag) => tag.toLowerCase().includes(normalized))
      const matchesDifficulty = difficulty === 'All' || problem.difficulty === difficulty
      return matchesQuery && matchesDifficulty
    })
  }, [difficulty, importedProblems, query])

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
        const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '')
        const detailPath = activeImportedProblem.detailPath
        const fetchUrl = detailPath.startsWith('/') ? `${baseUrl}${detailPath}` : detailPath
        return fetch(fetchUrl)
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

  const openLeetCodeClone = () => {
    const firstImported = filteredImportedProblems[0] ?? importedProblems[0]
    if (firstImported) {
      openImportedProblem(firstImported)
    }
  }

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  const updateSidebarWidth = (value: number) => {
    const nextWidth = clampSidebarWidth(value)
    setSidebarWidth(nextWidth)

    try {
      window.localStorage.setItem(sidebarWidthStorageKey, String(nextWidth))
    } catch {
      // Sidebar resizing still works when browser storage is unavailable.
    }
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

  const showHome = route.kind === 'home'
  const catalogMode: CatalogMode = route.kind === 'home' ? homeMode : route.kind === 'leetcode' ? 'leetcode' : 'curated'

  const openCuratedCatalog = () => {
    if (route.kind === 'home') {
      setHomeMode('curated')
      return
    }
    browseProblems()
  }

  const openImportedCatalog = () => {
    if (route.kind === 'home') {
      setHomeMode('leetcode')
      return
    }
    openLeetCodeClone()
  }

  return (
    <TooltipProvider>
      <main className="min-h-screen bg-[#f7f8fa] text-[#262626] dark:bg-slate-950 dark:text-slate-100">
        <header className="sticky top-0 z-40 border-b border-[#e5e7eb] bg-white/95 backdrop-blur dark:border-slate-800 dark:bg-slate-950/95">
          <div className="mx-auto flex h-[54px] max-w-[1760px] items-center gap-3 px-3 lg:px-5">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lc-icon-button lg:hidden" aria-label="Open problem list">
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
                  onOpenCurated={openCuratedCatalog}
                  onOpenImported={openImportedCatalog}
                />
              </SheetContent>
            </Sheet>

            <div className="flex min-w-0 flex-1 items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  window.location.hash = '/'
                }}
                className="flex min-w-0 items-center gap-2 rounded-md px-1.5 py-1 text-left transition hover:bg-[#f2f3f4] dark:hover:bg-slate-900"
              >
                <Code2 className="size-5 shrink-0 text-[#0077b6] dark:text-cyan-300" />
                <span className="truncate text-[18px] font-semibold tracking-normal text-[#111827] dark:text-slate-100">CodeLeet</span>
              </button>
              <nav className="hidden items-center gap-1 text-sm text-[#596273] md:flex">
                <button
                  type="button"
                  onClick={() => {
                    window.location.hash = '/'
                    setHomeMode('curated')
                  }}
                  className={`rounded-md px-3 py-1.5 transition hover:bg-[#f2f3f4] ${
                    catalogMode === 'curated' ? 'font-medium text-[#111827]' : ''
                  }`}
                >
                  229 List
                </button>
                <button
                  type="button"
                  onClick={() => {
                    window.location.hash = '/'
                    setHomeMode('leetcode')
                  }}
                  className={`rounded-md px-3 py-1.5 transition hover:bg-[#f2f3f4] ${
                    catalogMode === 'leetcode' ? 'font-medium text-[#111827]' : ''
                  }`}
                  disabled={!importedProblems.length}
                >
                  LeetCode
                </button>
              </nav>
            </div>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={toggleTheme}
                  className="lc-icon-button"
                  aria-label={theme === 'dark' ? 'Switch to white theme' : 'Switch to dark theme'}
                >
                  {theme === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />}
                </Button>
              </TooltipTrigger>
              <TooltipContent>{theme === 'dark' ? 'White theme' : 'Dark theme'}</TooltipContent>
            </Tooltip>

            <Button variant="outline" size="sm" className="lc-action-button" asChild>
              <a href="https://github.com/harshityadav95/Cheatcode-229" target="_blank" rel="noreferrer">
                <GitBranch className="size-4" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            </Button>
          </div>
        </header>

        {showHome && (
          <ProblemsetHome
            mode={catalogMode}
            activeSlug={activeProblem.slug}
            activeImportedSlug={activeImportedProblem?.slug ?? ''}
            curatedProblems={filteredProblems}
            importedProblems={filteredImportedProblems}
            query={query}
            pattern={pattern}
            difficulty={difficulty}
            importedLoaded={importedProblems.length > 0}
            sidebarWidth={sidebarWidth}
            onQueryChange={setQuery}
            onPatternChange={setPattern}
            onDifficultyChange={setDifficulty}
            onOpenProblem={openProblem}
            onOpenImportedProblem={openImportedProblem}
            onOpenCurated={openCuratedCatalog}
            onOpenImported={openImportedCatalog}
            onSidebarWidthChange={updateSidebarWidth}
            totalImportedCount={importedProblems.length}
          />
        )}

        {!showHome && route.kind !== 'leetcode' && (
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
            sidebarWidth={sidebarWidth}
            onQueryChange={setQuery}
            onPatternChange={setPattern}
            onDifficultyChange={setDifficulty}
            onOpenProblem={openProblem}
            onOpenImportedProblem={openImportedProblem}
            onOpenCurated={openCuratedCatalog}
            onOpenImported={openImportedCatalog}
            onUpdateNote={updateNote}
            onSidebarWidthChange={updateSidebarWidth}
          />
        )}
        {!showHome && route.kind === 'leetcode' && (
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
            sidebarWidth={sidebarWidth}
            onQueryChange={setQuery}
            onDifficultyChange={setDifficulty}
            onOpenProblem={openProblem}
            onOpenImportedProblem={openImportedProblem}
            onOpenCurated={openCuratedCatalog}
            onOpenImported={openImportedCatalog}
            onSidebarWidthChange={updateSidebarWidth}
          />
        )}
      </main>
    </TooltipProvider>
  )
}

function ProblemsetHome({
  mode,
  activeSlug,
  activeImportedSlug,
  curatedProblems,
  importedProblems,
  query,
  pattern,
  difficulty,
  importedLoaded,
  sidebarWidth,
  onQueryChange,
  onPatternChange,
  onDifficultyChange,
  onOpenProblem,
  onOpenImportedProblem,
  onOpenCurated,
  onOpenImported,
  onSidebarWidthChange,
  totalImportedCount,
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
  sidebarWidth: number
  onQueryChange: (value: string) => void
  onPatternChange: (value: string) => void
  onDifficultyChange: (value: DifficultyFilter) => void
  onOpenProblem: (problem: Problem) => void
  onOpenImportedProblem: (problem: ImportedProblemIndex) => void
  onOpenCurated: () => void
  onOpenImported: () => void
  onSidebarWidthChange: (value: number) => void
  totalImportedCount: number
}) {
  const visibleCount = mode === 'curated' ? curatedProblems.length : importedProblems.length
  const totalLabel = mode === 'curated' ? `${problems.length} curated` : importedLoaded ? `${importedProblems.length} visible` : 'Loading'

  return (
    <div className="bg-[#f7f8fa] dark:bg-slate-950">
      <CodeLeetLandingHero
        importedLoaded={importedLoaded}
        onOpenCurated={onOpenCurated}
        onOpenImported={onOpenImported}
        curatedCount={problems.length}
        importedCount={totalImportedCount}
      />

      <div
        id="problemset"
        className="codeleet-shell"
        style={{ '--codeleet-sidebar-width': `${sidebarWidth}px` } as CSSProperties}
      >
        <ResizableSidebar width={sidebarWidth} onWidthChange={onSidebarWidthChange}>
          <CatalogBrowser
            mode={mode}
            activeSlug={activeSlug}
            activeImportedSlug={activeImportedSlug}
            curatedProblems={curatedProblems}
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
        </ResizableSidebar>

        <section className="min-w-0 bg-[#f7f8fa] px-3 py-3 dark:bg-slate-950 sm:px-5">
          <div className="mx-auto max-w-[1380px] space-y-3">
            <div className="lc-panel p-4 sm:p-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h1 className="text-2xl font-semibold tracking-normal text-[#1a1a1a] dark:text-slate-100">Problemset</h1>
                    <Badge variant="secondary" className="lc-soft-badge">
                      CodeLeet
                    </Badge>
                  </div>
                  <p className="mt-1 text-sm text-[#596273] dark:text-slate-400">
                    {mode === 'curated'
                      ? '229 focused DSA problems with notes, diagrams, and reference solutions.'
                      : 'Imported LeetCode statements, editorials, and multi-language snippets.'}
                  </p>
                </div>
                <div className="flex shrink-0 flex-wrap gap-2">
                  <Button type="button" variant={mode === 'curated' ? 'default' : 'outline'} size="sm" className="lc-action-button" onClick={onOpenCurated}>
                    <Code2 className="size-4" />
                    229 List
                  </Button>
                  <Button
                    type="button"
                    variant={mode === 'leetcode' ? 'default' : 'outline'}
                    size="sm"
                    className="lc-action-button"
                    onClick={onOpenImported}
                    disabled={!importedLoaded}
                  >
                    <Library className="size-4" />
                    LeetCode
                  </Button>
                </div>
              </div>
            </div>

            <div className="lc-panel overflow-hidden">
              <div className="flex flex-col gap-3 border-b border-[#e5e7eb] px-4 py-3 dark:border-slate-800 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-base font-semibold text-[#1f2328] dark:text-slate-100">
                    {mode === 'curated' ? 'CodeLeet 229' : 'LeetCode Problems'}
                  </h2>
                  <p className="text-xs text-[#6b7280] dark:text-slate-400">
                    {visibleCount.toLocaleString()} shown · {totalLabel}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  {difficulty !== 'All' && <Badge variant="outline" className="lc-soft-badge">{difficulty}</Badge>}
                  {mode === 'curated' && pattern !== 'All' && <Badge variant="outline" className="lc-soft-badge">{pattern}</Badge>}
                  {query.trim() && <Badge variant="outline" className="lc-soft-badge">Search: {query.trim()}</Badge>}
                </div>
              </div>

              {mode === 'curated' ? (
                <CuratedProblemsetTable problems={curatedProblems} onOpenProblem={onOpenProblem} />
              ) : (
                <ImportedProblemsetTable problems={importedProblems} importedLoaded={importedLoaded} onOpenProblem={onOpenImportedProblem} />
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

function CodeLeetLandingHero({
  importedLoaded,
  onOpenCurated,
  onOpenImported,
  curatedCount,
  importedCount,
}: {
  importedLoaded: boolean
  onOpenCurated: () => void
  onOpenImported: () => void
  curatedCount: number
  importedCount: number
}) {
  return (
    <section className="codeleet-hero">
      <div className="codeleet-hero-scene" aria-hidden="true">
        <div className="codeleet-scene-sidebar">
          {['Two Sum', 'Add Two Numbers', 'Longest Substring', 'Median of Two Sorted Arrays', 'Reverse Integer'].map((title, index) => (
            <div key={title} className={index === 0 ? 'codeleet-scene-row active' : 'codeleet-scene-row'}>
              <span>{index + 1}</span>
              <p>{title}</p>
            </div>
          ))}
        </div>
        <div className="codeleet-scene-main">
          <div className="codeleet-scene-heading">
            <span>LC 1</span>
            <span>Easy</span>
          </div>
          <div className="codeleet-scene-title" />
          <div className="codeleet-scene-tags">
            <span />
            <span />
          </div>
          <div className="codeleet-scene-content">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="codeleet-scene-code">
          <div />
          <pre>{`class Solution:
    def twoSum(self, nums, target):
        seen = {}
        for i, x in enumerate(nums):
            if target - x in seen:
                return [seen[target - x], i]
            seen[x] = i`}</pre>
        </div>
      </div>

      <div className="codeleet-hero-content">
        <p className="codeleet-hero-kicker">DSA workspace for focused practice</p>
        <h1>CodeLeet</h1>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3 py-1.5 text-xs font-semibold text-cyan-700 dark:bg-cyan-950/30 dark:text-cyan-400">
          <Sparkles className="size-3.5 text-cyan-500 animate-pulse" />
          <span>{(curatedCount + (importedCount || 3962)).toLocaleString()} Total Problems</span>
          <span className="text-slate-300 dark:text-slate-700">|</span>
          <span className="text-slate-600 dark:text-slate-400 font-normal">
            {curatedCount} Curated + {importedCount ? importedCount.toLocaleString() : '3,962'} LeetCode
          </span>
        </div>
        <p className="codeleet-hero-copy">
          A compact problem-solving desk for curated interview patterns, imported statements, editorials, and reference code.
        </p>
        <div className="codeleet-hero-actions">
          <Button type="button" size="lg" className="lc-action-button" onClick={onOpenCurated}>
            <Code2 className="size-4" />
            Open 229 List
          </Button>
          <Button type="button" size="lg" variant="outline" className="lc-action-button" onClick={onOpenImported} disabled={!importedLoaded}>
            <Library className="size-4" />
            Browse LeetCode
          </Button>
        </div>
      </div>
    </section>
  )
}

function CuratedProblemsetTable({ problems: visibleProblems, onOpenProblem }: { problems: Problem[]; onOpenProblem: (problem: Problem) => void }) {
  return (
    <div className="overflow-x-auto">
      <table className="lc-problem-table">
        <thead>
          <tr>
            <th className="w-20">#</th>
            <th>Title</th>
            <th className="w-28">Difficulty</th>
            <th className="hidden w-52 md:table-cell">Pattern</th>
            <th className="hidden w-64 xl:table-cell">Companies</th>
          </tr>
        </thead>
        <tbody>
          {visibleProblems.map((problem) => (
            <tr key={problem.slug} className="cursor-pointer" onClick={() => onOpenProblem(problem)}>
              <td className="font-medium text-[#6b7280]">{problem.id}</td>
              <td>
                <div className="min-w-[220px]">
                  <div className="truncate font-medium text-[#262626] dark:text-slate-100">
                    {problem.leetcode}. {problem.title}
                  </div>
                  <div className="mt-1 flex flex-wrap gap-1 md:hidden">
                    <span className="lc-mini-tag">{problem.pattern}</span>
                  </div>
                </div>
              </td>
              <td>
                <span className={`lc-difficulty ${difficultyClass(problem.difficulty)}`}>{problem.difficulty}</span>
              </td>
              <td className="hidden md:table-cell">
                <span className="lc-mini-tag">{problem.pattern}</span>
              </td>
              <td className="hidden xl:table-cell">
                <div className="flex max-w-64 flex-wrap gap-1">
                  {problem.companies.slice(0, 3).map((company) => (
                    <span key={company} className="lc-mini-tag">
                      {company}
                    </span>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {visibleProblems.length === 0 && <EmptyProblemsetMessage />}
    </div>
  )
}

function ImportedProblemsetTable({
  problems: visibleProblems,
  importedLoaded,
  onOpenProblem,
}: {
  problems: ImportedProblemIndex[]
  importedLoaded: boolean
  onOpenProblem: (problem: ImportedProblemIndex) => void
}) {
  if (!importedLoaded) {
    return (
      <div className="flex items-center gap-2 p-5 text-sm text-[#596273] dark:text-slate-300">
        <Loader2 className="size-4 animate-spin" />
        Loading CodeLeet problem data
      </div>
    )
  }

  return (
    <div className="overflow-x-auto">
      <table className="lc-problem-table">
        <thead>
          <tr>
            <th className="w-24">#</th>
            <th>Title</th>
            <th className="w-28">Difficulty</th>
            <th className="hidden w-64 md:table-cell">Tags</th>
            <th className="hidden w-40 xl:table-cell">Source</th>
          </tr>
        </thead>
        <tbody>
          {visibleProblems.map((problem) => (
            <tr key={problem.slug} className="cursor-pointer" onClick={() => onOpenProblem(problem)}>
              <td className="font-medium text-[#6b7280]">{problem.number}</td>
              <td>
                <div className="min-w-[220px]">
                  <div className="truncate font-medium text-[#262626] dark:text-slate-100">{problem.title}</div>
                  <div className="mt-1 flex flex-wrap gap-1 md:hidden">
                    {problem.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="lc-mini-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </td>
              <td>
                <span className={`lc-difficulty ${difficultyClass(problem.difficulty)}`}>{problem.difficulty}</span>
              </td>
              <td className="hidden md:table-cell">
                <div className="flex max-w-64 flex-wrap gap-1">
                  {problem.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="lc-mini-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </td>
              <td className="hidden text-[#6b7280] xl:table-cell">{problem.source || 'LeetCode'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {visibleProblems.length === 0 && <EmptyProblemsetMessage />}
    </div>
  )
}

function EmptyProblemsetMessage() {
  return <div className="p-5 text-sm text-[#6b7280] dark:text-slate-400">No problems match the current filters.</div>
}

function ResizableSidebar({
  children,
  width,
  onWidthChange,
}: {
  children: ReactNode
  width: number
  onWidthChange: (value: number) => void
}) {
  const startResize = (event: ReactPointerEvent<HTMLButtonElement>) => {
    event.currentTarget.focus()
    event.preventDefault()
    const startX = event.clientX
    const startWidth = width
    const originalCursor = document.body.style.cursor
    const originalUserSelect = document.body.style.userSelect
    document.body.style.cursor = 'col-resize'
    document.body.style.userSelect = 'none'

    const handlePointerMove = (moveEvent: PointerEvent) => {
      onWidthChange(startWidth + moveEvent.clientX - startX)
    }

    const stopResize = () => {
      document.body.style.cursor = originalCursor
      document.body.style.userSelect = originalUserSelect
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerup', stopResize)
      window.removeEventListener('pointercancel', stopResize)
    }

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerup', stopResize)
    window.addEventListener('pointercancel', stopResize)
  }

  const resizeWithKeyboard = (event: ReactKeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      onWidthChange(width - 16)
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      onWidthChange(width + 16)
    }
    if (event.key === 'Home') {
      event.preventDefault()
      onWidthChange(minSidebarWidth)
    }
    if (event.key === 'End') {
      event.preventDefault()
      onWidthChange(maxSidebarWidth)
    }
  }

  return (
    <aside className="codeleet-sidebar">
      <div className="sticky top-[54px] h-[calc(100vh-54px)]">{children}</div>
      <button
        type="button"
        className="codeleet-sidebar-resizer"
        aria-label="Resize problem list"
        aria-valuemin={minSidebarWidth}
        aria-valuemax={maxSidebarWidth}
        aria-valuenow={width}
        role="separator"
        onPointerDown={startResize}
        onKeyDown={resizeWithKeyboard}
      />
    </aside>
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
  sidebarWidth,
  onQueryChange,
  onPatternChange,
  onDifficultyChange,
  onOpenProblem,
  onOpenImportedProblem,
  onOpenCurated,
  onOpenImported,
  onUpdateNote,
  onSidebarWidthChange,
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
  sidebarWidth: number
  onQueryChange: (value: string) => void
  onPatternChange: (value: string) => void
  onDifficultyChange: (value: DifficultyFilter) => void
  onOpenProblem: (problem: Problem) => void
  onOpenImportedProblem: (problem: ImportedProblemIndex) => void
  onOpenCurated: () => void
  onOpenImported: () => void
  onUpdateNote: (value: string) => void
  onSidebarWidthChange: (value: number) => void
}) {
  return (
    <div
      id="catalog"
      className="codeleet-shell"
      style={{ '--codeleet-sidebar-width': `${sidebarWidth}px` } as CSSProperties}
    >
      <ResizableSidebar width={sidebarWidth} onWidthChange={onSidebarWidthChange}>
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
      </ResizableSidebar>

      <section className="min-w-0 bg-[#f7f8fa] px-3 py-3 dark:bg-slate-950 sm:px-5">
        <div className="mx-auto max-w-[1368px]">
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

          <div className="mt-3 hidden gap-3 xl:grid xl:grid-cols-[minmax(0,1fr)_minmax(390px,0.72fr)] 2xl:grid-cols-[minmax(0,1fr)_minmax(520px,0.76fr)]">
            <div className="min-w-0 space-y-3">
              <ProblemStatementPane problem={activeProblem} />
              <ApproachPane problem={activeProblem} />
            </div>

            <aside className="sticky top-[66px] max-h-[calc(100vh-78px)] min-w-0 space-y-3 overflow-y-auto pr-1">
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
      <div className="grid grid-cols-2 gap-2 border-b border-[#eceff3] p-2.5 dark:border-slate-800">
        <Button
          type="button"
          variant={mode === 'curated' ? 'default' : 'outline'}
          size="sm"
          onClick={onOpenCurated}
          className="lc-catalog-tab justify-start"
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
          className="lc-catalog-tab justify-start"
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
  const [sortBy, setSortBy] = useState<'id' | 'leetcode' | 'title' | 'difficulty'>('id')
  const [groupBy, setGroupBy] = useState<'none' | 'difficulty' | 'pattern'>('none')

  const sortedProblems = useMemo(() => {
    const list = [...visibleProblems]
    const diffOrder: Record<string, number> = { Easy: 1, Medium: 2, Hard: 3 }
    list.sort((a, b) => {
      if (sortBy === 'title') {
        return a.title.localeCompare(b.title)
      }
      if (sortBy === 'difficulty') {
        const diffDiff = (diffOrder[a.difficulty] || 0) - (diffOrder[b.difficulty] || 0)
        return diffDiff !== 0 ? diffDiff : a.id - b.id
      }
      if (sortBy === 'leetcode') {
        return a.leetcode - b.leetcode
      }
      return a.id - b.id // default: id
    })
    return list
  }, [visibleProblems, sortBy])

  const groupedProblems = useMemo(() => {
    if (groupBy === 'none') {
      return [{ name: 'All Problems', problems: sortedProblems }]
    }

    const groupsMap: Record<string, Problem[]> = {}
    let groupNamesOrder: string[] = []
    if (groupBy === 'difficulty') {
      groupNamesOrder = ['Easy', 'Medium', 'Hard']
    } else if (groupBy === 'pattern') {
      groupNamesOrder = [...patterns]
    }

    for (const problem of sortedProblems) {
      const key = groupBy === 'difficulty' ? problem.difficulty : problem.pattern
      if (!groupsMap[key]) {
        groupsMap[key] = []
      }
      groupsMap[key].push(problem)
    }

    const result: { name: string; problems: Problem[] }[] = []
    for (const name of groupNamesOrder) {
      if (groupsMap[name] && groupsMap[name].length > 0) {
        result.push({ name, problems: groupsMap[name] })
      }
    }
    for (const [name, list] of Object.entries(groupsMap)) {
      if (!groupNamesOrder.includes(name) && list.length > 0) {
        result.push({ name, problems: list })
      }
    }
    return result
  }, [sortedProblems, groupBy])

  return (
    <div className="flex h-full flex-col bg-white dark:bg-slate-950">
      <div className="space-y-3 border-b border-[#eceff3] p-3.5 dark:border-slate-800">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#9aa4b2]" />
          <Input
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Search title, number, pattern"
            className="lc-search-input pl-9"
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
        <div className="grid grid-cols-2 gap-2">
          <Select value={groupBy} onValueChange={(value) => setGroupBy(value as 'none' | 'difficulty' | 'pattern')}>
            <SelectTrigger aria-label="Group by category">
              <SelectValue placeholder="Group By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">No Grouping</SelectItem>
              <SelectItem value="difficulty">Group by Difficulty</SelectItem>
              <SelectItem value="pattern">Group by Pattern</SelectItem>
            </SelectContent>
          </Select>
          <Select value={sortBy} onValueChange={(value) => setSortBy(value as 'id' | 'leetcode' | 'title' | 'difficulty')}>
            <SelectTrigger aria-label="Sort by">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="id">Curated ID</SelectItem>
              <SelectItem value="leetcode">LC Number</SelectItem>
              <SelectItem value="title">Title</SelectItem>
              <SelectItem value="difficulty">Difficulty</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center justify-between text-xs text-[#728096] dark:text-slate-400">
          <span>{visibleProblems.length} visible</span>
          <span>{problems.length} total</span>
        </div>
      </div>
      <ScrollArea className="min-h-0 flex-1">
        <div className="space-y-3 p-2.5">
          {groupedProblems.map((group) => (
            <div key={group.name} className="space-y-2">
              {groupBy !== 'none' && (
                <div className="sticky top-0 z-10 -mx-2.5 flex items-center justify-between border-y border-[#f0f2f5] bg-white/95 px-3 py-1.5 text-xs font-semibold tracking-wide text-[#728096] backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/95 dark:text-slate-400">
                  <span className="flex items-center gap-1.5">
                    {groupBy === 'difficulty' && (
                      <span className={`size-1.5 rounded-full ${
                        group.name === 'Easy' ? 'bg-emerald-500' :
                        group.name === 'Medium' ? 'bg-amber-500' : 'bg-rose-500'
                      }`} />
                    )}
                    {group.name}
                  </span>
                  <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded-full dark:bg-slate-800 dark:text-slate-400">
                    {group.problems.length}
                  </span>
                </div>
              )}
              <div className="space-y-1.5">
                {group.problems.map((problem) => (
                  <button
                    key={problem.slug}
                    type="button"
                    onClick={() => onOpenProblem(problem)}
                    className={`lc-sidebar-row ${
                      problem.slug === activeSlug
                        ? 'lc-sidebar-row-active'
                        : 'border-transparent bg-white hover:border-[#e5e7eb] hover:bg-[#f7f8fa] dark:bg-slate-950 dark:hover:border-slate-700 dark:hover:bg-slate-900'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="lc-number-pill">
                        {problem.id}
                      </span>
                      <span className="min-w-0 flex-1 overflow-hidden">
                        <span className="lc-sidebar-title text-[#1f2328] dark:text-slate-100" title={`${problem.leetcode}. ${problem.title}`}>
                          {problem.leetcode}. {problem.title}
                        </span>
                        <span className="mt-1 flex flex-wrap gap-1">
                          <Badge variant="outline" className="lc-row-badge">
                            {problem.pattern}
                          </Badge>
                          <Badge variant="secondary" className="lc-row-badge">
                            {problem.difficulty}
                          </Badge>
                        </span>
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
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
  const [sortBy, setSortBy] = useState<'number' | 'title' | 'difficulty'>('number')
  const [groupBy, setGroupBy] = useState<'none' | 'difficulty' | 'tag'>('none')

  const sortedProblems = useMemo(() => {
    const list = [...visibleProblems]
    const diffOrder: Record<string, number> = { Easy: 1, Medium: 2, Hard: 3 }
    list.sort((a, b) => {
      if (sortBy === 'title') {
        return a.title.localeCompare(b.title)
      }
      if (sortBy === 'difficulty') {
        const diffDiff = (diffOrder[a.difficulty] || 99) - (diffOrder[b.difficulty] || 99)
        return diffDiff !== 0 ? diffDiff : a.number - b.number
      }
      return a.number - b.number // default: number
    })
    return list
  }, [visibleProblems, sortBy])

  const groupedProblems = useMemo(() => {
    if (groupBy === 'none') {
      return [{ name: 'All Problems', problems: sortedProblems }]
    }

    const groupsMap: Record<string, ImportedProblemIndex[]> = {}
    let groupNamesOrder: string[] = []
    if (groupBy === 'difficulty') {
      groupNamesOrder = ['Easy', 'Medium', 'Hard']
    }

    for (const problem of sortedProblems) {
      let key = 'Unknown'
      if (groupBy === 'difficulty') {
        key = problem.difficulty || 'Unknown'
      } else if (groupBy === 'tag') {
        key = problem.tags && problem.tags.length > 0 ? problem.tags[0] : 'No Tag'
      }

      if (!groupsMap[key]) {
        groupsMap[key] = []
      }
      groupsMap[key].push(problem)
    }

    const result: { name: string; problems: ImportedProblemIndex[] }[] = []
    if (groupBy === 'difficulty') {
      for (const name of groupNamesOrder) {
        if (groupsMap[name] && groupsMap[name].length > 0) {
          result.push({ name, problems: groupsMap[name] })
        }
      }
      if (groupsMap['Unknown'] && groupsMap['Unknown'].length > 0) {
        result.push({ name: 'Unknown', problems: groupsMap['Unknown'] })
      }
    } else {
      const sortedTags = Object.keys(groupsMap).sort((a, b) => a.localeCompare(b))
      for (const name of sortedTags) {
        result.push({ name, problems: groupsMap[name] })
      }
    }
    return result
  }, [sortedProblems, groupBy])

  return (
    <div className="flex h-full flex-col bg-white dark:bg-slate-950">
      <div className="space-y-3 border-b border-[#eceff3] p-3.5 dark:border-slate-800">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#9aa4b2]" />
          <Input
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Search all LeetCode problems"
            className="lc-search-input pl-9"
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
        <div className="grid grid-cols-2 gap-2">
          <Select value={groupBy} onValueChange={(value) => setGroupBy(value as 'none' | 'difficulty' | 'tag')}>
            <SelectTrigger aria-label="Group by category">
              <SelectValue placeholder="Group By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">No Grouping</SelectItem>
              <SelectItem value="difficulty">Group by Difficulty</SelectItem>
              <SelectItem value="tag">Group by Tag</SelectItem>
            </SelectContent>
          </Select>
          <Select value={sortBy} onValueChange={(value) => setSortBy(value as 'number' | 'title' | 'difficulty')}>
            <SelectTrigger aria-label="Sort by">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="number">LC Number</SelectItem>
              <SelectItem value="title">Title</SelectItem>
              <SelectItem value="difficulty">Difficulty</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center justify-between text-xs text-[#728096] dark:text-slate-400">
          <span>{importedLoaded ? `${visibleProblems.length} visible` : 'Loading problem data'}</span>
          <span>LeetCode</span>
        </div>
      </div>
      <ScrollArea className="min-h-0 flex-1">
        <div className="space-y-3 p-2.5">
          {!importedLoaded && (
            <div className="flex items-center gap-2 rounded-lg border border-[#e5e7eb] p-3 text-sm text-[#596273] dark:border-slate-800 dark:text-slate-300">
              <Loader2 className="size-4 animate-spin" />
              Loading CodeLeet problem data
            </div>
          )}
          {groupedProblems.map((group) => (
            <div key={group.name} className="space-y-2">
              {groupBy !== 'none' && (
                <div className="sticky top-0 z-10 -mx-2.5 flex items-center justify-between border-y border-[#f0f2f5] bg-white/95 px-3 py-1.5 text-xs font-semibold tracking-wide text-[#728096] backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/95 dark:text-slate-400">
                  <span className="flex items-center gap-1.5">
                    {groupBy === 'difficulty' && (
                      <span className={`size-1.5 rounded-full ${
                        group.name === 'Easy' ? 'bg-emerald-500' :
                        group.name === 'Medium' ? 'bg-amber-500' : 'bg-rose-500'
                      }`} />
                    )}
                    {group.name}
                  </span>
                  <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded-full dark:bg-slate-800 dark:text-slate-400">
                    {group.problems.length}
                  </span>
                </div>
              )}
              <div className="space-y-1.5">
                {group.problems.map((problem) => (
                  <button
                    key={problem.slug}
                    type="button"
                    onClick={() => onOpenProblem(problem)}
                    className={`lc-sidebar-row ${
                      problem.slug === activeSlug
                        ? 'lc-sidebar-row-active'
                        : 'border-transparent bg-white hover:border-[#e5e7eb] hover:bg-[#f7f8fa] dark:bg-slate-950 dark:hover:border-slate-700 dark:hover:bg-slate-900'
                    }`}
                  >
                    <span className="flex items-start gap-3">
                      <span className="lc-number-pill w-12">
                        {problem.number}
                      </span>
                      <span className="min-w-0 flex-1 overflow-hidden">
                        <span className="lc-sidebar-title text-[#1f2328] dark:text-slate-100" title={problem.title}>
                          {problem.title}
                        </span>
                        <span className="mt-1 flex flex-wrap gap-1">
                          {problem.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="outline" className="lc-row-badge">
                              {tag}
                            </Badge>
                          ))}
                          <Badge variant="secondary" className="lc-row-badge">
                            {problem.difficulty}
                          </Badge>
                        </span>
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
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
    <Card className="lc-panel">
      <CardContent className="p-4">
        <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
          <div className="min-w-0 space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="bg-[#111827] text-white dark:bg-slate-100 dark:text-slate-950">#{problem.id}</Badge>
              <Badge variant="outline" className="lc-soft-badge">LC {problem.leetcode}</Badge>
              <span className={`lc-difficulty ${difficultyClass(problem.difficulty)}`}>{problem.difficulty}</span>
              <Badge variant="outline" className="lc-soft-badge">{problem.pattern}</Badge>
              {problem.sources.slice(0, 2).map((source) => (
                <Badge key={source} variant="outline" className="lc-soft-badge hidden sm:inline-flex">
                  {source}
                </Badge>
              ))}
            </div>
            <div>
              <h2 className="break-words text-[26px] font-semibold leading-tight tracking-normal text-[#111827] dark:text-slate-100">
                {problem.title}
              </h2>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {problem.companies.slice(0, 4).map((company) => (
                  <Badge key={company} variant="secondary" className="lc-soft-badge">
                    {company}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-2">
            <Button variant="default" size="sm" className="lc-action-button" asChild>
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
                  className="lc-icon-button"
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
                  className="lc-icon-button"
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
          <span className="text-xs font-medium text-[#6b7280] dark:text-slate-400">{completion}% through sheet</span>
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
  sidebarWidth,
  onQueryChange,
  onDifficultyChange,
  onOpenProblem,
  onOpenImportedProblem,
  onOpenCurated,
  onOpenImported,
  onSidebarWidthChange,
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
  sidebarWidth: number
  onQueryChange: (value: string) => void
  onDifficultyChange: (value: DifficultyFilter) => void
  onOpenProblem: (problem: Problem) => void
  onOpenImportedProblem: (problem: ImportedProblemIndex) => void
  onOpenCurated: () => void
  onOpenImported: () => void
  onSidebarWidthChange: (value: number) => void
}) {
  return (
    <div
      id="catalog"
      className="codeleet-shell"
      style={{ '--codeleet-sidebar-width': `${sidebarWidth}px` } as CSSProperties}
    >
      <ResizableSidebar width={sidebarWidth} onWidthChange={onSidebarWidthChange}>
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
      </ResizableSidebar>

      <section className="min-w-0 bg-[#f7f8fa] px-3 py-3 dark:bg-slate-950 sm:px-5">
        <div className="mx-auto max-w-[1368px]">
          <ImportedProblemHeader problem={problem} loading={loading} />

          {error && (
            <Card className="mt-3 rounded-lg border-red-200 bg-red-50 text-red-900 dark:border-red-900/60 dark:bg-red-950/30 dark:text-red-100">
              <CardContent className="p-4">{error}</CardContent>
            </Card>
          )}

          <div className="mt-3 xl:hidden">
            <ImportedMobileTabs problem={problem} detail={detail} loading={loading} />
          </div>

          <div className="mt-3 hidden gap-3 xl:grid xl:grid-cols-[minmax(0,1fr)_minmax(390px,0.72fr)] 2xl:grid-cols-[minmax(0,1fr)_minmax(520px,0.76fr)]">
            <div className="min-w-0 space-y-3">
              <ImportedDescriptionPane detail={detail} loading={loading} />
              <ImportedEditorialPane detail={detail} loading={loading} />
            </div>
            <aside className="sticky top-[66px] max-h-[calc(100vh-78px)] min-w-0 space-y-3 overflow-y-auto pr-1">
              <SolutionCodePanel snippets={detailToSnippets(detail)} />
              {problem && <VideoResourcePanel title={problem.title} url={problem.videoUrl} />}
              {detail?.sourcePath && (
                <Card className="lc-panel">
                  <CardHeader className="border-b border-[#e5e7eb] pb-3 dark:border-slate-800">
                    <CardTitle className="text-base">Source</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 text-sm leading-6 text-[#596273] dark:text-slate-300">
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
    <Card className="lc-panel">
      <CardContent className="p-4">
        <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
          <div className="min-w-0 space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="bg-[#111827] text-white dark:bg-slate-100 dark:text-slate-950">
                {problem ? `LC ${problem.number}` : 'LeetCode'}
              </Badge>
              {problem?.difficulty && <span className={`lc-difficulty ${difficultyClass(problem.difficulty)}`}>{problem.difficulty}</span>}
              {problem?.rating && <Badge variant="outline" className="lc-soft-badge">Rating {problem.rating}</Badge>}
              {problem?.source && <Badge variant="outline" className="lc-soft-badge">{problem.source}</Badge>}
            </div>
            <div>
              <h2 className="break-words text-[26px] font-semibold leading-tight tracking-normal text-[#111827] dark:text-slate-100">
                {problem?.title ?? (loading ? 'Loading problem' : 'Problem not found')}
              </h2>
              {problem && (
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {problem.tags.slice(0, 6).map((tag) => (
                    <Badge key={tag} variant="secondary" className="lc-soft-badge">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
          {problem && (
            <div className="flex shrink-0 flex-wrap items-center gap-2">
              <Button variant="default" size="sm" className="lc-action-button" asChild>
                <a href={problem.url} target="_blank" rel="noreferrer" aria-label={`Open ${problem.number}. ${problem.title} on LeetCode`}>
                  <ExternalLink className="size-4" />
                  LeetCode
                </a>
              </Button>
              <Button variant="outline" size="sm" className="lc-action-button" asChild>
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
    <article className="statement-surface">
      <StatementSectionLabel icon={<BookOpen className="size-4" />} label="Description" />
      <div
        className="leetcode-html mt-4 min-w-0 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: detail.descriptionHtml }}
      />
    </article>
  )
}

function ImportedEditorialPane({ detail, loading }: { detail: ImportedProblemDetail | null; loading: boolean }) {
  if (loading || !detail) {
    return <LoadingCard />
  }

  return (
    <Card className="lc-panel">
      <CardHeader className="border-b border-[#e5e7eb] pb-3 dark:border-slate-800">
        <CardTitle className="flex items-center gap-2 text-base">
          <Sparkles className="size-4 text-amber-700 dark:text-amber-300" />
          Editorial
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 sm:p-5">
        <p className="whitespace-pre-wrap text-sm leading-7 text-[#333b48] dark:text-slate-300">
          {detail.solutionText || 'No editorial text was included in the imported source.'}
        </p>
      </CardContent>
    </Card>
  )
}

function LoadingCard() {
  return (
    <Card className="lc-panel">
      <CardContent className="flex min-h-32 items-center gap-2 p-4 text-sm text-[#596273] dark:text-slate-300">
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

function difficultyClass(difficulty: string) {
  if (difficulty === 'Easy') {
    return 'lc-difficulty-easy'
  }
  if (difficulty === 'Medium') {
    return 'lc-difficulty-medium'
  }
  if (difficulty === 'Hard') {
    return 'lc-difficulty-hard'
  }
  return 'lc-difficulty-unknown'
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
    <article className="statement-surface">
      <StatementSectionLabel icon={<BookOpen className="size-4" />} label="Description" />
      <div className="mt-4 space-y-8">
        <section className="space-y-2">
          <h3 className="statement-kicker">Problem Statement</h3>
          <p className="max-w-5xl break-words text-base leading-8 text-slate-800 dark:text-slate-200">
            {problem.prompt}
          </p>
        </section>

        <ExampleBlock problem={problem} />

        <div className="grid gap-3 sm:grid-cols-2">
          <ComplexityMetric icon={<Clock3 className="size-4" />} label="Time" value={problem.time} tone="cyan" />
          <ComplexityMetric icon={<Database className="size-4" />} label="Space" value={problem.space} tone="violet" />
        </div>

        {edgeItems.length > 0 && (
          <section className="space-y-3">
            <h3 className="statement-kicker">Constraints & Edge Cases</h3>
            <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
              {edgeItems.map((item) => (
                <li
                  key={item}
                  className="flex min-w-0 items-start gap-2 text-sm leading-6 text-slate-700 dark:text-slate-300"
                >
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-emerald-600 dark:text-emerald-300" />
                  <span className="min-w-0 break-words">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="grid gap-5 border-t border-slate-200 pt-5 dark:border-slate-800 sm:grid-cols-2">
          <ReferenceLinks problem={problem} />
          <VideoLinkBlock title={problem.title} url={problem.videoUrl} />
        </div>
      </div>
    </article>
  )
}

function StatementSectionLabel({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-100">
      <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
        {icon}
      </span>
      {label}
    </div>
  )
}

function ComplexityMetric({
  icon,
  label,
  value,
  tone,
}: {
  icon: ReactNode
  label: string
  value: string
  tone: 'cyan' | 'violet'
}) {
  const toneClass =
    tone === 'cyan'
      ? 'bg-cyan-50 text-cyan-900 dark:bg-cyan-950/30 dark:text-cyan-200'
      : 'bg-violet-50 text-violet-900 dark:bg-violet-950/30 dark:text-violet-200'

  return (
    <div className={`flex min-w-0 items-center gap-3 rounded-md px-3 py-2.5 ${toneClass}`}>
      <span className="shrink-0">{icon}</span>
      <div className="min-w-0">
        <p className="text-[11px] font-semibold uppercase text-current/65">{label}</p>
        <p className="break-words font-mono text-sm font-semibold">{value}</p>
      </div>
    </div>
  )
}

function ApproachPane({ problem }: { problem: Problem }) {
  return (
    <Card className="lc-panel">
      <CardHeader className="border-b border-[#e5e7eb] pb-3 dark:border-slate-800">
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
    <Card className="lc-panel">
      <CardHeader className="border-b border-[#e5e7eb] pb-3 dark:border-slate-800">
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
    <Card className="lc-panel">
      <CardHeader className="border-b border-[#e5e7eb] pb-3 dark:border-slate-800">
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
    <section className="rounded-md bg-slate-50 p-4 dark:bg-slate-900/45">
      <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-100">
        <FileText className="size-4 text-slate-500 dark:text-slate-400" />
        Example Walkthrough
      </div>
      
      <div className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="min-w-0">
            <span className="statement-kicker mb-1 block">Input</span>
            <code className="block whitespace-pre-wrap break-words font-mono text-sm font-medium leading-6 text-slate-900 dark:text-slate-100">
              {problem.example.input}
            </code>
          </div>
          
          <div className="min-w-0">
            <span className="statement-kicker mb-1 block">Output</span>
            <code className="block whitespace-pre-wrap break-words font-mono text-sm font-medium leading-6 text-slate-900 dark:text-slate-100">
              {problem.example.output}
            </code>
          </div>
        </div>
        
        {problem.example.why && (
          <div className="text-sm leading-7 text-slate-700 dark:text-slate-300">
            <span className="statement-kicker mb-1 block">Explanation</span>
            <p className="break-words">{problem.example.why}</p>
          </div>
        )}
      </div>
    </section>
  )
}

function ReferenceLinks({ problem }: { problem: Problem }) {
  return (
    <div className="space-y-2">
      <h4 className="statement-kicker">
        Resources & References
      </h4>
      <div className="flex flex-wrap gap-2">
        {problem.references.map((reference) => (
          <a
            key={reference.url}
            href={reference.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-w-0 items-center gap-2 rounded-md bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-cyan-50 hover:text-cyan-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-cyan-950/40 dark:hover:text-cyan-200"
          >
            <ExternalLink className="size-3.5 shrink-0 text-slate-500" />
            <span className="min-w-0 break-words">
              {reference.kind === 'problem'
                ? `${problem.leetcode}. ${problem.title} on LeetCode`
                : reference.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}

function SolutionTabs({ problem }: { problem: Problem }) {
  const snippets: CodeSnippet[] = []

  // Add Python
  const pyCode = problem.sourcePythonCode || problem.pythonCode
  if (pyCode) {
    snippets.push({
      label: problem.sourcePythonCode ? 'Python (source)' : 'Python',
      language: 'python',
      code: pyCode,
    })
  }

  // Add Go
  const goCode = problem.sourceGoCode || problem.goCode
  if (goCode) {
    snippets.push({
      label: problem.sourceGoCode ? 'Go (source)' : 'Go',
      language: 'go',
      code: goCode,
    })
  }

  // Add other source languages from leetcode-main if available
  if (problem.sourceJavaCode) {
    snippets.push({ label: 'Java', language: 'java', code: problem.sourceJavaCode })
  }
  if (problem.sourceCppCode) {
    snippets.push({ label: 'C++', language: 'cpp', code: problem.sourceCppCode })
  }
  if (problem.sourceTypescriptCode) {
    snippets.push({ label: 'TypeScript', language: 'typescript', code: problem.sourceTypescriptCode })
  }
  if (problem.sourceJavascriptCode) {
    snippets.push({ label: 'JavaScript', language: 'javascript', code: problem.sourceJavascriptCode })
  }
  if (problem.sourceRustCode) {
    snippets.push({ label: 'Rust', language: 'rust', code: problem.sourceRustCode })
  }
  if (problem.sourceCsharpCode) {
    snippets.push({ label: 'C#', language: 'csharp', code: problem.sourceCsharpCode })
  }
  if (problem.sourceCCode) {
    snippets.push({ label: 'C', language: 'c', code: problem.sourceCCode })
  }
  if (problem.sourceKotlinCode) {
    snippets.push({ label: 'Kotlin', language: 'kotlin', code: problem.sourceKotlinCode })
  }
  if (problem.sourceSwiftCode) {
    snippets.push({ label: 'Swift', language: 'swift', code: problem.sourceSwiftCode })
  }
  if (problem.sourceSqlCode) {
    snippets.push({ label: 'SQL', language: 'sql', code: problem.sourceSqlCode })
  }

  return <SolutionCodePanel snippets={snippets} />
}

function SolutionCodePanel({ snippets }: { snippets: CodeSnippet[] }) {
  const defaultValue = snippets[0]?.label ?? 'empty'

  return (
    <Card className="lc-panel">
      <CardHeader className="border-b border-[#e5e7eb] pb-3 dark:border-slate-800">
        <CardTitle className="flex items-center gap-2 text-base">
          <Code2 className="size-4 text-slate-800 dark:text-slate-200" />
          Solution Code
        </CardTitle>
      </CardHeader>
      <CardContent className="p-3 sm:p-4">
        {snippets.length > 0 ? (
          <Tabs defaultValue={defaultValue}>
            <TabsList className="flex flex-wrap h-auto group-data-horizontal/tabs:h-auto w-full bg-[#f2f3f5] p-1 gap-1 justify-start dark:bg-slate-900">
              {snippets.map((snippet) => (
                <TabsTrigger
                  key={snippet.label}
                  value={snippet.label}
                  className="min-h-8 text-xs sm:text-sm px-3 sm:px-4 flex-initial"
                >
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
          <div className="rounded-lg border border-[#e5e7eb] bg-[#f7f8fa] p-4 text-sm text-[#596273] dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
            No solution snippets were imported for this problem.
          </div>
        )}
      </CardContent>
    </Card>
  )
}

function VideoResourcePanel({ title, url }: { title: string; url: string }) {
  return (
    <Card className="lc-panel">
      <CardHeader className="border-b border-[#e5e7eb] pb-3 dark:border-slate-800">
        <CardTitle className="flex items-center gap-2 text-base">
          <PlayCircle className="size-4 text-red-700 dark:text-red-300" />
          Video
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <Button variant="outline" size="sm" className="lc-action-button" asChild>
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
    <div className="space-y-2">
      <h4 className="statement-kicker">
        Video Resource
      </h4>
      <div>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          aria-label={`Search YouTube for ${title} solution`}
          className="inline-flex min-w-0 items-center gap-2 rounded-md bg-red-50 px-3.5 py-1.5 text-xs font-semibold text-red-700 transition hover:bg-red-100 dark:bg-red-950/25 dark:text-red-300 dark:hover:bg-red-950/40"
        >
          <PlayCircle className="size-4 shrink-0 text-red-500" />
          <span className="min-w-0 break-words">YouTube solution search</span>
        </a>
      </div>
    </div>
  )
}

function NotesCard({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <Card className="lc-panel">
      <CardHeader className="border-b border-[#e5e7eb] pb-3 dark:border-slate-800">
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
    <div className="overflow-hidden rounded-lg border border-[#111827] bg-[#070b1a] dark:border-slate-700">
      <div className="flex items-center justify-between border-b border-[#111827] px-3 py-2">
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
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="var(--diagram-line)" />
          </marker>
          <marker id="arrow-green" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#16a34a" />
          </marker>
        </defs>
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

  if (type === 'array') {
    return (
      <g>
        {cells.map((_, index) => {
          const x = 54 + index * 52
          const y = 104
          const isActive = index === seed % 6
          return (
            <g key={index}>
              <rect
                x={x}
                y={y}
                width="44"
                height="44"
                rx="6"
                fill={isActive ? 'var(--diagram-cell-active)' : 'var(--diagram-cell)'}
                stroke="var(--diagram-text)"
                strokeWidth="1.5"
              />
              <text x={x + 22} y={y + 26} textAnchor="middle" fill="var(--diagram-text)" className="text-[13px] font-semibold">
                {diagramLabel(tokens, cells, index)}
              </text>
              <text x={x + 22} y={y + 60} textAnchor="middle" fill="var(--diagram-muted-text)" className="text-[10px] font-mono">
                [{index}]
              </text>
            </g>
          )
        })}
      </g>
    )
  }

  if (type === 'pointers') {
    const leftIdx = seed % 3
    const rightIdx = 5 - (seed % 3)
    const pointerA = 76 + leftIdx * 52
    const pointerB = 76 + rightIdx * 52
    return (
      <g>
        {cells.map((_, index) => {
          const x = 54 + index * 52
          const y = 104
          const isActive = index === leftIdx || index === rightIdx
          return (
            <g key={index}>
              <rect
                x={x}
                y={y}
                width="44"
                height="44"
                rx="6"
                fill={isActive ? 'var(--diagram-cell-active)' : 'var(--diagram-cell)'}
                stroke="var(--diagram-text)"
                strokeWidth="1.5"
              />
              <text x={x + 22} y={y + 26} textAnchor="middle" fill="var(--diagram-text)" className="text-[13px] font-semibold">
                {diagramLabel(tokens, cells, index)}
              </text>
            </g>
          )
        })}
        <path d={`M${pointerA} 92 L${pointerA + 8} 100 L${pointerA - 8} 100 Z`} fill="#0f766e" />
        <text x={pointerA} y={84} textAnchor="middle" className="fill-teal-700 text-[11px] font-bold dark:fill-teal-300">
          left
        </text>
        <path d={`M${pointerB} 160 L${pointerB + 8} 152 L${pointerB - 8} 152 Z`} fill="#b45309" />
        <text x={pointerB} y={174} textAnchor="middle" className="fill-amber-700 text-[11px] font-bold dark:fill-amber-300">
          right
        </text>
      </g>
    )
  }

  if (type === 'window') {
    const start = seed % 3
    const end = Math.min(5, start + 2 + (seed % 2))
    const windowX = 50 + start * 52
    const windowWidth = (end - start + 1) * 52 - 8
    return (
      <g>
        {cells.map((_, index) => {
          const x = 54 + index * 52
          const y = 104
          return (
            <g key={index}>
              <rect
                x={x}
                y={y}
                width="44"
                height="44"
                rx="6"
                fill="var(--diagram-cell)"
                stroke="var(--diagram-text)"
                strokeWidth="1"
              />
              <text x={x + 22} y={y + 26} textAnchor="middle" fill="var(--diagram-text)" className="text-[13px] font-semibold">
                {diagramLabel(tokens, cells, index)}
              </text>
            </g>
          )
        })}
        <rect
          x={windowX}
          y={98}
          width={windowWidth}
          height={56}
          rx={8}
          fill="none"
          stroke="#06b6d4"
          strokeWidth="3"
          strokeDasharray="2 1"
        />
        <text x={windowX + windowWidth / 2} y={86} textAnchor="middle" className="fill-cyan-600 text-[11px] font-bold dark:fill-cyan-400">
          window
        </text>
      </g>
    )
  }

  if (type === 'prefix') {
    const nums = [2, 1, 3, 5, 2, 4]
    const prefixes = [2, 3, 6, 11, 13, 17]
    return (
      <g>
        <text x="36" y="96" fill="var(--diagram-muted-text)" className="text-[11px] font-bold font-mono">nums:</text>
        {nums.map((val, index) => {
          const x = 76 + index * 50
          const y = 78
          return (
            <g key={`nums-${index}`}>
              <rect x={x} y={y} width="38" height="28" rx="4" fill="var(--diagram-cell)" stroke="var(--diagram-text)" />
              <text x={x + 19} y={y + 18} textAnchor="middle" fill="var(--diagram-text)" className="text-[11px] font-medium">
                {tokens[index] ? truncateText(tokens[index], 5) : val}
              </text>
            </g>
          )
        })}
        {nums.map((_, index) => {
          const x = 76 + index * 50 + 19
          return (
            <line key={`line-${index}`} x1={x} y1={110} x2={x} y2={124} stroke="var(--diagram-soft-line)" strokeWidth="1.5" markerEnd="url(#arrow)" />
          )
        })}
        <text x="32" y="146" fill="var(--diagram-muted-text)" className="text-[11px] font-bold font-mono">prefix:</text>
        {prefixes.map((val, index) => {
          const x = 76 + index * 50
          const y = 128
          const isHighlighted = index === seed % 6
          return (
            <g key={`prefix-${index}`}>
              <rect x={x} y={y} width="38" height="28" rx="4" fill={isHighlighted ? 'var(--diagram-dp-active)' : 'var(--diagram-cell)'} stroke="var(--diagram-text)" />
              <text x={x + 19} y={y + 18} textAnchor="middle" fill="var(--diagram-text)" className="text-[11px] font-semibold">
                {isHighlighted ? 'P[i]' : val}
              </text>
            </g>
          )
        })}
      </g>
    )
  }

  if (type === 'hash') {
    const keys = ['key1', 'key2', 'key3', 'key4']
    const values = ['val1', 'val2', 'val3', 'val4']
    return (
      <g>
        {keys.map((key, index) => {
          const y = 76 + index * 32
          const keyText = tokens[index] ? truncateText(tokens[index], 8) : key
          const valText = tokens[index + 4] ? truncateText(tokens[index + 4], 8) : values[index]
          const isHashed = index === seed % 4
          return (
            <g key={index}>
              <rect x="76" y={y} width="90" height="24" rx="4" fill="var(--diagram-cell)" stroke="var(--diagram-text)" strokeWidth="1" />
              <text x="121" y={y + 16} textAnchor="middle" fill="var(--diagram-text)" className="text-[11px] font-mono">
                {keyText}
              </text>
              <line x1="172" y1={y + 12} x2="232" y2={y + 12} stroke={isHashed ? '#06b6d4' : 'var(--diagram-soft-line)'} strokeWidth="2" strokeDasharray={isHashed ? "none" : "3 2"} markerEnd="url(#arrow)" />
              <rect x="248" y={y} width="90" height="24" rx="4" fill={isHashed ? 'var(--diagram-tree-active)' : 'var(--diagram-cell)'} stroke="var(--diagram-text)" strokeWidth="1" />
              <text x="293" y={y + 16} textAnchor="middle" fill="var(--diagram-text)" className="text-[11px] font-semibold">
                {valText}
              </text>
            </g>
          )
        })}
      </g>
    )
  }

  if (type === 'stack') {
    const stackElements = ['elem1', 'elem2', 'elem3', 'elem4'].reverse()
    return (
      <g>
        <path d="M 160 74 L 160 200 L 260 200 L 260 74" fill="none" stroke="var(--diagram-text)" strokeWidth="3" />
        {stackElements.map((el, index) => {
          const y = 168 - index * 28
          const isTop = index === stackElements.length - 1
          const elText = tokens[index] ? truncateText(tokens[index], 8) : el
          return (
            <g key={index}>
              <rect x="166" y={y} width="88" height="24" rx="3" fill={isTop ? 'var(--diagram-heap-active)' : 'var(--diagram-cell)'} stroke="var(--diagram-text)" strokeWidth="1" />
              <text x="210" y={y + 16} textAnchor="middle" fill="var(--diagram-text)" className="text-[11px] font-semibold">
                {elText}
              </text>
            </g>
          )
        })}
        <path d="M 104 88 L 142 88" stroke="#7c3aed" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="90" y="92" fill="#7c3aed" className="text-[11px] font-bold dark:fill-violet-300">
          top
        </text>
      </g>
    )
  }

  if (type === 'queue') {
    return (
      <g>
        <line x1="76" y1="98" x2="344" y2="98" stroke="var(--diagram-text)" strokeWidth="3" />
        <line x1="76" y1="148" x2="344" y2="148" stroke="var(--diagram-text)" strokeWidth="3" />
        {cells.slice(0, 4).map((_, index) => {
          const x = 110 + index * 52
          const y = 104
          const isFront = index === 0
          return (
            <g key={index}>
              <rect x={x} y={y} width="44" height="38" rx="4" fill={isFront ? 'var(--diagram-cell-active)' : 'var(--diagram-cell)'} stroke="var(--diagram-text)" />
              <text x={x + 22} y={y + 24} textAnchor="middle" fill="var(--diagram-text)" className="text-[11px] font-semibold">
                {tokens[index] ? truncateText(tokens[index], 6) : String(cells[index])}
              </text>
            </g>
          )
        })}
        <path d="M 104 123 L 68 123" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="64" y="90" fill="#dc2626" textAnchor="middle" className="text-[10px] font-bold">front</text>
        <path d="M 352 123 L 328 123" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="352" y="90" fill="#16a34a" textAnchor="middle" className="text-[10px] font-bold">rear</text>
      </g>
    )
  }

  if (type === 'list') {
    const listNodes = ['head', 'node1', 'node2', 'node3']
    return (
      <g>
        {listNodes.map((name, index) => {
          const x = 46 + index * 88
          const y = 112
          const nodeText = tokens[index] ? truncateText(tokens[index], 5) : name
          return (
            <g key={index}>
              <rect x={x} y={y} width="56" height="32" rx="4" fill="var(--diagram-cell)" stroke="var(--diagram-text)" />
              <line x1={x + 36} y1={y} x2={x + 36} y2={y + 32} stroke="var(--diagram-text)" />
              <text x={x + 18} y={y + 20} textAnchor="middle" fill="var(--diagram-text)" className="text-[11px] font-semibold">
                {nodeText}
              </text>
              <circle cx={x + 46} cy={y + 16} r="3" fill="var(--diagram-text)" />
              {index < listNodes.length - 1 ? (
                <line x1={x + 46} y1={y + 16} x2={x + 82} y2={y + 16} stroke="var(--diagram-line)" strokeWidth="2" markerEnd="url(#arrow)" />
              ) : (
                <text x={x + 62} y={y + 22} fill="var(--diagram-muted-text)" className="text-[12px] font-bold font-mono">Ø</text>
              )}
            </g>
          )
        })}
      </g>
    )
  }

  if (type === 'binary') {
    const binaryCells = [1, 3, 5, 7, 9, 11]
    const midIndex = 2
    return (
      <g>
        {binaryCells.map((val, index) => {
          const x = 54 + index * 52
          const y = 104
          let fill = 'var(--diagram-cell)'
          if (index === midIndex) fill = 'var(--diagram-dp-active)'
          if (index < midIndex) fill = 'var(--diagram-cell-active)'
          return (
            <g key={index}>
              <rect x={x} y={y} width="44" height="44" rx="6" fill={fill} stroke="var(--diagram-text)" strokeWidth="1.5" />
              <text x={x + 22} y={y + 26} textAnchor="middle" fill="var(--diagram-text)" className="text-[13px] font-semibold font-mono">
                {tokens[index] ? truncateText(tokens[index], 5) : val}
              </text>
            </g>
          )
        })}
        <path d="M 76 92 L 76 98" stroke="#0284c7" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="76" y="84" textAnchor="middle" className="fill-sky-700 text-[10px] font-bold dark:fill-sky-300">low</text>
        <path d="M 180 162 L 180 156" stroke="#b45309" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="180" y="174" textAnchor="middle" className="fill-amber-700 text-[10px] font-bold dark:fill-amber-300">mid</text>
        <path d="M 336 92 L 336 98" stroke="#0284c7" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="336" y="84" textAnchor="middle" className="fill-sky-700 text-[10px] font-bold dark:fill-sky-300">high</text>
      </g>
    )
  }

  if (type === 'backtracking') {
    return (
      <g>
        <circle cx="210" cy="68" r="16" fill="var(--diagram-cell)" stroke="var(--diagram-text)" strokeWidth="1.5" />
        <text x="210" y="72" textAnchor="middle" className="text-[10px] font-semibold" fill="var(--diagram-text)">start</text>
        <line x1="196" y1="78" x2="142" y2="118" stroke="#16a34a" strokeWidth="2.5" markerEnd="url(#arrow-green)" />
        <circle cx="130" cy="128" r="16" fill="var(--diagram-graph-active)" stroke="#16a34a" strokeWidth="2" />
        <text x="130" y="132" textAnchor="middle" className="text-[10px] font-semibold" fill="var(--diagram-text)">
          {tokens[0] ? truncateText(tokens[0], 4) : 'optA'}
        </text>
        <line x1="224" y1="78" x2="278" y2="118" stroke="var(--diagram-soft-line)" strokeWidth="1.5" strokeDasharray="3 2" markerEnd="url(#arrow)" />
        <circle cx="290" cy="128" r="16" fill="var(--diagram-cell)" stroke="var(--diagram-text)" strokeWidth="1.5" />
        <text x="290" y="132" textAnchor="middle" className="text-[10px]" fill="var(--diagram-muted-text)">
          {tokens[1] ? truncateText(tokens[1], 4) : 'optB'}
        </text>
        <line x1="118" y1="138" x2="82" y2="176" stroke="#16a34a" strokeWidth="2.5" markerEnd="url(#arrow-green)" />
        <circle cx="76" cy="188" r="16" fill="var(--diagram-graph-active)" stroke="#16a34a" strokeWidth="2" />
        <text x="76" y="192" textAnchor="middle" className="text-[9px] font-bold" fill="var(--diagram-text)">✓ OK</text>
        <line x1="142" y1="138" x2="174" y2="176" stroke="#dc2626" strokeWidth="2" strokeDasharray="4 2" markerEnd="url(#arrow)" />
        <circle cx="184" cy="188" r="16" fill="var(--diagram-cell)" stroke="#dc2626" strokeWidth="1.5" />
        <text x="184" y="192" textAnchor="middle" className="text-[9px] font-semibold" fill="#dc2626">✗ Back</text>
      </g>
    )
  }

  if (type === 'bits') {
    const bitValues = [0, 1, 0, 0, 1, 1, 0, 1]
    return (
      <g>
        {bitValues.map((bit, index) => {
          const x = 50 + index * 42
          const y = 98
          const isOne = bit === 1
          return (
            <g key={index}>
              <rect x={x} y={y} width="36" height="36" rx="4" fill={isOne ? 'var(--diagram-tree-active)' : 'var(--diagram-cell)'} stroke="var(--diagram-text)" strokeWidth="1.5" />
              <text x={x + 18} y={y + 23} textAnchor="middle" fill="var(--diagram-text)" className="text-[14px] font-mono font-bold">
                {tokens[index] ? truncateText(tokens[index], 2) : bit}
              </text>
              <text x={x + 18} y={y - 8} textAnchor="middle" fill="var(--diagram-muted-text)" className="text-[9px] font-mono">
                {7 - index}
              </text>
            </g>
          )
        })}
        <text x="210" y="166" textAnchor="middle" fill="var(--diagram-text)" className="text-[12px] font-semibold font-mono">
          N &amp; (1 &lt;&lt; {seed % 8})
        </text>
        <path d="M 160 178 L 260 178" stroke="var(--diagram-soft-line)" strokeWidth="1.5" strokeDasharray="3 3" />
      </g>
    )
  }

  if (type === 'greedy') {
    const options = [
      { val: 'opt1', weight: 10, ratio: '9.0', chosen: true },
      { val: 'opt2', weight: 8, ratio: '7.5', chosen: true },
      { val: 'opt3', weight: 15, ratio: '4.2', chosen: false },
      { val: 'opt4', weight: 5, ratio: '2.0', chosen: false },
    ]
    return (
      <g>
        <text x="54" y="86" fill="var(--diagram-muted-text)" className="text-[10px] font-bold uppercase tracking-wider">Candidates (Sorted by Yield):</text>
        {options.map((opt, index) => {
          const y = 98 + index * 28
          const labelText = tokens[index] ? truncateText(tokens[index], 8) : opt.val
          return (
            <g key={index}>
              <rect x="54" y={y} width="220" height="22" rx="4" fill={opt.chosen ? 'var(--diagram-graph-active)' : 'var(--diagram-cell)'} stroke="var(--diagram-text)" />
              <text x="64" y={y + 15} fill="var(--diagram-text)" className="text-[11px] font-semibold">{labelText}</text>
              <text x="210" y={y + 15} fill="var(--diagram-muted-text)" className="text-[10px] font-mono">Value: {opt.ratio}</text>
              {opt.chosen ? (
                <g>
                  <circle cx="300" cy={y + 11} r="9" fill="#16a34a" />
                  <path d={`M 296 ${y+11} L 299 ${y+14} L 304 ${y+8}`} fill="none" stroke="white" strokeWidth="2" />
                  <text x="318" y={y + 15} fill="#16a34a" className="text-[10px] font-bold">Select</text>
                </g>
              ) : (
                <g>
                  <circle cx="300" cy={y + 11} r="9" fill="var(--diagram-border)" />
                  <line x1="297" y1={y + 8} x2="303" y2={y + 14} stroke="white" strokeWidth="1.5" />
                  <line x1="303" y1={y + 8} x2="297" y2={y + 14} stroke="white" strokeWidth="1.5" />
                  <text x="318" y={y + 15} fill="var(--diagram-muted-text)" className="text-[10px]">Skip</text>
                </g>
              )}
            </g>
          )
        })}
      </g>
    )
  }

  if (type === 'trie') {
    return (
      <g>
        <circle cx="210" cy="74" r="16" fill="var(--diagram-cell)" stroke="var(--diagram-text)" strokeWidth="1.5" />
        <text x="210" y="78" textAnchor="middle" className="text-[11px] font-bold" fill="var(--diagram-muted-text)">root</text>
        <line x1="210" y1="90" x2="210" y2="114" stroke="var(--diagram-line)" strokeWidth="1.5" />
        <circle cx="210" cy="130" r="16" fill="var(--diagram-cell)" stroke="var(--diagram-text)" strokeWidth="1.5" />
        <text x="210" y="134" textAnchor="middle" className="text-[12px] font-bold" fill="var(--diagram-text)">
          {tokens[0] ? truncateText(tokens[0], 2) : 'a'}
        </text>
        <line x1="198" y1="146" x2="162" y2="170" stroke="var(--diagram-line)" strokeWidth="1.5" />
        <circle cx="150" cy="186" r="16" fill="var(--diagram-heap-active)" stroke="#7c3aed" strokeWidth="2.5" />
        <text x="150" y="190" textAnchor="middle" className="text-[12px] font-bold" fill="var(--diagram-text)">
          {tokens[1] ? truncateText(tokens[1], 2) : 'n'}
        </text>
        <text x="150" y="214" textAnchor="middle" fill="#7c3aed" className="text-[9px] font-bold">word end</text>
        <line x1="222" y1="146" x2="258" y2="170" stroke="var(--diagram-line)" strokeWidth="1.5" />
        <circle cx="270" cy="186" r="16" fill="var(--diagram-cell)" stroke="var(--diagram-text)" strokeWidth="1.5" />
        <text x="270" y="190" textAnchor="middle" className="text-[12px] font-bold" fill="var(--diagram-text)">
          {tokens[2] ? truncateText(tokens[2], 2) : 's'}
        </text>
      </g>
    )
  }

  if (type === 'intervals') {
    const intervals = [
      { label: 'A', start: 50, end: 170, y: 92, fill: '#0ea5e9' },
      { label: 'B', start: 130, end: 280, y: 130, fill: '#f59e0b' },
      { label: 'C', start: 300, end: 380, y: 92, fill: '#10b981' },
    ]
    return (
      <g>
        <line x1="40" y1="182" x2="380" y2="182" stroke="var(--diagram-text)" strokeWidth="2" />
        <path d="M 380 182 L 372 177 L 372 187 Z" fill="var(--diagram-text)" />
        <text x="372" y="200" fill="var(--diagram-muted-text)" className="text-[10px] font-mono">time</text>
        {intervals.map((interval, index) => {
          const ivLabel = tokens[index] ? truncateText(tokens[index], 12) : `[${interval.label}]`
          return (
            <g key={index}>
              <rect x={interval.start} y={interval.y} width={interval.end - interval.start} height="20" rx="4" fill={interval.fill} fillOpacity="0.85" stroke="var(--diagram-text)" strokeWidth="1" />
              <text x={(interval.start + interval.end) / 2} y={interval.y + 14} textAnchor="middle" fill="white" className="text-[10px] font-bold">
                {ivLabel}
              </text>
              <line x1={interval.start} y1={interval.y + 20} x2={interval.start} y2="182" stroke="var(--diagram-soft-line)" strokeWidth="1.5" strokeDasharray="3 3" />
              <line x1={interval.end} y1={interval.y + 20} x2={interval.end} y2="182" stroke="var(--diagram-soft-line)" strokeWidth="1.5" strokeDasharray="3 3" />
            </g>
          )
        })}
        <rect x="130" y="84" width="40" height="76" fill="var(--diagram-tree-active)" fillOpacity="0.3" stroke="#e11d48" strokeWidth="1.5" strokeDasharray="4 2" />
        <text x="150" y="74" textAnchor="middle" fill="#e11d48" className="text-[9px] font-bold uppercase tracking-wider">Overlap</text>
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
