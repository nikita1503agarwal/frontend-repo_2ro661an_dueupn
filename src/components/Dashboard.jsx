import { HeartPulse, Activity, BedDouble, CalendarClock, AlertTriangle, Stethoscope, Plus, Syringe, FileBarChart, ThermometerSun, Ambulance } from 'lucide-react'
import HeroSpline from './HeroSpline'

function StatCard({ icon: Icon, label, value, trend = '+0.0%', tone = 'teal' }) {
  const toneClasses = {
    teal: 'bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300',
    blue: 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
    rose: 'bg-rose-50 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300',
    amber: 'bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
  }
  return (
    <div className="p-4 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-wider text-slate-500">{label}</p>
          <p className="mt-1 text-2xl font-semibold text-slate-900 dark:text-slate-100">{value}</p>
          <p className={`mt-2 inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded ${toneClasses[tone]}`}>
            <Activity className="h-3.5 w-3.5" /> {trend}
          </p>
        </div>
        <div className="h-12 w-12 rounded-lg grid place-items-center bg-slate-100 dark:bg-slate-800">
          <Icon className="h-6 w-6 text-teal-600 dark:text-teal-300" />
        </div>
      </div>
    </div>
  )
}

function Section({ title, action, children }) {
  return (
    <section>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
        {action}
      </div>
      <div className="rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 p-3">
        {children}
      </div>
    </section>
  )
}

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <HeroSpline />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={HeartPulse} label="Real-time Patients" value="128" trend="+4.1%" tone="teal" />
        <StatCard icon={BedDouble} label="Bed Occupancy" value="86%" trend="-2.3%" tone="blue" />
        <StatCard icon={CalendarClock} label="Upcoming Appointments" value="42" trend="+1.2%" tone="amber" />
        <StatCard icon={AlertTriangle} label="Critical Alerts" value="5" trend="+0.7%" tone="rose" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Section title="Live Patient Metrics" action={<button className="text-xs px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">View All</button>}>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[['Avg HR', '78 bpm'], ['SpO₂', '96%'], ['Temp', '36.9°C'], ['BP', '122/78'], ['Resp', '16 rpm'], ['Glucose', '104 mg/dL']].map(([k,v]) => (
              <div key={k} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800/60">
                <p className="text-[11px] text-slate-500">{k}</p>
                <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">{v}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Bed Occupancy" action={<button className="text-xs px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">Capacity</button>}>
          <div className="grid grid-cols-4 gap-2">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className={`h-12 rounded-md ${i % 6 === 0 ? 'bg-rose-300/60' : i % 3 === 0 ? 'bg-teal-300/60' : 'bg-blue-300/60'}`} />
            ))}
          </div>
        </Section>

        <Section title="Alerts" action={<button className="text-xs px-3 py-1 rounded-lg bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300">Acknowledge</button>}>
          <div className="space-y-2">
            {[
              { icon: ThermometerSun, label: 'High Temp', detail: 'Ward C · R. Singh · 39.2°C' },
              { icon: Syringe, label: 'Missed Dose', detail: 'Ward A · M. Alvarez · Heparin' },
              { icon: FileBarChart, label: 'Critical Lab', detail: 'ICU · L. Zhao · K+ 6.2 mmol/L' },
              { icon: Ambulance, label: 'Incoming ER', detail: 'ETA 6m · Polytrauma' },
            ].map(({ icon: Icon, label, detail }) => (
              <div key={label} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800/60 flex items-center gap-3">
                <div className="h-8 w-8 rounded-md grid place-items-center bg-slate-100 dark:bg-slate-800">
                  <Icon className="h-4 w-4 text-rose-600" />
                </div>
                <div className="leading-tight">
                  <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{label}</p>
                  <p className="text-xs text-slate-500">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <Section title="Quick Actions" action={null}>
        <div className="flex flex-wrap gap-2">
          {[
            ['New Patient', Plus],
            ['Start Consult', Stethoscope],
            ['Order Labs', FileBarChart],
            ['Prescribe', Syringe],
          ].map(([label, Icon]) => (
            <button key={label} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-teal-600 text-white text-sm font-medium hover:bg-teal-700">
              <Icon className="h-4 w-4" /> {label}
            </button>
          ))}
        </div>
      </Section>
    </div>
  )
}
