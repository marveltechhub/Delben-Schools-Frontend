import Image from 'next/image'
import './learnwithus.css'
import localFont from "next/font/local";
import Link from 'next/link';

const delbenFont = localFont({
  src: "/roboto.ttf",
  weight: "400",
  style: "normal",
  variable: "--delben-font",
});

export default function Learn() {
  return (
    <>
    <section className="info-section">

  <div className="info-container">

    <div className="info-image">
      <img src="/exam.jpg" alt="school"/>
    </div>

    <div className="info-box">
<h1 className={delbenFont.className}>FIRST ENTRANCE <br /> EXAMINATION 2026/2027 SESSION</h1>
      <p >
        This is to notify the general public that the DELBEN First Entrance Examination comes up on <span className="p-text-learn">Saturday, 11th April 2026, by 9.00am.</span> Interested candidates should begin to apply immediately.
      </p>

<div className="button-container">
  <Link href="/admission-advert">VIEW ADMISSION ADVERT</Link>
  <Link href="/admission-process">VIEW ADMISSION PROCESS</Link>
  <Link href="/admission-form">VIEW ADMISSION BROCHURE</Link>
  <Link href="/admission-form">APPLY ONLINE NOW</Link>
</div>
    </div>

  </div>

</section>
    </>
  )
}