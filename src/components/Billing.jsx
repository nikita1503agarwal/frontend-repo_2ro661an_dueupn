export default function Billing() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Billing & Invoicing</h2>
        <div className="text-xs text-slate-500">Finance</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 p-4">
          <div className="text-sm font-semibold mb-3">Active Bills</div>
          <div className="space-y-2 text-sm">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="p-2 rounded bg-slate-50 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between">
                <span className="text-slate-600">INV-24-{1000 + i}</span>
                <span className="font-medium text-slate-900 dark:text-slate-100">${(250 + i * 42).toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 p-4">
          <div className="text-sm font-semibold mb-3">Payment History</div>
          <div className="space-y-2 text-sm">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="p-2 rounded bg-slate-50 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between">
                <span className="text-slate-600">RCPT-24-{2000 + i}</span>
                <span className="text-xs text-slate-500">Card</span>
                <span className="font-medium text-slate-900 dark:text-slate-100">${(180 + i * 35).toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 p-4">
          <div className="text-sm font-semibold mb-3">Insurance Status</div>
          <div className="space-y-2 text-sm">
            {['Approved','Pending','Rejected','Approved'].map((s, i) => (
              <div key={i} className="p-2 rounded bg-slate-50 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between">
                <span className="text-slate-600">Claim #{3100 + i}</span>
                <span className={`text-xs px-2 py-1 rounded ${s === 'Approved' ? 'bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-200' : s === 'Pending' ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200' : 'bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-200'}`}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 p-4">
        <div className="text-sm font-semibold mb-3">Itemized Service List</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
          {[
            ['Consultation', '$120'],
            ['CBC', '$35'],
            ['X-Ray Chest', '$80'],
            ['Nebulization', '$30'],
            ['IV Cannulation', '$25'],
            ['ECG', '$60'],
          ].map(([item, price]) => (
            <div key={item} className="p-2 rounded bg-slate-50 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between">
              <span className="text-slate-600">{item}</span>
              <span className="font-medium text-slate-900 dark:text-slate-100">{price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
