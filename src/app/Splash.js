"use client";
import { useEffect, useState } from "react";
import "./splash.css";
import Image from "next/image";
export default function Splash({ children }) {
  const [hide, setHide] = useState(false)

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
    <div className={`splash-screen ${hide ? "slide-out" : ""}`}>
      <Image
        src="/logo3.png"   // put your logo inside public folder
        alt="School Logo"
        width={150}
        height={150}
        priority
      />
    </div>
  );  }


  return children;
}

