"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function PraxisSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-2 md:order-1"
        >
          <Image src="/praxis_1.jpg" alt="Praxis" fill className="object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="order-1 md:order-2"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Praxis</h2>
          <p className="text-lg text-gray-700 mb-4">
            Die Praxis liegt im 21. Wiener Gemeindebezirk, am Fuße des Bisambergs.
            Die Räumlichkeiten sind so eingerichtet, dass Sie sich entspannen können und wohl fühlen.
            Hier können Sie in einer ruhigen und einladenden Umgebung Ihren Alltag zurücklassen und sich auf Ihre persönliche Entwicklung konzentrieren.
          </p>
        </motion.div>
      </div>
    </section>
  )
}