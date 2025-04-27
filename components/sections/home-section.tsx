"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useCallback } from "react"
import { Icon } from "@iconify/react"
import OptimizedImage from "@/components/ui/optimized-image"

interface HomeSectionProps {
  scrollToSection: (sectionId: string) => void
}

const features = [
  {
    title: "Individuelle Therapie",
    description: "In der therapeutischen Sitzung begegne ich Ihnen als Mensch in Ihrer Einzigartigkeit. Meine Haltung ist wertschätzend und offen Ihnen gegenüber.",
    icon: "line-md:heart",
  },
  {
    title: "Methodenvielfalt",
    description: "Ich nutze verschiedene therapeutische Ansätze, sodass Sie die bestmöglichen Behandlungsergebnisse erzielen.",
    icon: "ion:sparkles-outline",
  },
  {
    title: "Erfahrung",
    description: "Durch jahrelange Erfahrung in verschiedenen Fachbereichen, kann ich Sie optimal unterstützen.",
    icon: "mage:light-bulb",
  },
  {
    title: "Einzel-, Paar- & Familientherapie",
    description: "Ich biete sowohl Einzeltherapie als auch Paar- und Familientherapien an.",
    icon: "fluent-mdl2:family",
  },
]

export default function HomeSection({ scrollToSection }: HomeSectionProps) {
  const scrollToContact = useCallback(() => {
    scrollToSection('kontakt')
  }, [scrollToSection])

  return (
    <section className="pt-8">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Professionelle Psychotherapie in vertrauensvoller Atmosphäre
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Herzlich Willkommen in meiner Praxis! Ich biete Ihnen einen sicheren Raum für Ihre persönliche Entwicklung und seelische Gesundheit.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md transition-colors duration-300"
              onClick={scrollToContact}
            >
              Termin vereinbaren
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-lg overflow-hidden bg-white flex items-center justify-center"
          >
            <OptimizedImage
              src="/portrait_monika_1.jpg"
              alt="portrait_monika_1"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
              style={{ objectPosition: '50% 30%' }}
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 bg-white rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Wie ich Sie unterstützen kann</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300"
            >
              <div className="bg-red-200 p-3 rounded-full w-fit mb-4">
                <Icon icon={feature.icon} className="h-8 w-8 text-red-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </section>
  )
}
