import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h2 className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">About Our Institution</h2>
            <h3 className="mb-6 text-3xl font-bold leading-tight md:text-4xl">Excellence in Education Since 1987</h3>
            <p className="mb-6 text-muted-foreground">
              Jeppiaar College of Engineering and Technology was established with a vision to provide quality education
              and to develop young professionals with a sense of responsibility, social commitment, and ethical values.
            </p>
            <div className="mb-8 space-y-3">
              <div className="flex items-start">
                <CheckCircle2 className="mr-2 mt-1 h-5 w-5 text-primary" />
                <p>State-of-the-art infrastructure and modern laboratories</p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="mr-2 mt-1 h-5 w-5 text-primary" />
                <p>Highly qualified and experienced faculty members</p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="mr-2 mt-1 h-5 w-5 text-primary" />
                <p>Industry-aligned curriculum with focus on practical learning</p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="mr-2 mt-1 h-5 w-5 text-primary" />
                <p>Excellent placement record with top companies</p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="mr-2 mt-1 h-5 w-5 text-primary" />
                <p>Vibrant campus life with numerous extracurricular activities</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button>Learn More</Button>
              <Button variant="outline">Our History</Button>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="relative h-[400px] overflow-hidden rounded-xl shadow-xl">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Jeppiaar College Campus"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-lg bg-primary p-4 text-center text-white shadow-lg">
                <div className="text-3xl font-bold">35+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

