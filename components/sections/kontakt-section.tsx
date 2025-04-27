"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Icon } from "@iconify/react"

type FormData = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export default function KontaktSection() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setStatus('loading')

    try {
      const response = await fetch("https://formspree.io/f/IHRE_FORM_ID", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
      })

      if (response.ok) {
        setStatus('success')
        reset()
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <section id="kontakt" className="container mx-auto px-4 py-16 md:py-24">
      <motion.h2
        className="text-3xl font-bold text-center text-red-900 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Kontakt
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="h-full"
        >
          <h3 className="text-2xl font-semibold text-red-800 mb-6">Ich freue mich Sie kennenzulernen!</h3>

          <div className="space-y-4">
            <div className="flex items-start">
              <Icon icon="ph:map-pin" className="h-6 w-6 text-red-600 mr-3 mt-1" />
              <div>
                <h4 className="font-medium text-red-800">Adresse</h4>
                <p className="text-red-600">Erbpostgasse 22, 1210 Wien</p>
                <p className="text-red-600">Eingang über Matthias-Wagner-Gasse 44</p>
              </div>
            </div>

            <div className="flex items-start">
              <Icon icon="fluent-mdl2:phone" className="h-6 w-6 text-red-600 mr-3 mt-1" />
              <div>
                <h4 className="font-medium text-red-800">Telefon</h4>
                <p className="text-red-600">+43 676 43 58 507</p>
              </div>
            </div>

            <div className="flex items-start">
              <Icon icon="fluent-mdl2:mail" className="h-6 w-6 text-red-600 mr-3 mt-1" />
              <div>
                <h4 className="font-medium text-red-800">E-Mail</h4>
                <a
                  href="mailto:praxis@monika-larisch.at"
                  className="text-red-600 hover:text-red-700 hover:underline transition-colors duration-200"
                >
                  praxis@monika-larisch.at
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <Icon icon="iconamoon:clock" className="h-6 w-6 text-red-600 mr-3 mt-1" />
              <div>
                <h4 className="font-medium text-red-800">Öffnungszeiten</h4>
                <p className="text-red-600">Termine nach Vereinbarung</p>
              </div>
            </div>

            <div className="flex items-start">
              <Icon icon="fluent-mdl2:bank" className="h-6 w-6 text-red-600 mr-3 mt-1" />
              <div>
                <h4 className="font-medium text-red-800">Bankverbindung</h4>
                <p className="text-red-600">Monika Larisch</p>
                <p className="text-red-600">IBAN: AT16 3200 0001 0212 4790</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="font-medium text-red-800 mb-2">Anfahrt</h4>
            <p className="text-sm text-red-600 mt-2">
              <a
                href="https://www.google.com/maps/dir//Erbpostgasse+22,+1210+Wien"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                → Route in Google Maps öffnen
              </a>
            </p>
            <div className="bg-gray-200 h-96 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.5936585543584!2d16.3514697!3d48.1913873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476da82c79f0c0c1%3A0x810c06e01e762d39!2sErbpostgasse%2022%2C%201230%20Wien!5e0!3m2!1sde!2sat!4v1710371229599!5m2!1sde!2sat"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Praxisstandort auf Google Maps"
              />
            </div>

          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="h-full flex"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md w-full flex flex-col">
            {status === 'success' && (
              <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md">
                Vielen Dank für Ihre Nachricht! Ich werde mich so bald wie möglich bei Ihnen melden.
              </div>
            )}

            {status === 'error' && (
              <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md">
                Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt per E-Mail.
              </div>
            )}

            <div className="mb-4">
              <label htmlFor="name" className="block text-red-700 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                {...register("name", {
                  required: "Bitte geben Sie Ihren Namen ein",
                  minLength: {
                    value: 2,
                    message: "Der Name muss mindestens 2 Zeichen lang sein"
                  }
                })}
                className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-red-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-red-500`}
              />
              {errors.name && (
                <p className="mt-1 text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-red-700 mb-2">
                E-Mail *
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Bitte geben Sie Ihre E-Mail-Adresse ein",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Bitte geben Sie eine gültige E-Mail-Adresse ein"
                  }
                })}
                className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-red-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-red-500`}
              />
              {errors.email && (
                <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block text-red-700 mb-2">
                Telefon
              </label>
              <input
                type="tel"
                id="phone"
                {...register("phone")}
                className="w-full px-4 py-2 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="subject" className="block text-red-700 mb-2">
                Betreff *
              </label>
              <select
                id="subject"
                {...register("subject", {
                  required: "Bitte wählen Sie einen Betreff aus"
                })}
                className={`w-full px-4 py-2 border ${errors.subject ? 'border-red-500' : 'border-red-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-red-500`}
              >
                <option value="">Bitte wählen</option>
                <option value="Terminanfrage">Terminanfrage</option>
                <option value="Informationsanfrage">Informationsanfrage</option>
                <option value="Beratung nach § 95 AußStrG">Beratung nach § 95 AußStrG</option>
                <option value="Sonstiges">Sonstiges</option>
              </select>
              {errors.subject && (
                <p className="mt-1 text-red-500 text-sm">{errors.subject.message}</p>
              )}
            </div>

            <div className="flex-grow">
              <div className="mb-4">
                <label htmlFor="message" className="block text-red-700 mb-2">
                  Nachricht *
                </label>
                <textarea
                  id="message"
                  {...register("message", {
                    required: "Bitte geben Sie Ihre Nachricht ein",
                    minLength: {
                      value: 10,
                      message: "Die Nachricht muss mindestens 10 Zeichen lang sein"
                    }
                  })}
                  className={`w-full h-64 px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-red-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 resize-none`}
                />
                {errors.message && (
                  <p className="mt-1 text-red-500 text-sm">{errors.message.message}</p>
                )}
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={status === 'loading'}
              whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
              whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
              className={`w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-md transition-colors duration-300 ${status === 'loading' ? 'opacity-75 cursor-not-allowed' : ''
                }`}
            >
              {status === 'loading' ? 'Wird gesendet...' : 'Nachricht senden'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

//// MAIL MIT FORMSPREE EINRICHTEN!
