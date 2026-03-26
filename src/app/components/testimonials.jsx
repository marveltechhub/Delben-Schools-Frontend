"use client";
import React, { useEffect, useState } from "react";
import "./testimonials.css";
import Image from "next/image";
import Link from "next/link";

const discoverCards = [
  {
    id: 1,
    image: "/update.webp",
    title: "About Our School",
    description: "Delben Schools is a mission co-educational full boarding school committed to providing an all-round and qualitative education.",
    link: "/our-school",
    color: "blue",
    icon: "🏫"
  },
  {
    id: 2,
    image: "/campuses.webp",
    title: "Our Campuses",
    description: "Explore our serene learning environment, modern classrooms, and facilities designed to support every learner.",
    link: "/campuses",
    color: "green",
    icon: "🏟️"
  },
  {
    id: 3,
    image: "/projects.webp",
    title: "Academic Programs",
    description: "Discover our innovative curriculum and pioneering projects that set us apart in education excellence.",
    link: "/academics",
    color: "orange",
    icon: "📚"
  }
];

const stats = [
  { number: "25+", label: "Years of Excellence", icon: "🏆" },
  { number: "500+", label: "Students Enrolled", icon: "👥" },
  { number: "50+", label: "Expert Teachers", icon: "👨‍🏫" },
  { number: "100%", label: "Success Rate", icon: "🎯" }
];

export default function Testimonials() {
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % discoverCards.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="discover-section">
      <div className="discover-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Explore Delben</span>
          <h2 className="section-title">Discover Our School</h2>
          <p className="section-subtitle">
            Learn more about us, our campuses, pioneering projects, and innovative educational approaches that shape future leaders.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="stats-bar">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <span className="stat-icon">{stat.icon}</span>
              <div className="stat-content">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="discover-grid">
          {discoverCards.map((card, index) => (
            <article 
              key={card.id} 
              className={`discover-card discover-card--${card.color}`}
            >
              <div className="card-image-wrapper">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={480}
                  height={320}
                  className="card-image"
                />
                <div className="card-overlay">
                  <span className="card-icon">{card.icon}</span>
                </div>
              </div>
              
              <div className="card-content">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>
                <Link href={card.link} className="card-link">
                  <span>Learn More</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="discover-cta">
          <div className="cta-content">
            <h3>Ready to Join Our Community?</h3>
            <p>Take the first step towards your child's bright future</p>
          </div>
          <div className="cta-buttons">
            <Link href="/admission" className="btn btn-accent">
              Apply Now
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
