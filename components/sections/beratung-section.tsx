"use client"

import { motion } from "framer-motion"
import { Icon } from "@iconify/react"

export default function BeratungSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <motion.h2
        className="text-3xl font-bold text-sage-900 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Beratung nach § 95 AußStrG
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-3xl mb-12"
      >
        <p className="text-lg text-sage-700 mb-4">
          Gemäß § 95 Abs. 1a Außerstreitgesetz (AußStrG) kann das Gericht in Obsorge- oder Kontaktrechtsverfahren
          anordnen, dass die Eltern eine Beratung über die spezifischen Bedürfnisse ihrer minderjährigen Kinder in
          Anspruch nehmen.
        </p>
        <p className="text-lg text-sage-700 mb-4">
          Ich biete diese gesetzlich vorgesehene Beratung an und unterstütze Eltern dabei, die Bedürfnisse ihrer
          Kinder in Trennungssituationen besser zu verstehen und zu berücksichtigen.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <div className="bg-sage-200 p-3 rounded-full w-fit mb-2">
            <Icon icon="fluent-mdl2:compare" className="h-6 w-6 text-sage-700" />
          </div>
          <h3 className="text-xl font-semibold text-sage-800 mb-2">Rechtlicher Hintergrund</h3>
          <p className="text-sage-700 mb-4">
            Der § 95 AußStrG sieht vor, dass das Gericht in Verfahren über die Obsorge oder über persönliche Kontakte
            eine Beratung anordnen kann, um die Bedürfnisse minderjähriger Kinder in Trennungssituationen zu
            berücksichtigen.
          </p>
          <p className="text-sage-700">
            Diese Beratung soll dazu beitragen, dass Eltern trotz Trennung ihre Verantwortung gemeinsam wahrnehmen und
            zum Wohl ihrer Kinder kooperieren können.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <div className="bg-sage-200 p-3 rounded-full w-fit mb-2">
            <Icon icon="radix-icons:chat-bubble" className="h-6 w-6 text-sage-700" />
          </div>
          <h3 className="text-xl font-semibold text-sage-800 mb-2">Beratungsangebot</h3>
          <p className="text-sage-700 mb-4">
            Die Beratung nach § 95 AußStrG umfasst in der Regel mehrere Sitzungen, in denen ich mit beiden
            Elternteilen – gemeinsam oder getrennt – arbeite.
          </p>
          <p className="text-sage-700">
            Ich informiere Sie über die Bedürfnisse von Kindern in Trennungssituationen, unterstütze bei der Entwicklung
            von Lösungen für Konflikte und fördere die elterliche Kommunikation und Kooperation.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-sage-50 p-6 rounded-lg"
        >
          <div className="flex items-start mb-4">
            <Icon icon="uim:process" className="h-6 w-6 text-sage-700 mr-3 mt-0.5" />
            <h3 className="text-xl font-semibold text-sage-800">Ablauf der Beratung</h3>
          </div>
          <ul className="space-y-2 text-sage-700">
            <li className="flex items-start">
              <span className="mr-2 text-sage-600">1.</span>
              <span>Erstgespräch zur Klärung der Situation und der gerichtlichen Vorgaben</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-sage-600">2.</span>
              <span>Information über die Bedürfnisse von Kindern in Trennungssituationen</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-sage-600">3.</span>
              <span>Erarbeitung von Lösungsansätzen für eventuell bestehende Konflikte</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-sage-600">4.</span>
              <span>Förderung der elterlichen Kommunikation und Kooperation</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-sage-600">5.</span>
              <span>Abschlussgespräch und Ausstellung einer Bestätigung für das Gericht</span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-sage-50 p-6 rounded-lg"
        >
          <div className="flex items-start mb-4">
            <Icon icon="mingcute:information-line" className="h-6 w-6 text-sage-700 mr-3 mt-0.5" />
            <h3 className="text-xl font-semibold text-sage-800">Organisatorisches</h3>
          </div>
          <ul className="space-y-4 text-sage-700">
            <li className="flex items-start">
              <span className="mr-2 font-medium text-sage-800">Dauer:</span>
              <span>Die Beratung umfasst in der Regel 3-5 Sitzungen à 50 Minuten.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-medium text-sage-800">Kosten:</span>
              <span>
                Die Kosten werden nach den gesetzlichen Vorgaben berechnet und können teilweise von der Krankenkasse
                übernommen werden.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-medium text-sage-800">Bestätigung:</span>
              <span>Nach Abschluss der Beratung erhalten Sie eine Bestätigung für das Gericht.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-medium text-sage-800">Termin:</span>
              <span>Bitte kontaktieren Sie mich telefonisch oder per E-Mail, um einen Termin zu vereinbaren.</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
