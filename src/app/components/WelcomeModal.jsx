"use client"
import { useEffect, useState } from "react";
import './welcomeModal.css';
import Link from "next/link";
import { X, Calendar, ArrowRight } from "lucide-react";

export default function AdPopup() {
  const [showAd, setShowAd] = useState(false);

  useEffect(() => {
    const firstTimer = setTimeout(() => {
      setShowAd(true);
    }, 3000);

    const interval = setInterval(() => {
      setShowAd(true);
    }, 600000);

    return () => {
      clearTimeout(firstTimer);
      clearInterval(interval);
    };
  }, []);

  if (!showAd) return null;

  return (
    <div className="ad-overlay" onClick={() => setShowAd(false)}>
      <div className="ad-modal" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          className="close-btn"
          onClick={() => setShowAd(false)}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Background Image with Better Overlay */}
        <div className="ad-bg"></div>
        <div className="ad-overlay-gradient"></div>

        {/* Content */}
        <div className="ad-content">
          <div className="ad-badge">
            <Calendar size={16} />
            <span>2026/2027 Admissions</span>
          </div>
          
          <h2>Admission Now Open!</h2>
          
          <p className="ad-message">
            We're now accepting applications for the upcoming academic year. 
            Give your child the best start in their educational journey.
          </p>

          <div className="ad-highlight">
            <span className="highlight-text">All campuses open for JSS1 admission</span>
          </div>

          <Link 
            className="apply-btn" 
            href="/admission"
            onClick={() => setShowAd(false)}
          >
            <span>Apply Now</span>
            <ArrowRight size={18} />
          </Link>

          <p className="ad-note">Limited spots available - Apply today!</p>
        </div>
      </div>
    </div>
  );
}