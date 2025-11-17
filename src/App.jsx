import { Routes, Route, NavLink } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Dashboard from './components/Dashboard'
import Patients from './components/Patients'
import Appointments from './components/Appointments'
import Billing from './components/Billing'
import Inpatient from './components/Inpatient'
import Pharmacy from './components/Pharmacy'
import Laboratory from './components/Laboratory'
import Mobile from './components/Mobile'

function Container({ children }) {
  return (
    <div className="pl-72 pt-16 min-h-screen bg-gradient-to-br from-slate-50 to-teal-50 dark:from-slate-950 dark:to-slate-900">
      <div className="p-6">
        {children}
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div>
      <Sidebar />
      <Topbar />
      <Container>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/inpatient" element={<Inpatient />} />
          <Route path="/pharmacy" element={<Pharmacy />} />
          <Route path="/laboratory" element={<Laboratory />} />
          <Route path="/mobile" element={<Mobile />} />
        </Routes>
      </Container>
    </div>
  )
}
