"use client"

import { motion } from "framer-motion"
import OptimizedImage from "@/components/ui/optimized-image"

const Banner = () => {
  return (
    <motion.div
      className="w-full h-[100px] relative overflow-hidden bg-secondary"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <OptimizedImage
        src="/header.jpg"
        alt="Wassertropfen auf einem grünen Blatt"
        fill
        sizes="100vw"
        className="object-cover w-full h-full"
        priority
      />
    </motion.div>
  )
}

export default Banner
