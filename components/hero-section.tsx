"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePicker } from "@/components/date-picker"
import { Card, CardContent } from "@/components/ui/card"
import { Search } from "lucide-react"

export default function HeroSection() {
  const [destination, setDestination] = useState("")
  const [departureDate, setDepartureDate] = useState<Date | undefined>(undefined)
  const [returnDate, setReturnDate] = useState<Date | undefined>(undefined)
  const [guests, setGuests] = useState("2")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would search for packages
    console.log({ destination, departureDate, returnDate, guests })
  }

  return (
    <section className="relative h-[600px] flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="/placeholder.svg?height=600&width=1600"
          alt="Travel destinations"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Discover Your Perfect Travel Experience
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Explore the world with our premium tour packages and create unforgettable memories
          </p>

          <Card className="bg-white/95 backdrop-blur-sm">
            <CardContent className="p-6">
              <form onSubmit={handleSearch}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="destination">Destination</Label>
                    <Input
                      id="destination"
                      placeholder="Where do you want to go?"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="departure-date">Departure Date</Label>
                    <DatePicker
                      id="departure-date"
                      date={departureDate}
                      setDate={setDepartureDate}
                      placeholder="Select departure date"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="return-date">Return Date</Label>
                    <DatePicker
                      id="return-date"
                      date={returnDate}
                      setDate={setReturnDate}
                      placeholder="Select return date"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="guests">Guests</Label>
                    <Select value={guests} onValueChange={setGuests}>
                      <SelectTrigger id="guests">
                        <SelectValue placeholder="Number of guests" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Guest</SelectItem>
                        <SelectItem value="2">2 Guests</SelectItem>
                        <SelectItem value="3">3 Guests</SelectItem>
                        <SelectItem value="4">4 Guests</SelectItem>
                        <SelectItem value="5">5+ Guests</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button type="submit" className="w-full mt-6" size="lg">
                  <Search className="mr-2 h-4 w-4" />
                  Search Tours
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
