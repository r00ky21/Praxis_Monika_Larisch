"use client"

import { motion } from "framer-motion"
import { Icon } from "@iconify/react"

export default function LinksSection() {
  const linkCategories = [
    {
      title: "Berufsverbände & Arbeitsgemeinschaften",
      links: [
        {
          title: "Österreichischer Bundesverband für Psychotherapie (ÖBVP)",
          url: "https://www.psychotherapie.at/",
          description: "Informationen zur Psychotherapie in Österreich",
        },
        {
          title: "Österreichischen Arbeitsgemeinschaft für systemische Therapie und systemische Studien (ÖAS)",
          url: "https://oeas.at/",
          description: "Informationen zur systemischen Therapie und Ausbildung in Österreich",
        },
      ],
    },
    {
      title: "Ärzt:innen & Kolleg:innen",
      links: [
        {
          title: "Dr. Angelika Majneri-Winter",
          url: "https://majneri.at/",
          description: "Ärztin für Allgemeinmedizin",
        },
        {
          title: "Mag.(FH) Stefan Schwaab",
          url: "https://www.psychotherapie-schwab.at/",
          description: "Psychotherapeut / Systemische Therapie",
        },
      ],
    },
    {
      title: "Selbsthilfegruppen",
      links: [
        {
          title: "Dachverband der Selbsthilfegruppen Österreich",
          url: "https://www.selbsthilfe.at/",
          description: "Übersicht über Selbsthilfegruppen in Österreich",
        },
        {
          title: "Pro Mente Austria",
          url: "https://www.promenteaustria.at/",
          description: "Verein für psychische und soziale Gesundheit",
        },
      ],
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <motion.h2
        className="text-3xl font-bold text-sage-900 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Links
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-3xl mb-12"
      >
        <p className="text-lg text-sage-700">
          Hier finden Sie eine Sammlung nützlicher Links zu Themen rund um Psychotherapie, psychische Gesundheit und
          Selbsthilfe. Diese Links können Ihnen zusätzliche Informationen und Unterstützung bieten.
        </p>
      </motion.div>

      <div className="space-y-12">
        {linkCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-sage-800 mb-6">{category.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.links.map((link, linkIndex) => (
                <motion.a
                  key={link.title}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-start">
                    <Icon icon="pajamas:external-link" className="h-5 w-5 text-sage-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-sage-800 mb-1">{link.title}</h4>
                      <p className="text-sage-600 text-sm">{link.description}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-12 bg-sage-50 p-6 rounded-lg"
      >
        <h3 className="text-xl font-semibold text-sage-800 mb-4">Hinweis</h3>
        <p className="text-sage-700">
          Die hier aufgeführten Links dienen lediglich Informationszwecken. Ich übernehmene keine Verantwortung für die
          Inhalte externer Websites. Die Auflistung stellt keine Empfehlung oder Bewertung der verlinkten Inhalte dar.
        </p>
      </motion.div>
    </section>
  )
}
