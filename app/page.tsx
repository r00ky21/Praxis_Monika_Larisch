"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Icon } from "@iconify/react"
import Banner from "@/components/layout/banner"
import HomeSection from "@/components/sections/home-section"
import PortraitSection from "@/components/sections/portrait-section"
import PraxisSection from "@/components/sections/praxis-section"
import PsychotherapieSection from "@/components/sections/psychotherapie-section"
import BeratungSection from "@/components/sections/beratung-section"
import KontaktSection from "@/components/sections/kontakt-section"
import LinksSection from "@/components/sections/links-section"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

// Define the navigation items
export const navigationItems = [
  { id: "home", name: "Home" },
  { id: "praxis", name: "Praxis" },
  { id: "portrait", name: "Portrait" },
  { id: "psychotherapie", name: "Psychotherapie" },
  { id: "beratung", name: "Beratung nach § 95 AußStrg" },
  { id: "kontakt", name: "Kontakt" },
  { id: "links", name: "Links" },
]

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [buttonBottom, setButtonBottom] = useState(24) // Pixel-Wert statt CSS-Klasse

  // Refs für die Abschnitte
  const homeRef = useRef<HTMLDivElement>(null)
  const portraitRef = useRef<HTMLDivElement>(null)
  const praxisRef = useRef<HTMLDivElement>(null)
  const psychotherapieRef = useRef<HTMLDivElement>(null)
  const methodenvielfaltRef = useRef<HTMLDivElement>(null)
  const beratungRef = useRef<HTMLDivElement>(null)
  const kontaktRef = useRef<HTMLDivElement>(null)
  const linksRef = useRef<HTMLDivElement>(null)

  // Mapping von Abschnitts-IDs zu Refs
  const sectionRefs = {
    home: homeRef,
    portrait: portraitRef,
    praxis: praxisRef,
    psychotherapie: psychotherapieRef,
    methodenvielfalt: methodenvielfaltRef,
    beratung: beratungRef,
    kontakt: kontaktRef,
    links: linksRef,
  }

  // Funktion zum Scrollen zu einem Abschnitt
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    setIsMobileMenuOpen(false)

    const sectionRef = sectionRefs[sectionId as keyof typeof sectionRefs]
    if (sectionRef && sectionRef.current) {
      const yOffset = -80 // Header-Höhe berücksichtigen
      const element = sectionRef.current
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset

      // Verzögerung hinzufügen, um sicherzustellen, dass das Menü geschlossen ist
      setTimeout(() => {
        window.scrollTo({
          top: y,
          behavior: "smooth"
        })
      }, 100)
    }
  }

  // Funktion zum Scrollen zum Seitenanfang
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // Effekt für Scroll-Events
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)

      // Berechnen der Position relativ zum Footer
      const footer = document.querySelector('footer')
      if (footer) {
        const footerRect = footer.getBoundingClientRect()
        const footerTop = footerRect.top
        const footerHeight = footerRect.height
        const windowHeight = window.innerHeight
        const buttonHeight = 48 // 12 rem = 48px

        if (footerTop < windowHeight) {
          // Footer ist im Sichtfeld - berechne den optimalen Abstand
          const visibleFooterHeight = windowHeight - footerTop
          const newBottom = Math.min(visibleFooterHeight + 16, footerHeight + 16) // 16px extra Abstand
          setButtonBottom(newBottom)
        } else {
          // Footer ist nicht sichtbar
          setButtonBottom(24) // Standard: 24px vom unteren Rand
        }
      }
    }

    // Initial berechnen und dann bei Scroll aktualisieren
    handleScroll()
    window.addEventListener("scroll", handleScroll)

    // Auch bei Größenänderung des Fensters neuberechnen
    window.addEventListener("resize", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  // Intersection Observer für automatische Navigationsaktualisierung beim Scrollen
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-100px 0px -70% 0px",
      threshold: 0
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          if (sectionId && sectionId !== activeSection) {
            setActiveSection(sectionId)
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Beobachte alle Sektionen
    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [activeSection])

  return (
    <main className="min-h-screen bg-white">
      <Banner />
      <Header
        activeSection={activeSection}
        onNavigate={scrollToSection}
        isMobileMenuOpen={isMobileMenuOpen}
        onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />

      {/* Inhaltsabschnitte */}
      <div id="home" ref={homeRef}>
        <HomeSection scrollToSection={scrollToSection} />
      </div>

      <div id="praxis" ref={praxisRef}>
        <PraxisSection />
      </div>

      <div id="portrait" ref={portraitRef}>
        <PortraitSection />
      </div>

      <div id="psychotherapie" ref={psychotherapieRef}>
        <PsychotherapieSection />
      </div>

      <div id="beratung" ref={beratungRef}>
        <BeratungSection />
      </div>

      <div id="kontakt" ref={kontaktRef}>
        <KontaktSection />
      </div>

      <div id="links" ref={linksRef}>
        <LinksSection />
      </div>

      {/* Footer */}
      <Footer />

      {/* Scroll-to-Top Button */}
      {showScrollTop && (
        <motion.button
          style={{ bottom: `${buttonBottom}px` }}
          className={`fixed right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-all duration-300 ease-in-out hover:bg-primary-dark`}
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Zum Seitenanfang scrollen"
        >
          <Icon icon="iconamoon:arrow-up-2-duotone" className="h-8 w-8" />
        </motion.button>
      )}
    </main>
  )
}
