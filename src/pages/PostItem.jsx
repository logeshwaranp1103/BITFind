import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Button from '../components/Button'
import { Camera, MapPin, Tag, Calendar, AlertCircle } from 'lucide-react'
import './PostItem.css'

const PostItem = ({ onLogout }) => {
  const [type, setType] = useState('lost')
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    location: '',
    date: '',
    description: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Item posted as ${type}!`)
  }

  return (
    <div className="layout-with-sidebar">
      <Sidebar onLogout={onLogout} />
      <main className="main-content">
        <header className="page-header">
          <div className="header-text">
            <h1>Report an Item</h1>
            <p>Help the community by providing accurate details.</p>
          </div>
        </header>

        <section className="post-form-container glass-card">
          <div className="type-selector">
            <button 
              className={`type-btn lost ${type === 'lost' ? 'active' : ''}`}
              onClick={() => setType('lost')}
            >
              I Lost Something
            </button>
            <button 
              className={`type-btn found ${type === 'found' ? 'active' : ''}`}
              onClick={() => setType('found')}
            >
              I Found Something
            </button>
          </div>

          <form onSubmit={handleSubmit} className="post-form">
            <div className="form-section">
              <h3>Basic Information</h3>
              <div className="form-grid">
                <div className="input-group full-width">
                  <label>Item Name</label>
                  <input 
                    name="title" 
                    placeholder="e.g., Blue Parker Pen, Sony Headphones" 
                    value={formData.title}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="input-group">
                  <label><Tag size={16} /> Category</label>
                  <select name="category" value={formData.category} onChange={handleChange} required>
                    <option value="">Select Category</option>
                    <option value="electronics">Electronics</option>
                    <option value="accessories">Accessories</option>
                    <option value="clothing">Clothing</option>
                    <option value="keys">Keys</option>
                    <option value="others">Others</option>
                  </select>
                </div>
                <div className="input-group">
                  <label><Calendar size={16} /> Date</label>
                  <input type="date" name="date" value={formData.date} onChange={handleChange} required />
                </div>
                <div className="input-group full-width">
                  <label><MapPin size={16} /> Last Seen / Found At</label>
                  <input 
                    name="location" 
                    placeholder="e.g., SF 201, Food Court, Block D Parking" 
                    value={formData.location}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>
            </div>

            <div className="form-section">
              <h3>Item Details</h3>
              <div className="input-group">
                <label>Description</label>
                <textarea 
                  name="description" 
                  rows="4" 
                  placeholder="Describe colors, marks, or any identifying features..."
                  value={formData.description}
                  onChange={handleChange}
                ></textarea>
              </div>
              
              <div className="upload-section">
                <label>Upload Photos</label>
                <div className="upload-box">
                  <Camera size={40} className="upload-icon" />
                  <p>Drag & drop or <span>Browse files</span></p>
                  <input type="file" multiple disabled />
                </div>
              </div>
            </div>

            <div className="form-footer">
              <div className="info-alert">
                <AlertCircle size={20} />
                <p>Your contact info will be visible only to confirmed matches.</p>
              </div>
              <div className="form-btns">
                <Button variant="ghost">Cancel</Button>
                <Button type="submit" variant="primary">Post {type.charAt(0).toUpperCase() + type.slice(1)} Item</Button>
              </div>
            </div>
          </form>
        </section>
      </main>
    </div>
  )
}

export default PostItem
