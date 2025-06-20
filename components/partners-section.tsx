"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const partners = [
  { name: "Google", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Microsoft", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Amazon", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Apple", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Meta", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Netflix", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Spotify", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Adobe", logo: "/placeholder.svg?height=60&width=120" },
]

export default function PartnersSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-4">Trusted by Industry Leaders</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're proud to work with some of the world's most innovative companies.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 grayscale hover:grayscale-0"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={120}
                height={60}
                className="max-w-full h-auto"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
