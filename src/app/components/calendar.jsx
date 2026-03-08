"use client"
import React from "react";
import "./calendar.css";
import { HeartHandshake, Sparkles, ShieldCheck } from "lucide-react";
import localFont from "next/font/local";
import Link from "next/link";

const delbenFont = localFont({
  src: "/roboto.ttf",
  weight: "400",
  style: "normal",
  variable: "--delben-font",
});

export default function Calendar() {
  return (
    <section className="leadership-section">
      <div className="leadership-overlay">
        <div className="leadership-inner">
          <h1 className="leadership-title">LEADERSHIP WITH DISTINCTION</h1>
          <p className={`${delbenFont.className} leadership-subtitle`}>
            We focus on dynamic education, holistic development, and building a brighter future
            for your child and our nation.
          </p>

          <div className="leadership-grid">
            <div className="leadership-card leadership-card--one">
              <div className="leadership-icon-wrap">
                <HeartHandshake className="leadership-icon" aria-hidden="true" />
              </div>
              <h3 className="leadership-card-title">Holistic Education</h3>
              <p className="leadership-card-text">
                We nurture the whole child, focusing on academics, character, and spirituality.
              </p>
            </div>

            <div className=" leadership-card--two">
              <div className="leadership-icon-wrap">
                <Sparkles className="leadership-icon" aria-hidden="true" />
              </div>
              <h3 className=" leadership-card-title--two">Future-Ready</h3>
              <p className="leadership-card-text leadership-card-text--two">
                Our curriculum equips students for success in higher education and beyond.
              </p>
            </div>

            <div className="leadership-card leadership-card--three">
              <div className="leadership-icon-wrap">
                <ShieldCheck className="leadership-icon" aria-hidden="true" />
              </div>
              <h3 className="leadership-card-title">Safe Haven</h3>
              <p className="leadership-card-text">
                It's not just a school; it's a home away from home.
              </p>
            </div>
          </div>

          <div className="calendar-cta">
            <Link href="/admission-advert" className="water-btn">
              <span className="water-btn-label">
                Learn More About Admission At Delben
              </span>
              <span className="water-btn-water" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}