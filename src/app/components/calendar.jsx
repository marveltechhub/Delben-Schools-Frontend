"use client"
import React, { useEffect, useState } from "react";
import "./calendar.css";

export default function Calendar({ events: initialEvents } = {}) {
    const [now, setNow] = useState(() => new Date());

    useEffect(() => {
        const t = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(t);
    }, []);

    // build sensible sample events using current date so "next year" and "March" are correct
    const nextYear = now.getFullYear() + 1;
    const marchYear = (now.getMonth() <= 2) ? now.getFullYear() : now.getFullYear() + 1;

    const sampleEvents = [
        { id: 1, title: "Mid Term Break", date: new Date(now.getFullYear(), 2, 1, 8, 0).toISOString(), description: "All students return to school." },
        { id: 2, title: "PTA Meeting (Next Year)", date: new Date(nextYear, 8, 15, 17, 30).toISOString(), description: "Annual PTA meeting — plan for the next school year." },
        { id: 3, title: "Interhouse Sports", date: new Date(marchYear, 2, 20, 9, 0).toISOString(), description: "Inter-house track and field events." },
        { id: 4, title: "Science Fair", date: new Date(now.getFullYear(), 4, 5, 9, 0).toISOString(), description: "Inter-house science exhibition." }
    ];

    const events = Array.isArray(initialEvents) && initialEvents.length ? initialEvents : sampleEvents;

    function getCountdownParts(target) {
        const diffMs = target - now;
        if (diffMs <= 0) return null; // event passed
        if (diffMs <= 60 * 1000) return { label: "Happening now", parts: null };

        const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diffMs / (1000 * 60)) % 60);
        const seconds = Math.floor((diffMs / 1000) % 60);

        return { days, hours, minutes, seconds };
    }

    function formatDate(d) {
        return new Date(d).toLocaleString(undefined, {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        });
    }

    const sorted = [...events].sort((a, b) => new Date(a.date) - new Date(b.date));

    return (
        <div className="calendar">
            <h2>School Calendar</h2>
            <div className="calendar-now">Current time: {now.toLocaleString()}</div>

            <ul className="events-list">
                {sorted.map(ev => {
                    const target = new Date(ev.date);
                    const diffMs = target - now;
                    const parts = getCountdownParts(target);

                    return (
                        <li key={ev.id} className={`event ${diffMs < 0 ? "past" : "upcoming"}`}>
                            <div className="event-main">
                                <div className="event-title">{ev.title}</div>
                                <div className="event-date">{formatDate(ev.date)}</div>
                            </div>

                            <div className="event-meta">
                                {parts ? (
                                    <div className="countdown">
                                        <div className="count-item">
                                            <div className="count-num">{parts.days}</div>
                                            <div className="count-label">Days</div>
                                        </div>
                                        <div className="count-sep">:</div>
                                        <div className="count-item">
                                            <div className="count-num">{String(parts.hours).padStart(2, "0")}</div>
                                            <div className="count-label">Hours</div>
                                        </div>
                                        <div className="count-sep">:</div>
                                        <div className="count-item">
                                            <div className="count-num">{String(parts.minutes).padStart(2, "0")}</div>
                                            <div className="count-label">Mins</div>
                                        </div>
                                        <div className="count-sep">:</div>
                                        <div className="count-item">
                                            <div className="count-num">{String(parts.seconds).padStart(2, "0")}</div>
                                            <div className="count-label">Secs</div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="status">{diffMs <= 60 * 1000 && diffMs > 0 ? "Happening now" : "Event passed"}</div>
                                )}
                            </div>

                            {ev.description && <div className="event-desc">{ev.description}</div>}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}