import './acad.css'

// SEO metadata for Next.js app router
export const metadata = {
  title: "Delben School — Academics | Delben School",
  description:
    "Delben School is known for consistent academic success, strong pastoral care and a balanced curriculum that prepares students for life and leadership.",
  openGraph: {
    title: "Delben School — Academics",
    description:
      "Explore Delben School's academic approach, curriculum, results and admissions — known for consistent success.",
    url: "https://delben.school/academics",
    siteName: "Delben School",
    images: [{ url: "/og-academics.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Delben School — Academics",
    description:
      "Delben School: strong academics, pastoral care and excellent results.",
    images: ["/og-academics.png"],
  },
};

export default function Academics() {
  return (
    <main className="academics-page" style={{ padding: 24 }}>
      <header style={{ maxWidth: 980, margin: "0 auto 18px" }}>
        <h1 style={{ fontSize: "2rem", margin: 0, color: "#0b3a73" }}>
          Delben School — Academics
        </h1>
        <p style={{ marginTop: 8, color: "#334155", fontSize: "1rem" }}>
          Delben School is known for consistent academic success, strong pastoral
          care and a balanced curriculum that prepares students for life and leadership.
        </p>
      </header>

      <section style={{ maxWidth: 980, margin: "0 auto 20px", display: "grid", gap: 16 }}>
        <div>
          <h2 style={{ marginBottom: 8 }}>Our Approach</h2>
          <p style={{ color: "#475569" }}>
            We combine high academic standards with student-centred teaching.
            Lessons are engaging, practical and focused on critical thinking.
            Teachers track progress closely and support every learner to reach their potential.
          </p>
        </div>

        <div>
          <h2 style={{ marginBottom: 8 }}>Curriculum & Opportunity</h2>
          <ul style={{ color: "#475569", lineHeight: 1.7 }}>
            <li>Broad curriculum from early years through secondary — strong STEM, languages and arts.</li>
            <li>Co‑curricular clubs, sports and competitions to develop confidence and teamwork.</li>
            <li>Individualised support, enrichment and exam preparation.</li>
          </ul>
        </div>

        <div>
          <h2 style={{ marginBottom: 8 }}>Proven Results</h2>
          <p style={{ color: "#475569" }}>
            Delben School consistently posts strong exam results and university placements.
            Our alumni succeed in diverse fields and leadership roles.
          </p>

          <div style={{ display: "flex", gap: 18, marginTop: 12, flexWrap: "wrap" }}>
            <div style={{ background: "#f1f5f9", padding: 12, borderRadius: 10, minWidth: 140 }}>
              <strong style={{ display: "block", fontSize: 20, color: "#0b3a73" }}>98%</strong>
              <small style={{ color: "#475569" }}>Pass rate</small>
            </div>
            <div style={{ background: "#f1f5f9", padding: 12, borderRadius: 10, minWidth: 140 }}>
              <strong style={{ display: "block", fontSize: 20, color: "#0b3a73" }}>Top Grades</strong>
              <small style={{ color: "#475569" }}>High % of A/B grades</small>
            </div>
            <div style={{ background: "#f1f5f9", padding: 12, borderRadius: 10, minWidth: 140 }}>
              <strong style={{ display: "block", fontSize: 20, color: "#0b3a73" }}>University</strong>
              <small style={{ color: "#475569" }}>Excellent placements</small>
            </div>
          </div>
        </div>

        <div>
          <h2 style={{ marginBottom: 8 }}>Join Our Community</h2>
          <p style={{ color: "#475569" }}>
            Learn more about admissions, meet our teachers and visit us for a tour.
          </p>
          <div style={{ marginTop: 12 }}>
            <a href="/" style={{ display: "inline-block", background: "#ff6b6b", color: "#fff", padding: "10px 16px", borderRadius: 999, fontWeight: 700, textDecoration: "none" }}>
              Learn more & Join
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}