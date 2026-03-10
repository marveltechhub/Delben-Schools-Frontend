"use client"
import { useEffect, useState } from "react";
import './welcomeModal.css';
import Link from "next/link";

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

    <div className="ad-overlay">

      <div className="ad-modal">

        <button
          className="close-btn"
          onClick={() => setShowAd(false)}
        >
          ✕
        </button>

        <div className="ad-container">

          <h3>
            ADMISSION IS CURRENTLY <br/>
            ONGOING FOR THE <br/>
            2026/2027 ACADEMIC SESSION
          </h3>
          <p>Hurray!!! All our campuses are now admitting into JSS1 for 2026/2027 academic session.</p>
          <Link className="apply-btn" href="/admission">
            <span>Apply Now</span>
          
          </Link>

          

        </div>

      </div>

    </div>

  );
}