import { Mic, ScanSearch, User } from 'lucide-react'

export default function Mobile() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Mobile Quick Tools</h2>
        <div className="text-xs text-slate-500">Mini dashboards</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 p-4">
          <div className="text-sm font-semibold mb-3">Quick Patient Lookup</div>
          <div className="flex gap-2">
            <input placeholder="Name / MRN" className="flex-1 h-10 px-3 rounded bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none" />
            <button className="px-3 rounded bg-teal-600 text-white">Find</button>
          </div>
        </div>

        <div className="rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 p-4">
          <div className="text-sm font-semibold mb-3">Voice-Friendly</div>
          <button className="w-full h-10 inline-flex items-center justify-center gap-2 rounded bg-teal-600 text-white">
            <Mic className="h-4 w-4" /> Start Dictation
          </button>
        </div>

        <div className="rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 p-4">
          <div className="text-sm font-semibold mb-3">Scan ID</div>
          <button className="w-full h-10 inline-flex items-center justify-center gap-2 rounded bg-blue-600 text-white">
            <ScanSearch className="h-4 w-4" /> Open Scanner
          </button>
        </div>
      </div>
    </div>
  )
}
