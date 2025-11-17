export default function Pharmacy() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Pharmacy</h2>
        <div className="text-xs text-slate-500">Inventory & Prescriptions</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 p-4">
          <div className="text-sm font-semibold mb-3">Drug Inventory</div>
          <div className="space-y-2 text-sm">
            {[
              ['Amoxicillin 500mg', '142'],
              ['Heparin 5000u/mL', '48'],
              ['Morphine 10mg/mL', '12'],
              ['Paracetamol 1g', '320'],
            ].map(([drug, qty]) => (
              <div key={drug} className="p-2 rounded bg-slate-50 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between">
                <span className="text-slate-600">{drug}</span>
                <span className={`text-xs px-2 py-1 rounded ${parseInt(qty) < 20 ? 'bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-200' : 'bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-200'}`}>{qty}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 p-4">
          <div className="text-sm font-semibold mb-3">Prescription Queue</div>
          <div className="space-y-2 text-sm">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="p-2 rounded bg-slate-50 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between">
                <span className="text-slate-600">RX-{4100 + i} · Patel</span>
                <button className="text-xs px-2 py-1 rounded bg-teal-600 text-white">Dispense</button>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 p-4">
          <div className="text-sm font-semibold mb-3">Stock Alerts</div>
          <div className="space-y-2 text-sm">
            {['Morphine 10mg/mL','Insulin 100u/mL'].map((d) => (
              <div key={d} className="p-2 rounded bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200">{d} running low</div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 p-4">
        <div className="text-sm font-semibold mb-3">Dispensing Workflow</div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-sm">
          {['Received','Verified','Prepared','Dispensed'].map((s, i) => (
            <div key={s} className={`p-2 rounded border ${i <= 1 ? 'bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-200 border-teal-300/40 dark:border-teal-800/60' : 'bg-slate-50 dark:bg-slate-950/40 border-slate-200/60 dark:border-slate-800/60'}`}>{s}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
