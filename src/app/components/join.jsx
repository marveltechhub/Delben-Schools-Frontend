"use client"
import React from "react";
import "./join.css";

const images = [
  "/ben.jpg",
  "/class.jpg",
  "/student.jpg",
  "/about.png"
];

export default function Join() {
  return (
    <section className="join-section" aria-labelledby="join-heading">
      <div className="join-container">
        <div className="join-visual">
          <div className="image-grid" aria-hidden="true">
            {images.map((src, i) => (
              <img key={i} src={src} alt={`Join image ${i + 1}`} className={`thumb thumb-${i}`} />
            ))}
          </div>

          <div className="join-cta" role="region" aria-label="Join call to action">
            <h2 id="join-heading">let's secure your kid's future</h2>

            <button className="btn join-btn" type="button" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}>
              Join Us
              <span className="btn-arrow" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12h14M13 5l6 7-6 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>

           
          </div>
        </div>
      </div>
    </section>
  );
}