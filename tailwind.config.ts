import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        heading: ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        // Rote Farbpalette - Hauptfarben für die Anwendung
        red: {
          50: "#fef2f2",  // Hellster Ton, für Hintergründe
          100: "#fee2e2", // Sehr hell, für leichte Akzente
          200: "#fecaca", // Hell, für Borders und Subtile Elemente
          300: "#fca5a5", // Mittellicht, für Akzente
          400: "#f87171", // Mittlere Helligkeit
          500: "#a72407", // Hauptfarbe, für Buttons und wichtige Elemente
          600: "#8c1e06", // Dunkler, für Hover-States
          700: "#711805", // Sehr dunkel, für Text
          800: "#561204", // Fast Schwarz, für Überschriften
          900: "#3b0c03", // Dunkelster Ton, für Text
          950: "#200602", // Fast Schwarz, für starke Kontraste
        },
        // Grau Farbpalette - Für UI-Elemente und Text
        gray: {
          50: "#f9fafb",  // Sehr hell, für Hintergründe
          100: "#f3f4f6", // Hell, für leichte Akzente
          200: "#e5e7eb", // Für Borders
          300: "#d1d5db", // Für deaktivierte Elemente
          400: "#9ca3af", // Für sekundären Text
          500: "#6b7280", // Für normalen Text
          600: "#4b5563", // Für wichtige Textstellen
          700: "#374151", // Für Überschriften
          800: "#1f2937", // Für starke Kontraste
          900: "#111827", // Für wichtige Überschriften
          950: "#030712", // Für maximale Kontraste
        },
        // Primärfarben - Hauptfarben der Anwendung
        primary: {
          DEFAULT: "#a72407", // Hauptfarbe für Buttons und wichtige Elemente
          light: "#f87171",   // Helle Variante für Hover-Effekte
          dark: "#711805",    // Dunkle Variante für aktive Zustände
        },
        // Sekundärfarben - Unterstützende Farben
        secondary: {
          DEFAULT: "#fee2e2", // Sekundäre Hintergrundfarbe
          light: "#fef2f2",   // Helle Variante für Akzente
          dark: "#fecaca",    // Dunkle Variante für Kontraste
        },
        // Akzentfarben - Für Hervorhebungen
        accent: {
          DEFAULT: "#fca5a5", // Hauptakzentfarbe
          light: "#fecaca",   // Helle Akzentvariante
          dark: "#f87171",    // Dunkle Akzentvariante
        },
        // Basis-Farben für das Theme
        background: "#ffffff", // Haupt-Hintergrundfarbe der Anwendung
        foreground: "#1f2937", // Haupt-Textfarbe
        muted: "#6b7280",      // Abgeschwächte Textfarbe
        border: "#e5e7eb",     // Standard-Rahmenfarbe
        ring: "#a72407",       // Farbe für Fokus-Ringe
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
