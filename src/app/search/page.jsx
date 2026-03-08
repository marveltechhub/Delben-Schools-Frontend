"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import "./page.css"

function SearchContent() {
  const searchParams = useSearchParams()
  const q = searchParams.get("q") || ""

  return (
    <main className="search-page">
      <div className="search-page-inner">
        <h1 className="search-page-title">Search results</h1>
        <p className="search-page-query">
          You searched for: <strong>"{q}"</strong>
        </p>

        <section className="search-results">
          {q ? (
            <>
              <p className="search-results-count">Showing results for your search.</p>
              <ul className="search-results-list">
                <li>
                  <Link href="/">Home</Link>
                  <span className="search-result-meta"> — Main page</span>
                </li>
                <li>
                  <Link href="/academics">Academics</Link>
                  <span className="search-result-meta"> — Programs and curriculum</span>
                </li>
                <li>
                  <Link href="/admission">Admission</Link>
                  <span className="search-result-meta"> — Apply and requirements</span>
                </li>
                <li>
                  <Link href="/community">Community</Link>
                  <span className="search-result-meta"> — School community</span>
                </li>
                <li>
                  <Link href="/campuses">Campuses</Link>
                  <span className="search-result-meta"> — Our campuses</span>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                  <span className="search-result-meta"> — Get in touch</span>
                </li>
              </ul>
            </>
          ) : (
            <p className="search-no-query">Enter a search term above to see results.</p>
          )}
        </section>
      </div>
    </main>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <main className="search-page">
        <div className="search-page-inner">
          <p className="search-no-query">Loading search...</p>
        </div>
      </main>
    }>
      <SearchContent />
    </Suspense>
  )
}
