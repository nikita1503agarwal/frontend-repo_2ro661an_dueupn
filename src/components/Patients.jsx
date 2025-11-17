import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs'
import { User, HeartPulse, FlaskConical, Pill, FileText } from 'lucide-react'

function Card({ title, children }) {
  return (
    <div className="rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 p-4">
      <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-3">{title}</h3>
      {children}
    </div>
  )
}

export default function Patients() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Patient Records</h2>
        <div className="text-xs text-slate-500">EMR/EHR</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card title="Patient Profile">
          <div className="flex items-start gap-4">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-cyan-400 to-teal-600" />
            <div>
              <p className="font-medium text-slate-900 dark:text-slate-100">Riya Patel</p>
              <p className="text-xs text-slate-500">MRN: 00291823 · 34F · A+ · Asthma</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {['Fall Risk', 'Allergy: Penicillin', 'NPO'].map(t => (
                  <span key={t} className="text-[11px] px-2 py-1 rounded bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </Card>

        <Card title="Vitals Timeline">
          <div className="grid grid-cols-6 gap-2">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="h-16 rounded-md bg-gradient-to-t from-teal-500/30 to-blue-400/30" />
            ))}
          </div>
        </Card>

        <Card title="Lab Results">
          <div className="grid grid-cols-2 gap-2 text-sm">
            {[
              ['CBC', 'Normal'],
              ['CMP', 'K+ 5.2 ↑'],
              ['CRP', '2.4'],
              ['D-Dimer', '0.3'],
            ].map(([k,v]) => (
              <div key={k} className="p-2 rounded bg-slate-50 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between">
                <span className="text-slate-600 dark:text-slate-300">{k}</span>
                <span className="font-medium text-slate-900 dark:text-slate-100">{v}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card title="Medication Chart">
          <div className="space-y-2 text-sm">
            {[
              ['Heparin', '5000u SC q8h', 'Due 14:00'],
              ['Paracetamol', '1g PO q6h PRN', 'Given 10:30'],
              ['Salbutamol', 'Nebulization q4h', 'Due 12:00'],
            ].map(([drug, dose, status]) => (
              <div key={drug} className="p-2 rounded bg-slate-50 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between">
                <div>
                  <p className="font-medium text-slate-900 dark:text-slate-100">{drug}</p>
                  <p className="text-xs text-slate-500">{dose}</p>
                </div>
                <span className="text-xs px-2 py-1 rounded bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-200">{status}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Clinical Notes">
          <div className="space-y-2 text-sm">
            {[
              ['11:05', 'Shortness of breath improved post-nebulization.'],
              ['09:40', 'Chest X-ray pending. Oxygen saturation stable on RA.'],
              ['08:15', 'Complaints of mild headache, acetaminophen administered.'],
            ].map(([time, note]) => (
              <div key={time} className="p-2 rounded bg-slate-50 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800/60">
                <p className="text-xs text-slate-500">{time}</p>
                <p className="text-slate-900 dark:text-slate-100">{note}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card title="Imaging Preview">
        <div className="h-56 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 text-slate-200 grid place-items-center">
          CT Chest — Axial
        </div>
      </Card>
    </div>
  )
}
