import { NextResponse } from "next/server"
import { extractCityNames, extractDuration, detectIntent } from "@/lib/chatbot-utils"

// Mock data for tours (in a real app, this would come from a database)
const tours = {
  "Đà Lạt": [
    {
      duration: "3 ngày 2 đêm",
      price: "3.200.000 VNĐ",
      details: "Tham quan Hồ Xuân Hương, Cầu Đất, Thác Datanla.",
    },
    {
      duration: "4 ngày 3 đêm",
      price: "4.500.000 VNĐ",
      details: "Thêm săn mây Trại Mát, chợ đêm.",
    },
  ],
  "Hà Nội": [
    {
      duration: "2 ngày 1 đêm",
      price: "2.500.000 VNĐ",
      details: "Hồ Hoàn Kiếm, Văn Miếu, Lăng Bác.",
    },
  ],
  "Hội An": [
    {
      duration: "3 ngày 2 đêm",
      price: "3.800.000 VNĐ",
      details: "Phố cổ Hội An, Bãi biển An Bàng, Làng gốm Thanh Hà.",
    },
  ],
  "Phú Quốc": [
    {
      duration: "4 ngày 3 đêm",
      price: "5.500.000 VNĐ",
      details: "Bãi Sao, Vinpearl Safari, Hòn Thơm, Làng chài Hàm Ninh.",
    },
  ],
  "Nha Trang": [
    {
      duration: "3 ngày 2 đêm",
      price: "3.600.000 VNĐ",
      details: "Vinpearl Land, Tháp Bà Ponagar, Bốn đảo, Vịnh Nha Trang.",
    },
  ],
}

// Mock data for attractions
const attractions = {
  "Đà Lạt": ["Hồ Xuân Hương", "Thung lũng Tình Yêu", "Đồi Robin", "Thác Datanla", "Ga Đà Lạt"],
  "Hà Nội": ["Hồ Hoàn Kiếm", "Văn Miếu Quốc Tử Giám", "Lăng Chủ tịch Hồ Chí Minh", "Phố cổ Hà Nội", "Chùa Một Cột"],
  "Hội An": ["Phố cổ Hội An", "Chùa Cầu", "Bãi biển An Bàng", "Làng gốm Thanh Hà", "Rừng dừa Bảy Mẫu"],
  "Phú Quốc": ["Bãi Sao", "Vinpearl Safari", "Hòn Thơm", "Làng chài Hàm Ninh", "Nhà tù Phú Quốc"],
  "Nha Trang": ["Vinpearl Land", "Tháp Bà Ponagar", "Bốn đảo", "Vịnh Nha Trang", "Viện Hải dương học"],
}

// Mock weather data
const weatherData = {
  "Đà Lạt": { temp: "22°C", description: "Mát mẻ, có mưa nhẹ" },
  "Hà Nội": { temp: "32°C", description: "Nắng nóng" },
  "Hội An": { temp: "30°C", description: "Nắng, có mây" },
  "Phú Quốc": { temp: "29°C", description: "Nắng, gió nhẹ" },
  "Nha Trang": { temp: "31°C", description: "Nắng, ít mây" },
}

export async function POST(request: Request) {
  try {
    const { message } = await request.json()

    // Get all available cities
    const availableCities = Object.keys(tours)

    // Detect intent and extract entities
    const intent = detectIntent(message)
    const mentionedCities = extractCityNames(message, availableCities)
    const duration = extractDuration(message)

    let response = ""

    switch (intent) {
      case "greeting":
        response =
          "Xin chào! Tôi là TravelBot, trợ lý ảo của TourEase. Tôi có thể giúp bạn tìm kiếm thông tin về tour du lịch, thời tiết, điểm tham quan. Bạn cần hỗ trợ gì?"
        break

      case "weather":
        if (mentionedCities.length > 0) {
          const city = mentionedCities[0]
          const weather = weatherData[city]
          response = `Thời tiết ở ${city} hôm nay: ${weather.temp}, ${weather.description}. Bạn có muốn xem các điểm tham quan ở ${city} không?`
        } else {
          response = "Bạn muốn biết thời tiết ở đâu? Tôi có thông tin về Đà Lạt, Hà Nội, Hội An, Phú Quốc và Nha Trang."
        }
        break

      case "attractions":
        if (mentionedCities.length > 0) {
          const city = mentionedCities[0]
          const cityAttractions = attractions[city]
          response = `Các điểm tham quan nổi tiếng ở ${city} bao gồm: ${cityAttractions.join(", ")}. Bạn có muốn biết thông tin về tour du lịch ${city} không?`
        } else {
          response =
            "Bạn muốn biết điểm tham quan ở đâu? Tôi có thông tin về Đà Lạt, Hà Nội, Hội An, Phú Quốc và Nha Trang."
        }
        break

      case "tour_info":
        if (mentionedCities.length > 0) {
          const city = mentionedCities[0]
          const cityTours = tours[city]

          let tourResponse = `Chúng tôi có các tour du lịch ${city} sau:\n\n`

          if (duration) {
            const matchingTour = cityTours.find((tour) => tour.duration.includes(duration))
            if (matchingTour) {
              tourResponse = `Tour ${city} (${matchingTour.duration}): ${matchingTour.price}\nChi tiết: ${matchingTour.details}\n\nBạn có muốn đặt tour này không?`
            } else {
              tourResponse += cityTours
                .map(
                  (tour, index) =>
                    `${index + 1}. Tour ${city} (${tour.duration}): ${tour.price}\nChi tiết: ${tour.details}`,
                )
                .join("\n\n")
              tourResponse += "\n\nBạn có muốn đặt tour nào không?"
            }
          } else {
            tourResponse += cityTours
              .map(
                (tour, index) =>
                  `${index + 1}. Tour ${city} (${tour.duration}): ${tour.price}\nChi tiết: ${tour.details}`,
              )
              .join("\n\n")
            tourResponse += "\n\nBạn có muốn đặt tour nào không?"
          }

          response = tourResponse
        } else {
          response = "Chúng tôi có tour du lịch đến Đà Lạt, Hà Nội, Hội An, Phú Quốc và Nha Trang. Bạn muốn đi đâu?"
        }
        break

      case "booking":
        response =
          "Để đặt tour, bạn có thể nhấn vào nút 'Book Now' trên trang chi tiết tour hoặc liên hệ với chúng tôi qua số điện thoại: +84 123 456 789. Bạn cần hỗ trợ gì thêm không?"
        break

      case "contact":
        response =
          "Bạn có thể liên hệ với chúng tôi qua:\nSố điện thoại: +84 123 456 789\nEmail: info@tourease.com\nĐịa chỉ: 123 Travel Street, Tourism City, Việt Nam"
        break

      case "thanks":
        response = "Không có gì! Rất vui được hỗ trợ bạn. Nếu bạn cần thêm thông tin gì, đừng ngại hỏi nhé!"
        break

      default:
        response =
          "Xin lỗi, tôi chưa hiểu rõ câu hỏi của bạn. Tôi có thể giúp bạn tìm kiếm thông tin về tour du lịch, thời tiết, điểm tham quan ở các thành phố như Đà Lạt, Hà Nội, Hội An, Phú Quốc và Nha Trang. Bạn cần hỗ trợ gì?"
    }

    // Simulate network delay for a more realistic experience
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({ response })
  } catch (error) {
    console.error("Error processing chatbot request:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
