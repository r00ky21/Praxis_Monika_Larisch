"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gray-50 border-t border-gray-200">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-4 md:mb-0"
                    >
                        <p className="text-gray-600">
                            © {currentYear} Psychotherapeutische Praxis Monika Larisch. Alle Rechte vorbehalten.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex space-x-6"
                    >
                        <Link
                            href="/impressum"
                            className="text-gray-600 hover:text-primary transition-colors duration-200"
                        >
                            Impressum
                        </Link>
                        <Link
                            href="/datenschutz"
                            className="text-gray-600 hover:text-primary transition-colors duration-200"
                        >
                            Datenschutz
                        </Link>
                    </motion.div>
                </div>
            </div>
        </footer>
    )
} 