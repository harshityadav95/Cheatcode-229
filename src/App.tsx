import { useEffect, useMemo, useState } from 'react'
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Code2,
  Copy,
  ExternalLink,
  GitBranch,
  ListFilter,
  Menu,
  Moon,
  Network,
  NotebookPen,
  Search,
  Sparkles,
  Sun,
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

const difficulties: DifficultyFilter[] = ['All', 'Easy', 'Medium', 'Hard']
const notesStoragePrefix = 'cheatcode-229:notes:'
const themeStorageKey = 'cheatcode-229:theme'

function hashSlug() {
  const match = window.location.hash.match(/^#\/problems\/(.+)$/)
  return match?.[1] ?? problems[0].slug
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
  const [activeSlug, setActiveSlug] = useState(hashSlug)
  const [query, setQuery] = useState('')
  const [pattern, setPattern] = useState('All')
  const [difficulty, setDifficulty] = useState<DifficultyFilter>('All')
  const [notesBySlug, setNotesBySlug] = useState<Record<string, string>>(loadStoredNotes)
  const [theme, setTheme] = useState<ThemeMode>(loadStoredTheme)

  useEffect(() => {
    const onHashChange = () => setActiveSlug(hashSlug())
    window.addEventListener('hashchange', onHashChange)
    if (!window.location.hash) {
      window.history.replaceState(null, '', `#/problems/${problems[0].slug}`)
    }
    return () => window.removeEventListener('hashchange', onHashChange)
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

  const activeProblem = useMemo(
    () => problems.find((problem) => problem.slug === activeSlug) ?? problems[0],
    [activeSlug],
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

  const currentIndex = problems.findIndex((problem) => problem.slug === activeProblem.slug)
  const previousProblem = problems[Math.max(0, currentIndex - 1)]
  const nextProblem = problems[Math.min(problems.length - 1, currentIndex + 1)]
  const completion = Math.max(1, Math.round((activeProblem.id / problems.length) * 100))

  const openProblem = (problem: Problem) => {
    window.location.hash = `/problems/${problem.slug}`
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
                <ProblemBrowser
                  activeSlug={activeProblem.slug}
                  problems={filteredProblems}
                  query={query}
                  pattern={pattern}
                  difficulty={difficulty}
                  onQueryChange={setQuery}
                  onPatternChange={setPattern}
                  onDifficultyChange={setDifficulty}
                  onOpenProblem={openProblem}
                />
              </SheetContent>
            </Sheet>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <Code2 className="size-5 text-cyan-700 dark:text-cyan-300" />
                <h1 className="truncate text-lg font-semibold tracking-normal">Cheatcode 229</h1>
                <Badge variant="secondary" className="hidden sm:inline-flex">
                  DSA 2026
                </Badge>
              </div>
              <p className="truncate text-sm text-slate-600 dark:text-slate-400">
                229 LeetCode-style explanations, diagrams, Python, and Go solution files
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

        <div className="mx-auto grid max-w-[1500px] grid-cols-1 lg:grid-cols-[380px_minmax(0,1fr)]">
          <aside className="hidden border-r border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 lg:block">
            <div className="sticky top-[65px] h-[calc(100vh-65px)]">
              <ProblemBrowser
                activeSlug={activeProblem.slug}
                problems={filteredProblems}
                query={query}
                pattern={pattern}
                difficulty={difficulty}
                onQueryChange={setQuery}
                onPatternChange={setPattern}
                onDifficultyChange={setDifficulty}
                onOpenProblem={openProblem}
              />
            </div>
          </aside>

          <section className="min-w-0 px-4 py-5 sm:px-6 lg:px-8">
            <ProblemHeader
              problem={activeProblem}
              completion={completion}
              previousProblem={previousProblem}
              nextProblem={nextProblem}
              onOpenProblem={openProblem}
            />

            <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_420px]">
              <div className="space-y-5">
                <Card className="rounded-lg border-slate-200 shadow-sm dark:border-slate-800">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base">
                      <BookOpen className="size-4 text-emerald-700 dark:text-emerald-300" />
                      Problem Statement
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="leading-7 text-slate-700 dark:text-slate-300">{activeProblem.prompt}</p>
                    <ReferenceLinks problem={activeProblem} />
                    <ExampleBlock problem={activeProblem} />
                    <div className="grid gap-3 sm:grid-cols-2">
                      <InfoPill label="Time" value={activeProblem.time} />
                      <InfoPill label="Space" value={activeProblem.space} />
                    </div>
                  </CardContent>
                </Card>

                <Card className="rounded-lg border-slate-200 shadow-sm dark:border-slate-800">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base">
                      <Sparkles className="size-4 text-amber-700 dark:text-amber-300" />
                      Thinking and Logic
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="multiple" defaultValue={['intuition', 'optimized']} className="w-full">
                      <AccordionItem value="intuition">
                        <AccordionTrigger>Intuition</AccordionTrigger>
                        <AccordionContent>{activeProblem.intuition}</AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="brute">
                        <AccordionTrigger>Brute force baseline</AccordionTrigger>
                        <AccordionContent>{activeProblem.brute}</AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="optimized">
                        <AccordionTrigger>Optimized approach</AccordionTrigger>
                        <AccordionContent>{activeProblem.optimized}</AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="proof">
                        <AccordionTrigger>Invariant and proof sketch</AccordionTrigger>
                        <AccordionContent className="space-y-3">
                          <p>{activeProblem.invariant}</p>
                          <p>{activeProblem.proof}</p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>

                <SolutionTabs problem={activeProblem} />
                <NotesCard value={noteText} onChange={updateNote} />
              </div>

              <div className="space-y-5">
                <Card className="rounded-lg border-slate-200 shadow-sm dark:border-slate-800">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base">
                      <Network className="size-4 text-cyan-700 dark:text-cyan-300" />
                      Reference Diagram
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ConceptDiagram problem={activeProblem} />
                  </CardContent>
                </Card>

                <Card className="rounded-lg border-slate-200 shadow-sm dark:border-slate-800">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base">
                      <ListFilter className="size-4 text-violet-700 dark:text-violet-300" />
                      Edge Checklist
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="text-sm font-semibold">Clarify before coding</h3>
                      <ul className="mt-2 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                        {activeProblem.clarify.map((item) => (
                          <li key={item} className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 dark:border-slate-800 dark:bg-slate-900">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {activeProblem.edgeChecklist && (
                      <>
                        <Separator />
                        <div>
                          <h3 className="text-sm font-semibold">Edge cases</h3>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {activeProblem.edgeChecklist.split(';').map((item) => (
                              <Badge key={item.trim()} variant="outline" className="bg-white dark:bg-slate-900">
                                {item.trim()}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                    <Separator />
                    <div>
                      <h3 className="text-sm font-semibold">Common mistakes</h3>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700 dark:text-slate-300">
                        {activeProblem.pitfalls.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    {activeProblem.implementationCheckpoints.length > 0 && (
                      <>
                        <Separator />
                        <div>
                          <h3 className="text-sm font-semibold">Implementation checkpoints</h3>
                          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700 dark:text-slate-300">
                            {activeProblem.implementationCheckpoints.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </>
                    )}
                    <Separator />
                    <div>
                      <h3 className="text-sm font-semibold">Follow-up drills</h3>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700 dark:text-slate-300">
                        {activeProblem.drills.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    {activeProblem.followUps.length > 0 && (
                      <>
                        <Separator />
                        <div>
                          <h3 className="text-sm font-semibold">Follow-up questions</h3>
                          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700 dark:text-slate-300">
                            {activeProblem.followUps.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </div>
      </main>
    </TooltipProvider>
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
    <Card className="rounded-lg border-slate-200 shadow-sm dark:border-slate-800">
      <CardContent className="p-4 sm:p-5">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
          <div className="min-w-0 space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-950">Problem {problem.id}/229</Badge>
              <Badge variant="outline">LC {problem.leetcode}</Badge>
              <Badge variant="secondary">{problem.pattern}</Badge>
              <Badge variant={problem.difficulty === 'Hard' ? 'destructive' : 'outline'}>{problem.difficulty}</Badge>
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-normal text-slate-950 dark:text-slate-100 sm:text-3xl">
                {problem.title}
              </h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-400">
                Deep tutorial page with sample I/O, thinking steps, proof, unique diagram, and standalone Python/Go code.
              </p>
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
                Open LC {problem.leetcode}
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
        <div className="mt-4 grid gap-2 sm:grid-cols-[1fr_auto] sm:items-center">
          <Progress value={completion} className="h-2" />
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{completion}% through sheet</span>
        </div>
      </CardContent>
    </Card>
  )
}

function getLeetCodeReference(problem: Problem) {
  return problem.references.find((reference) => reference.kind === 'problem') ?? problem.references[0]
}

function ExampleBlock({ problem }: { problem: Problem }) {
  return (
    <div className="grid gap-3 rounded-lg border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900 sm:grid-cols-2">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Sample input</p>
        <pre className="mt-2 overflow-x-auto rounded-md bg-slate-950 p-3 text-sm text-slate-50">
          <code>{problem.example.input}</code>
        </pre>
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Sample output</p>
        <pre className="mt-2 overflow-x-auto rounded-md bg-emerald-950 p-3 text-sm text-emerald-50">
          <code>{problem.example.output}</code>
        </pre>
      </div>
      <p className="text-sm leading-6 text-slate-600 dark:text-slate-300 sm:col-span-2">{problem.example.why}</p>
    </div>
  )
}

function ReferenceLinks({ problem }: { problem: Problem }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-900">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">References</p>
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
    </div>
  )
}

function InfoPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-900">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">{label}</p>
      <p className="mt-1 font-mono text-sm text-slate-950 dark:text-slate-100">{value}</p>
    </div>
  )
}

function SolutionTabs({ problem }: { problem: Problem }) {
  return (
    <Card className="rounded-lg border-slate-200 shadow-sm dark:border-slate-800">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <Code2 className="size-4 text-slate-800 dark:text-slate-200" />
          Solution Code
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="python">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="python">Python</TabsTrigger>
            <TabsTrigger value="go">Go</TabsTrigger>
          </TabsList>
          <TabsContent value="python" className="mt-4">
            <CodeBlock language="python" code={problem.pythonCode} />
          </TabsContent>
          <TabsContent value="go" className="mt-4">
            <CodeBlock language="go" code={problem.goCode} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

function NotesCard({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <Card className="rounded-lg border-slate-200 shadow-sm dark:border-slate-800">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <NotebookPen className="size-4 text-sky-700 dark:text-sky-300" />
          Notes
        </CardTitle>
      </CardHeader>
      <CardContent>
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
