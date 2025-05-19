import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function FeaturedDestinations() {
  // Sample data - in a real app, this would come from your database
  const destinations = [
    {
      id: 1,
      name: "Paris",
      country: "France",
      image: "/placeholder.svg?height=400&width=600",
      packages: 12,
    },
    {
      id: 2,
      name: "Bali",
      country: "Indonesia",
      image: "/placeholder.svg?height=400&width=600",
      packages: 8,
    },
    {
      id: 3,
      name: "Rome",
      country: "Italy",
      image: "/placeholder.svg?height=400&width=600",
      packages: 10,
    },
    {
      id: 4,
      name: "Tokyo",
      country: "Japan",
      image: "/placeholder.svg?height=400&width=600",
      packages: 7,
    },
  ]

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Destinations</h2>
            <p className="text-muted-foreground max-w-2xl">
              Explore our most popular destinations with exclusive tour packages
            </p>
          </div>
          <Link href="/destinations" className="hidden md:block">
            <Button variant="link" className="group">
              View All Destinations
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <Link key={destination.id} href={`/destinations/${destination.id}`}>
              <Card className="overflow-hidden h-full transition-all hover:shadow-lg">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="text-xl font-semibold">{destination.name}</h3>
                    <p className="text-sm text-white/80">{destination.country}</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">{destination.packages} tour packages available</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-8 md:hidden">
          <Link href="/destinations">
            <Button variant="outline">
              View All Destinations
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
