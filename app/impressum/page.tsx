"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Icon } from "@iconify/react"

export default function ImpressumPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md"
            >
                <Link
                    href="/"
                    className="inline-flex items-center text-primary hover:text-primary-dark mb-6 transition-colors"
                >
                    <Icon icon="formkit:arrowleft" className="h-4 w-4 mr-2" />
                    Zurück zur Startseite
                </Link>

                <h1 className="text-3xl font-bold text-gray-900 mb-6">Impressum</h1>

                <div className="prose prose-sage max-w-none">
                    <h2>Angaben gemäß § 5 TMG</h2>
                    <p>
                        [Name]<br />
                        Psychotherapeutische Praxis<br />
                        [Straße Nr.]<br />
                        [PLZ] [Ort]
                    </p>

                    <h2>Kontakt</h2>
                    <p>
                        Telefon: [Telefonnummer]<br />
                        E-Mail: [E-Mail-Adresse]
                    </p>

                    <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
                    <p>
                        Berufsbezeichnung: Psychotherapeutin<br />
                        Zuständige Kammer: [Name der Kammer]<br />
                        Verliehen in: Österreich
                    </p>
                    <p>
                        Es gelten folgende berufsrechtliche Regelungen:
                        <ul>
                            <li>Psychotherapiegesetz (PthG)</li>
                            <li>Berufsordnung für Psychotherapeutinnen und Psychotherapeuten</li>
                        </ul>
                        Regelungen einsehbar unter: [URL zur Berufsordnung]
                    </p>

                    <h2>Haftung für Inhalte</h2>
                    <p>
                        Als Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                        Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
                        überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                    </p>
                    <p>
                        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
                        Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
                        Bei Bekanntwerden von entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.
                    </p>

                    <h2>Haftung für Links</h2>
                    <p>
                        Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe.
                        Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten
                        ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum
                        Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                    </p>
                    <p>
                        Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
                        Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen.
                    </p>

                    <h2>Urheberrecht</h2>
                    <p>
                        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem österreichischen Urheberrecht.
                        Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen
                        der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten,
                        nicht kommerziellen Gebrauch gestattet.
                    </p>
                    <p>
                        Soweit die Inhalte auf dieser Seite nicht von mir erstellt wurden, werden die Urheberrechte Dritter beachtet.
                        Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
                        bitte ich um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Inhalte umgehend entfernen.
                    </p>
                </div>
            </motion.div>
        </div>
    )
} 