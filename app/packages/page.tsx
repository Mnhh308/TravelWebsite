import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import TourPackageCard from "@/components/tour-package-card"

export default function PackagesPage() {
  // Sample data - in a real app, this would come from your database
  const packages = [
    {
      id: 1,
      name: "Explore Beautiful Paris",
      image: "/placeholder.svg?height=400&width=600",
      fromLocation: "New York",
      toLocation: "Paris",
      nights: 5,
      depart: "2024-06-15",
      arrive: "2024-06-20",
      price: 1299,
      hotel: "Grand Hotel Paris",
      type: "City Tour",
    },
    {
      id: 2,
      name: "Tropical Paradise Bali",
      image: "/placeholder.svg?height=400&width=600",
      fromLocation: "Los Angeles",
      toLocation: "Bali",
      nights: 7,
      depart: "2024-07-10",
      arrive: "2024-07-17",
      price: 1599,
      hotel: "Bali Beach Resort",
      type: "Beach Vacation",
    },
    {
      id: 3,
      name: "Historic Rome Adventure",
      image: "/placeholder.svg?height=400&width=600",
      fromLocation: "London",
      toLocation: "Rome",
      nights: 6,
      depart: "2024-08-05",
      arrive: "2024-08-11",
      price: 1399,
      hotel: "Roman Heritage Hotel",
      type: "Cultural Tour",
    },
    {
      id: 4,
      name: "Tokyo Discovery Tour",
      image: "/placeholder.svg?height=400&width=600",
      fromLocation: "San Francisco",
      toLocation: "Tokyo",
      nights: 8,
      depart: "2024-09-12",
      arrive: "2024-09-20",
      price: 1899,
      hotel: "Tokyo Luxury Hotel",
      type: "City Tour",
    },
    {
      id: 5,
      name: "Greek Islands Cruise",
      image: "/placeholder.svg?height=400&width=600",
      fromLocation: "Athens",
      toLocation: "Santorini",
      nights: 6,
      depart: "2024-06-25",
      arrive: "2024-07-01",
      price: 1499,
      hotel: "Cruise Ship Cabin",
      type: "Cruise",
    },
    {
      id: 6,
      name: "Safari Adventure Kenya",
      image: "/placeholder.svg?height=400&width=600",
      fromLocation: "Nairobi",
      toLocation: "Maasai Mara",
      nights: 5,
      depart: "2024-08-15",
      arrive: "2024-08-20",
      price: 2199,
      hotel: "Safari Lodge",
      type: "Adventure",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Tour Packages</h1>
          <p className="text-muted-foreground max-w-3xl">
            Discover our wide range of tour packages designed to provide unforgettable travel experiences around the
            world.
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-6">Filter Packages</h2>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="destination">Destination</Label>
                      <Input id="destination" placeholder="Search destination" />
                    </div>

                    <div className="space-y-2">
                      <Label>Price Range</Label>
                      <div className="pt-4 pb-2">
                        <Slider defaultValue={[500, 2000]} min={100} max={5000} step={100} />
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>$100</span>
                        <span>$5000</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Duration</Label>
                      <div className="space-y-2">
                        {[
                          { id: "1-3", label: "1-3 Nights" },
                          { id: "4-7", label: "4-7 Nights" },
                          { id: "8-14", label: "8-14 Nights" },
                          { id: "15+", label: "15+ Nights" },
                        ].map((option) => (
                          <div key={option.id} className="flex items-center space-x-2">
                            <Checkbox id={`duration-${option.id}`} />
                            <Label htmlFor={`duration-${option.id}`} className="text-sm font-normal">
                              {option.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Tour Type</Label>
                      <div className="space-y-2">
                        {[
                          { id: "city", label: "City Tour" },
                          { id: "beach", label: "Beach Vacation" },
                          { id: "cultural", label: "Cultural Tour" },
                          { id: "adventure", label: "Adventure" },
                          { id: "cruise", label: "Cruise" },
                        ].map((option) => (
                          <div key={option.id} className="flex items-center space-x-2">
                            <Checkbox id={`type-${option.id}`} />
                            <Label htmlFor={`type-${option.id}`} className="text-sm font-normal">
                              {option.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full">Apply Filters</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-3">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <p className="text-muted-foreground mb-4 md:mb-0">
                  Showing <span className="font-medium text-foreground">{packages.length}</span> packages
                </p>

                <div className="flex items-center">
                  <Label htmlFor="sort-by" className="mr-2">
                    Sort by:
                  </Label>
                  <Select defaultValue="price-low">
                    <SelectTrigger id="sort-by" className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="duration-short">Duration: Shortest</SelectItem>
                      <SelectItem value="duration-long">Duration: Longest</SelectItem>
                      <SelectItem value="popularity">Popularity</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {packages.map((pkg) => (
                  <TourPackageCard key={pkg.id} package={pkg} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
