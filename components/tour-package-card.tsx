import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarIcon, MapPinIcon, Clock, ArrowRight } from "lucide-react"

interface TourPackage {
  id: number
  name: string
  image: string
  fromLocation: string
  toLocation: string
  nights: number
  depart: string
  arrive: string
  price: number
  hotel: string
  type: string
}

interface TourPackageCardProps {
  package: TourPackage
}

export default function TourPackageCard({ package: pkg }: TourPackageCardProps) {
  // Format dates
  const departDate = new Date(pkg.depart).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })

  const arriveDate = new Date(pkg.arrive).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={pkg.image || "/placeholder.svg"}
          alt={pkg.name}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
        <Badge className="absolute top-3 right-3">{pkg.type}</Badge>
      </div>
      <CardContent className="p-5">
        <h3 className="text-xl font-semibold mb-2 line-clamp-1">{pkg.name}</h3>

        <div className="flex items-center text-muted-foreground mb-2">
          <MapPinIcon className="h-4 w-4 mr-1" />
          <span className="text-sm">
            {pkg.fromLocation} to {pkg.toLocation}
          </span>
        </div>

        <div className="flex items-center text-muted-foreground mb-2">
          <Clock className="h-4 w-4 mr-1" />
          <span className="text-sm">{pkg.nights} nights</span>
        </div>

        <div className="flex items-center text-muted-foreground mb-4">
          <CalendarIcon className="h-4 w-4 mr-1" />
          <span className="text-sm">
            {departDate} - {arriveDate}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-muted-foreground">Starting from</p>
            <p className="text-2xl font-bold">${pkg.price}</p>
          </div>

          <Link href={`/packages/${pkg.id}`}>
            <Button variant="outline" size="sm" className="group">
              Details
              <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
