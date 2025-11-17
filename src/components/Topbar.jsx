import { useState } from 'react'
import { Search, Bell, Moon, Sun, UserRound } from 'lucide-react'

export default function Topbar() {
  const [dark, setDark] = useState(false)

  const toggleTheme = () => {
    setDark((d) => !d)
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark')
    }
  }

  return (
    <header className="fixed left-72 right-0 top-0 h-16 z-30 bg-white/70 dark:bg-slate-950/60 backdrop-blur-xl border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="h-full px-6 flex items-center justify-between">
        <div className="relative w-full max-w-xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input
            placeholder="Smart Search: patient, MRN, appointment, order..."
            className="w-full h-10 pl-10 pr-4 rounded-lg bg-slate-100/80 dark:bg-slate-900/70 text-slate-900 dark:text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <div className="flex items-center gap-3">
          <button onClick={toggleTheme} className="h-10 w-10 grid place-items-center rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300">
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button className="relative h-10 w-10 grid place-items-center rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-5 min-w-[20px] px-1 rounded-full bg-rose-500 text-white text-[10px] font-semibold grid place-items-center">7</span>
          </button>
          <div className="flex items-center gap-2 pl-3 border-l border-slate-200/60 dark:border-slate-800/60">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-400 to-teal-600" />
            <div className="leading-tight">
              <p className="text-sm font-medium text-slate-900 dark:text-slate-100">Dr. Morgan</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Cardiology</p>
            </div>
            <UserRound className="h-4 w-4 text-slate-400" />
          </div>
        </div>
      </div>
    </header>
  )
}
