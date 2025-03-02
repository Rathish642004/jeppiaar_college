"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Lock, AlertCircle } from "lucide-react"

export default function AdminLogin() {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    // For demo purposes, we'll use a simple credential check
    // In a real application, you would validate against a backend
    if (username === "admin" && password === "password") {
      // Simulate API call delay
      setTimeout(() => {
        setIsLoading(false)
        // In a real app, you would store auth token in cookies/localStorage
        router.push("/admin/dashboard")
      }, 1000)
    } else {
      setIsLoading(false)
      setError("Invalid username or password")
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 pt-[100px]">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-md">
          <div className="mb-6 flex justify-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-16 w-16 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=64&width=64"
                  alt="Jeppiaar College Logo"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
            </Link>
          </div>

          <Card className="border-none shadow-lg">
            <CardHeader className="space-y-1 text-center">
              <CardTitle className="text-2xl font-bold">Office Login</CardTitle>
              <CardDescription>Enter your credentials to access the admin dashboard</CardDescription>
            </CardHeader>
            <CardContent>
              {error && (
                <Alert variant="destructive" className="mb-4">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      placeholder="Enter your username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <Link href="/admin/forgot-password" className="text-xs text-primary hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Logging in..." : "Login"}
                  </Button>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-center border-t p-4">
              <div className="text-center text-sm text-muted-foreground">
                <div className="flex items-center justify-center">
                  <Lock className="mr-1 h-3 w-3" />
                  <span>Secure login for authorized personnel only</span>
                </div>
              </div>
            </CardFooter>
          </Card>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary hover:underline">
              ← Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

