"use client"
import React from "react";
import "./journey.css";
import Image from "next/image";
import Link from "next/link";

export default function Journey() {
  return (
    <section className="journey-section">
      <div className="journey-container">
        {/* Left Side - Content */}
        <div className="journey-content">
          <div className="journey-badge">
            <span className="badge-icon">🏫</span>
            <span>Welcome to Delben</span>
          </div>
          
          <h2 className="journey-title">
            Building Tomorrow's
            <span className="title-highlight"> Leaders Today</span>
          </h2>
          
          <div className="journey-description">
            <p>
              Delben Schools is committed to providing quality education in a safe, 
              supportive, and inspiring learning environment. We focus on academic excellence, 
              character development, and the skills students need to thrive in a changing world.
            </p>
            <p>
              With dedicated teachers, modern learning resources, and a strong school community, 
              we help every learner discover their strengths and grow with confidence.
            </p>
          </div>

          <div className="journey-stats">
            <div className="journey-stat">
              <span className="stat-number">25+</span>
              <span className="stat-text">Years of Excellence</span>
            </div>
            <div className="journey-stat">
              <span className="stat-number">500+</span>
              <span className="stat-text">Students</span>
            </div>
            <div className="journey-stat">
              <span className="stat-number">50+</span>
              <span className="stat-text">Qualified Teachers</span>
            </div>
          </div>

          <div className="journey-actions">
            <Link href="/our-school" className="btn btn-primary">
              About Us
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link href="/community" className="btn btn-outline">
              Our Community
            </Link>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="journey-image-wrapper">
          <div className="journey-image-container">
            <Image
              src="/about.jpg"
              alt="Delben High Schools students and campus"
              width={560}
              height={420}
              className="journey-image"
              priority
            />
          </div>
          
          {/* Floating Card */}
          <div className="floating-card">
            <div className="floating-icon">🎓</div>
            <div className="floating-text">
              <span className="floating-number">98%</span>
              <span className="floating-label">Success Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}