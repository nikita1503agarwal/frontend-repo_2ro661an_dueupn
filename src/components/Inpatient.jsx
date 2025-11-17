export default function Inpatient() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Inpatient Management</h2>
        <div className="text-xs text-slate-500">Wards & Beds</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 p-4">
          <div className="text-sm font-semibold mb-3">Ward Overview</div>
          <div className="grid grid-cols-3 gap-2">
            {['A','B','C','D','ICU','NICU'].map((w) => (
              <div key={w} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800/60">
                <p className="text-sm font-medium">Ward {w}</p>
                <p className="text-xs text-slate-500">{Math.floor(Math.random()*18)+12}/24 occupied</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 p-4 lg:col-span-2">
          <div className="text-sm font-semibold mb-3">Bed Map</div>
          <div className="grid grid-cols-8 gap-2">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className={`h-10 rounded ${i % 7 === 0 ? 'bg-rose-300/60' : i % 3 === 0 ? 'bg-teal-300/60' : 'bg-blue-300/60'}`} />
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 p-4">
          <div className="text-sm font-semibold mb-3">Nurse Assignments</div>
          <div className="space-y-2 text-sm">
            {['Ward A','Ward B','ICU','NICU'].map((w, i) => (
              <div key={w} className="p-2 rounded bg-slate-50 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between">
                <span className="text-slate-600">{w}</span>
                <span className="font-medium text-slate-900 dark:text-slate-100">Nurse {String.fromCharCode(65+i)} · Nurse {String.fromCharCode(70+i)}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 p-4">
          <div className="text-sm font-semibold mb-3">Care Plan</div>
          <div className="space-y-2 text-sm">
            {[
              ['Mobility', 'Assist with ambulation 2x/day'],
              ['Nutrition', 'High-protein diet'],
              ['Monitoring', 'Strict I/O, vitals q4h'],
            ].map(([k,v]) => (
              <div key={k} className="p-2 rounded bg-slate-50 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between">
                <span className="text-slate-600">{k}</span>
                <span className="font-medium text-slate-900 dark:text-slate-100">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
