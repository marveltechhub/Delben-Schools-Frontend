"use client"
import { useState } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import "./Navbar.css"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <div className="nav-container">
        <div className="navbar-container">

          {/* Logo */}
          <div className="logo-section">
            <Image
              src="/logo.png"
              alt="Delben Nur Primary & Secondary School"
              width={30}
              height={30}
              style={{ borderRadius: "120px" }}
            />
            <h4>Delben Schools</h4>
          </div>

          {/* Desktop Links */}
          <div className="link-container">
            <Link href="/" className={pathname === "/" ? "active" : ""}>
              Home
            </Link>

            <Link href="/academics" className={pathname === "/academics" ? "active" : ""}>
              Academics
            </Link>

            <Link href="/our-school" className={pathname === "/our-school" ? "active" : ""}>
              Our School
            </Link>

            <Link href="/admission" className={pathname === "/admission" ? "active" : ""}>
              Admission
            </Link>

            <Link href="/community" className={pathname === "/community" ? "active" : ""}>
              Community
            </Link>

            <Link href="/campuses" className={pathname === "/campuses" ? "active" : ""}>
              Campuses
            </Link>
          </div>

          {/* Right Section */}
          <div className="right-section">
            <Link href="/login" className="login-btn">
              Login
            </Link>

            <div
              className="menu-icon"
              onClick={() => setMenuOpen(true)}
            >
              ☰
            </div>
          </div>

        </div>
      </div>

      {/* Drawer */}
      <div className={`drawer ${menuOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <span onClick={() => setMenuOpen(false)}>✕</span>
        </div>

        <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link href="/academics" onClick={() => setMenuOpen(false)}>Academics</Link>
        <Link href="/our-school" onClick={() => setMenuOpen(false)}>Our School</Link>
        <Link href="/admission" onClick={() => setMenuOpen(false)}>Admission</Link>
        <Link href="/community" onClick={() => setMenuOpen(false)}>Community</Link>
        <Link href="/campuses" onClick={() => setMenuOpen(false)}>Campuses</Link>
      </div>

      {menuOpen && (
        <div
          className="overlay"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </>
  )
}