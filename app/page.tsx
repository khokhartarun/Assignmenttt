"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import CategoriesSection from "@/components/categories-section"
import AboutSection from "@/components/about-section"
import PartnersSection from "@/components/partners-section"
import BlogSection from "@/components/blog-section"
import QuoteSection from "@/components/quote-section"
import ContactSection from "@/components/contact-section"
import GallerySection from "@/components/gallery-section"
import TestimonialsSection from "@/components/testimonials-section"
import FAQSection from "@/components/faq-section"
import Footer from "@/components/footer"
import LoadingScreen from "@/components/loading-screen"

export default function HomePage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CategoriesSection />
      <AboutSection />
      <PartnersSection />
      <BlogSection />
      <QuoteSection />
      <ContactSection />
      <GallerySection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
