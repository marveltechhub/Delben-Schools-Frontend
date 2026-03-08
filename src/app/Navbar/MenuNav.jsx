"use client"
import Link from "next/link"
import Image from "next/image"
import "./AppsMenu.css"

const items = [
  { href: "/campuses", label: "Campuses", img: "/school.png.webp" },
  { href: "/admission", label: "Admissions", img: "/graduate.png.webp" },
  { href: "/high-flyers", label: "High Flyers", img: "/eagle.png.webp" },
  { href: "/newsletter", label: "Newsletter", img: "/newsletter.png.webp" },
  { href: "/alumni", label: "Alumni", img: "/paper.png.webp" },
  { href: "/gallery", label: "Gallery", img: "/gallery.png.webp" },
  { href: "/eportal", label: "ePortal", img: "/upcoming.png.webp" },
  { href: "/news", label: "News", img: "/newspaper.png.webp" },
  { href: "/facilities", label: "Facilities", img: "/news.png.webp" },
]

export default function MenuNav({ onNavigate }) {
  return (
    <div className="apps-menu">
      <div className="apps-menu-grid" role="menu" aria-label="Quick links">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="apps-menu-item"
            role="menuitem"
            onClick={onNavigate}
          >
            <span className="apps-menu-iconWrap" aria-hidden="true">
              <Image src={item.img} alt="" width={34} height={34} />
            </span>
            <span className="apps-menu-label">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}