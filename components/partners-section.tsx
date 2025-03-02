"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const partners = [
  {
    id: 1,
    name: "Microsoft",
    logo: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 2,
    name: "Google",
    logo: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 3,
    name: "Amazon",
    logo: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 4,
    name: "IBM",
    logo: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 5,
    name: "Infosys",
    logo: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 6,
    name: "TCS",
    logo: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 7,
    name: "Wipro",
    logo: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 8,
    name: "Accenture",
    logo: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 9,
    name: "Cognizant",
    logo: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 10,
    name: "HCL",
    logo: "/placeholder.svg?height=100&width=200",
  },
]

export default function PartnersSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scrollWidth = scrollContainer.scrollWidth
    const clientWidth = scrollContainer.clientWidth

    if (scrollWidth <= clientWidth) return

    let scrollPosition = 0
    const scrollSpeed = 0.5
    let animationFrameId: number

    const scroll = () => {
      if (!scrollContainer) return

      scrollPosition += scrollSpeed
      if (scrollPosition >= scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">Industry Connections</h2>
          <h3 className="mb-4 text-3xl font-bold md:text-4xl">Our Partners</h3>
          <p className="text-muted-foreground">
            We collaborate with leading companies and organizations to provide our students with industry exposure and
            career opportunities.
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-hidden py-4"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            {/* Double the partners for infinite scroll effect */}
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex min-w-[150px] items-center justify-center rounded-lg bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <div className="relative h-12 w-32">
                  <Image src={partner.logo || "/placeholder.svg"} alt={partner.name} fill className="object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button>
            View All Partners <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

