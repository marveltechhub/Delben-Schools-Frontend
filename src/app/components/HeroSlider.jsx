"use client"
import React, { useEffect, useRef, useState } from "react";
import "./heroSlider.css";

export default function HeroSlider({ slides: initialSlides, interval = 5000 }) {
  const slides = initialSlides ?? [
    { id: 1, image: "/student.jpeg", caption: "Inspiring learning every day" },
    { id: 2, image: "/student1.jpeg", caption: "Strong academics and character" },
    { id: 3, image: "/student2.jpeg", caption: "A safe, caring environment" },
  ];

  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => setIndex(i => (i + 1) % slides.length), interval);
    return () => clearInterval(timerRef.current);
  }, [slides.length, interval]);

  function goTo(i) {
    clearInterval(timerRef.current);
    setIndex(i);
    timerRef.current = setInterval(() => setIndex(p => (p + 1) % slides.length), interval);
  }

  return (
    <div className="hero-slider" role="region" aria-label="Homepage hero slider">
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`slide ${i === index ? "active" : ""}`}
          style={{ backgroundImage: `url(${s.image})` }}
          aria-hidden={i !== index}
        />
      ))}

      <div className="hero-overlay">
        <h1 className="hero-title">DELBEN SCHOOLS</h1>
        <p className="hero-caption" aria-live="polite">{slides[index].caption}</p>

        <div className="hero-controls" role="tablist" aria-label="Slide navigation">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => goTo(i)}
              aria-pressed={i === index}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}