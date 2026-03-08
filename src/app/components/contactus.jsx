"use client";
import { useState, useEffect } from "react";
import localFont from "next/font/local";
import Link from "next/link";
import './contactus.css';

const delbenFont = localFont({
  src: "/ro.ttf",
  weight: "400",
  style: "normal",
  variable: "--delben-font",
});

const images = [
  "/slide.webp",
  "/slide1.webp",
  "/slide2.webp",
  "/slide3.webp",
  "/slide5.webp",
];

export default function ContactUs() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="contact-container">
      <div className="contact-inner">

        {/* Left slider */}
        <div className="slider-left">
          <div className="slider-wrapper">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`slide ${idx + 1}`}
                className={`slider-img ${current === idx ? "active" : ""}`}
              />
            ))}
          </div>

          {/* Dots */}
          <div className="slider-dots">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`dot ${current === idx ? "active" : ""}`}
                onClick={() => setCurrent(idx)}
              ></span>
            ))}
          </div>
        </div>

        {/* Right text */}
        <div className="slider-right">
          <h5 className="top-left">CELEBRATING EXCELLENCE:</h5>
          <h1 className={`${delbenFont.className} stars-text`}>MEET THE STARS</h1>
          <h2 className="stars-text-below">DELBEN High Flyers</h2>
          <p>
            DELBEN takes pride in its high flyers, students who have excelled remarkably in external and international examinations. With a rigorous academic curriculum, dedicated staff, and a supportive learning environment, our students achieve extraordinary success, setting new benchmarks for excellence and making us proud as a leading educational institution.
          </p>
          <div className="button-container-contact">
            <Link href="/admission-process" className="btn">Learn More <span className="arrow-right">&#8250;</span></Link>
          </div>
        </div>

      </div>
    </section>
  );
}