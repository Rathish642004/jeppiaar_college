"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    image: "/images/hero-image.jpg",
    /*
    title: "Shaping Future Leaders",
    subtitle: "Excellence in Education, Innovation in Research",
    description:
      "Jeppiaar College of Engineering and Technology provides world-class education with state-of-the-art facilities.",
    */
  },
  {
    id: 2,
    image: "/images/2.jpg",
    /*
    title: "Shaping Future Leaders",
    subtitle: "Excellence in Education, Innovation in Research",
    description:
      "Jeppiaar College of Engineering and Technology provides world-class education with state-of-the-art facilities.",
    */
  },
  {
    id: 3,
    image: "/images/12[2].jpg",
    /*
    title: "Shaping Future Leaders",
    subtitle: "Excellence in Education, Innovation in Research",
    description:
      "Jeppiaar College of Engineering and Technology provides world-class education with state-of-the-art facilities.",
    */
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero-section" className="relative h-[700px] max-h-[700px] min-h-[500px] w-full overflow-hidden lg:h-[80vh]">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative h-full w-full">
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center text-white">
              <h2 className="mb-2 text-sm font-medium uppercase tracking-wider text-primary-foreground/80">
                {slide.subtitle}
              </h2>
              <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">{slide.title}</h1>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">{slide.description}</p>
              {/*<div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="font-medium">
                  Apply Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white bg-transparent text-white hover:bg-white hover:text-primary"
                >
                  Explore Programs
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-8 rounded-full transition-all ${index === currentSlide ? "bg-primary" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

