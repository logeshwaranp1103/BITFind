import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, PlaySquare, BarChart2, PlusCircle, UserCircle, LogOut } from 'lucide-react'
import './Sidebar.css'

const Sidebar = ({ onLogout }) => {
  const location = useLocation()

  const links = [
    { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard size={24} /> },
    { name: 'Browse', path: '/browse', icon: <PlaySquare size={24} /> },
    { name: 'Post', path: '/post', icon: <PlusCircle size={24} /> },
    { name: 'Profile', path: '/profile', icon: <UserCircle size={24} /> },
  ]

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="pcdp-logo">
          <path d="M12 4a8 8 0 0 0-7.7 10.1c.3 1.1.2 2.3-.4 3.3a1 1 0 0 0 .1 1.2l1.6 1.6a1 1 0 0 0 1.2.1c1-.6 2.2-.7 3.3-.4A8 8 0 1 0 12 4Z"/>
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 9v1"/>
          <path d="M12 14v1"/>
          <path d="M9 12h1"/>
          <path d="M14 12h1"/>
          <path d="m14.1 9.9.7-.7"/>
          <path d="m9.2 14.8.7-.7"/>
          <path d="m9.9 9.9-.7-.7"/>
          <path d="m14.8 14.8-.7-.7"/>
        </svg>
      </div>
      
      <div className="sidebar-nav">
        {links.map((link) => (
          <Link 
            key={link.name} 
            to={link.path} 
            className={`sidebar-link ${location.pathname === link.path ? 'active' : ''}`}
          >
            <div className="link-icon">{link.icon}</div>
            <span className="link-label">{link.name}</span>
          </Link>
        ))}
      </div>

      <div className="sidebar-bottom">
        <button className="sidebar-link logout-btn" onClick={onLogout} title="Logout">
          <div className="link-icon"><LogOut size={24} /></div>
        </button>
      </div>
    </aside>
  )
}

export default Sidebar


