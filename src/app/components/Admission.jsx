"use client"
import Link from 'next/link'
import './Admission.css'

export default function Admission() {
  return (
    <section className="admission-section">
      <div className="admission-container">
        {/* Background Pattern */}
        <div className="admission-bg-pattern"></div>
        
        <div className="admission-content">
          {/* Info Card */}
          <div className="admission-info">
            <div className="info-badge">
              <span className="badge-icon">🎓</span>
              <span>Admissions Open</span>
            </div>
            
            <h2 className="info-title">
              Apply Now: First Entrance
              <span className="title-accent">Examination 2026/2027</span>
            </h2>
            
            <p className="info-text">
              This is to notify the general public that the <strong>Delben Schools First Entrance Examination</strong> comes up on 
              <span className="highlight"> Saturday, 11th April 2026, by 9:00 AM</span>. 
              Interested candidates should begin to apply immediately.
            </p>
            
            <div className="info-meta">
              <div className="meta-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                <span>April 11th, 2026</span>
              </div>
              <div className="meta-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <span>9:00 AM</span>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="admission-cta">
            <h3 className="cta-title">Ready to Apply?</h3>
            <p className="cta-text">
              Join the Delben family and give your child the best start in life.
            </p>
            
            <Link href="/admission" className="cta-button">
              <span>Apply Now</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            
            <div className="cta-note">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <span>Secure & Easy Process</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}