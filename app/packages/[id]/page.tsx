import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, MapPinIcon, Clock, Hotel, Heart, Share, Star, CheckCircle2, XCircle } from "lucide-react"

export default function PackageDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch this data from your database based on the ID
  const packageDetail = {
    id: Number.parseInt(params.id),
    name: "Explore Beautiful Paris",
    image: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    fromLocation: "New York",
    toLocation: "Paris",
    nights: 5,
    depart: "2024-06-15",
    arrive: "2024-06-20",
    price: 1299,
    hotel: "Grand Hotel Paris",
    type: "City Tour",
    rating: 4.8,
    reviews: 124,
    description:
      "Experience the magic of Paris with our comprehensive 5-night tour package. From the iconic Eiffel Tower to the charming streets of Montmartre, immerse yourself in the rich culture and history of the City of Light. Enjoy guided tours, exquisite cuisine, and luxurious accommodations at the Grand Hotel Paris.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Paris",
        description:
          "Arrive at Charles de Gaulle Airport and transfer to your hotel. Enjoy a welcome dinner at a local restaurant.",
      },
      {
        day: 2,
        title: "Eiffel Tower & Seine River Cruise",
        description:
          "Visit the iconic Eiffel Tower in the morning. After lunch, enjoy a relaxing Seine River cruise to see Paris from a different perspective.",
      },
      {
        day: 3,
        title: "Louvre Museum & Notre Dame",
        description:
          "Spend the morning exploring the world-famous Louvre Museum. In the afternoon, visit Notre Dame Cathedral and explore the Latin Quarter.",
      },
      {
        day: 4,
        title: "Versailles Palace",
        description:
          "Full-day excursion to the magnificent Palace of Versailles, including the palace, gardens, and Marie Antoinette's Estate.",
      },
      {
        day: 5,
        title: "Montmartre & Free Time",
        description:
          "Morning tour of the artistic neighborhood of Montmartre. Afternoon free for shopping or personal exploration.",
      },
      {
        day: 6,
        title: "Departure",
        description: "Check out from the hotel and transfer to the airport for your departure flight.",
      },
    ],
    included: [
      "5 nights accommodation at Grand Hotel Paris",
      "Daily breakfast",
      "Welcome dinner",
      "Airport transfers",
      "Guided tours as per itinerary",
      "Seine River cruise tickets",
      "Skip-the-line tickets to Eiffel Tower and Louvre",
      "Full-day excursion to Versailles",
      "English-speaking tour guide",
      "All taxes and service charges",
    ],
    notIncluded: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Meals not mentioned in the itinerary",
      "Optional activities",
      "Gratuities",
    ],
  }

  // Format dates
  const departDate = new Date(packageDetail.depart).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  })

  const arriveDate = new Date(packageDetail.arrive).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  })

  return (
    <main className="flex min-h-screen flex-col">
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{packageDetail.name}</h1>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPinIcon className="h-4 w-4" />
                <span>
                  {packageDetail.fromLocation} to {packageDetail.toLocation}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <span className="ml-1 font-medium">{packageDetail.rating}</span>
                <span className="text-muted-foreground ml-1">({packageDetail.reviews} reviews)</span>
              </div>

              <Badge>{packageDetail.type}</Badge>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <div className="relative h-[400px] w-full overflow-hidden rounded-lg mb-4">
                  <Image
                    src={packageDetail.image || "/placeholder.svg"}
                    alt={packageDetail.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="grid grid-cols-4 gap-4">
                  {packageDetail.gallery.map((image, index) => (
                    <div key={index} className="relative h-24 overflow-hidden rounded-lg">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Gallery image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <Tabs defaultValue="overview" className="mb-8">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                  <TabsTrigger value="included">Included</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-6">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">Tour Overview</h2>
                    <p className="text-muted-foreground">{packageDetail.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <Card>
                        <CardContent className="p-4 flex items-center gap-4">
                          <div className="bg-primary/10 p-3 rounded-full">
                            <Clock className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Duration</p>
                            <p className="font-medium">{packageDetail.nights} nights</p>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardContent className="p-4 flex items-center gap-4">
                          <div className="bg-primary/10 p-3 rounded-full">
                            <CalendarIcon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Dates</p>
                            <p className="font-medium">
                              {departDate} - {arriveDate}
                            </p>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardContent className="p-4 flex items-center gap-4">
                          <div className="bg-primary/10 p-3 rounded-full">
                            <Hotel className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Accommodation</p>
                            <p className="font-medium">{packageDetail.hotel}</p>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardContent className="p-4 flex items-center gap-4">
                          <div className="bg-primary/10 p-3 rounded-full">
                            <MapPinIcon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Destination</p>
                            <p className="font-medium">{packageDetail.toLocation}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="itinerary" className="mt-6">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">Tour Itinerary</h2>
                    <p className="text-muted-foreground mb-6">
                      Detailed day-by-day itinerary for your {packageDetail.nights}-night tour.
                    </p>

                    <div className="space-y-6">
                      {packageDetail.itinerary.map((day) => (
                        <div key={day.day} className="relative pl-8 pb-6 border-l border-gray-200">
                          <div className="absolute left-[-8px] bg-primary text-white rounded-full w-4 h-4 flex items-center justify-center p-3">
                            {day.day}
                          </div>
                          <h3 className="text-lg font-semibold mb-2">{day.title}</h3>
                          <p className="text-muted-foreground">{day.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="included" className="mt-6">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">What's Included</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-medium mb-4">Included in the package:</h3>
                        <ul className="space-y-2">
                          {packageDetail.included.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium mb-4">Not included in the package:</h3>
                        <ul className="space-y-2">
                          {packageDetail.notIncluded.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <XCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="reviews" className="mt-6">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">Customer Reviews</h2>
                    <p className="text-muted-foreground mb-6">
                      Read what our customers have to say about their experience with this tour package.
                    </p>

                    <div className="space-y-6">
                      {/* This would be populated with actual reviews in a real app */}
                      <Card className="border-none shadow-sm">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="flex items-center">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-5 w-5 ${i < 5 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-muted-foreground">2 weeks ago</span>
                          </div>

                          <h3 className="font-semibold mb-2">Amazing experience in Paris!</h3>
                          <p className="text-muted-foreground mb-4">
                            This tour exceeded all our expectations. The hotel was luxurious, the guide was
                            knowledgeable, and the itinerary was perfect. We had enough free time to explore on our own
                            while still seeing all the major attractions.
                          </p>

                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-gray-200 mr-3 flex items-center justify-center">
                              <span className="font-medium">JD</span>
                            </div>
                            <div>
                              <p className="font-medium">John Doe</p>
                              <p className="text-sm text-muted-foreground">New York, USA</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-none shadow-sm">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="flex items-center">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-5 w-5 ${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-muted-foreground">1 month ago</span>
                          </div>

                          <h3 className="font-semibold mb-2">Great tour, but could use more free time</h3>
                          <p className="text-muted-foreground mb-4">
                            The tour was well organized and our guide was excellent. The only downside was that the
                            schedule was quite packed, and we would have appreciated more free time to explore Paris on
                            our own.
                          </p>

                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-gray-200 mr-3 flex items-center justify-center">
                              <span className="font-medium">JS</span>
                            </div>
                            <div>
                              <p className="font-medium">Jane Smith</p>
                              <p className="text-sm text-muted-foreground">London, UK</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground">Starting from</p>
                    <div className="flex items-baseline">
                      <p className="text-3xl font-bold">${packageDetail.price}</p>
                      <p className="text-muted-foreground ml-1">per person</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="font-medium">{packageDetail.nights} nights</span>
                    </div>

                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Departure</span>
                      <span className="font-medium">{departDate}</span>
                    </div>

                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Return</span>
                      <span className="font-medium">{arriveDate}</span>
                    </div>

                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Hotel</span>
                      <span className="font-medium">{packageDetail.hotel}</span>
                    </div>
                  </div>

                  <Link href={`/book/${packageDetail.id}`}>
                    <Button className="w-full mb-3" size="lg">
                      Book Now
                    </Button>
                  </Link>

                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1">
                      <Heart className="h-4 w-4 mr-2" />
                      Wishlist
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Share className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
