"use client"

import { motion } from "framer-motion"
import { Icon } from "@iconify/react"
import OptimizedImage from "@/components/ui/optimized-image"

export default function PsychotherapieSection() {
  const cards = [
    {
      title: "Einzeltherapie",
      description: <>
        <Icon icon="iconamoon:clock" className="inline h-4 w-4 mr-1" /> Dauer: 50 Minuten
        <br />
        <Icon icon="humbleicons:money" className="inline h-4 w-4 mr-1" /> Kosten: € 100
      </>,
      icon: "charm:person",
    },
    {
      title: "Paar - und Familientherapie",
      description: <>
        <Icon icon="iconamoon:clock" className="inline h-4 w-4 mr-1" /> Dauer: 90 Minuten
        <br />
        <Icon icon="humbleicons:money" className="inline h-4 w-4 mr-1" /> Kosten: € 180
        <br />
        <br />
        Auf Wunsch auch in Co-Therapie mit meinem Kollegen Mag.(FH) Stefan Schwaab möglich.
      </>,
      icon: "fluent-mdl2:family",
    },
    {
      title: "Kostenzuschuss pro Stunde",
      description: <>
        ÖGK (vormals GKK): € 31.50
        <br />
        <br />
        SVA (vormals SVA /  SVB): € 45,00
        <br />
        <br />
        BVAEB (vormals BVA / VAEB): € 42,20
        <br />
        <br />
        Den genauen Ablauf bezüglich des Kostenzuschusses, bespreche ich mit Ihnen in der Therapiesitzung.
      </>,
      icon: "ph:hand-coins",
    },
    {
      title: "Organisatorisches",
      description: <>
        Die Therapiesitzungen erfolgen in regelmäßigen Intervallen, wobei es sich bewährt hat, die Abstände zu Beginn kürzer zu halten.
        Im weiteren Therapieverlauf können die Intervalle Ihren Bedürfnissen angepasst werden.
        <br />
        <br />
        Die Bezahlung erfolgt bar nach der Sitzung.
        <br />
        <br />
        Für nicht zeitgerecht abgesagte Termine (24 Stunden vorher) wird das vereinbarte Honorar verrechnet.
      </>
      ,
      icon: "mingcute:information-line",
    },

  ]

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
        >
          <OptimizedImage src="/Familienbrett_1.jpg" alt="Psychotherapie" fill className="object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Psychotherapie</h2>
          <p className="text-lg text-sage-700 mb-4">
            Psychotherapie ist eine praktisch-wissenschaftliche Tätigkeit mit dem Ziel, seelisches Leiden zu heilen oder zu lindern, in Lebenskrisen zu helfen, gestörte Verhaltensweisen und Einstellungen zu ändern und die persönliche Entwicklung und Gesundheit zu fördern.
          </p>
          <p className="text-lg text-sage-700 mb-4">
            Meine therapeutische Arbeit, nach systemischen Grundsätzen, soll dazu dienen, Ihnen die Möglichkeiten und eigenen Ressourcen zugänglich zu machen, die es erlauben, einen Veränderungsprozess in Gang zu setzen
          </p>
          <p className="text-lg text-sage-700">
            In der therapeutischen Sitzung begegne ich Ihnen als Mensch in Ihrer Einzigartigkeit. Meine Haltung ist wertschätzend und offen Ihnen gegenüber.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-12 bg-sage-50 p-6 rounded-lg"
      >

        <h3 className="text-xl font-semibold text-sage-800 mb-4">Behandlungsschwerpunkte</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
          {[
            "Depressionen und Stimmungsstörungen",
            "Angst- und Panikstörungen",
            "Burnout und Stressbewältigung",
            "Psychosomatische Symptome",
            "Sterben / Trauer / Verlust",
            "Arbeitsplatzprobleme",
            "Selbsterfahrung / Selbstfindung",
            "Genrationsprobleme",
            "Angehörige Demenzerkrankter",
            "Pflegende Angehörige",
            "Erziehungsberatung",
            "Jugendliche",
            "Pubertäts Probleme",
            "Eltern / Kind Probleme",
            "Ehe / Partnerschaft",
            "Scheidung / Trennung",
            "Neue Familienformen",
            "Konfliktregelung",
            "Lebenskrisen",
            "Mobbing"
          ].map((item, index) => (
            <li key={index} className="flex items-center text-sage-700">
              <span className="mr-2 text-sage-600">•</span>
              {item}
            </li>
          ))}
        </ul>
      </motion.div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((cards, index) => (
          <motion.div
            key={cards.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="bg-sage-200 p-3 rounded-full w-fit mb-1">
              <Icon icon={cards.icon} className="h-8 w-8 text-sage-700" />
            </div>
            <h3 className="text-xl font-semibold text-sage-800 mb-2">{cards.title}</h3>
            <p className="text-sage-700">{cards.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
