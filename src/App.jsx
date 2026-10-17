import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Home, PlusCircle, BarChart2 } from 'lucide-react'
import Dashboard from './pages/Dashboard.jsx'
import ActivityLog from './pages/ActivityLog.jsx'
import Analytics from './pages/Analytics.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen">
        <nav className="w-60 bg-white border-r border-gray-200 p-4 flex flex-col gap-1">
          <h1 className="text-lg font-bold mb-4 px-2">Can You Make Green</h1>
          <Link to="/dashboard" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 text-sm font-medium"><Home className="w-4 h-4" />
            Dashboard
          </Link>
          <Link to="/activity-log" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 text-sm font-medium"><PlusCircle className="w-4 h-4" />
            Log Activity
          </Link>
          <Link to="/analytics" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 text-sm font-medium"><BarChart2 className="w-4 h-4" />
            Analytics
          </Link>
        </nav>
        <main className="flex-1 overflow-auto p-8">
          <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/activity-log" element={<ActivityLog />} />
        <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}