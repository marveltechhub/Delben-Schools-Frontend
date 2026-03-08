"use client";
import React, { useEffect, useState } from "react";
import "./testimonials.css";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const newsSlides = [
{
id: 1,
image: "/about.png",
title: "A heartfelt message of appreciation",
text: "A heartfelt message of appreciation from the Education Secretary to all DLHS Alumni.",
},
{
id: 2,
image: "/graduate.png.webp",
title: "First class honours spotlight",
text: "Meet some DLHS Alumni who graduated with first class honours in their various fields.",
},
{
id: 3,
image: "/upcoming.png.webp",
title: "DLHS Empowerment & Networking",
text: "DLHS Alumni Empowerment and Networking Session featuring on the ACTIVATE 9.0 programme.",
},
{
id: 4,
image: "/upcoming.png.webp",
title: "DLHS Empowerment & Networking",
text: "DLHS Alumni Empowerment and Networking Session featuring on the ACTIVATE 9.0 programme.",
},
];

export default function Testimonials() {
const [currentIndex, setCurrentIndex] = useState(0);

const goToSlide = (index) => {
const total = newsSlides.length;
const next = (index + total) % total;
setCurrentIndex(next);
};

const handlePrev = () => {
goToSlide(currentIndex - 1);
};

const handleNext = () => {
goToSlide(currentIndex + 1);
};

useEffect(() => {
const auto = setInterval(() => {
setCurrentIndex((prev) => (prev + 1) % newsSlides.length);
}, 6000);

return () => clearInterval(auto);

}, []);

return (
<>
{/* Discover Section */} 
<section className="discover-section"> <div className="discover-inner"> <h2 className="discover-heading">DISCOVER DELBEN</h2> <p className="discover-subtitle">
Learn more about us, our campuses, pioneering projects, and innovative educational
approaches. </p>

      <div className="discover-grid">
        <article className="discover-card discover-card--about">
          <div className="discover-image-frame">
            <div className="discover-image">
              <Image
                src="/update.webp"
                alt="Students and staff at Delben High Schools"
                width={480}
                height={320}
              />
            </div>
          </div>

          <h3 className="discover-card-title">Get to Know us</h3>
          <p className="discover-card-text">
            DLHS is a mission co-educational full boarding school committed to providing an
            all-round and qualitative education…
          </p>

          <Link href="/about" className="discover-button">
            <span>Learn more</span>
          </Link>
        </article>

        <article className="discover-card discover-card--campus">
          <div className="discover-image-frame">
            <div className="discover-image">
              <Image
                src="/campuses.webp"
                alt="Delben High Schools campus and facilities"
                width={480}
                height={320}
              />
            </div>
          </div>

          <h3 className="discover-card-title">Our Campuses</h3>
          <p className="discover-card-text">
            Explore our serene learning environment, modern classrooms, and facilities designed
            to support every learner.
          </p>

          <Link href="/campuses" className="discover-button discover-button--arrow">
            <span>Tour our school</span>
            <span className="discover-button-arrow">→</span>
          </Link>
        </article>

        <article className="discover-card discover-card--projects">
          <div className="discover-image-frame">
            <div className="discover-image">
              <Image
                src="/about.png"
                alt="Students working on school projects"
                width={480}
                height={320}
              />
            </div>
          </div>

          <h3 className="discover-card-title">Our Projects</h3>
          <p className="discover-card-text">
            Discover pioneering projects and initiatives that inspire creativity, leadership,
            and real-world problem solving.
          </p>

          <Link href="/projects" className="discover-button discover-button--arrow">
            <span>View our projects</span>
            <span className="discover-button-arrow">→</span>
          </Link>
        </article>
      </div>
    </div>
  </section>

  {/* News Slider */}
  {/* News Slider */}
<section className="news-section">
  <div className="news-inner">
    <div className="news-header">
      <h2 className="news-title">DLHS News & Updates</h2>

      <Link href="/news" className="news-view-more">
        <span>View More</span>
        <span className="news-view-more-arrow">→</span>
      </Link>
    </div>

    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      centeredSlides={true}
      loop={true}
      autoplay={{ delay: 5000 }}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        0: {
          slidesPerView: 1.2,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      className="news-swiper"
    >
      {newsSlides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <article className="news-card">
            <div className="news-image">
              <img src={slide.image} alt={slide.title} />
            </div>

            <div className="news-body">
              <h3 className="news-card-title">{slide.title}</h3>
              <p className="news-card-text">{slide.text}</p>
            </div>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>
</>


);
}
