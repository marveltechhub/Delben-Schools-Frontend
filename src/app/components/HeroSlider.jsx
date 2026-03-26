"use client"
import React, { useEffect, useRef, useState } from "react";
import "./heroSlider.css";

const slides = [
  { 
    id: 1, 
    image: "/student.jpeg", 
    subtitle: "Welcome to Delben Schools",
    title: "Excellence in Education",
    description: "Nurturing minds, building character, and shaping future leaders through innovative learning and dedicated teaching.",
    ctaText: "Apply Now",
    ctaLink: "/admission",
    ctaText2: "Our Programs",
    ctaLink2: "/academics"
  },
  { 
    id: 2, 
    image: "/student1.jpeg", 
    subtitle: "Learn • Grow • Succeed",
    title: "Holistic Learning Environment",
    description: "Our dedicated teachers and state-of-the-art facilities create the perfect environment for your child's success.",
    ctaText: "Schedule a Visit",
    ctaLink: "/contact",
    ctaText2: "View Admissions",
    ctaLink2: "/admission"
  },
  { 
    id: 3, 
    image: "/student2.jpeg", 
    subtitle: "Where Every Child Matters",
    title: "Safe & Nurturing Environment",
    description: "We provide a supportive community where students feel safe, valued, and empowered to achieve their potential.",
    ctaText: "Join Our Community",
    ctaLink: "/community",
    ctaText2: "Learn More",
    ctaLink2: "/our-school"
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(timerRef.current);
  }, []);

  function startAutoSlide(){
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex(i => (i + 1) % slides.length);
    }, 5000);
  }

  function nextSlide(){
    setIndex(i => (i + 1) % slides.length);
    startAutoSlide();
  }

  function prevSlide(){
    setIndex(i => (i - 1 + slides.length) % slides.length);
    startAutoSlide();
  }

  function goTo(i){
    setIndex(i);
    startAutoSlide();
  }

  return (
    <div className="hero-slider">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`slide ${i === index ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide-overlay"></div>
        </div>
      ))}

      {/* Hero Content - Always Visible */}
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-subtitle">{slides[index].subtitle}</span>
          <h1 className="hero-title">{slides[index].title}</h1>
          <p className="hero-description">
            {slides[index].description}
          </p>
          <div className="hero-buttons">
            <a href={slides[index].ctaLink} className="btn btn-accent">
              {slides[index].ctaText}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href={slides[index].ctaLink2} className="btn btn-outline-white">
              {slides[index].ctaText2}
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button className="slider-arrow left" onClick={prevSlide} aria-label="Previous slide">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
      </button>

      <button className="slider-arrow right" onClick={nextSlide} aria-label="Next slide">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </button>

      {/* Dots Navigation */}
      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-arrow">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </div>
      </div>
    </div>
  );
}