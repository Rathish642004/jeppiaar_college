import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Lightbulb, Cpu, Zap, Atom } from "lucide-react"

const researchAreas = [
  {
    id: 1,
    title: "Artificial Intelligence & Machine Learning",
    icon: <Cpu className="h-6 w-6" />,
    description: "Research in neural networks, deep learning, computer vision, and natural language processing.",
  },
  {
    id: 2,
    title: "Renewable Energy & Sustainability",
    icon: <Zap className="h-6 w-6" />,
    description: "Developing innovative solutions for solar energy, wind power, and energy-efficient systems.",
  },
  {
    id: 3,
    title: "Advanced Materials & Nanotechnology",
    icon: <Atom className="h-6 w-6" />,
    description: "Exploring new materials and nanotechnology applications for various industries.",
  },
  {
    id: 4,
    title: "Smart Infrastructure & IoT",
    icon: <Lightbulb className="h-6 w-6" />,
    description: "Creating intelligent systems for smart cities, buildings, and infrastructure using IoT technologies.",
  },
]

export default function ResearchSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">Innovation Hub</h2>
            <h3 className="mb-6 text-3xl font-bold leading-tight md:text-4xl">Research & Innovation</h3>
            <p className="mb-6 text-muted-foreground">
              At Jeppiaar College, we are committed to advancing knowledge through cutting-edge research and innovation.
              Our state-of-the-art research centers and laboratories provide students and faculty with the resources
              they need to explore new frontiers in science and technology.
            </p>
            <p className="mb-8 text-muted-foreground">
              Our research initiatives are focused on addressing real-world challenges and contributing to the
              advancement of society. We collaborate with industry partners, government agencies, and other academic
              institutions to drive innovation and create impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button>
                Explore Research Centers <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline">Research Publications</Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative h-[400px] overflow-hidden rounded-xl shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Research Laboratory"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-lg bg-primary p-4 text-center text-white shadow-lg">
              <div className="text-3xl font-bold">25+</div>
              <div className="text-sm">Research Centers</div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h4 className="mb-8 text-center text-2xl font-bold">Key Research Areas</h4>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {researchAreas.map((area) => (
              <Card key={area.id} className="transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {area.icon}
                  </div>
                  <CardTitle>{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{area.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="px-0">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

