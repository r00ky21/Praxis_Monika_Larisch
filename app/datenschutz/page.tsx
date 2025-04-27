"use client"

import { motion } from "framer-motion"
import { Icon } from "@iconify/react"
import Link from "next/link"

export default function DatenschutzPage() {
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

                <h1 className="text-3xl font-bold text-gray-900 mb-6">Datenschutzerklärung</h1>

                <div className="prose prose-sage max-w-none">
                    <h2>1. Datenschutz auf einen Blick</h2>

                    <h3>Allgemeine Hinweise</h3>
                    <p>
                        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert,
                        wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert
                        werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie meiner unter diesem Text
                        aufgeführten Datenschutzerklärung.
                    </p>

                    <h3>Datenerfassung auf dieser Website</h3>
                    <h4>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
                    <p>
                        Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
                        können Sie dem Impressum dieser Website entnehmen.
                    </p>

                    <h4>Wie erfasse ich Ihre Daten?</h4>
                    <p>
                        Ihre Daten werden zum einen dadurch erhoben, dass Sie mir diese mitteilen. Hierbei kann es sich z. B.
                        um Daten handeln, die Sie in ein Kontaktformular eingeben.
                    </p>
                    <p>
                        Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch meine IT-Systeme
                        erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
                        Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
                    </p>

                    <h4>Wofür nutze ich Ihre Daten?</h4>
                    <p>
                        Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten.
                        Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                    </p>

                    <h4>Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
                    <p>
                        Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten
                        personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten
                        zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit
                        für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der
                        Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                    </p>
                    <p>
                        Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an mich wenden.
                    </p>

                    <h2>2. Allgemeine Hinweise und Pflichtinformationen</h2>

                    <h3>Datenschutz</h3>
                    <p>
                        Als Betreiber dieser Seiten nehme ich den Schutz Ihrer persönlichen Daten sehr ernst. Ich behandle Ihre
                        personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie
                        dieser Datenschutzerklärung.
                    </p>
                    <p>
                        Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene
                        Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung
                        erläutert, welche Daten ich erhebe und wofür ich sie nutze. Sie erläutert auch, wie und zu welchem Zweck
                        das geschieht.
                    </p>
                    <p>
                        Ich weise darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail)
                        Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
                    </p>

                    <h3>Hinweis zur verantwortlichen Stelle</h3>
                    <p>
                        Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                    </p>
                    <p>
                        [Name]<br />
                        [Straße Nr.]<br />
                        [PLZ] [Ort]<br />
                        Telefon: [Telefonnummer]<br />
                        E-Mail: [E-Mail-Adresse]
                    </p>
                    <p>
                        Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen
                        über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
                    </p>

                    <h3>Speicherdauer</h3>
                    <p>
                        Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben
                        Ihre personenbezogenen Daten bei mir, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein
                        berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen,
                        werden Ihre Daten gelöscht, sofern ich keine anderen rechtlich zulässigen Gründe für die Speicherung
                        Ihrer personenbezogenen Daten habe (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im
                        letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
                    </p>

                    <h3>Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</h3>
                    <p>
                        Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeite ich Ihre personenbezogenen Daten auf
                        Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien
                        nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung
                        personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1
                        lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät
                        (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage
                        von § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar.
                    </p>
                </div>
            </motion.div>
        </div>
    )
} 