import HeroSection from "@/components/hero-section"
import NewsTicker from "@/components/news-ticker"
import AboutSection from "@/components/about-section"
import StatisticsSection from "@/components/statistics-section"
import DepartmentsSection from "@/components/departments-section"
import EventsSection from "@/components/events-section"
import TestimonialsSection from "@/components/testimonials-section"
import GallerySection from "@/components/gallery-section"
import AdmissionsSection from "@/components/admissions-section"
import ResearchSection from "@/components/research-section"
import PartnersSection from "@/components/partners-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      {/*<NewsTicker />*/}
      <AboutSection />
      <StatisticsSection />
      <DepartmentsSection />
      <EventsSection />
      <TestimonialsSection />
      <GallerySection />
      <AdmissionsSection />
      <ResearchSection />
      <PartnersSection />
    </div>
  )
}

