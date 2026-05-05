import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import ItemCard from '../components/ItemCard'
import Button from '../components/Button'
import { Plus, Filter, ArrowUpRight, Grid, List } from 'lucide-react'
import './Dashboard.css'

const Dashboard = ({ onLogout }) => {
  const [viewMode, setViewMode] = useState('grid')
  
  const sampleItems = [
    {
      id: 1,
      title: 'iPhone 13 Pro',
      type: 'lost',
      location: 'Main Library, 2nd Floor',
      time: '2 hours ago',
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 2,
      title: 'Leather Wallet',
      type: 'found',
      location: 'Campus Cafeteria',
      time: '5 hours ago',
      category: 'Accessories',
      image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 3,
      title: 'Chemistry Lab Coat',
      type: 'lost',
      location: 'Block C, Room 302',
      time: '1 day ago',
      category: 'Clothing',
      image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 4,
      title: 'Car Keys (Tesla)',
      type: 'found',
      location: 'Parking Lot A',
      time: '3 hours ago',
      category: 'Keys',
      image: 'https://images.unsplash.com/photo-1617704548623-340376564e68?auto=format&fit=crop&q=80&w=400'
    }
  ]

  return (
    <div className="layout-with-sidebar">
      <Sidebar onLogout={onLogout} />
      <main className="main-content">
        <header className="page-header">
          <div className="header-text">
            <h1>Campus Overview</h1>
            <p>Welcome back! Here's what's happening around BIT.</p>
          </div>
          <div className="header-actions">
            <Button variant="ghost"><Filter size={18} /> Filter</Button>
            <Button variant="primary"><Plus size={18} /> Post New</Button>
          </div>
        </header>

        <section className="stats-grid">
          <div className="stat-card glass-card">
            <div className="stat-icon lost"><ArrowUpRight size={20} /></div>
            <div className="stat-info">
              <h3>12</h3>
              <p>Total Items Lost</p>
            </div>
          </div>
          <div className="stat-card glass-card">
            <div className="stat-icon found"><Plus size={20} /></div>
            <div className="stat-info">
              <h3>8</h3>
              <p>Total Items Found</p>
            </div>
          </div>
        </section>

        <section className="recent-activity">
          <div className="section-header">
            <h2>Recent Activity</h2>
            <div className="view-toggle">
              <button 
                className={`icon-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
              >
                <Grid size={20} />
              </button>
              <button 
                className={`icon-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
              >
                <List size={20} />
              </button>
            </div>
          </div>
          <div className={`items-grid ${viewMode === 'list' ? 'list-view' : ''}`}>
            {sampleItems.map(item => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default Dashboard
