"use client"
import React from "react";
import "./journey.css";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";

const delbenFont = localFont({
  src: "../Navbar/FjallaOne-Regular.ttf",
  weight: "400",
  style: "normal",
  variable: "--delben-font",
});


export default function Journey() {
  return (
    <>
      <section className="journey-section">
        <div className="journey-card">
          <div className="journey-image-frame">
            <div className="journey-image">
              <Image
                src="/about.jpg"
                alt="Delben High Schools students and campus"
                width={560}
                height={420}
                priority
                sizes="(max-width: 900px) 100vw, 560px"
              />
            </div>
          </div>

          <div className={`journey-kicker ${delbenFont.className}`}>
            <span className="journey-dash" aria-hidden="true">-</span>
            <span className="journey-kicker-text">WELCOME TO</span>
          </div>

          <h2 className={`journey-heading ${delbenFont.className}`}>
            DELBEN HIGH SCHOOLS
          </h2>

          <div className="journey-copy">
            <p className="journey-paragraph">
              Delben High Schools is committed to providing quality education in a safe,
              supportive, and inspiring learning environment. We focus on academic excellence,
              character development, and the skills students need to thrive in a changing world.
            </p>
            <p className="journey-paragraph">
              With dedicated teachers, modern learning resources, and a strong school community,
              we help every learner discover their strengths and grow with confidence.
            </p>

            <div className="journey-links">
              <Link href="/about" className="journey-link journey-link--primary">
                <span>About us</span>
                <span className="journey-link-arrow">→</span>
              </Link>

              <Link href="/management-messages" className="journey-link journey-link--secondary">
                <span>Management messages</span>
                <span className="journey-link-arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}