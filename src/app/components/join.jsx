"use client"
import React from "react";
import "./join.css";
import Link from "next/link";

export default function Join() {
  return (
    <section className="join">
      <h1>Popular Links</h1>

      <div className="over-join">
        <div className="join-container">

          <div className="frame">
            <div className="side-tab">MANAGEMENT</div>
            <Link href="/managements">
              <img src="/managements.jpg" alt="" />
              <div className="overlay"></div>
            </Link>
          </div>

          <div className="frame">
            <div className="side-tab">STUDENTS EXPERIENCE</div>
            <Link href="/managements">
              <img src="/sport.jpg" alt="" />
              <div className="overlay"></div>
            </Link>
          </div>

          <div className="frame">
            <div className="side-tab">GALLERY MEDIA</div>
            <Link href="/managements">
              <img src="/media.jpg" alt="" />
              <div className="overlay"></div>
            </Link>
          </div>

          <div className="frame">
            <div className="side-tab">ACTIVATE</div>
            <Link href="/managements">
              <img src="/activate.jpg" alt="" />
              <div className="overlay"></div>
            </Link>
          </div>

          <div className="frame">
            <div className="side-tab">CO-CURRICULAR</div>
            <Link href="/managements">
              <img src="/extra.jpg" alt="" />
              <div className="overlay"></div>
            </Link>
          </div>

          <div className="frame">
            <div className="side-tab">OUR CURRICULUM</div>
            <Link href="/managements">
              <img src="/cu.jpg" alt="" />
              <div className="overlay"></div>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}