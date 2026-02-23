import './journey.css'
import localFont from "next/font/local";
import Image from 'next/image';

const delbenFont = localFont({
  src: "/FjallaOne-Regular.ttf",
  weight: "400",
  style: "normal",
  variable: "--delben-font",
});

export default function Journey() {
  return (
    <div className="journey-container">
      <h3 className={`${delbenFont.className}`}>OUR PROGRAM</h3>

      <h1 className={`${delbenFont.className} titletext`}>
        JOURNEY OF EDUCATION AT <span className='schoolname'>DELBEN</span>
      </h1>

      <div className="timeline">
        <div className="timeline-line"></div>

        <div className="timeline-item left">
          <div className="dot"></div>
          <p>Kindergarten</p>
        </div>

        <div className="timeline-item center">
          <div className="dot"></div>
          <p>Primary</p>
        </div>

        <div className="timeline-item right">
          <div className="dot"></div>
          <p>Secondary</p>
        </div>
      </div>

      <div className="flex">

  {/* IMAGE SECTION */}
  <div className="image-grid">

    {/* Top Large Image */}
    <div className="image-large">
      <Image src="/ben.jpg" alt="Primary School" fill />
    </div>

    {/* Bottom Two Small Images */}
    <div className="image-row">
      <div className="image-small">
        <Image src="/group.png" alt="Second Image" fill />
      </div>

      <div className="image-small">
        <Image src="/class.jpg" alt="Third Image" fill />
      </div>
    </div>
</div>

        <div className="text">
          <h2 className={`${delbenFont.className} primary`}>
            PRIMARY SCHOOL
          </h2>

          <p>
            Our Primary School program at DELBEN is designed to build a strong 
            academic foundation while nurturing confidence, creativity, and 
            critical thinking skills. We provide a balanced curriculum that 
            combines core subjects such as Mathematics, English, Science, and 
            Social Studies with technology, arts, and character development. 
            Our experienced teachers create an engaging learning environment 
            where every child is encouraged to explore, ask questions, and 
            discover their unique strengths.
          </p>

          <p>
            Beyond academics, we emphasize discipline, leadership, teamwork, 
            and moral values to prepare pupils for lifelong success. Through 
            interactive lessons, group activities, and practical learning 
            experiences, our students develop independence, responsibility, 
            and a passion for excellence. At DELBEN Primary School, we do not 
            just teach — we inspire young minds to grow, achieve, and become 
            confident leaders of tomorrow.
          </p>
        </div>
      </div>

    </div>
  )
}