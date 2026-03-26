"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import './contactus.css';

const images = [
  "/slide.webp",
  "/slide1.webp",
  "/slide2.webp",
  "/slide3.webp",
  "/slide5.webp",
];

export default function ContactUs() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Image Side */}
        <div className="contact-image-side">
          <div className="image-slider">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Campus view ${idx + 1}`}
                className={`slider-img ${current === idx ? "active" : ""}`}
              />
            ))}
          </div>
          
          {/* Dots */}
          <div className="slider-dots">
            {images.map((_, idx) => (
              <button
                key={idx}
                className={`dot ${current === idx ? "active" : ""}`}
                onClick={() => setCurrent(idx)}
                aria-label={`View image ${idx + 1}`}
              />
            ))}
          </div>
          
          {/* Overlay Content */}
          <div className="image-overlay">
            <div className="overlay-content">
              <span className="overlay-badge">Visit Our Campus</span>
              <h3>Experience Our Learning Environment</h3>
              <p>See firsthand what makes Delben Schools special</p>
            </div>
          </div>
        </div>

        {/* Content Side */}
        <div className="contact-content-side">
          <div className="content-wrapper">
            <span className="section-label">Get In Touch</span>
            <h2 className="section-title">Contact Us Today</h2>
            <p className="section-description">
              Have questions about admissions, academics, or our programs? 
              Our team is here to help you find the right information.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="method-info">
                  <h4>Visit Us</h4>
                  <p>21 Adeyemi Street, Egbeda<br />Akowonjo, Lagos</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div className="method-info">
                  <h4>Call Us</h4>
                  <p>+234 806 060 98 06</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div className="method-info">
                  <h4>Email Us</h4>
                  <p>info@delben.edu.ng</p>
                </div>
              </div>
            </div>

            <div className="contact-actions">
              <Link href="/contact" className="btn btn-primary">
                Send a Message
              </Link>
              <Link href="/admission" className="btn btn-outline">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}