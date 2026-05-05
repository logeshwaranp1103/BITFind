import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Lock, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import './Login.css'

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!email.endsWith('@bitsathy.ac.in')) {
      setError('Please use your institutional email (@bitsathy.ac.in)')
      return
    }

    setError('')
    // Simulate login
    onLogin()
    navigate('/dashboard')
  }


  return (
    <div className="login-page">
      <div className="login-background">
        <div className="blur-circle circle-1"></div>
        <div className="blur-circle circle-2"></div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="login-container glass-card"
      >
        <div className="login-header">
          <div className="login-logo">
            <div className="logo-spark"></div>
          </div>
          <h1>Welcome Back</h1>
          <p>Sign in to BIT Finder</p>
        </div>

        {error && <div className="login-error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="login-form">

          <div className="input-group">
            <label><User size={16} /> Email Address</label>
            <input 
              type="email" 
              placeholder="name@bitsathy.ac.in" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>

          <div className="input-group">
            <label><Lock size={16} /> Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <div className="login-options">
            <label className="checkbox-container">
              <input type="checkbox" />
              <span className="checkmark"></span>
              Remember me
            </label>
            <a href="#" className="forgot-password">Forgot password?</a>
          </div>

          <Button type="submit" variant="primary" className="login-btn">
            Sign In <ArrowRight size={18} />
          </Button>
        </form>

        <div className="login-footer">
          <p>Don't have an account? <a href="#">Create one</a></p>
        </div>
      </motion.div>
    </div>
  )
}

export default Login
