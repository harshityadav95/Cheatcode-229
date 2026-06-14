import { useMemo } from 'react'
import {
  ArrowRight,
  Brain,
  Layers,
  Shuffle,
  Network,
  Activity,
  GitBranch,
  Search,
  Zap,
  Code2,
  Sparkles,
  BookOpen,
  ArrowDown,
  GitMerge,
  HelpCircle,
  FileCode2,
  FolderOpen,
  PenTool,
  ShieldCheck,
  Building2,
  Library,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { type Problem } from '@/data/problems'

// Map pattern names to representative icons and color themes
const patternMetadata: Record<string, { icon: React.ComponentType<{ className?: string }>; color: string; desc: string }> = {
  "Array / String": { icon: Layers, color: "text-blue-500 bg-blue-500/10 border-blue-500/20", desc: "Linear scans, write pointers, and string manipulations." },
  "Two Pointers": { icon: Shuffle, color: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20", desc: "Iterate from boundaries inward or with different speeds." },
  "Sliding Window": { icon: BookOpen, color: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20", desc: "Maintain a subarray or substring window with variable bounds." },
  "Prefix / Scan": { icon: ArrowRight, color: "text-sky-500 bg-sky-500/10 border-sky-500/20", desc: "Precompute aggregates to answer range queries in O(1)." },
  "Hash Map / Set": { icon: Network, color: "text-teal-500 bg-teal-500/10 border-teal-500/20", desc: "Index counts, mappings, and unique element tracking." },
  "Stack": { icon: ArrowDown, color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20", desc: "LIFO structures for parsing, matching brackets, or backtracking." },
  "Monotonic Stack": { icon: ArrowDown, color: "text-green-500 bg-green-500/10 border-green-500/20", desc: "Keep stack elements ordered to find next greater/smaller values." },
  "Queue / Simulation": { icon: Activity, color: "text-amber-500 bg-amber-500/10 border-amber-500/20", desc: "FIFO processing and step-by-step game/process simulation." },
  "Linked List": { icon: GitBranch, color: "text-orange-500 bg-orange-500/10 border-orange-500/20", desc: "Pointer manipulation, reversals, cycle checks, and sorting." },
  "Tree DFS": { icon: Brain, color: "text-red-500 bg-red-500/10 border-red-500/20", desc: "Recursive depth-first traversals, path sums, and tree properties." },
  "Tree BFS": { icon: Brain, color: "text-rose-500 bg-rose-500/10 border-rose-500/20", desc: "Level-order traversal using queues to capture width properties." },
  "BST": { icon: Brain, color: "text-pink-500 bg-pink-500/10 border-pink-500/20", desc: "Exploit binary search tree sorting invariant for fast search/updates." },
  "Graph": { icon: Network, color: "text-fuchsia-500 bg-fuchsia-500/10 border-fuchsia-500/20", desc: "Adjacency traversals, cycles, topological sort, and components." },
  "Heap / Priority Queue": { icon: ListFilterIcon, color: "text-purple-500 bg-purple-500/10 border-purple-500/20", desc: "Dynamically track top K elements or next best candidates." },
  "Binary Search": { icon: Search, color: "text-violet-500 bg-violet-500/10 border-violet-500/20", desc: "Divide-and-conquer on sorted ranges or monotonic boundaries." },
  "Backtracking": { icon: GitMerge, color: "text-violet-600 bg-violet-600/10 border-violet-600/20", desc: "Recursive depth search with choice undoing to find all paths." },
  "DP 1D": { icon: Zap, color: "text-yellow-500 bg-yellow-500/10 border-yellow-500/20", desc: "Linear subproblem tables with optimized space-rolling." },
  "DP 2D / Kadane": { icon: Zap, color: "text-orange-600 bg-orange-600/10 border-orange-600/20", desc: "Grid-based decisions, subproblems, or maximum subarrays." },
  "Bit Manipulation": { icon: Code2, color: "text-slate-500 bg-slate-500/10 border-slate-500/20", desc: "XOR properties, masking, shifting, and bit counting." },
  "Math / Greedy": { icon: Sparkles, color: "text-lime-500 bg-lime-500/10 border-lime-500/20", desc: "Locally optimal choices and mathematical induction properties." },
  "Trie / Encoding": { icon: Code2, color: "text-emerald-600 bg-emerald-600/10 border-emerald-600/20", desc: "Prefix trees for fast string search and length-prefix encoding." },
  "Intervals": { icon: Layers, color: "text-cyan-600 bg-cyan-600/10 border-cyan-600/20", desc: "Sort by start/end points to merge or schedule overlapping times." },
}

// Fallback icon helper
function ListFilterIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 6h18" />
      <path d="M7 12h10" />
      <path d="M10 18h4" />
    </svg>
  )
}

interface LandingPageProps {
  problems: Problem[]
  patterns: readonly string[]
  onSelectPattern: (pattern: string) => void
  onBrowseAll: () => void
  onRandomProblem: () => void
  onOpenProblem: (problem: Problem) => void
  importedCount: number
  onLeetCodeClone: () => void
}

export function LandingPage({
  problems,
  patterns,
  onSelectPattern,
  onBrowseAll,
  onRandomProblem,
  onOpenProblem,
  importedCount,
  onLeetCodeClone,
}: LandingPageProps) {
  // Pre-calculate number of problems per pattern
  const patternCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    problems.forEach((p) => {
      counts[p.pattern] = (counts[p.pattern] || 0) + 1
    })
    return counts
  }, [problems])

  // Get a few iconic featured problems
  const featuredProblems = useMemo(() => {
    const ids = [1768, 11, 200, 72] // Merge Strings, Container, Number of Islands, Edit Distance
    return problems.filter((p) => ids.includes(p.leetcode))
  }, [problems])

  return (
    <div className="relative w-full overflow-hidden bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-20 left-1/4 -z-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl dark:bg-cyan-500/10" />
      <div className="absolute top-40 right-1/4 -z-10 h-80 w-80 rounded-full bg-violet-400/20 blur-3xl dark:bg-violet-500/10" />

      {/* Hero Section */}
      <section className="relative mx-auto max-w-[1400px] px-4 pt-16 pb-12 sm:px-6 lg:px-8 lg:pt-24 lg:pb-16">
        <div className="flex flex-col items-center text-center">
          <Badge className="mb-4 border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-600 dark:text-cyan-400">
            DSA Preparation 2026
          </Badge>
          <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            Crack Technical Interviews with{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-500 to-indigo-500 bg-clip-text text-transparent dark:from-cyan-400 dark:via-teal-400 dark:to-indigo-400">
              Cheatcode 229
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400 sm:text-xl">
            A comprehensive, visual study workspace featuring 229 curated LeetCode problems mapped across core patterns. Explore structure diagrams, proofs, and dual-language solutions.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="h-12 px-8 font-semibold bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg hover:from-cyan-600 hover:to-teal-600 hover:shadow-cyan-500/25 dark:from-cyan-600 dark:to-teal-600 dark:hover:from-cyan-500 dark:hover:to-teal-500 cursor-pointer"
              onClick={onBrowseAll}
            >
              <FolderOpen className="mr-2 size-5" />
              Explore Workspace
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-8 font-semibold border-slate-300 bg-white/50 text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-300 dark:hover:bg-slate-800 cursor-pointer"
              onClick={onRandomProblem}
            >
              <Shuffle className="mr-2 size-5" />
              Random Challenge
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-8 font-semibold border-slate-300 bg-white/50 text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-300 dark:hover:bg-slate-800 cursor-pointer"
              onClick={onLeetCodeClone}
              disabled={importedCount === 0}
            >
              <Library className="mr-2 size-5" />
              LeetCode Clone
            </Button>
          </div>

          {/* Quick Statistics Grid */}
          <div className="mt-16 grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { value: `${problems.length}`, label: "Curated Problems" },
              { value: `${patterns.length}`, label: "Algorithmic Patterns" },
              { value: "Go + Python", label: "Dual reference code" },
              { value: importedCount ? importedCount.toLocaleString() : "3,962", label: "Imported records" },
            ].map((stat, i) => (
              <Card key={i} className="border border-slate-200 bg-white/60 backdrop-blur-sm dark:border-slate-900 dark:bg-slate-950/60">
                <CardContent className="p-5">
                  <div className="text-3xl font-extrabold text-cyan-600 dark:text-cyan-400">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Pattern Explorer */}
      <section className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Algorithmic Patterns</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Select a pattern to load its corresponding workspace, code paradigms, and problem list.
            </p>
          </div>
          <Button variant="link" className="mt-4 p-0 font-semibold text-cyan-500 hover:text-cyan-600 md:mt-0 cursor-pointer" onClick={onBrowseAll}>
            View all problems <ArrowRight className="ml-1 size-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {patterns.map((patName) => {
            const meta = patternMetadata[patName] || { icon: HelpCircle, color: "text-slate-500 bg-slate-500/10 border-slate-500/20", desc: "Curated collection of interview problems." }
            const IconComponent = meta.icon
            const count = patternCounts[patName] || 0

            return (
              <Card
                key={patName}
                className="group relative flex flex-col justify-between border border-slate-200 bg-white hover:border-slate-300 hover:shadow-md dark:border-slate-900 dark:bg-slate-950 dark:hover:border-slate-800 transition-all duration-200 cursor-pointer"
                onClick={() => onSelectPattern(patName)}
              >
                <CardHeader className="p-5 pb-2">
                  <div className="flex items-center justify-between">
                    <div className={`flex size-10 items-center justify-center rounded-lg border ${meta.color}`}>
                      <IconComponent className="size-5" />
                    </div>
                    <Badge variant="secondary" className="bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-300">
                      {count} {count === 1 ? 'problem' : 'problems'}
                    </Badge>
                  </div>
                  <CardTitle className="mt-4 text-lg font-bold group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                    {patName}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-5 pt-0">
                  <CardDescription className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                    {meta.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="bg-slate-100/50 py-16 dark:bg-slate-900/20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">Standardized Learning Environment</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400">
              Four core assets accompany every single problem in the database.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: FileCode2,
                title: "Dual Go & Python Files",
                desc: "Every problem features clean, runnable solution code in Go and Python. Solutions include full type annotations and follow correct structural designs.",
                color: "text-blue-500",
              },
              {
                icon: Layers,
                title: "Structural Diagrams",
                desc: "Visualize variables, loops, arrays, lists, or trees. Detailed step-by-step layout notes explain how pointers move and invariants update.",
                color: "text-emerald-500",
              },
              {
                icon: ShieldCheck,
                title: "Invariants & Checkpoints",
                desc: "Learn why a solution is correct. Outlines the mathematical loop invariant, potential corner-case pitfalls, and pre-coding implementation checks.",
                color: "text-purple-500",
              },
              {
                icon: PenTool,
                title: "Local Workspace Notes",
                desc: "Write down notes, explanations, or code modifications directly. Notes are saved automatically to your browser storage, keeping your workspace synced.",
                color: "text-amber-500",
              },
            ].map((feature, i) => {
              const Icon = feature.icon
              return (
                <Card key={i} className="border border-slate-200 bg-white dark:border-slate-900 dark:bg-slate-950">
                  <CardContent className="p-6">
                    <div className={`flex size-12 items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-900 ${feature.color}`}>
                      <Icon className="size-6" />
                    </div>
                    <h3 className="mt-4 text-lg font-bold">{feature.title}</h3>
                    <p className="mt-2 text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                      {feature.desc}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured / Popular Problems */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">Featured Challenges</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">
            Get started immediately with some of the most frequently asked technical interview questions.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featuredProblems.map((problem) => {
            const diffColor =
              problem.difficulty === "Easy"
                ? "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20"
                : problem.difficulty === "Medium"
                ? "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20"
                : "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20"

            return (
              <Card key={problem.id} className="flex flex-col justify-between border border-slate-200 bg-white dark:border-slate-900 dark:bg-slate-950">
                <CardHeader className="p-5 pb-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-400">
                      LC {problem.leetcode}
                    </span>
                    <Badge variant="outline" className={`px-2 py-0.5 text-xs font-semibold ${diffColor}`}>
                      {problem.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="mt-3 text-base font-bold line-clamp-1">
                    {problem.title}
                  </CardTitle>
                  <CardDescription className="text-slate-400 text-xs font-medium uppercase tracking-wider">
                    {problem.pattern}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-5 pt-0">
                  <p className="text-slate-600 dark:text-slate-400 text-xs line-clamp-2 leading-relaxed">
                    {problem.prompt}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1">
                    {problem.companies.slice(0, 3).map((company) => (
                      <Badge key={company} variant="secondary" className="bg-slate-50 text-slate-600 border border-slate-200 text-[10px] dark:bg-slate-900 dark:text-slate-400 dark:border-slate-800">
                        <Building2 className="mr-0.5 size-2.5" />
                        {company}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    className="mt-5 w-full bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-800 dark:hover:bg-slate-700 text-xs h-9 cursor-pointer"
                    onClick={() => onOpenProblem(problem)}
                  >
                    Solve Challenge
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-[1400px] px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-600 to-indigo-700 px-6 py-12 shadow-xl sm:px-12 sm:py-20 text-center text-white">
          <div className="absolute inset-0 -z-10 bg-slate-950/20" />
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Ready to master your algorithmic skills?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-cyan-100">
            Open the visual catalog and work through 229 core interview solutions with structural diagrams.
          </p>
          <div className="mt-8 flex justify-center">
            <Button
              size="lg"
              className="bg-white text-slate-950 hover:bg-cyan-50 font-bold h-12 px-8 shadow-md hover:shadow-lg transition-all cursor-pointer"
              onClick={onBrowseAll}
            >
              Get Started Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
