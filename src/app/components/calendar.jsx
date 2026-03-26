"use client"
import React from "react";
import "./calendar.css";
import { GraduationCap, Sparkles, Home, BookOpen, Users, Trophy } from "lucide-react";
import Link from "next/link";

export default function Calendar() {
  const features = [
    {
      icon: <GraduationCap size={28} />,
      title: "Holistic Education",
      description: "We nurture the whole child, focusing on academics, character, and spirituality.",
      color: "blue"
    },
    {
      icon: <Sparkles size={28} />,
      title: "Future-Ready",
      description: "Our curriculum equips students for success in higher education and beyond.",
      color: "purple"
    },
    {
      icon: <Home size={28} />,
      title: "Safe Haven",
      description: "It's not just a school; it's a home away from home.",
      color: "green"
    }
  ];

  const stats = [
    { icon: <BookOpen size={24} />, number: "15+", label: "Academic Programs" },
    { icon: <Users size={24} />, number: "500+", label: "Enrolled Students" },
    { icon: <Trophy size={24} />, number: "50+", label: "Awards Won" }
  ];

  return (
    <section className="leadership-section">
      <div className="leadership-background"></div>
      
      <div className="leadership-container">
        {/* Header */}
        <div className="leadership-header">
          <span className="leadership-badge">Why Choose Us</span>
          <h1 className="leadership-title">Leadership With Distinction</h1>
          <p className="leadership-subtitle">
            We focus on dynamic education, holistic development, and building a brighter future 
            for your child and our nation.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="leadership-grid">
          {features.map((feature, index) => (
            <div key={index} className={`leadership-card leadership-card--${feature.color}`}>
              <div className="card-icon-wrap">
                {feature.icon}
              </div>
              <h3 className="card-title">{feature.title}</h3>
              <p className="card-text">{feature.description}</p>
              <div className="card-decoration"></div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="leadership-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-content">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="leadership-cta">
          <Link href="/admission" className="cta-button">
            <span>Start Your Journey</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}