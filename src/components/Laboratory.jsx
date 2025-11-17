export default function Laboratory() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Laboratory</h2>
        <div className="text-xs text-slate-500">Orders & Results</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 p-4">
          <div className="text-sm font-semibold mb-3">Test Orders</div>
          <div className="space-y-2 text-sm">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="p-2 rounded bg-slate-50 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between">
                <span className="text-slate-600">ORD-{5100 + i} · CBC</span>
                <span className="text-xs px-2 py-1 rounded bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200">Pending</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 p-4">
          <div className="text-sm font-semibold mb-3">Result Validation</div>
          <div className="space-y-2 text-sm">
            {['CBC','CMP','CRP','Troponin'].map((t, i) => (
              <div key={t} className="p-2 rounded bg-slate-50 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between">
                <span className="text-slate-600">{t} · Patel</span>
                <button className="text-xs px-2 py-1 rounded bg-teal-600 text-white">Validate</button>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 p-4">
          <div className="text-sm font-semibold mb-3">Sample Tracking</div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {['Collected','In Transit','Processing','Ready'].map((s, i) => (
              <div key={s} className={`p-2 rounded border ${i <= 2 ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200 border-blue-300/40 dark:border-blue-800/60' : 'bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-200 border-teal-300/40 dark:border-teal-800/60'}`}>{s}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
