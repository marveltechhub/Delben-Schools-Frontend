"use client";
import "./Footer.css";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo" aria-label="Site footer">
      <div className="footer-inner">
        <div className="footer-col brand-col">
          <div className="brand">
            {/* simple SVG logo */}
           <Image src="/logo.png" alt="Marvel School logo" width={48} height={48} className="brand-logo" />

            <div className="brand-text">
              <div className="school-name">Delben Schools</div>
              <div className="school-tag">Learning • Caring • Growing</div>
            </div>
          </div>

          <nav className="quick-links" aria-label="Quick links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Admission</a></li>
              <li><a href="#">Meet</a></li>
            </ul>
          </nav>
        </div>

        <div className="footer-col lists-col">
          <div className="links-block">
            <h4>Students</h4>
            <ul>
              <li><a href="#">Portal</a></li>
              <li><a href="#">Timetable</a></li>
              <li><a href="#">Clubs</a></li>
            </ul>
          </div>

          <div className="links-block">
            <h4>News</h4>
            <ul>
              <li><a href="#">Announcements</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Achievements</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-col newsletter-col" aria-label="Newsletter signup">
          <h4>Newsletter</h4>
          <p className="newsletter-note">Stay updated — get our newsletter.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="footer-email" className="sr-only">Email address</label>
            <input id="footer-email" type="email" placeholder="your@email.com" required />
            <button type="submit" className="subscribe-btn">Subscribe</button>
          </form>

          <div className="socials" aria-label="Social media">
            <a href="#" className="social" aria-label="Facebook">
              {/* Facebook (f) */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07C2 17.09 5.66 21.23 10.44 21.95v-6.99H8.09v-2.9h2.35V9.4c0-2.33 1.39-3.61 3.52-3.61 1.02 0 2.08.18 2.08.18v2.29h-1.17c-1.15 0-1.51.72-1.51 1.46v1.75h2.57l-.41 2.9h-2.16V21.95C18.34 21.23 22 17.09 22 12.07z"/></svg>
            </a>
            <a href="#" className="social" aria-label="X (Twitter)">
              {/* X simple bird-like / X icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 5.92c-.66.3-1.37.5-2.11.59.76-.46 1.34-1.19 1.62-2.06-.71.42-1.5.72-2.34.88A4.05 4.05 0 0015.5 4c-2.24 0-4.06 1.8-4.06 4.02 0 .32.04.63.1.93C7.7 9.73 4.07 7.6 1.64 4.6c-.35.6-.55 1.3-.55 2.04 0 1.41.72 2.66 1.82 3.39-.63-.02-1.22-.2-1.73-.48v.05c0 1.98 1.4 3.62 3.26 3.99-.34.09-.7.14-1.07.14-.26 0-.52-.02-.77-.07.52 1.6 2.03 2.77 3.82 2.8A8.12 8.12 0 012 19.54a11.46 11.46 0 006.29 1.84c7.55 0 11.69-6.33 11.69-11.83 0-.18 0-.36-.01-.54.81-.6 1.5-1.34 2.05-2.19-.75.33-1.55.56-2.39.66z"/></svg>
            </a>
            <a href="#" className="social" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.2A4.8 4.8 0 1112 17.8 4.8 4.8 0 0112 8.2zm4.8-3.1a1.1 1.1 0 11-1.1 1.1 1.1 1.1 0 011.1-1.1zM12 10.9A1.1 1.1 0 1012 13.1 1.1 1.1 0 0012 10.9z"/></svg>
            </a>
            <a href="#" className="social" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23 7.5a3 3 0 00-2.12-2.12C18.9 5 12 5 12 5s-6.9 0-8.88.38A3 3 0 001 7.5 31.06 31.06 0 001 12a31.06 31.06 0 00.12 4.5 3 3 0 002.12 2.12C5.1 19 12 19 12 19s6.9 0 8.88-.38A3 3 0 0023 16.5 31.06 31.06 0 0023 12a31.06 31.06 0 00-.12-4.5zM10 15V9l5 3-5 3z"/></svg>
            </a>
          </div>
        </div>

        <div className="footer-col contact-col">
          <h4>Contact</h4>

          <div className="contact-item">
            <span className="icon-circle red-border" aria-hidden="true">
              {/* location */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8 2 5 5 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-4-3-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z"/></svg>
            </span>
            <div>
              <div className="contact-label">Location</div>
              <div className="contact-text">21 Adeyemi Street Egbeda Akowonjo Lagos <br /> 25 Fakoya Street Egbeda Akowonjo Lagos</div>
            </div>
          </div>

          <div className="contact-item">
            <span className="icon-circle red-border" aria-hidden="true">
              {/* mail */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            </span>
            <div>
              <div className="contact-label">Email</div>
              <div className="contact-text">info@delben.edu.ng</div>
            </div>
          </div>

          <div className="contact-item">
            <span className="icon-circle red-border" aria-hidden="true">
              {/* phone */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8a15.05 15.05 0 006.6 6.6l2.2-2.2a1 1 0 011.02-.24 11.36 11.36 0 003.55.57 1 1 0 011 1V20a1 1 0 01-1 1A18 18 0 013 5a1 1 0 011-1h3.1a1 1 0 011 1c0 1.25.2 2.48.57 3.55a1 1 0 01-.24 1.02L6.6 10.8z"/></svg>
            </span>
            <div>
              <div className="contact-label">Phone</div>
              <div className="contact-text">+234 806 060 98 06</div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <small>© {new Date().getFullYear()} Delben Schools ICT — All rights reserved.</small>
      </div>
    </footer>
  );
}