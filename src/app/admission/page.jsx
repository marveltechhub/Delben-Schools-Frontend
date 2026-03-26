import AdmissionForm from './components/AdmissionForm';
import './page.css'
import Link from 'next/link';
import { ArrowRight, Calendar, CheckCircle, GraduationCap, Users, Clock, MapPin, Phone, Mail } from 'lucide-react';

export const metadata = {
  title: "Delben Schools — Admissions",
  description:
    "Apply to Delben Schools. Learn about our admission steps, requirements and how to enroll your child for a quality education.",
  keywords: ["Delben Schools", "admissions", "apply", "enrollment", "school admission"],
}

export default function Admissions() {
  const processes = [
    {
      step: "01",
      title: "Obtain Form",
      description: "Visit our school office or download the application form online to begin the admission process.",
      icon: "📝"
    },
    {
      step: "02",
      title: "Submit Documents",
      description: "Provide required documents including birth certificate, passport photos, and previous school records.",
      icon: "📄"
    },
    {
      step: "03",
      title: "Entrance Exam",
      description: "Your child will undergo a placement assessment to determine the appropriate class level.",
      icon: "📋"
    },
    {
      step: "04",
      title: "Admission Offer",
      description: "Successful candidates receive admission letters with payment details and registration instructions.",
      icon: "🎉"
    }
  ];

  const requirements = [
    "Completed application form",
    "Birth certificate (photocopy)",
    "Two recent passport photographs",
    "Previous school report/result",
    "Transfer letter (if applicable)",
    "Immunization record"
  ];

  const programs = [
    { name: "Nursery", age: "2-4 years", icon: "🧒" },
    { name: "Primary", age: "5-11 years", icon: "📚" },
    { name: "JSS", age: "12-14 years", icon: "📖" },
    { name: "SSS", age: "15-17 years", icon: "🎓" }
  ];

  return (
    <section className="admission-page">
      {/* Hero Section */}
      <div className="ad-hero">
        <div className="ad-hero-bg"></div>
        <div className="ad-hero-content">
          <span className="ad-hero-badge">Admissions Open</span>
          <h1>Join Delben Schools</h1>
          <p>Begin your child's journey to excellence in education</p>
          <div className="ad-hero-actions">
            <Link href="#apply" className="btn btn-accent">
              Apply Now <ArrowRight size={18} />
            </Link>
            <Link href="#process" className="btn btn-outline-white">
              Learn More
            </Link>
          </div>
        </div>
        <div className="ad-hero-stats">
          <div className="stat-box">
            <span className="stat-number">500+</span>
            <span className="stat-label">Students</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">50+</span>
            <span className="stat-label">Teachers</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">25+</span>
            <span className="stat-label">Years</span>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="ad-intro">
        <div className="container">
          <div className="ad-intro-grid">
            <div className="ad-intro-content">
              <span className="section-tag">Why Choose Delben</span>
              <h2>Give Your Child the Best Start</h2>
              <p>
                Thank you for your interest in Delben Schools. We are committed to providing 
                a nurturing environment where students grow academically, morally, and socially. 
                Our admission process is designed to be simple, transparent, and welcoming to 
                families who desire quality education.
              </p>
              <div className="ad-intro-features">
                <div className="feature">
                  <CheckCircle size={20} />
                  <span>Qualified & Experienced Teachers</span>
                </div>
                <div className="feature">
                  <CheckCircle size={20} />
                  <span>Modern Learning Facilities</span>
                </div>
                <div className="feature">
                  <CheckCircle size={20} />
                  <span>Holistic Student Development</span>
                </div>
              </div>
            </div>
            <div className="ad-intro-card">
              <div className="info-card">
                <Calendar size={32} />
                <h3>Next Entrance Exam</h3>
                <p className="highlight-date">Saturday, 11th April 2026</p>
                <p className="time">9:00 AM</p>
                <Link href="#apply" className="card-link">Register Now →</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="ad-programs">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Programs</span>
            <h2>Academic Levels</h2>
          </div>
          <div className="programs-grid">
            {programs.map((prog, index) => (
              <div key={index} className="program-card">
                <span className="program-icon">{prog.icon}</span>
                <h3>{prog.name}</h3>
                <p>{prog.age}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="ad-process" id="process">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">How It Works</span>
            <h2>Admission Process</h2>
            <p>Follow these simple steps to enroll your child at Delben Schools</p>
          </div>
          <div className="process-grid">
            {processes.map((process, index) => (
              <div key={index} className="process-card">
                <div className="process-number">{process.step}</div>
                <span className="process-icon">{process.icon}</span>
                <h3>{process.title}</h3>
                <p>{process.description}</p>
                {index < processes.length - 1 && <div className="process-line"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Requirements Section */}
      <div className="ad-requirements">
        <div className="container">
          <div className="requirements-grid">
            <div className="requirements-content">
              <span className="section-tag">What You Need</span>
              <h2>Admission Requirements</h2>
              <p>Please ensure you have the following documents ready for submission:</p>
              <ul className="requirements-list">
                {requirements.map((req, index) => (
                  <li key={index}>
                    <CheckCircle size={18} />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="requirements-card">
              <h3>Need Help?</h3>
              <p>Our admissions team is ready to assist you with any questions.</p>
              <div className="contact-info">
                <div className="contact-item">
                  <Phone size={18} />
                  <span>+234 806 060 9806</span>
                </div>
                <div className="contact-item">
                  <Mail size={18} />
                  <span>info@delben.edu.ng</span>
                </div>
                <div className="contact-item">
                  <MapPin size={18} />
                  <span>21 Adeyemi Street, Lagos</span>
                </div>
              </div>
              <a 
                href="https://wa.me/2348060609806?text=Hello%20Delben%20Schools%2C%20I%20have%20a%20question%20about%20admissions." 
                className="whatsapp-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Chat on WhatsApp</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="ad-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Enroll?</h2>
            <p>Take the first step towards your child's bright future</p>
            <Link href="#apply" className="btn btn-accent btn-large">
              Start Application <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Application Form */}
      <div className="ad-form-section" id="apply">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Apply Now</span>
            <h2>Application Form</h2>
            <p>Fill out the form below to begin the admission process</p>
          </div>
          <AdmissionForm />
        </div>
      </div>
    </section>
  );
}