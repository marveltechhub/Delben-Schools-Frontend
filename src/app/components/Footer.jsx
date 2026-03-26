"use client";
import "./Footer.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { label: "Gallery", href: "/gallery" },
    { label: "Contact Us", href: "/contact" },
    { label: "Admissions", href: "/admission" },
    { label: "Our Team", href: "/team" },
  ];
  
  const studentLinks = [
    { label: "Student Portal", href: "/portal" },
    { label: "Timetable", href: "/timetable" },
    { label: "Clubs & Activities", href: "/clubs" },
    { label: "Exam Portal", href: "/exams" },
  ];
  
  const newsLinks = [
    { label: "Announcements", href: "/news" },
    { label: "Events", href: "/events" },
    { label: "Achievements", href: "/achievements" },
    { label: "Newsletter", href: "/newsletter" },
  ];

  return (
    <footer className="site-footer">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-container">
          {/* Brand Column */}
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <img src="/favicon.ico" alt="Delben Schools" className="logo-icon" />
              <div className="logo-text">
                <span className="brand-name">Delben Schools</span>
                <span className="brand-tagline">Learning • Caring • Growing</span>
              </div>
            </div>
            <p className="brand-description">
              Committed to providing quality education from Kindergarten to Secondary School. 
              Join us in shaping future leaders.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-link" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 5.92c-.66.3-1.37.5-2.11.59.76-.46 1.34-1.19 1.62-2.06-.71.42-1.5.72-2.34.88A4.05 4.05 0 0015.5 4c-2.24 0-4.06 1.8-4.06 4.02 0 .32.04.63.1.93C7.7 9.73 4.07 7.6 1.64 4.6c-.35.6-.55 1.3-.55 2.04 0 1.41.72 2.66 1.82 3.39-.63-.02-1.22-.2-1.73-.48v.05c0 1.98 1.4 3.62 3.26 3.99-.34.09-.7.14-1.07.14-.26 0-.52-.02-.77-.07.52 1.6 2.03 2.77 3.82 2.8A8.12 8.12 0 012 19.54a11.46 11.46 0 006.29 1.84c7.55 0 11.69-6.33 11.69-11.83 0-.18 0-.36-.01-.54.81-.6 1.5-1.34 2.05-2.19z"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 011.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772 4.915 4.915 0 01-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.058-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.684-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.041 0 2.67.01 2.986.058 4.04.045.976.207 1.505.344 1.858.182.466.399.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058 2.67 0 2.987-.01 4.04-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.684.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041 0-2.67-.01-2.986-.058-4.04-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.055-.048-1.37-.058-4.041-.058zm0 3.063a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 8.468a3.333 3.333 0 100-6.666 3.333 3.333 0 000 6.666zm6.538-8.671a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col links-col">
            <h4 className="col-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Students Links */}
          <div className="footer-col links-col">
            <h4 className="col-title">Students</h4>
            <ul className="footer-links">
              {studentLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* News Links */}
          <div className="footer-col links-col">
            <h4 className="col-title">News & Updates</h4>
            <ul className="footer-links">
              {newsLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-col contact-col">
            <h4 className="col-title">Contact Us</h4>
            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="contact-info">
                  <span className="contact-label">Location</span>
                  <span className="contact-text">21 Adeyemi Street, Egbeda<br />Akowonjo, Lagos</span>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div className="contact-info">
                  <span className="contact-label">Email</span>
                  <span className="contact-text">info@delben.edu.ng</span>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div className="contact-info">
                  <span className="contact-label">Phone</span>
                  <span className="contact-text">+234 806 060 98 06</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p className="copyright">
            © {currentYear} Delben Schools. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}