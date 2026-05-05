import React from 'react'
import { motion } from 'framer-motion'
import './Splash.css'

const Splash = () => {
  return (
    <div className="splash-screen">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="splash-content"
      >
        <div className="logo-container">
          <div className="logo-glow"></div>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="brand-name"
          >
            BIT FINDER
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="tagline"
          >
            THE LUMINESCENT GUARDIAN
          </motion.p>
        </div>
        <motion.div 
          className="loading-bar-container"
          initial={{ width: 0 }}
          animate={{ width: 240 }}
          transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
        >
          <div className="loading-bar"></div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Splash
