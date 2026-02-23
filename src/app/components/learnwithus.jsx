import Image from 'next/image'
import './learnwithus.css'
import localFont from "next/font/local";

const delbenFont = localFont({
  src: "/FjallaOne-Regular.ttf",
  weight: "400",
  style: "normal",
  variable: "--delben-font",
});

export default function Learn() {
  return (
    <div className="learn">
      <h3>
        Choose <span className={`${delbenFont.className} learntext`}>DELBEN</span>
      </h3>

      <h3 className={`${delbenFont.className} textheader`}>
        WHY LEARN WITH US ?
      </h3>

      <div className="flexcontainer">
        <div className="imagetext1">
          <Image src="/class.jpg" alt="Delben School" fill />
          <p>Smart Learning</p>
        </div>

        <div className="imagetext1">
          <Image src="/ben.jpg" alt="Delben School" fill />
          <p>Active Students</p>
        </div>

        <div className="imagetext1">
          <Image src="/student.jpg" alt="Delben School" fill />
          <p>Student Success</p>
        </div>

        <div className="imagetext1">
          <Image src="/group.png" alt="Delben School" fill />
          <p>Team Learning</p>
        </div>
      </div>
    </div>
  )
}