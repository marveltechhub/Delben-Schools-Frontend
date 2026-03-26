"use client"
import React from "react";
import "./join.css";
import Link from "next/link";

const links = [
  { title: "Management", image: "/managements.jpg", href: "/community", color: "blue" },
  { title: "Student Life", image: "/sport.jpg", href: "/community", color: "green" },
  { title: "Gallery", image: "/media.jpg", href: "/gallery", color: "purple" },
  { title: "Activate", image: "/activate.jpg", href: "/community", color: "orange" },
  { title: "Co-Curricular", image: "/extra.jpg", href: "/academics", color: "red" },
  { title: "Curriculum", image: "/cu.jpg", href: "/academics", color: "teal" },
];

export default function Join() {
  return (
    <section className="join-section">
      <div className="join-container">
        <div className="join-header">
          <span className="join-badge">Explore</span>
          <h2 className="join-title">Popular Links</h2>
          <p className="join-subtitle">
            Discover more about Delben Schools through these popular sections
          </p>
        </div>

        <div className="links-grid">
          {links.map((link, index) => (
            <Link 
              key={index} 
              href={link.href} 
              className={`link-card link-card--${link.color}`}
            >
              <div className="link-image-wrapper">
                <img src={link.image} alt={link.title} className="link-image" />
                <div className="link-overlay">
                  <span className="link-icon">
                    {index === 0 && "🏢"}
                    {index === 1 && "⚽"}
                    {index === 2 && "📸"}
                    {index === 3 && "🚀"}
                    {index === 4 && "🎨"}
                    {index === 5 && "📚"}
                  </span>
                </div>
              </div>
              <div className="link-content">
                <h3 className="link-title">{link.title}</h3>
                <span className="link-arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}