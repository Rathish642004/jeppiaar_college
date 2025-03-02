"use client"

import { useState, useEffect } from "react"
import { Bell } from "lucide-react"

const newsItems = [
  "Admissions open for 2023-24 academic year. Apply now!",
  "Congratulations to our students for securing 95% placement rate this year",
  "National Conference on Emerging Technologies scheduled for August 15-16, 2023",
  "Jeppiaar College ranked among top 50 engineering colleges in India",
  "New Research Center for Artificial Intelligence and Machine Learning inaugurated",
]

export default function NewsTicker() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === newsItems.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-primary py-3 text-white">
      <div className="container mx-auto flex items-center px-4">
        <div className="mr-4 flex items-center rounded-full bg-white/20 p-1.5">
          <Bell className="h-4 w-4" />
        </div>
        <div className="relative h-6 flex-1 overflow-hidden">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-500 ${
                index === activeIndex ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

