import './page.css'

export const metadata = {
  title: "Delben Schools — Campuses",
  description:
    "Explore Delben Schools' campuses. Learn about our Primary and Secondary school locations, contact details and facilities.",
  keywords: ["Delben Schools", "campuses", "primary school", "secondary school", "locations"],
  openGraph: {
    title: "Delben Schools — Campuses",
    description:
      "Discover Delben Schools' Primary and Secondary campuses, contact info and learning environments.",
    url: "https://delben.school/campuses",
    siteName: "Delben Schools",
    images: [{ url: "/logo.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Delben Schools — Campuses",
    description:
      "Find out about Delben Schools' campuses, facilities and contact details.",
    images: ["/logo.png"],
  },
};

export default function Campuses() {
  return (
    <section className="campuses">

      {/* HERO */}
      <div className="camp-hero">
        <h1>Our Campuses</h1>
        <p>Providing Quality Education in Safe and Conducive Environments</p>
      </div>

      {/* CAMPUSES */}
      <div className="camp-container">

        {/* PRIMARY SCHOOL */}
        <div className="camp-box">
          <h2>Delben Primary School</h2>

          <div className="info">
            <span className="icon">📞</span>
            <p>+234 812 345 6789</p>
          </div>

          <div className="info">
            <span className="icon">📍</span>
            <p>12 Unity Road, Dopemu, Lagos State</p>
          </div>

          <p className="desc">
            Our Primary School campus provides a warm and nurturing environment
            where young learners develop strong foundational skills in literacy,
            numeracy, creativity, and character development.
          </p>
        </div>

        {/* SECONDARY SCHOOL */}
        <div className="camp-box">
          <h2>Delben Secondary School</h2>

          <div className="info">
            <span className="icon">📞</span>
            <p>+234 813 987 6543</p>
          </div>

          <div className="info">
            <span className="icon">📍</span>
            <p>45 Excellence Avenue, Ayobo, Lagos State</p>
          </div>

          <p className="desc">
            Our Secondary School campus prepares students for academic success,
            leadership, and global opportunities through modern teaching
            methods, science innovation, and character building.
          </p>
        </div>

      </div>

    </section>
  );
}