"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

export default function QuoteSection() {
  return (
    <section
      className="relative py-32 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/placeholder.svg?height=600&width=1200")',
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <Quote className="h-16 w-16 text-white mx-auto opacity-50" />

          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-relaxed">
            "Innovation distinguishes between a leader and a follower. We help you lead."
          </blockquote>

          <div className="text-white/80">
            <p className="text-lg font-semibold">Steve Jobs</p>
            <p className="text-base">Co-founder, Apple Inc.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
