import { NavLink } from 'react-router-dom'
import { LayoutDashboard, Users, CalendarDays, Receipt, Bed, Pill, FlaskConical, Smartphone, Settings } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/patients', label: 'Patient Records', icon: Users },
  { to: '/appointments', label: 'Appointments', icon: CalendarDays },
  { to: '/billing', label: 'Billing', icon: Receipt },
  { to: '/inpatient', label: 'Inpatient', icon: Bed },
  { to: '/pharmacy', label: 'Pharmacy', icon: Pill },
  { to: '/laboratory', label: 'Laboratory', icon: FlaskConical },
  { to: '/mobile', label: 'Mobile View', icon: Smartphone },
]

export default function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-40 w-72 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-r border-slate-200/60 dark:border-slate-800/60">
      <div className="h-16 flex items-center px-5 border-b border-slate-200/60 dark:border-slate-800/60">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-teal-400 to-blue-600" />
          <div>
            <p className="text-slate-900 dark:text-slate-100 font-semibold leading-tight">Aegis Health</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Hospital OS</p>
          </div>
        </div>
      </div>
      <nav className="px-3 py-4 space-y-1 overflow-y-auto h-[calc(100vh-4rem)]">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-teal-50 text-teal-700 dark:bg-slate-800/80 dark:text-teal-300'
                  : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900'
              }`
            }
          >
            <Icon className="h-5 w-5" />
            <span>{label}</span>
          </NavLink>
        ))}
        <div className="pt-4 mt-4 border-t border-slate-200/60 dark:border-slate-800/60">
          <NavLink
            to="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900"
          >
            <Settings className="h-5 w-5" />
            Settings
          </NavLink>
        </div>
      </nav>
    </aside>
  )
}
