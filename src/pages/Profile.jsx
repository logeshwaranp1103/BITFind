import React from 'react'
import Sidebar from '../components/Sidebar'
import Button from '../components/Button'
import { User, Mail, Phone, Shield, Bell, LogOut, ChevronRight } from 'lucide-react'
import './Profile.css'

const Profile = ({ onLogout }) => {
  return (
    <div className="layout-with-sidebar">
      <Sidebar onLogout={onLogout} />
      <main className="main-content">

        <header className="page-header">
          <div className="header-text">
            <h1>User Profile</h1>
            <p>Manage your account settings and preferences.</p>
          </div>
        </header>

        <section className="profile-container">
          <div className="profile-main glass-card">
            <div className="profile-user-info">
              <div className="profile-avatar">LP</div>
              <div className="profile-user-text">
                <h2>Logeshwaran P</h2>
                <p>Student at BIT Sathy</p>
                <span className="profile-status badge-found">Verified Account</span>
              </div>
            </div>
            
            <div className="profile-details-grid">
              <div className="detail-item">
                <label><Mail size={16} /> Email</label>
                <p>logeshwaran@bitsathy.ac.in</p>
              </div>
              <div className="detail-item">
                <label><Phone size={16} /> Phone</label>
                <p>+91 98765 43210</p>
              </div>
              <div className="detail-item">
                <label><User size={16} /> Department</label>
                <p>B.E. Computer Science</p>
              </div>
              <div className="detail-item">
                <label><Shield size={16} /> Safety Store</label>
                <p>Premium Guardian</p>
              </div>
            </div>

            <div className="profile-actions">
              <Button variant="primary">Edit Profile</Button>
            </div>
          </div>

          <div className="profile-settings-list glass-card">
            <h3>Account Settings</h3>
            <div className="settings-items">
              <div className="setting-choice" onClick={() => alert('Notification settings coming soon!')}>
                <div className="setting-icon"><Bell size={20} /></div>
                <div className="setting-text">
                  <h4>Notifications</h4>
                  <p>Manage alerts for item matches</p>
                </div>
                <ChevronRight size={20} className="chevron" />
              </div>
              <div className="setting-choice" onClick={() => alert('Security settings coming soon!')}>
                <div className="setting-icon"><Shield size={20} /></div>
                <div className="setting-text">
                  <h4>Security</h4>
                  <p>Change password and 2FA</p>
                </div>
                <ChevronRight size={20} className="chevron" />
              </div>
              <div className="setting-choice logout" onClick={onLogout}>
                <div className="setting-icon"><LogOut size={20} /></div>
                <div className="setting-text">
                  <h4>Sign Out</h4>
                  <p>Securely log out of your account</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Profile
