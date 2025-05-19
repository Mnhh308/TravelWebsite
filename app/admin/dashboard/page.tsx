import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, CreditCard, DollarSign, Package, Users, MapPin, PlusCircle, Edit, Trash2 } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function AdminDashboard() {
  // Sample data - in a real app, this would come from your database
  const recentBookings = [
    {
      id: 1,
      customer: "John Doe",
      package: "Explore Beautiful Paris",
      date: "2024-05-10",
      guests: 2,
      total: 2598,
      status: "confirmed",
    },
    {
      id: 2,
      customer: "Jane Smith",
      package: "Tropical Paradise Bali",
      date: "2024-05-08",
      guests: 3,
      total: 4797,
      status: "pending",
    },
    {
      id: 3,
      customer: "Michael Johnson",
      package: "Historic Rome Adventure",
      date: "2024-05-05",
      guests: 2,
      total: 2798,
      status: "confirmed",
    },
    {
      id: 4,
      customer: "Emily Brown",
      package: "Tokyo Discovery Tour",
      date: "2024-05-03",
      guests: 1,
      total: 1899,
      status: "cancelled",
    },
  ]

  const packages = [
    {
      id: 1,
      name: "Explore Beautiful Paris",
      destination: "Paris, France",
      price: 1299,
      bookings: 24,
    },
    {
      id: 2,
      name: "Tropical Paradise Bali",
      destination: "Bali, Indonesia",
      price: 1599,
      bookings: 18,
    },
    {
      id: 3,
      name: "Historic Rome Adventure",
      destination: "Rome, Italy",
      price: 1399,
      bookings: 15,
    },
    {
      id: 4,
      name: "Tokyo Discovery Tour",
      destination: "Tokyo, Japan",
      price: 1899,
      bookings: 12,
    },
    {
      id: 5,
      name: "Greek Islands Cruise",
      destination: "Santorini, Greece",
      price: 1499,
      bookings: 10,
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Admin Dashboard</h2>
          <div className="flex items-center gap-2">
            <Button>
              <Calendar className="mr-2 h-4 w-4" />
              May 9, 2024
            </Button>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="packages">Packages</TabsTrigger>
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$45,231.89</div>
                  <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Bookings</CardTitle>
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+79</div>
                  <p className="text-xs text-muted-foreground">+12.4% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Packages</CardTitle>
                  <Package className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-muted-foreground">+3 new packages this month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">573</div>
                  <p className="text-xs text-muted-foreground">+42 new customers this month</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Recent Bookings</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Customer</TableHead>
                        <TableHead>Package</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recentBookings.map((booking) => (
                        <TableRow key={booking.id}>
                          <TableCell className="font-medium">{booking.customer}</TableCell>
                          <TableCell>{booking.package}</TableCell>
                          <TableCell>{new Date(booking.date).toLocaleDateString()}</TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                booking.status === "confirmed"
                                  ? "default"
                                  : booking.status === "pending"
                                    ? "outline"
                                    : "destructive"
                              }
                            >
                              {booking.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">${booking.total}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Popular Destinations</CardTitle>
                  <CardDescription>Top booked destinations this month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span>Paris, France</span>
                          <span className="font-medium">24 bookings</span>
                        </div>
                        <div className="mt-1 h-2 w-full rounded-full bg-secondary">
                          <div className="h-2 rounded-full bg-primary" style={{ width: "80%" }} />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span>Bali, Indonesia</span>
                          <span className="font-medium">18 bookings</span>
                        </div>
                        <div className="mt-1 h-2 w-full rounded-full bg-secondary">
                          <div className="h-2 rounded-full bg-primary" style={{ width: "60%" }} />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span>Rome, Italy</span>
                          <span className="font-medium">15 bookings</span>
                        </div>
                        <div className="mt-1 h-2 w-full rounded-full bg-secondary">
                          <div className="h-2 rounded-full bg-primary" style={{ width: "50%" }} />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span>Tokyo, Japan</span>
                          <span className="font-medium">12 bookings</span>
                        </div>
                        <div className="mt-1 h-2 w-full rounded-full bg-secondary">
                          <div className="h-2 rounded-full bg-primary" style={{ width: "40%" }} />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span>Santorini, Greece</span>
                          <span className="font-medium">10 bookings</span>
                        </div>
                        <div className="mt-1 h-2 w-full rounded-full bg-secondary">
                          <div className="h-2 rounded-full bg-primary" style={{ width: "33%" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="packages" className="space-y-4">
            <div className="flex justify-between">
              <h3 className="text-xl font-semibold">Manage Tour Packages</h3>
              <Link href="/admin/packages/add">
                <Button>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add New Package
                </Button>
              </Link>
            </div>

            <Card>
              <CardContent className="pt-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Package Name</TableHead>
                      <TableHead>Destination</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Bookings</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {packages.map((pkg) => (
                      <TableRow key={pkg.id}>
                        <TableCell className="font-medium">{pkg.name}</TableCell>
                        <TableCell>{pkg.destination}</TableCell>
                        <TableCell>${pkg.price}</TableCell>
                        <TableCell>{pkg.bookings}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Link href={`/admin/packages/edit/${pkg.id}`}>
                              <Button variant="outline" size="icon">
                                <Edit className="h-4 w-4" />
                                <span className="sr-only">Edit</span>
                              </Button>
                            </Link>
                            <Button variant="outline" size="icon" className="text-destructive">
                              <Trash2 className="h-4 w-4" />
                              <span className="sr-only">Delete</span>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bookings" className="space-y-4">
            <h3 className="text-xl font-semibold">Manage Bookings</h3>
            <Card>
              <CardContent className="pt-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Booking ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Package</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Guests</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentBookings.map((booking) => (
                      <TableRow key={booking.id}>
                        <TableCell>#{booking.id.toString().padStart(5, "0")}</TableCell>
                        <TableCell className="font-medium">{booking.customer}</TableCell>
                        <TableCell>{booking.package}</TableCell>
                        <TableCell>{new Date(booking.date).toLocaleDateString()}</TableCell>
                        <TableCell>{booking.guests}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              booking.status === "confirmed"
                                ? "default"
                                : booking.status === "pending"
                                  ? "outline"
                                  : "destructive"
                            }
                          >
                            {booking.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">${booking.total}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="customers" className="space-y-4">
            <h3 className="text-xl font-semibold">Manage Customers</h3>
            <Card>
              <CardContent className="pt-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Total Bookings</TableHead>
                      <TableHead>Total Spent</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">John Doe</TableCell>
                      <TableCell>john.doe@example.com</TableCell>
                      <TableCell>3</TableCell>
                      <TableCell>$4,597</TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Jane Smith</TableCell>
                      <TableCell>jane.smith@example.com</TableCell>
                      <TableCell>2</TableCell>
                      <TableCell>$3,198</TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Michael Johnson</TableCell>
                      <TableCell>michael.j@example.com</TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>$1,399</TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Emily Brown</TableCell>
                      <TableCell>emily.b@example.com</TableCell>
                      <TableCell>2</TableCell>
                      <TableCell>$2,898</TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
