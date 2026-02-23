import './page.css'

export const metadata = {
  title: "Delben Schools — Our School",
  description:
    "Delben Schools — building excellence and shaping the future. Learn about our mission, vision, values and why parents choose Delben for their children's education.",
  openGraph: {
    title: "Delben Schools — Our School",
    description:
      "Discover Delben Schools: mission, vision, academic excellence, and a safe, nurturing environment for students.",
    url: "https://delben.school/our-school",
    siteName: "Delben Schools",
    images: [{ url: "/logo.png", width: 1200, height: 630 }],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Delben Schools — Our School",
    description:
      "Delben Schools: academic excellence, character development and a supportive learning environment.",
    images: ["/logo.png"]
  }
};

export default function OurSchool() {
  return (
    <section className="school">
      {/* HERO */}
      <div className="hero">
        <h1>Welcome to Delben Schools</h1>
        <p>Building Excellence, Shaping the Future</p>
      </div>

      {/* WHO WE ARE */}
      <div className="container">
        <h2>Who We Are</h2>
        <p>
          Delben Schools is a center of academic excellence dedicated to
          nurturing young minds and shaping future leaders. Our institution
          provides a safe, inspiring, and intellectually stimulating environment
          where students are encouraged to discover their talents and achieve
          their highest potential.
        </p>

        <p>
          We combine modern educational practices with strong moral values to
          develop confident, disciplined, and responsible individuals prepared
          to succeed in a rapidly changing world.
        </p>
      </div>

      {/* MISSION & VISION */}
      <div className="mv">
        <div className="card">
          <h3>Our Mission</h3>
          <p>
            To provide quality education that empowers students with knowledge,
            integrity, creativity, and leadership skills needed to excel
            academically and socially.
          </p>
        </div>

        <div className="card">
          <h3>Our Vision</h3>
          <p>
            To be a leading institution recognized for academic excellence,
            character development, and producing globally competitive graduates.
          </p>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="container">
        <h2>Why Choose Delben Schools?</h2>

        <ul>
          <li>✔ Excellent academic performance and examination success</li>
          <li>✔ Qualified and passionate teachers</li>
          <li>✔ Modern teaching methods and facilities</li>
          <li>✔ Safe and nurturing learning environment</li>
          <li>✔ Emphasis on discipline, leadership, and character</li>
          <li>✔ Preparation for global opportunities and success</li>
        </ul>

        <p>
          At Delben Schools, we believe that every child possesses unique
          potential. Through dedication, innovation, and continuous guidance, we
          help students develop the confidence and competence needed to succeed
          in higher education and life beyond the classroom.
        </p>
      </div>
    </section>
  );
}