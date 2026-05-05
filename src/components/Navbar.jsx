import { Link } from 'react-router-dom'
import { Bell, Search, Menu, X, ChevronDown, LogOut } from 'lucide-react'
import './Navbar.css'

const Navbar = ({ onLogout }) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <Link to="/dashboard" className="portal-branding">
            CLF Portal
          </Link>
        </div>

        <div className="nav-right">
          <div className="nav-actions">
            <button className="icon-btn search-btn"><Search size={20} /></button>
            <button className="icon-btn"><Bell size={20} /></button>
            <button className="icon-btn mobile-logout" onClick={onLogout} title="Logout">
              <LogOut size={20} />
            </button>
          </div>
          
          <Link to="/profile" className="user-profile">
            <div className="user-info">
              <span className="user-id">2025UAD1115</span>
              <span className="user-name">LOGESHWARAN P</span>
            </div>
            <div className="avatar-wrapper">
              <img 
                src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" 
                alt="User Avatar" 
                className="portal-avatar"
              />
            </div>
            <ChevronDown size={16} className="profile-arrow" />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
