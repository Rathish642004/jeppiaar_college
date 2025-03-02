"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react"

const events = [
  {
    id: 1,
    title: "National Conference on Emerging Technologies",
    date: "August 15-16, 2023",
    time: "9:00 AM - 5:00 PM",
    location: "Main Auditorium",
    image: "/placeholder.svg?height=400&width=600",
    category: "upcoming",
  },
  {
    id: 2,
    title: "Workshop on Artificial Intelligence",
    date: "September 5, 2023",
    time: "10:00 AM - 3:00 PM",
    location: "CS Department",
    image: "/placeholder.svg?height=400&width=600",
    category: "upcoming",
  },
  {
    id: 3,
    title: "Industry-Academia Meet 2023",
    date: "September 20, 2023",
    time: "11:00 AM - 4:00 PM",
    location: "Conference Hall",
    image: "/placeholder.svg?height=400&width=600",
    category: "upcoming",
  },
  {
    id: 4,
    title: "Annual Technical Symposium",
    date: "July 10-11, 2023",
    time: "9:00 AM - 6:00 PM",
    location: "College Campus",
    image: "/placeholder.svg?height=400&width=600",
    category: "past",
  },
  {
    id: 5,
    title: "International Webinar on Renewable Energy",
    date: "June 25, 2023",
    time: "2:00 PM - 4:00 PM",
    location: "Online",
    image: "/placeholder.svg?height=400&width=600",
    category: "past",
  },
  {
    id: 6,
    title: "Alumni Meet 2023",
    date: "May 15, 2023",
    time: "10:00 AM - 3:00 PM",
    location: "College Grounds",
    image: "/placeholder.svg?height=400&width=600",
    category: "past",
  },
]

export default function EventsSection() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">Stay Updated</h2>
          <h3 className="mb-4 text-3xl font-bold md:text-4xl">Events & News</h3>
          <p className="text-muted-foreground">
            Stay informed about the latest happenings, events, and news at Jeppiaar College.
          </p>
        </div>

        <Tabs defaultValue="upcoming" className="mx-auto max-w-4xl">
          <div className="mb-8 flex justify-center">
            <TabsList>
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="upcoming" className="space-y-6">
            {events
              .filter((event) => event.category === "upcoming")
              .map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
          </TabsContent>

          <TabsContent value="past" className="space-y-6">
            {events
              .filter((event) => event.category === "past")
              .map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <Button>
            View All Events <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

function EventCard({ event }: { event: any }) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="flex flex-col md:flex-row">
        <div className="relative h-48 w-full md:h-auto md:w-1/3">
          <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
        </div>
        <div className="flex flex-1 flex-col justify-between p-6">
          <div>
            <h4 className="mb-2 text-xl font-bold">{event.title}</h4>
            <div className="mb-4 space-y-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-2 h-4 w-4 text-primary" />
                {event.date}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="mr-2 h-4 w-4 text-primary" />
                {event.time}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="mr-2 h-4 w-4 text-primary" />
                {event.location}
              </div>
            </div>
          </div>
          <Button variant="outline" className="mt-2 w-fit">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  )
}

