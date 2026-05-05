import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Browse from './pages/Browse'
import Profile from './pages/Profile'
import PostItem from './pages/PostItem'
import Splash from './pages/Splash'
import Navbar from './components/Navbar'

function App() {
  const [loading, setLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true'
  })

  useEffect(() => {
    // Simulate splash screen
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  const handleLogin = () => {
    setIsLoggedIn(true)
    localStorage.setItem('isLoggedIn', 'true')
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    localStorage.removeItem('isLoggedIn')
  }

  if (loading) {
    return <Splash />
  }

  return (
    <Router>
      <div className="app-container">
        {isLoggedIn && <Navbar onLogout={handleLogout} />}
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route 
            path="/dashboard" 
            element={isLoggedIn ? <Dashboard onLogout={handleLogout} /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/browse" 
            element={isLoggedIn ? <Browse onLogout={handleLogout} /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/post" 
            element={isLoggedIn ? <PostItem onLogout={handleLogout} /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/profile" 
            element={isLoggedIn ? <Profile onLogout={handleLogout} /> : <Navigate to="/login" />} 
          />
          <Route path="/" element={<Navigate to={isLoggedIn ? "/dashboard" : "/login"} />} />
        </Routes>
      </div>
    </Router>
  )
}


export default App
