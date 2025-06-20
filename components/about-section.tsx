"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Award, Target } from "lucide-react"

const features = [
  { icon: Users, title: "500+ Happy Clients", description: "Trusted by businesses worldwide" },
  { icon: Award, title: "10+ Years Experience", description: "Decade of digital excellence" },
  { icon: Target, title: "99% Success Rate", description: "Delivering results that matter" },
]

const benefits = [
  "Expert team of developers and designers",
  "Cutting-edge technology stack",
  "24/7 support and maintenance",
  "Agile development methodology",
  "Transparent communication",
  "On-time project delivery",
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* First Block - Image Left, Text Right */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image src="/placeholder.svg?height=500&width=600" alt="About Us" fill className="object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-4">About Our Company</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are a team of passionate developers, designers, and strategists dedicated to creating exceptional
                digital experiences. With over a decade of experience, we've helped hundreds of businesses transform
                their digital presence and achieve their goals.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="h-5 w-5 text-[#1959AC] flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <Button className="bg-[#1959AC] hover:bg-[#0546D2] text-white px-8 py-3">Learn More About Us</Button>
          </motion.div>
        </div>

        {/* Second Block - Text Left, Image Right */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 lg:order-1"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-4">Why Choose Us?</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our commitment to excellence and innovation sets us apart. We don't just build websites and apps – we
                create digital solutions that drive real business results and exceed expectations.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-[#1959AC]/10 p-3 rounded-lg">
                    <feature.icon className="h-6 w-6 text-[#1959AC]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#222222] mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl lg:order-2"
          >
            <Image src="/placeholder.svg?height=500&width=600" alt="Why Choose Us" fill className="object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
