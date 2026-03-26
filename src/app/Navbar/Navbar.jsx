"use client"
import { useState } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import "./Navbar.css"
import { Menu, X, ChevronDown } from "lucide-react"

const navLinks = [
  { name: "Home", href: "/" },
  { 
    name: "Academics", 
    href: "/academics",
    dropdown: [
      { name: "Curriculum", href: "/academics#curriculum" },
      { name: "Subjects", href: "/academics#subjects" },
      { name: "Examinations", href: "/academics#exams" },
    ]
  },
  { 
    name: "Admission", 
    href: "/admission",
    dropdown: [
      { name: "Apply Now", href: "/admission" },
      { name: "Requirements", href: "/admission#requirements" },
      { name: "Fees", href: "/admission#fees" },
      { name: "Schedule", href: "/admission#schedule" },
    ]
  },
  { name: "Community", href: "/community" },
  { name: "Campuses", href: "/campuses" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const pathname = usePathname()

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setOpenDropdown(null)
  }

  return (
    <nav className="navbar">
      {/* Top Bar */}
      <div className="navbar-top">
        <div className="navbar-top-inner">
          <div className="navbar-top-left">
            <span className="top-contact">📍 Lagos, Nigeria</span>
            <span className="top-contact">📞 +234 806 060 9806</span>
            <span className="top-contact">✉️ info@delben.edu.ng</span>
          </div>
          <div className="navbar-top-right">
            <Link href="/admission" className="apply-btn-top">Apply Now</Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="navbar-main">
        <div className="navbar-main-inner">
          {/* Logo */}
          <Link href="/" className="navbar-logo">
            <img src="/logo3.png" alt="Delben Schools" />
            <div className="logo-text">
              <span className="logo-name">Delben Schools</span>
              <span className="logo-tagline">Learning • Caring • Growing</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar-links">
            {navLinks.map((link) => (
              <div key={link.name} className="nav-item-wrapper">
                {link.dropdown ? (
                  <div className="nav-dropdown">
                    <Link 
                      href={link.href} 
                      className={`nav-link ${pathname === link.href ? 'active' : ''}`}
                      onClick={(e) => {
                        if (window.innerWidth > 768) {
                          e.preventDefault()
                          toggleDropdown(link.name)
                        }
                      }}
                    >
                      {link.name}
                      <ChevronDown size={16} className={`chevron ${openDropdown === link.name ? 'open' : ''}`} />
                    </Link>
                    <div className={`dropdown-menu ${openDropdown === link.name ? 'open' : ''}`}>
                      {link.dropdown.map((item) => (
                        <Link 
                          key={item.name} 
                          href={item.href}
                          className="dropdown-item"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link 
                    href={link.href} 
                    className={`nav-link ${pathname === link.href ? 'active' : ''}`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div 
        className={`mobile-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Menu - Slide from Left */}
      <div className={`mobile-menu-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <span className="mobile-menu-title">Delben Schools</span>
          <button className="close-btn" onClick={closeMobileMenu}>
            <X size={24} />
          </button>
        </div>
        <div className="mobile-menu-inner">
          {navLinks.map((link) => (
            <div key={link.name} className="mobile-nav-item">
              {link.dropdown ? (
                <>
                  <div 
                    className="mobile-nav-link has-dropdown"
                    onClick={() => toggleDropdown(link.name)}
                  >
                    {link.name}
                    <ChevronDown 
                      size={18} 
                      className={`chevron ${openDropdown === link.name ? 'open' : ''}`} 
                    />
                  </div>
                  <div className={`mobile-dropdown ${openDropdown === link.name ? 'open' : ''}`}>
                    {link.dropdown.map((item) => (
                      <Link 
                        key={item.name} 
                        href={item.href}
                        className="mobile-dropdown-item"
                        onClick={closeMobileMenu}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link 
                  href={link.href} 
                  className={`mobile-nav-link ${pathname === link.href ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>
        <div className="mobile-menu-footer">
          <Link href="/admission" className="mobile-apply-btn" onClick={closeMobileMenu}>
            Apply Now
          </Link>
        </div>
      </div>
    </nav>
  )
}