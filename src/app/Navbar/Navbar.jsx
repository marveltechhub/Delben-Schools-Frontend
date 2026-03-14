"use client"
import { useState, useRef, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import "./Navbar.css"
import localFont from "next/font/local";
import { Phone, Mail, MapPin, PhoneCall } from "lucide-react"
import { SearchIcon } from "lucide-react"
import UpperNav from "./upperNav"
import Discover from "./discover"
import MenuNav from "./MenuNav"

const delbenFont = localFont({
  src: "/FjallaOne-Regular.ttf",
  weight: "400",
  style: "normal",
  variable: "--delben-font",
});

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  // Menu Button
  const [menuDropdown, setMenuDropdown] = useState("")
  const [openDropdown, setOpenDropdown] = useState("") // for hover/opened menu
  const [clickedDropdown, setClickedDropdown] = useState("") // remember click-opened dropdown
  const [appsOpen, setAppsOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [hideUpper, setHideUpper] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const searchInputRef = useRef(null)
  const appsMenuRef = useRef(null)

  useEffect(() => {
    if (searchOpen && searchInputRef.current) searchInputRef.current.focus()
  }, [searchOpen])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setSearchOpen(false)
    }
    if (searchOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = ""
    }
  }, [searchOpen])

  useEffect(() => {
    if (!appsOpen) return
    const onKeyDown = (e) => {
      if (e.key === "Escape") setAppsOpen(false)
    }
    const onPointerDown = (e) => {
      const root = appsMenuRef.current
      if (!root) return
      if (!root.contains(e.target)) setAppsOpen(false)
    }
    document.addEventListener("keydown", onKeyDown)
    document.addEventListener("mousedown", onPointerDown)
    document.addEventListener("touchstart", onPointerDown)
    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.removeEventListener("mousedown", onPointerDown)
      document.removeEventListener("touchstart", onPointerDown)
    }
  }, [appsOpen])

  function handleSearchSubmit(e) {
    e?.preventDefault()
    const q = (searchQuery || searchInputRef.current?.value || "").trim()
    if (q) {
      setSearchOpen(false)
      setSearchQuery("")
      router.push(`/search?q=${encodeURIComponent(q)}`)
    }
  }

 function toggleDropdown(name) {
  if (clickedDropdown === name) {
    // if already clicked, close it
    setOpenDropdown("")
    setClickedDropdown("")
  } else {
    // open and lock it
    setOpenDropdown(name)
    setClickedDropdown(name)
  }
}

  return (
    <>
    
      <div className="nav-container">
      <div className={`upper-nav ${hideUpper ? "hide" : ""}`}>
  <div className="upper-content">

    <div className="upper-left">
      <div className="capuses">
        <MapPin size={18} />
        <div className="link">
          <span>Campuses</span>
          <Link href="/" className="smaller-text">View campuses</Link>
        </div>
      </div>

      <div className="divider"></div>

      <div className="capuses">
        <PhoneCall size={18} />
        <div className="link">
          <span>Call Us</span>
          <Link href="tel:+2348000000000" className="smaller-text">+234 800 000 0000</Link>
        </div>
      </div>

      <div className="divider"></div>

      <div className="capuses">
        <Mail size={18} />
        <div className="link">
          <span>Email</span>
          <Link href="mailto:info@delbenschools.com" className="smaller-text">
            info@delbenschools.com
          </Link>
        </div>
      </div>
    </div>

    {/* APPLY BUTTON RIGHT SIDE */}
    <div className="upper-right">
      <Link href="/admission" className="apply-btn1">
        Apply Now
      </Link>
    </div>

  </div>

</div>
        <div className="navbar-container">

          {/* Logo */}
          <div className="logo-section">
            {/* <Image
              src="/logo3.png"
              alt="Delben Nur Primary & Secondary School"
              width={58}
              height={58}
              priority
              quality={200}
              className="logo-img"
            /> */}
            <img src="/logo3.png" className="logo-img" alt="" />
          </div>

          {/* Desktop Links */}
          <div className="link-container">
            <Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link>
            <Link href="/academics" className={pathname === "/academics" ? "active" : ""}>Academics</Link>

            {/* Admission dropdown */}
            <div
              className={`nav-item dropdown ${openDropdown === "admission" ? "open" : ""}`}
              onMouseEnter={() => setOpenDropdown("admission")}
              onMouseLeave={() => {
  if (clickedDropdown !== "admission") {
    setOpenDropdown("")
  }
}}
            >
              <button
                className="drop-btn"
                onClick={() => toggleDropdown("admission")}
                aria-expanded={openDropdown === "admission"}
              >
                ADMISSION <Image src="/arrow.png" alt="▼" width={12} height={12} />
              </button>
              <div className="dropdown-menu" role="menu" aria-label="Admission menu">
                <Link href="/admission">Apply Now</Link>
                <Link href="/admission#requirements">Requirements</Link>
                <Link href="/admission#fees">Fees & Payment</Link>
              </div>
            </div>

            <Link href="/community" className={pathname === "/community" ? "active" : ""}>Community</Link>

            {/* Campuses */}
            <Link href="/campuses" className={pathname === "/campuses" ? "active" : ""}>Campuses</Link>

            {/* Discover dropdown */}
            <div
              className={`nav-item dropdown ${openDropdown === "discover" ? "open" : ""}`}
              onMouseEnter={() => setOpenDropdown("discover")}
              onMouseLeave={() => {
  if (clickedDropdown !== "discover") {
    setOpenDropdown("")
  }
}}
            >
              <button
                className="drop-btn"
                onClick={() => toggleDropdown("discover")}
                aria-expanded={openDropdown === "discover"}
              >
                Discover <Image src="/arrow.png" alt="▼" width={12} height={12} />
              </button>
              <div className="dropdown-menu-discover" role="menu" aria-label="Discover menu">
                {/* <Link href="/discover/about">About Delben</Link>
                <Link href="/discover/team">Our Team</Link>
                <Link href="/discover/testimonials">Testimonials</Link> */}
                <Discover />
              </div>
            </div>

            {/* Projects dropdown */}
            <div
              className={`nav-item dropdown ${openDropdown === "projects" ? "open" : ""}`}
              onMouseEnter={() => setOpenDropdown("projects")}
              onMouseLeave={() => {
  if (clickedDropdown !== "projects") {
    setOpenDropdown("")
  }
}}
            >
              <button className="drop-btn" onClick={() => toggleDropdown("projects")} aria-expanded={openDropdown === "projects"}>
                Projects <Image src="/arrow.png" alt="▼" width={12} height={12} />
              </button>
              <div className="dropdown-menu" role="menu" aria-label="Projects menu">
                <Link href="/projects/current">Current Projects</Link>
                <Link href="/projects/upcoming">Upcoming</Link>
                <Link href="/projects/partners">Partners</Link>
              </div>
            </div>

            {/* Resources dropdown */}
            <div
              className={`nav-item dropdown ${openDropdown === "resources" ? "open" : ""}`}
              onMouseEnter={() => setOpenDropdown("resources")}
              onMouseLeave={() => {
  if (clickedDropdown !== "resources") {
    setOpenDropdown("")
  }
}}
            >
              <button className="drop-btn" onClick={() => toggleDropdown("resources")} aria-expanded={openDropdown === "resources"}>
                Resources <Image src="/arrow.png" alt="▼" width={12} height={12} />
              </button>
              <div className="dropdown-menu" role="menu" aria-label="Resources menu">
                <Link href="/resources/parents">For Parents</Link>
                <Link href="/resources/students">For Students</Link>
                <Link href="/resources/downloads">Downloads</Link>
              </div>
            </div>

            {/* Media dropdown */}
            <div
              className={`nav-item dropdown ${openDropdown === "media" ? "open" : ""}`}
              onMouseEnter={() => setOpenDropdown("media")}
              onMouseLeave={() => {
  if (clickedDropdown !== "media") {
    setOpenDropdown("")
  }
}}
            >
              <button className="drop-btn" onClick={() => toggleDropdown("media")} aria-expanded={openDropdown === "media"}>
                Media <Image src="/arrow.png" alt="▼" width={12} height={12} />
              </button>
              <div className="dropdown-menu" role="menu" aria-label="Media menu">
                <Link href="/media/gallery">Gallery</Link>
                <Link href="/media/videos">Videos</Link>
                <Link href="/media/news">News</Link>
              </div>
            </div>

            {/* Contact dropdown */}
            <div
              className={`nav-item dropdown ${openDropdown === "contact" ? "open" : ""}`}
              onMouseEnter={() => setOpenDropdown("contact")}
              onMouseLeave={() => {
  if (clickedDropdown !== "contact") {
    setOpenDropdown("")
  }
}}
            >
              <button className="drop-btn" onClick={() => toggleDropdown("contact")} aria-expanded={openDropdown === "contact"}>
                Contact <Image src="/arrow.png" alt="▼" width={12} height={12} />
              </button>
              <div className="dropdown-menu" role="menu" aria-label="Contact menu">
                <Link href="/contact">Contact Us</Link>
                <Link href="/contact/visit">Visit School</Link>
                <Link href="/contact/support">Support</Link>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="right-section">
            <button
              className={`search-btn ${searchOpen ? "open" : ""}`}
              onClick={() => setSearchOpen(true)}
              aria-label="Open search"
            >
              <SearchIcon size={18} />
            </button>

            {/* apps-style menu (opens below the icon) */}
            <div className="apps-menu-root" ref={appsMenuRef}>
              <button
                type="button"
                className={`apps-menu-trigger ${appsOpen ? "open" : ""}`}
                onClick={() => setAppsOpen((v) => !v)}
                aria-label="Open quick links"
                aria-haspopup="menu"
                aria-expanded={appsOpen}
              >
                <Image
                  src="/menu.png"
                  alt=""
                  width={16}
                  height={16}
                  className="search-menu-icon"
                />
              </button>
              <div className={`apps-menu-panel ${appsOpen ? "open" : ""}`} role="menu">
                <MenuNav onNavigate={() => setAppsOpen(false)} />
              </div>
            </div>
            <div
              className="menu-icon"
              onClick={() => setMenuOpen(true)}
              role="button"
              aria-label="Open menu"
            >
              ☰
            </div>
          </div>

        </div>
      </div>

      {/* Drawer (mobile) */}
   
{/* Overlay */}
{menuOpen && (
  <div 
    className={`overlay ${menuOpen ? "show" : ""}`} 
    onClick={() => setMenuOpen(false)} 
  />

)}
<div className={`drawer-ghost ${menuOpen ? "open" : ""}`} />
      <div className={`drawer ${menuOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <span onClick={() => setMenuOpen(false)} aria-hidden>✕</span>
        </div>

        <nav className="drawer-nav">
          <div className="logo-nav">
            <img src="/logo3.png" alt="Delben School Logo" className="nav-logo" />
            <hr className="hr"/>
            <h3 className={`${delbenFont.className}`}>Delben Schools</h3>
          </div>
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/academics" onClick={() => setMenuOpen(false)}>Academics</Link>
          <Link href="/our-school" onClick={() => setMenuOpen(false)}>Our School</Link>

          <details>
            <summary>Admission <Image src="/arrow.png" alt="▼" width={12} height={12} /></summary>
            <Link href="/admission" onClick={() => setMenuOpen(false)}>Apply Now</Link>
            <Link href="/admission#requirements" onClick={() => setMenuOpen(false)}>Requirements</Link>
            <Link href="/admission#fees" onClick={() => setMenuOpen(false)}>Fees & Payment</Link>
          </details>
           
          <Link href="/community" onClick={() => setMenuOpen(false)}>Community</Link>
          <Link href="/campuses" onClick={() => setMenuOpen(false)}>Campuses</Link>

          <details>
            <summary>Discover<Image src="/arrow.png" alt="▼" width={12} height={12} /></summary>
            <Link href="/discover/about" onClick={() => setMenuOpen(false)}>About Delben</Link>
            <Link href="/discover/team" onClick={() => setMenuOpen(false)}>Our Team</Link>
            <Link href="/discover/testimonials" onClick={() => setMenuOpen(false)}>Testimonials</Link>
          </details>

          <details>
            <summary>Projects <Image src="/arrow.png" alt="▼" width={12} height={12} /></summary>
            <Link href="/projects/current" onClick={() => setMenuOpen(false)}>Current Projects</Link>
            <Link href="/projects/upcoming" onClick={() => setMenuOpen(false)}>Upcoming</Link>
          </details>

          <details>
            <summary>Resources <Image src="/arrow.png" alt="▼" width={12} height={12} /></summary>
            <Link href="/resources/parents" onClick={() => setMenuOpen(false)}>For Parents</Link>
            <Link href="/resources/downloads" onClick={() => setMenuOpen(false)}>Downloads</Link>
          </details>

          <details>
            <summary>Media <Image src="/arrow.png" alt="▼" width={12} height={12} /></summary>
            <Link href="/media/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
            <Link href="/media/videos" onClick={() => setMenuOpen(false)}>Videos</Link>
          </details>

          <details>
            <summary>Contact</summary>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
            <Link href="/contact/visit" onClick={() => setMenuOpen(false)}>Visit School</Link>
          </details>

          <div className="drawer-search">
            <input type="search" placeholder="Search site..." onKeyDown={(e) => {
              if (e.key === "Enter") {
                const q = e.currentTarget.value.trim()
                if (q) window.location.href = `/search?q=${encodeURIComponent(q)}`
              }
            }} />
          </div>
        </nav>
      </div>

      {menuOpen && (
        <div className="overlay" onClick={() => setMenuOpen(false)}></div>
      )}

      {/* Full-screen transparent search overlay */}
      <div
        className={`search-overlay ${searchOpen ? "search-overlay-open" : ""}`}
        onClick={(e) => e.target === e.currentTarget && setSearchOpen(false)}
        aria-hidden={!searchOpen}
      >
        <div className="search-overlay-content" onClick={(e) => e.stopPropagation()}>
          <button
            type="button"
            className="search-overlay-close"
            onClick={() => setSearchOpen(false)}
            aria-label="Close search"
          >
            ✕
          </button>
          <form onSubmit={handleSearchSubmit} className="search-overlay-form">
            <input
              ref={searchInputRef}
              type="search"
              className="search-overlay-input"
              placeholder="Type to search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search site"
            />
            <button type="submit" className="search-overlay-btn">
              <SearchIcon size={18} />
            </button>
          </form>
        </div>
      </div>
    </>
  )
}