"use client"
import React, { useEffect, useState, useRef } from "react";
import "./welcomeModal.css";

export default function WelcomeModal() {
  const [visible, setVisible] = useState(false);
  const [dontShow, setDontShow] = useState(false);
  const [message, setMessage] = useState("Hello Delben Schools, I am starting the admission process and would like to submit documents.");
  const [fileName, setFileName] = useState("");
  const fileRef = useRef(null);

  useEffect(() => {
    // show modal after splash / short delay if not dismissed before
    const dismissed = localStorage.getItem("delben_welcome_dismissed");
    if (dismissed) return;
    const t = setTimeout(() => setVisible(true), 900); // 900ms after page load
    return () => clearTimeout(t);
  }, []);

  function close() {
    setVisible(false);
    if (dontShow) localStorage.setItem("delben_welcome_dismissed", "1");
  }

  function goToAdmission() {
    const anchor = "admission-form";
    // if already on the admission page, smooth scroll to the form
    if (typeof window !== "undefined" && window.location.pathname === "/admission") {
      const el = document.getElementById(anchor);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        setVisible(false);
        return;
      }
    }
    // otherwise navigate to the admission page with hash so browser scrolls to the form
    window.location.href = `/admission#${anchor}`;
  }

  function onPickFile(e) {
    const f = e.target.files && e.target.files[0];
    if (f) setFileName(f.name);
    else setFileName("");
  }

  function openWhatsApp() {
    // phone number (international format without +): 2348060609806
    // instruct user to attach file manually — client cannot auto attach
    const phone = "2348060609806";
    let txt = `${message}\n\n`;
    if (fileName) txt += `I will attach the file: ${fileName}\n\n`;
    txt += "Please confirm next steps. Thank you.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(txt)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  if (!visible) return null;

  return (
    <div className="wm-backdrop" role="dialog" aria-modal="true" aria-label="Welcome to Delben Schools">
      <div className="wm-card">
        <button className="wm-close" onClick={close} aria-label="Close welcome dialog">✕</button>

        <div className="wm-top">
          <img src="/logo.png" alt="Delben Schools logo" className="wm-logo" />
          <h1>Admission in progress</h1>
          <p className="wm-sub">Welcome to Delben Schools — thank you for starting the enrollment process. Fill the form, upload your documents and send them to our admissions office.</p>
        </div>

        <div className="wm-body">
          <div className="wm-actions">
            <button className="wm-btn enroll" onClick={goToAdmission} title="Go to admission form">Enroll With Us</button>
          </div>
        </div>
      </div>
    </div>
  );
}