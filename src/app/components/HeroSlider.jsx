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
    startAutoSlide();
    return () => clearInterval(timerRef.current);
  }, []);

  function startAutoSlide(){
    clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setIndex(i => (i + 1) % slides.length);
    }, interval);
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

      {slides.map((s,i)=>(
        <div
          key={s.id}
          className={`slide ${i===index ? "active":""}`}
          style={{ backgroundImage:`url(${s.image})` }}
        />
      ))}

      {/* LEFT ARROW */}
      <button className="slider-arrow left" onClick={prevSlide}>
        ❮
      </button>

      {/* RIGHT ARROW */}
      <button className="slider-arrow right" onClick={nextSlide}>
        ❯
      </button>

      <div className="hero-overlay">

        <div className="hero-controls">
          {slides.map((_,i)=>(
            <button
              key={i}
              className={`dot ${i===index ? "active":""}`}
              onClick={()=>goTo(i)}
            />
          ))}
        </div>

      </div>

    </div>
  );
}