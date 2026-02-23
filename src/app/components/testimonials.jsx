"use client"
import React from "react";
import "./testimonials.css";

export default function Testimonials() {
    const t = {
        quote:
            "Our child has flourished at this school. The teachers are caring and professional, discipline is excellent and communication with parents is consistent. I am confident my child is in a safe, nurturing environment.",
        name: "Mrs. Aisha Bello",
        relation: "Parent of Class 5",
        // small inline SVG avatar so component works without extra assets
        image:
            "data:image/svg+xml;utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='120'%20height='120'%3E%3Crect%20fill='%23eef6ff'%20width='100%25'%20height='100%25'/%3E%3Ctext%20x='50%25'%20y='54%25'%20font-size='44'%20text-anchor='middle'%20fill='%232A6FBD'%20font-family='Arial'%20dy='.35em'%3EAB%3C/text%3E%3C/svg%3E"
    };

    return (
        <section className="testimonials">
            <div className="testimonial-card" role="article" aria-label="Parent testimonial">
                <span className="quote-mark" aria-hidden="true">“</span>

                <p className="quote-text">{t.quote}</p>

                <div className="author">
                    <img className="author-photo" src={t.image} alt={t.name} />
                    <div className="author-info">
                        <div className="author-name">{t.name}</div>
                        <div className="author-relation">{t.relation}</div>
                    </div>
                </div>
            </div>
        </section>
    );
}