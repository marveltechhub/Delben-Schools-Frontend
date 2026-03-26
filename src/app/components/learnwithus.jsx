import Image from 'next/image'
import './learnwithus.css'
import Link from 'next/link';

export default function Learn() {
  return (
    <section className="info-section">
      <div className="info-container">
        <div className="info-image">
          <div className="image-wrapper">
            <Image 
              src="/exam.webp" 
              alt="Delben Schools Excellence" 
              width={600} 
              height={500}
              className="info-img"
            />
            <div className="image-accent"></div>
          </div>
        </div>

        <div className="info-box">
          <div className="badge">
            <span className="badge-icon">🎓</span>
            <span>Admissions Open</span>
          </div>
          
          <h1 className="info-title">
            First Entrance Examination
            <span className="highlight">2026/2027</span>
          </h1>
          
          <p className="info-description">
            This is to notify the general public that the <strong>Delben First Entrance Examination</strong> comes up on <span className="highlight-date">Saturday, 11th April 2026, by 9:00 AM</span>. Interested candidates should begin to apply immediately.
          </p>

          <div className="info-stats">
            <div className="stat">
              <span className="stat-number">98%</span>
              <span className="stat-label">Pass Rate</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Students</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Teachers</span>
            </div>
          </div>

          <div className="button-container">
            <Link href="/admission" className="btn btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 12h6M12 9v6M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              View Admission Advert
            </Link>
            <Link href="/admission-process" className="btn btn-outline">
              View Process
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
          
          <div className="deadline-note">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
            <span>Application deadline: <strong>April 1st, 2026</strong></span>
          </div>
        </div>
      </div>
    </section>
  )
}