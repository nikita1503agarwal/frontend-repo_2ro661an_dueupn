import { CalendarDays, AlertTriangle } from 'lucide-react'

export default function Appointments() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Appointments & Scheduling</h2>
        <div className="text-xs text-slate-500">Multi-doctor calendar</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 p-4">
          <div className="flex items-center gap-2 mb-3 text-slate-600 dark:text-slate-300">
            <CalendarDays className="h-4 w-4" /> Week View
          </div>
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 7 }).map((_, d) => (
              <div key={d} className="rounded-lg bg-slate-50 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800/60 h-64 p-2">
                <div className="text-xs text-slate-500 mb-1">{['Mon','Tue','Wed','Thu','Fri','Sat','Sun'][d]}</div>
                <div className="space-y-2">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="p-2 rounded bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-200 text-xs">Dr. Lee · 10:{i}0 · Patel</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 p-4">
          <div className="text-sm font-semibold mb-3">Conflicts & Alerts</div>
          <div className="space-y-2">
            {[1,2].map((i) => (
              <div key={i} className="p-2 rounded bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-200 text-sm flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" /> Overlap detected for Dr. Rao at 11:00
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
