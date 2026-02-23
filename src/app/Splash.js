"use client";
import { useEffect, useState } from "react";
import "./splash.css";
import Image from "next/image";
export default function Splash({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="splash-container">
        <div className="main_spinner">
          <div className="center_mass"></div>
          <div className="dot dot_1"></div>
          <div className="dot dot_2"></div>
        </div>
           <Image
  src="/logo.png"
  alt="Delben Nur Primary & Secondary School"
  width={300}
  height={300}
   style={{
      objectFit: "contain",
      borderRadius:"20px",
    }}
    
/>

        
      </div>
    );
  }

  return children;
}
