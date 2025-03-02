import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const departments = [
  {
    id: 1,
    name: "Computer Science & Engineering",
    image: "/placeholder.svg?height=400&width=600",
    description: "Cutting-edge curriculum covering AI, machine learning, and software development.",
  },
  {
    id: 2,
    name: "Electrical & Electronics Engineering",
    image: "/placeholder.svg?height=400&width=600",
    description: "Focus on power systems, control systems, and renewable energy technologies.",
  },
  {
    id: 3,
    name: "Mechanical Engineering",
    image: "/placeholder.svg?height=400&width=600",
    description: "Comprehensive training in design, manufacturing, and thermal engineering.",
  },
  {
    id: 4,
    name: "Civil Engineering",
    image: "/placeholder.svg?height=400&width=600",
    description: "Expertise in structural engineering, transportation, and environmental systems.",
  },
  {
    id: 5,
    name: "Electronics & Communication",
    image: "/placeholder.svg?height=400&width=600",
    description: "Specialization in communication systems, signal processing, and embedded systems.",
  },
  {
    id: 6,
    name: "Information Technology",
    image: "/placeholder.svg?height=400&width=600",
    description: "Focus on data science, cybersecurity, and network infrastructure.",
  },
]

export default function DepartmentsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">Academic Excellence</h2>
          <h3 className="mb-4 text-3xl font-bold md:text-4xl">Our Departments</h3>
          <p className="text-muted-foreground">
            Explore our diverse range of departments offering cutting-edge programs designed to prepare students for
            successful careers.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((department) => (
            <div key={department.id} className="department-card group overflow-hidden rounded-xl shadow-md">
              <div className="relative h-48">
                <Image
                  src={department.image || "/placeholder.svg"}
                  alt={department.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h4 className="mb-2 text-xl font-bold">{department.name}</h4>
                <p className="mb-4 text-sm text-muted-foreground">{department.description}</p>
                <Button variant="link" className="p-0 text-primary">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
              <div className="department-overlay">
                <h4 className="mb-2 text-xl font-bold">{department.name}</h4>
                <p className="mb-4 text-sm text-white/80">{department.description}</p>
                <Button
                  variant="outline"
                  className="border-white bg-transparent text-white hover:bg-white hover:text-primary"
                >
                  View Department
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg">View All Departments</Button>
        </div>
      </div>
    </section>
  )
}

