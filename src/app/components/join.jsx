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
            <Link href="/managements">
              <img src="/managements.jpg" alt="" />
              <div className="overlay"></div>
                <div className="text-bar">
      <h3>Management</h3>
    </div>
            </Link>
          </div>
          
          <div className="frame">
            <Link href="/managements">
              <img src="/sport.jpg" alt="" />
              <div className="overlay"></div>
                <div className="text-bar">
      <h3>STUDENTS' <br /> EXPERIENCE</h3>
    </div>
            </Link>
          </div>
          
          <div className="frame">
            <Link href="/managements">
              <img src="/media.jpg" alt="" />
              <div className="overlay"></div>
                <div className="text-bar">
      <h3>GALLERY MEDIA</h3>
    </div>
            </Link>
          </div>
          
          <div className="frame">
            <Link href="/managements">
              <img src="/activate.jpg" alt="" />
              <div className="overlay"></div>
                <div className="text-bar">
      <h3>ACTIVATE</h3>
    </div>
            </Link>
          </div>
          
          <div className="frame">
            <Link href="/managements">
              <img src="/extra.jpg" alt="" />
              <div className="overlay"></div>
                <div className="text-bar">
      <h3>CO-CURRICULAR <br /> ACTIVITIES</h3>
    </div>
            </Link>
          </div>
          
          <div className="frame">
            <Link href="/managements">
              <img src="/cu.jpg" alt="" />
              <div className="overlay"></div>
                <div className="text-bar">
      <h3>OUR CURRICULUM</h3>
    </div>
            </Link>
          </div>
          

          
        </div>
      </div>
    </section>
  );
}