"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { navigationItems } from "@/app/page"

interface HeaderProps {
  activeSection: string
  onNavigate: (sectionId: string) => void
  isMobileMenuOpen: boolean
  onMobileMenuToggle: () => void
}

export default function Header({ activeSection, onNavigate, isMobileMenuOpen, onMobileMenuToggle }: HeaderProps) {
  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 bg-white/95 shadow-md backdrop-blur-sm h-20`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 h-full">
        <button
          onClick={() => onNavigate("home")}
          className="text-xl font-semibold text-gray-800 hover:opacity-80 transition-opacity duration-200"
        >
          <div className="min-w-[120px] md:min-w-[200px] flex-shrink-0">
            <Image
              src="/Logo_Name.png"
              alt="Psychotherapeutische Praxis Logo"
              width={200}
              height={50}
              className="object-contain"
              priority
            />
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex">
          <ul className="flex space-x-6">
            {navigationItems.map((item) => (
              <motion.li
                key={item.id}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative"
              >
                <button
                  onClick={() => onNavigate(item.id)}
                  className={`relative px-3 py-2 transition-all duration-300 rounded-md whitespace-nowrap ${activeSection === item.id
                    ? "bg-gray-50 text-primary font-medium"
                    : "text-gray-700 hover:bg-gray-50 hover:text-primary"
                    }`}
                >
                  {item.name}
                </button>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden relative w-8 h-8 flex items-center justify-center group"
          onClick={onMobileMenuToggle}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <span className={`absolute h-0.5 w-6 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 top-3' : 'top-1'
              }`} />
            <span className={`absolute h-0.5 w-6 bg-gray-800 transition-all duration-300 top-3 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`} />
            <span className={`absolute h-0.5 w-6 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 top-3' : 'top-5'
              }`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="xl:hidden absolute top-full left-0 right-0 z-50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col space-y-1 bg-white/95 backdrop-blur-sm px-4 py-4 shadow-lg">
              {navigationItems.map((item) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <button
                    className={`block w-full py-3 px-4 rounded-md transition-all duration-200 ${activeSection === item.id
                      ? "bg-gray-50 text-primary font-medium" : "text-gray-700 hover:bg-gray-50 hover:text-primary"
                      }`}
                    onClick={() => {
                      onNavigate(item.id)
                      onMobileMenuToggle()
                    }}
                  >
                    {item.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
