"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  LayoutDashboard,
  Calendar,
  Users,
  BookOpen,
  ImageIcon,
  MessageSquareQuote,
  LogOut,
  PlusCircle,
  Edit,
  Trash2,
  ChevronRight,
} from "lucide-react"

// Mock data for demonstration
const mockEvents = [
  { id: 1, title: "National Conference on Emerging Technologies", date: "August 15-16, 2023", status: "upcoming" },
  { id: 2, title: "Workshop on Artificial Intelligence", date: "September 5, 2023", status: "upcoming" },
  { id: 3, title: "Industry-Academia Meet 2023", date: "September 20, 2023", status: "upcoming" },
  { id: 4, title: "Annual Technical Symposium", date: "July 10-11, 2023", status: "past" },
]

const mockDepartments = [
  { id: 1, name: "Computer Science & Engineering", programs: 4 },
  { id: 2, name: "Electrical & Electronics Engineering", programs: 3 },
  { id: 3, name: "Mechanical Engineering", programs: 3 },
  { id: 4, name: "Civil Engineering", programs: 2 },
]

const mockTestimonials = [
  { id: 1, name: "Priya Sharma", role: "Computer Science, Batch of 2020", company: "Google" },
  { id: 2, name: "Rahul Verma", role: "Mechanical Engineering, Batch of 2019", company: "Tata Motors" },
  { id: 3, name: "Ananya Patel", role: "Electronics & Communication, Batch of 2021", company: "Samsung R&D" },
]

const mockGalleryCategories = [
  { id: 1, title: "Campus", imageCount: 6 },
  { id: 2, title: "Events", imageCount: 6 },
  { id: 3, title: "Achievements", imageCount: 6 },
]

