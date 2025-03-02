"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"
import { Users, BookOpen, Award, Building2 } from "lucide-react"

const stats = [
  {
    id: 1,
    icon: Users,
    value: 15000,
    label: "Students",
    suffix: "+",
  },
  {
    id: 2,
    icon: BookOpen,
    value: 25,
    label: "Programs",
    suffix: "+",
  },
  {
    id: 3,
    icon: Award,
    value: 95,
    label: "Placement Rate",
    suffix: "%",
  },
  {
    id: 4,
    icon: Building2,
    value: 150,
    label: "Corporate Partners",
    suffix: "+",
  },
]

export default function StatisticsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section className="bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">Our Achievements</h2>
          <h3 className="text-3xl font-bold md:text-4xl">Excellence in Numbers</h3>
        </div>
        <div ref={ref} className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.id} stat={stat} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCard({ stat, inView }: { stat: any; inView: boolean }) {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const { icon: Icon, value, label, suffix } = stat

  useEffect(() => {
    if (inView) {
      countRef.current = 0
      const duration = 2000
      const step = Math.ceil(value / (duration / 16))
      let start = 0
      const timer = setInterval(() => {
        start += step
        if (start > value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(start)
        }
      }, 16)
      return () => clearInterval(timer)
    }
  }, [inView, value])

  return (
    <div className="stat-card">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <div className="text-4xl font-bold">
        {inView ? count : 0}
        {suffix}
      </div>
      <div className="mt-2 text-lg font-medium">{label}</div>
    </div>
  )
}

