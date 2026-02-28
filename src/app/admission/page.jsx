import AdmissionForm from './components/AdmissionForm';
import './page.css'

export const metadata = {
  title: "Delben Schools — Admissions",
  description:
    "Apply to Delben Schools. Learn about our admission steps, requirements and how to enroll your child for a quality education.",
  keywords: ["Delben Schools", "admissions", "apply", "enrollment", "school admission"],
  openGraph: {
    title: "Delben Schools — Admissions",
    description:
      "Start your child's journey at Delben Schools. Find the admission process, required documents and contact details to apply.",
    url: "https://delben.school/admissions",
    siteName: "Delben Schools",
    images: [{ url: "/logo.png", width: 1200, height: 630 }],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Delben Schools — Admissions",
    description:
      "Begin your child's journey to excellence at Delben Schools. Learn about admissions and requirements.",
    images: ["/logo.png"]
  }
}

export default function Admissions() {
  return (
    <section className="admission">
      
      {/* HERO */}
      <div className="ad-hero">
        <h1>Admissions</h1>
        <p>Begin Your Child’s Journey to Excellence</p>
      </div>

      {/* INTRO */}
      <div className="ad-container">
        <h2>Join Delben Schools</h2>
        <p>
          Thank you for your interest in Delben Schools. We are committed to
          providing a nurturing environment where students grow academically,
          morally, and socially. Our admission process is designed to be simple,
          transparent, and welcoming to families who desire quality education.
        </p>
      </div>

      {/* ADMISSION PROCESS */}
      <div className="process">
        <h2>Admission Process</h2>

        <div className="steps">
          <div className="step">
            <span>1</span>
            <h3>Obtain Application Form</h3>
            <p>Visit the school or contact our office to obtain the admission form.</p>
          </div>

          <div className="step">
            <span>2</span>
            <h3>Submit Required Documents</h3>
            <p>Provide birth certificate, previous school records, and passport photographs.</p>
          </div>

          <div className="step">
            <span>3</span>
            <h3>Entrance Assessment</h3>
            <p>Applicants may undergo a short assessment to determine placement level.</p>
          </div>

          <div className="step">
            <span>4</span>
            <h3>Admission Confirmation</h3>
            <p>Successful candidates receive admission letters and payment details.</p>
          </div>
        </div>
      </div>

      {/* REQUIREMENTS */}
      <div className="ad-container">
        <h2>Admission Requirements</h2>
        <ul>
          <li>✔ Completed application form</li>
          <li>✔ Birth certificate (photocopy)</li>
          <li>✔ Two recent passport photographs</li>
          <li>✔ Previous school report/result</li>
          <li>✔ Transfer letter (if applicable)</li>
        </ul>
      </div>

      {/* CTA */}
      <div className="cta">
        <h2>Give Your Child the Best Start</h2>
        <p>
          Enroll today and become part of a community committed to excellence,
          discipline, and success.
        </p>
        <button>  <a
          className="contact-btn"
          href="https://wa.me/2348060609806?text=Hello%20Delben%20Schools%2C%20I%20have%20a%20question%20about%20admissions."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact school office on WhatsApp"
          title="Chat with Delben Schools on WhatsApp"
        >
          Contact School Office
        </a></button>
      </div>
 <AdmissionForm />
    </section>
  );
}