export default function AdminDashboard() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("dashboard")
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleLogout = () => {
    // In a real app, you would clear auth tokens/cookies
    router.push("/admin/login")
  }

  if (!isClient) {
    return null // Prevents hydration errors
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Admin Header */}
      <header className="sticky top-0 z-10 border-b bg-white shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-8 w-8 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="Jeppiaar College Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-primary">Admin Dashboard</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-[240px_1fr]">
          {/* Sidebar */}
          <div className="hidden md:block">
            <div className="sticky top-24 space-y-2 rounded-lg border bg-white p-4 shadow-sm">
              <Button
                variant={activeTab === "dashboard" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("dashboard")}
              >
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Dashboard
              </Button>
              <Button
                variant={activeTab === "events" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("events")}
              >
                <Calendar className="mr-2 h-4 w-4" />
                Events & News
              </Button>
              <Button
                variant={activeTab === "departments" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("departments")}
              >
                <BookOpen className="mr-2 h-4 w-4" />
                Academic Excellence
              </Button>
              <Button
                variant={activeTab === "testimonials" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("testimonials")}
              >
                <MessageSquareQuote className="mr-2 h-4 w-4" />
                Success Stories
              </Button>
              <Button
                variant={activeTab === "gallery" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("gallery")}
              >
                <ImageIcon className="mr-2 h-4 w-4" />
                Campus Gallery
              </Button>
              <Button
                variant={activeTab === "users" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("users")}
              >
                <Users className="mr-2 h-4 w-4" />
                User Management
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <div>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3 md:hidden">
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="departments">Departments</TabsTrigger>
              </TabsList>
              <div className="my-2 md:hidden">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                  <TabsTrigger value="users">Users</TabsTrigger>
                </TabsList>
              </div>

              {/* Dashboard Overview */}
              <TabsContent value="dashboard">
                <h1 className="mb-6 text-2xl font-bold">Dashboard Overview</h1>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Total Events</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{mockEvents.length}</div>
                      <p className="text-xs text-muted-foreground">
                        {mockEvents.filter((e) => e.status === "upcoming").length} upcoming
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Departments</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{mockDepartments.length}</div>
                      <p className="text-xs text-muted-foreground">
                        {mockDepartments.reduce((acc, dept) => acc + dept.programs, 0)} programs
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Testimonials</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{mockTestimonials.length}</div>
                      <p className="text-xs text-muted-foreground">From alumni</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Gallery Images</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {mockGalleryCategories.reduce((acc, cat) => acc + cat.imageCount, 0)}
                      </div>
                      <p className="text-xs text-muted-foreground">Across {mockGalleryCategories.length} categories</p>
                    </CardContent>
                  </Card>
                </div>

                <h2 className="mb-4 mt-8 text-xl font-bold">Recent Activity</h2>
                <Card>
                  <CardHeader>
                    <CardTitle>Activity Log</CardTitle>
                    <CardDescription>Recent changes made to the website</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b pb-2">
                        <div>
                          <p className="font-medium">New event added</p>
                          <p className="text-sm text-muted-foreground">Workshop on Artificial Intelligence</p>
                        </div>
                        <p className="text-sm text-muted-foreground">Today, 10:30 AM</p>
                      </div>
                      <div className="flex items-center justify-between border-b pb-2">
                        <div>
                          <p className="font-medium">Gallery updated</p>
                          <p className="text-sm text-muted-foreground">Added 3 new images to Events category</p>
                        </div>
                        <p className="text-sm text-muted-foreground">Yesterday, 2:15 PM</p>
                      </div>
                      <div className="flex items-center justify-between border-b pb-2">
                        <div>
                          <p className="font-medium">Testimonial edited</p>
                          <p className="text-sm text-muted-foreground">Updated Priya Sharma's testimonial</p>
                        </div>
                        <p className="text-sm text-muted-foreground">Yesterday, 11:45 AM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Events & News Management */}
              <TabsContent value="events">
                <div className="mb-6 flex items-center justify-between">
                  <h1 className="text-2xl font-bold">Events & News Management</h1>
                  <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add New Event
                  </Button>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>All Events</CardTitle>
                    <CardDescription>Manage upcoming and past events</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockEvents.map((event) => (
                        <div key={event.id} className="flex items-center justify-between rounded-lg border p-4">
                          <div>
                            <h3 className="font-medium">{event.title}</h3>
                            <p className="text-sm text-muted-foreground">{event.date}</p>
                            <span
                              className={`mt-1 inline-block rounded-full px-2 py-0.5 text-xs ${
                                event.status === "upcoming"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-gray-100 text-gray-800"
                              }`}
                            >
                              {event.status === "upcoming" ? "Upcoming" : "Past"}
                            </span>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Edit className="mr-1 h-3 w-3" />
                              Edit
                            </Button>
                            <Button variant="outline" size="sm" className="text-destructive">
                              <Trash2 className="mr-1 h-3 w-3" />
                              Delete
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Academic Excellence (Departments) */}
              <TabsContent value="departments">
                <div className="mb-6 flex items-center justify-between">
                  <h1 className="text-2xl font-bold">Academic Excellence</h1>
                  <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add Department
                  </Button>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Departments</CardTitle>
                    <CardDescription>Manage department information and programs</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockDepartments.map((dept) => (
                        <div key={dept.id} className="flex items-center justify-between rounded-lg border p-4">
                          <div>
                            <h3 className="font-medium">{dept.name}</h3>
                            <p className="text-sm text-muted-foreground">{dept.programs} Programs</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Edit className="mr-1 h-3 w-3" />
                              Edit
                            </Button>
                            <Button variant="outline" size="sm">
                              <ChevronRight className="h-3 w-3" />
                              Programs
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Success Stories (Testimonials) */}
              <TabsContent value="testimonials">
                <div className="mb-6 flex items-center justify-between">
                  <h1 className="text-2xl font-bold">Success Stories</h1>
                  <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add Testimonial
                  </Button>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Alumni Testimonials</CardTitle>
                    <CardDescription>Manage testimonials from successful alumni</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockTestimonials.map((testimonial) => (
                        <div key={testimonial.id} className="flex items-center justify-between rounded-lg border p-4">
                          <div>
                            <h3 className="font-medium">{testimonial.name}</h3>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                            <p className="text-sm font-medium text-primary">{testimonial.company}</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Edit className="mr-1 h-3 w-3" />
                              Edit
                            </Button>
                            <Button variant="outline" size="sm" className="text-destructive">
                              <Trash2 className="mr-1 h-3 w-3" />
                              Delete
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Campus Gallery */}
              <TabsContent value="gallery">
                <div className="mb-6 flex items-center justify-between">
                  <h1 className="text-2xl font-bold">Campus Gallery</h1>
                  <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Upload Images
                  </Button>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Gallery Categories</CardTitle>
                    <CardDescription>Manage image categories and uploads</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockGalleryCategories.map((category) => (
                        <div key={category.id} className="flex items-center justify-between rounded-lg border p-4">
                          <div>
                            <h3 className="font-medium">{category.title}</h3>
                            <p className="text-sm text-muted-foreground">{category.imageCount} Images</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Edit className="mr-1 h-3 w-3" />
                              Edit
                            </Button>
                            <Button variant="outline" size="sm">
                              <ChevronRight className="h-3 w-3" />
                              View Images
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* User Management */}
              <TabsContent value="users">
                <div className="mb-6 flex items-center justify-between">
                  <h1 className="text-2xl font-bold">User Management</h1>
                  <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add User
                  </Button>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Admin Users</CardTitle>
                    <CardDescription>Manage admin access and permissions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between rounded-lg border p-4">
                        <div className="flex items-center space-x-4">
                          <div className="h-10 w-10 rounded-full bg-primary/10 p-2 text-center">
                            <span className="font-medium text-primary">A</span>
                          </div>
                          <div>
                            <h3 className="font-medium">Admin User</h3>
                            <p className="text-sm text-muted-foreground">admin@jeppiaar.edu.in</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Edit className="mr-1 h-3 w-3" />
                            Edit
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between rounded-lg border p-4">
                        <div className="flex items-center space-x-4">
                          <div className="h-10 w-10 rounded-full bg-primary/10 p-2 text-center">
                            <span className="font-medium text-primary">C</span>
                          </div>
                          <div>
                            <h3 className="font-medium">Content Manager</h3>
                            <p className="text-sm text-muted-foreground">content@jeppiaar.edu.in</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Edit className="mr-1 h-3 w-3" />
                            Edit
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

