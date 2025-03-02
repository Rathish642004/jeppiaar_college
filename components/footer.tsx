import Link from "next/link"
import Image from "next/image"
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
  ExternalLink,
  Lock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
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
                <span className="text-lg font-bold text-white">Jeppiaar College</span>
                <span className="text-xs text-slate-400">Excellence in Education</span>
              </div>
            </div>
            <p className="text-sm text-slate-300">
              Jeppiaar College of Engineering and Technology is committed to providing quality education and fostering
              innovation, research, and personal growth.
            </p>
            <div className="flex space-x-3">
              <Link href="#" className="rounded-full bg-slate-800 p-2 text-white hover:bg-primary">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="rounded-full bg-slate-800 p-2 text-white hover:bg-primary">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="rounded-full bg-slate-800 p-2 text-white hover:bg-primary">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="rounded-full bg-slate-800 p-2 text-white hover:bg-primary">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="rounded-full bg-slate-800 p-2 text-white hover:bg-primary">
                <Youtube className="h-4 w-4" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="flex items-center text-slate-300 hover:text-primary">
                  <ArrowRight className="mr-2 h-3 w-3" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="flex items-center text-slate-300 hover:text-primary">
                  <ArrowRight className="mr-2 h-3 w-3" />
                  Academic Programs
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="flex items-center text-slate-300 hover:text-primary">
                  <ArrowRight className="mr-2 h-3 w-3" />
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/research" className="flex items-center text-slate-300 hover:text-primary">
                  <ArrowRight className="mr-2 h-3 w-3" />
                  Research
                </Link>
              </li>
              <li>
                <Link href="/placements" className="flex items-center text-slate-300 hover:text-primary">
                  <ArrowRight className="mr-2 h-3 w-3" />
                  Placements
                </Link>
              </li>
              <li>
                <Link href="/events" className="flex items-center text-slate-300 hover:text-primary">
                  <ArrowRight className="mr-2 h-3 w-3" />
                  Events & News
                </Link>
              </li>
              <li>
                <Link href="/contact" className="flex items-center text-slate-300 hover:text-primary">
                  <ArrowRight className="mr-2 h-3 w-3" />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/admin/login" className="flex items-center text-slate-300 hover:text-primary">
                  <Lock className="mr-2 h-3 w-3" />
                  Office Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 h-4 w-4 text-primary" />
                <span className="text-slate-300">
                  Jeppiaar College of Engineering and Technology, Old Mahabalipuram Road, Chennai - 600119, Tamil Nadu,
                  India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-4 w-4 text-primary" />
                <span className="text-slate-300">+91 44 2827 2644</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-4 w-4 text-primary" />
                <span className="text-slate-300">info@jeppiaar.edu.in</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Newsletter</h3>
            <p className="text-sm text-slate-300">
              Subscribe to our newsletter to receive updates on events, news, and opportunities.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your email"
                className="border-slate-700 bg-slate-800 text-white placeholder:text-slate-500"
              />
              <Button>Subscribe</Button>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Important Links</h4>
              <div className="space-y-1 text-xs">
                <Link href="/privacy-policy" className="flex items-center text-slate-300 hover:text-primary">
                  <ExternalLink className="mr-1 h-3 w-3" />
                  Privacy Policy
                </Link>
                <Link href="/terms-conditions" className="flex items-center text-slate-300 hover:text-primary">
                  <ExternalLink className="mr-1 h-3 w-3" />
                  Terms & Conditions
                </Link>
                <Link href="/student-portal" className="flex items-center text-slate-300 hover:text-primary">
                  <ExternalLink className="mr-1 h-3 w-3" />
                  Student Portal
                </Link>
                <Link href="/admin/login" className="flex items-center text-slate-300 hover:text-primary">
                  <Lock className="mr-1 h-3 w-3" />
                  Office Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-slate-950 py-4 text-center text-sm text-slate-400">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Jeppiaar College of Engineering and Technology. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

