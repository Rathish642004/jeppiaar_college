"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const galleryItems = [
  {
    id: 1,
    title: "Campus",
    images: [
      {
        id: "c1",
        src: "/placeholder.svg?height=600&width=800",
        alt: "Main Building",
      },
      {
        id: "c2",
        src: "/placeholder.svg?height=600&width=800",
        alt: "Library",
      },
      {
        id: "c3",
        src: "/placeholder.svg?height=600&width=800",
        alt: "Auditorium",
      },
      {
        id: "c4",
        src: "/placeholder.svg?height=600&width=800",
        alt: "Sports Ground",
      },
      {
        id: "c5",
        src: "/placeholder.svg?height=600&width=800",
        alt: "Cafeteria",
      },
      {
        id: "c6",
        src: "/placeholder.svg?height=600&width=800",
        alt: "Hostel",
      },
    ],
  },
  {
    id: 2,
    title: "Events",
    images: [
      {
        id: "e1",
        src: "/placeholder.svg?height=600&width=800",
        alt: "Annual Day",
      },
      {
        id: "e2",
        src: "/placeholder.svg?height=600&width=800",
        alt: "Technical Symposium",
      },
      {
        id: "e3",
        src: "/placeholder.svg?height=600&width=800",
        alt: "Cultural Fest",
      },
      {
        id: "e4",
        src: "/placeholder.svg?height=600&width=800",
        alt: "Sports Meet",
      },
      {
        id: "e5",
        src: "/placeholder.svg?height=600&width=800",
        alt: "Graduation Ceremony",
      },
      {
        id: "e6",
        src: "/placeholder.svg?height=600&width=800",
        alt: "Workshop",
      },
    ],
  },
  {
    id: 3,
    title: "Achievements",
    images: [
      {
        id: "a1",
        src: "/placeholder.svg?height=600&width=800",
        alt: "Award Ceremony",
      },
      {
        id: "a2",
        src: "/placeholder.svg?height=600&width=800",
        alt: "Research Recognition",
      },
      {
        id: "a3",
        src: "/placeholder.svg?height=600&width=800",
        alt: "Sports Trophies",
      },
      {
        id: "a4",
        src: "/placeholder.svg?height=600&width=800",
        alt: "Academic Excellence Awards",
      },
      {
        id: "a5",
        src: "/placeholder.svg?height=600&width=800",
        alt: "Innovation Competition",
      },
      {
        id: "a6",
        src: "/placeholder.svg?height=600&width=800",
        alt: "Hackathon Winners",
      },
    ],
  },
]

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string
    alt: string
  } | null>(null)

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">Visual Journey</h2>
          <h3 className="mb-4 text-3xl font-bold md:text-4xl">Campus Gallery</h3>
          <p className="text-muted-foreground">
            Explore our vibrant campus life, events, and achievements through our gallery.
          </p>
        </div>

        <Tabs defaultValue="1" className="mx-auto max-w-5xl">
          <div className="mb-8 flex justify-center">
            <TabsList>
              {galleryItems.map((item) => (
                <TabsTrigger key={item.id} value={item.id.toString()}>
                  {item.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {galleryItems.map((item) => (
            <TabsContent key={item.id} value={item.id.toString()} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {item.images.map((image) => (
                  <Dialog key={image.id}>
                    <DialogTrigger asChild>
                      <div
                        className="group cursor-pointer overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
                        onClick={() => setSelectedImage(image)}
                      >
                        <div className="relative h-64 w-full">
                          <Image
                            src={image.src || "/placeholder.svg"}
                            alt={image.alt}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
                        </div>
                        <div className="p-3">
                          <h4 className="text-sm font-medium">{image.alt}</h4>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl">
                      <div className="relative h-[70vh] w-full">
                        <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-contain" />
                      </div>
                      <h3 className="mt-2 text-xl font-bold">{image.alt}</h3>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 text-center">
          <Button size="lg">View Full Gallery</Button>
        </div>
      </div>
    </section>
  )
}

