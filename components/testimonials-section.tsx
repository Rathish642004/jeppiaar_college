"use client"

import { useState } from "react"
import Image from "next/image"
import { Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Computer Science, Batch of 2020",
    company: "Google",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "My time at Jeppiaar College shaped my career in ways I couldn't have imagined. The faculty's guidance and industry-focused curriculum prepared me well for the challenges of the tech industry.",
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Mechanical Engineering, Batch of 2019",
    company: "Tata Motors",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "The hands-on experience and practical knowledge I gained at Jeppiaar College gave me a competitive edge in the job market. The college's emphasis on innovation and problem-solving has been invaluable in my career.",
  },
  {
    id: 3,
    name: "Ananya Patel",
    role: "Electronics & Communication, Batch of 2021",
    company: "Samsung R&D",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "Jeppiaar College provided me with a strong foundation in electronics and communication engineering. The research opportunities and industry collaborations helped me secure a position at a leading tech company.",
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Civil Engineering, Batch of 2018",
    company: "L&T Construction",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "The comprehensive curriculum and expert faculty at Jeppiaar College equipped me with the skills needed to excel in the construction industry. The college's focus on practical learning was particularly beneficial.",
  },
]

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">Success Stories</h2>
          <h3 className="mb-4 text-3xl font-bold md:text-4xl">What Our Alumni Say</h3>
          <p className="text-muted-foreground">
            Hear from our successful alumni about their experiences at Jeppiaar College and how it shaped their careers.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="relative">
            <div className="testimonial-card">
              <Quote className="testimonial-quote" />
              <div className="flex flex-col items-center md:flex-row md:items-start">
                <div className="mb-4 shrink-0 md:mb-0 md:mr-6">
                  <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-primary/10">
                    <Image
                      src={testimonials[activeIndex].image || "/placeholder.svg"}
                      alt={testimonials[activeIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <p className="mb-4 text-lg italic text-muted-foreground">"{testimonials[activeIndex].quote}"</p>
                  <div>
                    <h4 className="text-lg font-bold">{testimonials[activeIndex].name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonials[activeIndex].role}</p>
                    <p className="text-sm font-medium text-primary">{testimonials[activeIndex].company}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 w-8 rounded-full transition-all ${
                    index === activeIndex ? "bg-primary" : "bg-primary/20"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <div className="mt-8 flex justify-center space-x-4">
              <Button variant="outline" size="icon" onClick={prevTestimonial} aria-label="Previous testimonial">
                &larr;
              </Button>
              <Button variant="outline" size="icon" onClick={nextTestimonial} aria-label="Next testimonial">
                &rarr;
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

