"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Menu,
  X,
  ChevronDown,
  Search,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

const mainNavItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "#",
    children: [
      { title: "About Us", href: "/about" },
      { title: "Vision & Mission", href: "/vision-mission" },
      { title: "Leadership", href: "/leadership" },
      { title: "Infrastructure", href: "/infrastructure" },
    ],
  },
  {
    title: "Academics",
    href: "#",
    children: [
      { title: "Departments", href: "/departments" },
      { title: "Programs", href: "/programs" },
      { title: "Academic Calendar", href: "/academic-calendar" },
      { title: "Examinations", href: "/examinations" },
    ],
  },
  {
    title: "Admissions",
    href: "#",
    children: [
      { title: "Admission Process", href: "/admission-process" },
      { title: "Eligibility", href: "/eligibility" },
      { title: "Fee Structure", href: "/fee-structure" },
      { title: "Scholarships", href: "/scholarships" },
    ],
  },
  {
    title: "Research",
    href: "/research",
  },
  {
    title: "Campus Life",
    href: "#",
    children: [
      { title: "Facilities", href: "/facilities" },
      { title: "Clubs & Societies", href: "/clubs" },
      { title: "Events", href: "/events" },
      { title: "Sports", href: "/sports" },
    ],
  },
  {
    title: "Placements",
    href: "/placements",
  },
  {
    title: "Contact",
    href: "/contact",
  },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero-section")
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        setIsScrolled(window.scrollY > heroBottom - 80) // 80px before the hero section ends
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Bar */}
      <div
        className={cn(
          "bg-primary py-2 text-white transition-all duration-300",
          isScrolled ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center">
              <Phone className="mr-1 h-3 w-3" />
              <span>+91 44 2827 2644</span>
            </div>
            <div className="flex items-center">
              <Mail className="mr-1 h-3 w-3" />
              <span>info@jeppiaar.edu.in</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-1 h-3 w-3" />
              <span>Chennai, Tamil Nadu</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Link href="#" className="hover:text-primary-foreground/80">
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="hover:text-primary-foreground/80">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="hover:text-primary-foreground/80">
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="hover:text-primary-foreground/80">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="hover:text-primary-foreground/80">
              <Youtube className="h-4 w-4" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div
        className={cn(
          "w-full transition-all duration-300",
          isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4",
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-[75px] w-[300px]">
              <Image
                src="/images/jpr-log.png"
                alt="Jeppiaar College Logo"
                fill
                className="object-cover"
                priority
              />
            </div>


              {/* 
              <div className="hidden flex-col md:flex">
                <span
                  className={cn(
                    "font-bold text-primary transition-all duration-300",
                    isScrolled ? "text-lg" : "text-xl",
                  )}
                >
                  Jeppiaar College
                </span>
                <span className="text-xs text-muted-foreground">Excellence in Education</span>
              </div>
              */}
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex space-x-1">
                {mainNavItems.map((item) => (
                  <li key={item.title} className="relative">
                    {item.children ? (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            className={cn(
                              "flex items-center space-x-1 text-base font-medium",
                              isScrolled ? "text-foreground" : "text-white",
                            )}
                          >
                            <span>{item.title}</span>
                            <ChevronDown className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="w-48">
                          {item.children.map((child) => (
                            <DropdownMenuItem key={child.title} asChild>
                              <Link href={child.href}>{child.title}</Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ) : (
                      <Link href={item.href}>
                        <Button
                          variant="ghost"
                          className={cn("text-base font-medium", isScrolled ? "text-foreground" : "text-white")}
                        >
                          {item.title}
                        </Button>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className={cn("hidden md:flex", isScrolled ? "text-foreground" : "text-white")}
              >
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
              <Button
                variant={isScrolled ? "default" : "outline"}
                className={cn(
                  "hidden md:inline-flex",
                  !isScrolled && "border-white text-white hover:bg-white hover:text-primary",
                )}
              >
                Apply Now
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className={cn("lg:hidden", isScrolled ? "text-foreground" : "text-white")}
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <div className="relative h-12 w-12 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="Jeppiaar College Logo"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-primary">Jeppiaar College</span>
                  <span className="text-xs text-muted-foreground">Excellence in Education</span>
                </div>
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
            <nav className="mt-8">
              <ul className="space-y-4">
                {mainNavItems.map((item) => (
                  <li key={item.title}>
                    {item.children ? (
                      <div className="space-y-2">
                        <div className="font-medium text-primary">{item.title}</div>
                        <ul className="ml-4 space-y-2 border-l border-border pl-4">
                          {item.children.map((child) => (
                            <li key={child.title}>
                              <Link
                                href={child.href}
                                className="block text-muted-foreground hover:text-primary"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {child.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block font-medium text-foreground hover:text-primary"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-8 space-y-4">
              <Button className="w-full">Apply Now</Button>
              <div className="flex justify-center space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </Link>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  <span>+91 44 2827 2644</span>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  <span>info@jeppiaar.edu.in</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>Chennai, Tamil Nadu</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

