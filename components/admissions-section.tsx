import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GraduationCap, BookOpen, Calendar, Clock, FileText, Users, Download, ArrowRight } from "lucide-react"

export default function AdmissionsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">Join Our Community</h2>
          <h3 className="mb-4 text-3xl font-bold md:text-4xl">Admissions</h3>
          <p className="text-muted-foreground">
            Take the first step towards a successful career by joining Jeppiaar College of Engineering and Technology.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <Tabs defaultValue="undergraduate" className="w-full">
            <div className="mb-8 flex justify-center">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="undergraduate">Undergraduate</TabsTrigger>
                <TabsTrigger value="postgraduate">Postgraduate</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="undergraduate">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <AdmissionCard
                  icon={<GraduationCap className="h-6 w-6" />}
                  title="B.Tech Programs"
                  description="4-year undergraduate engineering programs in various disciplines."
                  items={[
                    "Computer Science & Engineering",
                    "Electrical & Electronics Engineering",
                    "Mechanical Engineering",
                    "Civil Engineering",
                    "Electronics & Communication",
                    "Information Technology",
                  ]}
                />

                <AdmissionCard
                  icon={<Calendar className="h-6 w-6" />}
                  title="Important Dates"
                  description="Key dates for the undergraduate admission process."
                  items={[
                    "Application Opens: January 15, 2023",
                    "Application Deadline: May 30, 2023",
                    "Entrance Exam: June 15, 2023",
                    "Results Announcement: July 1, 2023",
                    "Counseling Begins: July 15, 2023",
                    "Classes Commence: August 1, 2023",
                  ]}
                />

                <AdmissionCard
                  icon={<FileText className="h-6 w-6" />}
                  title="Eligibility & Documents"
                  description="Requirements and documents needed for admission."
                  items={[
                    "10+2 with minimum 60% in PCM",
                    "Valid JEE/State Entrance Score",
                    "Mark Sheets (10th & 12th)",
                    "Transfer Certificate",
                    "Character Certificate",
                    "Passport Size Photographs",
                  ]}
                />
              </div>
            </TabsContent>

            <TabsContent value="postgraduate">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <AdmissionCard
                  icon={<BookOpen className="h-6 w-6" />}
                  title="M.Tech Programs"
                  description="2-year postgraduate engineering programs for specialized study."
                  items={[
                    "Computer Science & Engineering",
                    "Power Systems Engineering",
                    "Structural Engineering",
                    "Manufacturing Engineering",
                    "Communication Systems",
                    "Software Engineering",
                  ]}
                />

                <AdmissionCard
                  icon={<Clock className="h-6 w-6" />}
                  title="Important Dates"
                  description="Key dates for the postgraduate admission process."
                  items={[
                    "Application Opens: February 1, 2023",
                    "Application Deadline: June 15, 2023",
                    "Entrance Exam: June 30, 2023",
                    "Results Announcement: July 15, 2023",
                    "Counseling Begins: July 25, 2023",
                    "Classes Commence: August 10, 2023",
                  ]}
                />

                <AdmissionCard
                  icon={<Users className="h-6 w-6" />}
                  title="Eligibility & Documents"
                  description="Requirements and documents needed for admission."
                  items={[
                    "B.Tech/B.E with minimum 65%",
                    "Valid GATE Score (preferred)",
                    "All Semester Mark Sheets",
                    "Degree Certificate/Provisional",
                    "Experience Certificate (if any)",
                    "Passport Size Photographs",
                  ]}
                />
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 rounded-xl bg-primary/5 p-8 text-center">
            <h4 className="text-2xl font-bold">Ready to Apply?</h4>
            <p className="max-w-2xl text-muted-foreground">
              Take the first step towards your future career by applying to Jeppiaar College of Engineering and
              Technology today.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
              <Button size="lg">
                Apply Online <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Download Brochure <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AdmissionCard({
  icon,
  title,
  description,
  items,
}: {
  icon: React.ReactNode
  title: string
  description: string
  items: string[]
}) {
  return (
    <Card>
      <CardHeader>
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button variant="link" className="px-0">
          Learn More <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}

