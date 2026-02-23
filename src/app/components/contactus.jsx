import localFont from "next/font/local";
import './contactus.css'
import Link from "next/link";

const delbenFont = localFont({
  src: "/FjallaOne-Regular.ttf",
  weight: "400",
  style: "normal",
  variable: "--delben-font",
});

export default function ContactUs() {
  return (
    <div className="contact-container">
      <h3 className="colortext">CONTACT US</h3>   
      <h1 className={`${delbenFont.className}`}>
        QUICK LINK TO <br /> CONNECT
      </h1> 

      <div className="contact-flex">

        {/* REGISTRATION */}
        <div className="contact1">
          <h3 className={delbenFont.className}>REGISTRATION OPEN</h3>
          <p>Secure your child’s future with quality education at DELBEN.</p>
          <Link href="/registration">
            <button className="btn-red">Register Now</button>
          </Link>
        </div>

        {/* WHATSAPP */}
        <div className="contact2">
          <h3 className={delbenFont.className}>WHATSAPP CONNECT</h3>
          <p>Chat directly with our support team for quick assistance.</p>
          <a
            href="https://wa.me/2348000000000"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn-white">Chat on WhatsApp</button>
          </a>
        </div>

        {/* ADMISSION */}
        <div className="contact1">
          <h3 className={delbenFont.className}>ADMISSION IN PROGRESS</h3>
          <p>Enroll now and give your child the best academic experience.</p>
          <Link href="/admission">
            <button className="btn-red">View Admission</button>
          </Link>
        </div>
        <div className="contact3">
          <h3 className={delbenFont.className}>BROCHURE</h3>
          <p>Enroll now and give your child the best academic experience.</p>
          <Link href="/admission">
            <button className="btn-brchhure">View Brochure</button>
          </Link>
        </div>

      </div>        
    </div>
  )
}