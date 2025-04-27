"use client"

import { motion } from "framer-motion"
import OptimizedImage from "@/components/ui/optimized-image"

export default function PortraitSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <motion.h2
        className="text-3xl font-bold text-sage-900 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Portrait</h2>
          <h3 className="text-2xl font-semibold text-sage-800 mb-4">Monika Larisch</h3>
          <ul className="space-y-2 text-lg text-sage-700 list-disc pl-6">
            <li>Psychotherapeutin</li>
            <li>Systemische Therapie</li>
            <li>Systemische Familientherapie</li>
            <li>Dipl. Sozialpädagogin</li>
            <li>Arbeit in freier Praxis seit über 20 Jahren</li>
            <li>Weiterbildung in energetischer Psychotherapie nach Dr. Fred Gallo</li>
            <li>AFT - Aufsuchende Familientherapie nach Dr. Luise-Marie Conen</li>
            <li>20 Jahre bei der MAG ELF (Wiener Kinder- und Jugendhilfe) / Krisenabreit mit Kindern, Jugendlichen und deren Familien / Mobile Arbeit mit Multiproblemfamilien</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
        >
          <OptimizedImage
            src="/portrait_monika_2.jpg"
            alt="Monika Larisch"
            fill
            className="object-cover object-[center_10%]"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </motion.div>
      </div>
    </section>
  )
}
