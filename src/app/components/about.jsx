import './about.css'
import localFont from "next/font/local";
import Image from 'next/image';
const delbenFont = localFont({
  src: "/FjallaOne-Regular.ttf", // relative to public folder
  weight: "400",
  style: "normal",
  variable: "--delben-font",
});
export default function About() {
  return (
    <>
      <div className="about">

        <div className="about-flex">

          {/* Image Section */}
          <div className="about-image">
            <Image
              src="/about.png"   // put your image in public
              alt="Delben School"
              width={500}
              height={400}
            />
          </div>

          {/* Text Section */}
          <div className="about-content">
            <h3>
              WELCOME TO <br /> S C H O O L S
            </h3>

            <span className={`${delbenFont.className} textcolor`}>
              DELBEN
            </span>

            <p className="abouttext">
              Delben Schools is a center of excellence committed to nurturing 
              young minds and building future leaders. We provide a balanced 
              education that combines academic strength, moral discipline, 
              creativity, and innovation. Our dedicated teachers and supportive 
              learning environment help every student discover their potential 
              and achieve greatness.
              
              At Delben, we believe education goes beyond the classroom. 
              We foster leadership, confidence, and character development 
              to prepare students for global opportunities and lifelong success.
            </p>
          </div>

        </div>

      </div>
    </>
  )
}