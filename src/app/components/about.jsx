"use client"
import { useEffect, useState } from "react";
import "./about.css";

export default function About() {

  const [showNotice, setShowNotice] = useState(true);

  useEffect(() => {
    const closed = sessionStorage.getItem("noticeClosed");
    if (closed) setShowNotice(false);
  }, []);

  const closeNotice = () => {
    setShowNotice(false);
    sessionStorage.setItem("noticeClosed", "true");
  };

  if (!showNotice) return null;

  return (
    <div className="notice-container">

      {/* TOP WAVE */}
      <div className="wave wave-top">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,60 
          C120,80 240,20 360,40 
          C480,60 600,100 720,80
          C840,60 960,20 1080,40
          C1200,60 1320,80 1440,60
          L1440,120 L0,120 Z"/>
        </svg>
      </div>

      <button className="notice-close" onClick={closeNotice}>✕</button>

      <div className="notice-box">
        <h3>📢 Admission Notice</h3>
        <p>
          Admission for the <strong>2026/2027 Academic Session</strong> is
          currently ongoing. Parents and guardians are advised to visit the
          school office for registration and enquiries.
        </p>
      </div>

      {/* BOTTOM WAVE */}
      <div className="wave wave-bottom">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,60 
          C120,80 240,20 360,40 
          C480,60 600,100 720,80
          C840,60 960,20 1080,40
          C1200,60 1320,80 1440,60
          L1440,120 L0,120 Z"/>
        </svg>
      </div>

    </div>
  );
}