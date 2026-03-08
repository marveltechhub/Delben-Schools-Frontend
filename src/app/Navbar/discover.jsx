import Link from "next/link"
import "./discover.css"

export default function Discover() {
  return (
    <>
    <div className="discover">
        <div className="discover-bg">
        <h1 className="discover-text">DISCOVER DELBEN</h1>
        </div>
    <div className="discover-container">
      
      <div className="discover-column about">
        <h4>ABOUT</h4>
        <div className="white-line"></div>
        <Link href="/discover/about">About Delben</Link>
        <Link href="/discover/about">History and Conceptualization of Delben</Link>
        <Link href="/discover/mission">Management</Link>
        <Link href="/discover/mission">Management Messages</Link>
        <Link href="/discover/mission">Mission & Vision</Link>
        <Link href="/discover/history">Campuses</Link>
      </div>

      <div className="discover-column facility">
        <h4>FACILITIES & PARTNERSHIP</h4>
        <div className="white-line"></div>
        <Link href="/academics/primary">Facilities</Link>
        <Link href="/academics/secondary">Affliations/Partnership</Link>
        <Link href="/academics/curriculum">Awards and Achievements</Link>
        <Link href="/academics/curriculum">Alumni</Link>
        <Link href="/academics/curriculum">Meet Delben's Stars - Highflyers</Link>
        <Link href="/academics/curriculum">Curriculum</Link>
      </div>

      <div className="discover-column academics">
        <h4>ACADEMICS AT DELBEN</h4>
        <div className="white-line"></div>
        <Link href="/community">Curriculum</Link>
        <Link href="/media/gallery">Leadership Entrepreneurial Training</Link>
        <Link href="/media/news">Academic departments</Link>
        <Link href="/media/news">Examinations</Link>
      </div>

      <div className="discover-column lotc">
        <h4>BEYOND ACADEMICS</h4>
        <div className="white-line"></div>
        <Link href="/admission">Activate</Link>
        <Link href="/admission#requirements">Triangle</Link>
        <Link href="/admission#fees">Valedictory Service</Link>
        <Link href="/admission#fees">Valedictory Service</Link>
        <Link href="/admission#fees">Career Development</Link>
        <Link href="/admission#fees">Learning outside the classroom</Link>
        <Link href="/admission#fees">Co-curricular Activites</Link>
        <Link href="/admission#fees">Staff training development</Link>
      </div>

    </div>
    </div>
    </>
  )
}