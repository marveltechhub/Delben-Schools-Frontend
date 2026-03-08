import  "./page.module.css";
import localFont from "next/font/local";
import About from "./components/about";
import Learn from "./components/learnwithus";
import ContactUs from "./components/contactus";
import Journey from "./components/journey";
import Calendar from "./components/calendar";
import Testimonials from "./components/testimonials";
import Join from "./components/join";
import Footer from "./components/Footer";
import HeroSlider from "./components/HeroSlider";
import AdPopup from "./components/WelcomeModal";
import Admission from "./components/Admission";

export const metadata = {
  title: "Delben Schools | HomePage",
  description: "Welcome to Delben Schools. We provide quality education from Kindergarten to Secondary School. Join us today!",
  openGraph: {
    title: "Delben Schools | Home",
    description: "Join Delben Schools and experience excellence in education.",
    url: "https://delbenschools.org",
    siteName: "Delben Schools",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Delben Schools | Home",
    description: "Providing quality education for all students.",
    images: ["/logo.png"],
  },
};

// Font import from public folder
const delbenFont = localFont({
  src: "/FjallaOne-Regular.ttf", // relative to public folder
  weight: "400",
  style: "normal",
  variable: "--delben-font",
});

export default function HomePage() {
  return (
    <>
    <div className="body">
      <HeroSlider />
      <AdPopup />
      {/* <About /> */}
      <Learn />
      <ContactUs />
      <Journey />
      <Calendar />
      <Testimonials />
      <Join />
      <Admission />
      <Footer />
      </div>
    </>
  );
}
