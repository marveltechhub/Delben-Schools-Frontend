"use client"
import React, { useState, useEffect } from "react";
import './journey.css'
import localFont from "next/font/local";
import Image from 'next/image';

const delbenFont = localFont({
  src: "/FjallaOne-Regular.ttf",
  weight: "400",
  style: "normal",
  variable: "--delben-font",
});

const SLIDES = [
  {
    id: "kg",
    label: "Kindergarten",
    title: "KINDERGARTEN",
    images: { large: "/ben.jpg", small1: "/group.png", small2: "/class.jpg" },
    paragraphs: [
      "Our Kindergarten at DELBEN introduces young learners to a warm, playful and safe environment. We focus on social skills, early literacy, numeracy basics and joyful discovery.",
      "Play-based activities, guided exploration and caring teachers build confidence and curiosity — preparing children for a smooth transition to Primary school."
    ]
  },
  {
    id: "primary",
    label: "Primary",
    title: "PRIMARY SCHOOL",
    images: { large: "/ben.jpg", small1: "/group.png", small2: "/class.jpg" },
    paragraphs: [
      "Our Primary School program builds a strong academic foundation while nurturing confidence, creativity and critical thinking skills.",
      "We combine core subjects with arts, technology and character development to prepare pupils for lifelong success."
    ]
  },
  {
    id: "secondary",
    label: "Secondary",
    title: "SECONDARY SCHOOL",
    images: { large: "/class.jpg", small1: "/ben.jpg", small2: "/group.png" },
    paragraphs: [
      "Secondary School at DELBEN prepares students for examinations, leadership and global opportunities with a focused curriculum and practical learning.",
      "Students engage in advanced subjects, STEM projects, and co-curricular activities that develop leadership, resilience and academic excellence."
    ]
  }
];

export default function Journey() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // keyboard support: left / right arrows
    function onKey(e) {
      if (e.key === "ArrowRight") setIndex(i => Math.min(i + 1, SLIDES.length - 1));
      if (e.key === "ArrowLeft") setIndex(i => Math.max(i - 1, 0));
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const slide = SLIDES[index];

  function next() { setIndex(i => Math.min(i + 1, SLIDES.length - 1)); }
  function prev() { setIndex(i => Math.max(i - 1, 0)); }

  return (
    <div className="journey-container">
      <h3 className={`${delbenFont.className}`}>OUR PROGRAM</h3>

      <h1 className={`${delbenFont.className} titletext`}>
        JOURNEY OF EDUCATION AT <span className='schoolname'>DELBEN</span>
      </h1>

      <div className="timeline">
        <div className="timeline-line"></div>

        {/* only current label shown on the timeline */}
        <div className="timeline-item center">
          <p>{slide.label}</p>
        </div>

        {/* navigation arrows */}
        <button
          aria-label="Previous stage"
          className="timeline-arrow left-arrow"
          onClick={prev}
          disabled={index === 0}
        >
          ←
        </button>

        <button
          aria-label="Next stage"
          className="timeline-arrow right-arrow"
          onClick={next}
          disabled={index === SLIDES.length - 1}
        >
          →
        </button>
      </div>

      <div className="flex">
        {/* IMAGE SECTION: large + two smalls (same layout used for each slide) */}
        <div className="image-grid">
          <div className="image-large">
            <div className="img-wrapper">
              <Image src={slide.images.large} alt={slide.label} fill priority />
            </div>
          </div>

          <div className="image-row">
            <div className="image-small">
              <div className="img-wrapper">
                <Image src={slide.images.small1} alt={`${slide.label} 1`} fill />
              </div>
            </div>

            <div className="image-small">
              <div className="img-wrapper">
                <Image src={slide.images.small2} alt={`${slide.label} 2`} fill />
              </div>
            </div>
          </div>
        </div>

        <div className="text">
          <h2 className={`${delbenFont.className} primary`}>{slide.title}</h2>

          {slide.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
}