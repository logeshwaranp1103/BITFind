import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import ItemCard from '../components/ItemCard'
import { Search, SlidersHorizontal, Grid, List as ListIcon, Calendar, Tag } from 'lucide-react'
import './Browse.css'

const Browse = ({ onLogout }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [typeFilter, setTypeFilter] = useState('all')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [dateFilter, setDateFilter] = useState('')
  const [viewMode, setViewMode] = useState('grid')

  const items = [
    { id: 1, title: 'iPhone 13 Pro', type: 'lost', location: 'Main Library', time: '2026-04-16', category: 'Electronics', image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=400' },
    { id: 2, title: 'Leather Wallet', type: 'found', location: 'Cafeteria', time: '2026-04-16', category: 'Accessories', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400' },
    { id: 3, title: 'Chemistry Lab Coat', type: 'lost', location: 'Block C', time: '2026-04-15', category: 'Clothing', image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400' },
    { id: 5, title: 'Blue Backpack', type: 'lost', location: 'Football Ground', time: '2026-04-17', category: 'Accessories', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400' },
    { id: 6, title: 'Casio Watch', type: 'found', location: 'Lab 101', time: '2026-04-16', category: 'Electronics', image: 'https://images.unsplash.com/photo-1522312346375-d1ad5051639f?w=400' },
    { id: 7, title: 'Bentley Keychain', type: 'found', location: 'Admin Block', time: '2026-04-14', category: 'Keys', image: 'https://images.unsplash.com/photo-1544551761-12503632f05b?w=400' },
  ]

  const categories = ['Electronics', 'Accessories', 'Clothing', 'Keys', 'Documents', 'Others']

  const filteredItems = items.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = typeFilter === 'all' || item.type === typeFilter
    const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter
    const matchesDate = !dateFilter || item.time === dateFilter
    return matchesSearch && matchesType && matchesCategory && matchesDate
  })

  return (
    <div className="layout-with-sidebar">
      <Sidebar onLogout={onLogout} />
      <main className="main-content">
        <header className="page-header">
          <div className="header-text">
            <h1>Browse Items</h1>
            <p>Explore all reported items on campus.</p>
          </div>
        </header>

        <section className="search-and-filters">
          <div className="search-bar-container glass-card">
            <Search size={20} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search for items, brands, or locations..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="advanced-filters glass-card">
            <div className="filter-group">
              <label><SlidersHorizontal size={14} /> Type</label>
              <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
                <option value="all">All Types</option>
                <option value="lost">Lost</option>
                <option value="found">Found</option>
              </select>
            </div>

            <div className="filter-group">
              <label><Tag size={14} /> Category</label>
              <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
                <option value="all">All Categories</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label><Calendar size={14} /> Date</label>
              <input 
                type="date" 
                value={dateFilter} 
                onChange={(e) => setDateFilter(e.target.value)} 
              />
            </div>

            <button 
              className="reset-filters"
              onClick={() => {
                setTypeFilter('all');
                setCategoryFilter('all');
                setDateFilter('');
                setSearchQuery('');
              }}
            >
              Reset Filters
            </button>
          </div>

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
              <ListIcon size={20} />
            </button>
          </div>
        </section>

        <section className={`browse-grid ${viewMode === 'list' ? 'list-view' : ''}`}>
          {filteredItems.map(item => (
            <ItemCard key={item.id} item={item} />
          ))}
          {filteredItems.length === 0 && (
            <div className="no-results">
              <h3>No items found</h3>
              <p>Try adjusting your search or filters.</p>
            </div>
          )}
        </section>
      </main>
    </div>
  )
}

export default Browse
