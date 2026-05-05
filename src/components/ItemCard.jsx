import React from 'react'
import { MapPin, Clock, Tag } from 'lucide-react'
import './ItemCard.css'

const ItemCard = ({ item }) => {
  const { title, type, location, time, image, category } = item
  const isLost = type === 'lost'

  return (
    <div className="item-card glass-card">
      <div className="item-image-container">
        <img src={image || 'https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?auto=format&fit=crop&q=80&w=400'} alt={title} className="item-image" />
        <div className={`status-badge ${isLost ? 'badge-lost' : 'badge-found'}`}>
          <span className={`status-glow ${isLost ? 'pulse-lost' : 'pulse-found'}`}></span>
          {type.toUpperCase()}
        </div>
      </div>
      <div className="item-details">
        <div className="item-header">
          <h3 className="item-title">{title}</h3>
          <span className="item-category">{category}</span>
        </div>
        <div className="item-info">
          <div className="info-row">
            <MapPin size={14} className="info-icon" />
            <span>{location}</span>
          </div>
          <div className="info-row">
            <Clock size={14} className="info-icon" />
            <span>{time}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemCard
