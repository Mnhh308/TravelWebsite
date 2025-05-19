import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarIcon, MapPinIcon, Clock, Users, ArrowRight } from "lucide-react"
import TourPackageCard from "@/components/tour-package-card"
import HeroSection from "@/components/hero-section"
import FeaturedDestinations from "@/components/featured-destinations"
import TestimonialSection from "@/components/testimonial-section"

export default function Home() {
  // Sample data - in a real app, this would come from your database
  const featuredPackages = [
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
  ]

  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />

      <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col items-center mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Tour Packages</h2>
            <p className="text-muted-foreground max-w-2xl">
              Discover our most popular destinations and tour packages. Book your dream vacation today!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPackages.map((pkg) => (
              <TourPackageCard key={pkg.id} package={pkg} />
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link href="/packages">
              <Button variant="outline" size="lg" className="group">
                View All Packages
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <FeaturedDestinations />

      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-col items-center mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground max-w-2xl">
              We provide exceptional travel experiences with personalized service and attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-none shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Guides</h3>
                <p className="text-muted-foreground">Our professional guides ensure you have the best experience.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MapPinIcon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Unique Destinations</h3>
                <p className="text-muted-foreground">Discover hidden gems and extraordinary places around the world.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <CalendarIcon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Flexible Booking</h3>
                <p className="text-muted-foreground">Change your plans with ease with our flexible booking options.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-muted-foreground">Our customer support team is available around the clock.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <TestimonialSection />
    </main>
  )
}
