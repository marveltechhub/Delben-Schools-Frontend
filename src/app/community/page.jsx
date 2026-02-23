import './page.css'

export const metadata = {
  title: "Delben Schools — Community",
  description:
    "Delben Schools fosters a strong, supportive community where students, parents and staff collaborate to build character, excellence and success.",
  keywords: ["Delben Schools", "community", "parents", "students", "outreach", "education"],
  openGraph: {
    title: "Delben Schools — Community",
    description:
      "Learn how Delben Schools builds character, excellence and community engagement through partnerships, outreach and student life.",
    url: "https://delben.school/community",
    siteName: "Delben Schools",
    images: [{ url: "/logo.png", width: 1200, height: 630 }],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Delben Schools — Community",
    description:
      "Discover Delben Schools' community programs, parent partnerships and student life.",
    images: ["/logo.png"]
  }
};

export default function Community() {
  return (
    <section className="community">

      {/* HERO */}
      <div className="com-hero">
        <h1>Our Community</h1>
        <p>Together We Build Character, Excellence, and Success</p>
      </div>

      {/* INTRO */}
      <div className="com-container">
        <h2>A Strong and Supportive School Community</h2>
        <p>
          At Delben Schools, we believe that education thrives in a strong and
          united community. Our school is more than a place of learning — it is
          a family where students, parents, teachers, and staff work together to
          nurture excellence, discipline, and moral integrity.
        </p>

        <p>
          We promote a warm and inclusive atmosphere where every child feels
          valued, supported, and inspired to grow academically and socially.
          Through collaboration and mutual respect, we create an environment
          where students develop confidence, leadership skills, and a strong
          sense of belonging.
        </p>
      </div>

      {/* PARENTS PARTNERSHIP */}
      <div className="highlight">
        <div className="box">
          <h3>Partnership with Parents</h3>
          <p>
            We recognize parents as essential partners in the educational
            journey. Through open communication, regular meetings, and progress
            updates, we work closely with families to ensure every child reaches
            their full potential.
          </p>
        </div>

        <div className="box">
          <h3>Student Life & Values</h3>
          <p>
            Our students are taught the importance of discipline, respect,
            leadership, and responsibility. Through extracurricular activities,
            teamwork, and moral instruction, we nurture well-rounded
            individuals prepared to contribute positively to society.
          </p>
        </div>
      </div>

      {/* COMMUNITY IMPACT */}
      <div className="com-container">
        <h2>Community Engagement & Outreach</h2>
        <p>
          Delben Schools actively promotes community engagement through social
          initiatives, cultural events, and outreach programs. We encourage our
          students to develop compassion, social responsibility, and a spirit of
          service by participating in activities that positively impact society.
        </p>

        <p>
          By fostering unity and cooperation, we strengthen relationships within
          our local community and empower students to become responsible global
          citizens.
        </p>
      </div>

      {/* WHATSAPP CONTACT */}
      <div className="whatsapp">
        <h2>Stay Connected With Us</h2>
        <p>
          Have questions or need quick assistance? Our school community is
          always ready to support you. Reach out to us directly on WhatsApp for
          fast responses and helpful guidance.
        </p>

        <a
          href="https://wa.me/2348000000000"
          target="_blank"
          rel="noreferrer"
          className="whatsapp-btn"
        >
          Chat with Us on WhatsApp
        </a>
      </div>

    </section>
  );
}