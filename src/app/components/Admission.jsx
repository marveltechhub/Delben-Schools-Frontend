"use client"
import Link from 'next/link'
import './Admission.css'

export default function Admission() {
return (
    <>
    <div className="admission-container">
        <div className="admission-flex">
            <div className="white-container">
                <Link href="/admission" className="admission-link">
                <h2><span>APPLY NOW:</span> FIRST ENTRANCE  <br /> ENTRANCE EXAMINATION 2026/2027 <br /> SESSION</h2>
                </Link>
                <p>This is to notify the general public that the DLHS First Entrance Examination comes up on <b> Saturday, 11th April 2026, by 9.00am.</b> Interested candidates should begin to apply immediately.</p>
            </div>
            <div className="red-container">
                <button>Apply Now</button>
            </div>
        </div>
    </div>
    </>
)
}