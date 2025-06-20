"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"

const blogPosts = [
  {
    title: "The Future of Web Development",
    description: "Exploring the latest trends and technologies shaping the future of web development.",
    image: "/placeholder.svg?height=200&width=300",
    date: "March 15, 2024",
    category: "Technology",
  },
  {
    title: "Mobile-First Design Principles",
    description: "Best practices for creating responsive and mobile-optimized user experiences.",
    image: "/placeholder.svg?height=200&width=300",
    date: "March 10, 2024",
    category: "Design",
  },
  {
    title: "Building Scalable Applications",
    description: "Strategies for developing applications that can grow with your business needs.",
    image: "/placeholder.svg?height=200&width=300",
    date: "March 5, 2024",
    category: "Development",
  },
  {
    title: "UX Research Methods",
    description: "Understanding your users through effective research methodologies and tools.",
    image: "/placeholder.svg?height=200&width=300",
    date: "February 28, 2024",
    category: "Research",
  },
]

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-4">Latest Insights</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and insights from our team of experts.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#1959AC] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    {post.date}
                  </div>
                  <CardTitle className="text-xl font-semibold text-[#222222] group-hover:text-[#1959AC] transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">{post.description}</CardDescription>
                  <Button variant="ghost" className="text-[#1959AC] hover:text-[#0546D2] p-0 h-auto font-semibold">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
