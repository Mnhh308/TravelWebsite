// Simple NLP utilities for the chatbot

// Extract city names from a message
export function extractCityNames(message: string, cities: string[]): string[] {
  const lowerMessage = message.toLowerCase()
  return cities.filter((city) => lowerMessage.includes(city.toLowerCase()))
}

// Extract duration from a message
export function extractDuration(message: string): string | null {
  const durationPatterns = [/(\d+)\s*ngày\s*(\d+)\s*đêm/i, /(\d+)\s*ngày/i, /(\d+)\s*đêm/i]

  for (const pattern of durationPatterns) {
    const match = message.match(pattern)
    if (match) {
      if (pattern.toString().includes("ngày") && pattern.toString().includes("đêm")) {
        return `${match[1]} ngày ${match[2]} đêm`
      } else if (pattern.toString().includes("ngày")) {
        return `${match[1]} ngày`
      } else {
        return `${match[1]} đêm`
      }
    }
  }

  return null
}

// Detect intent from a message
export function detectIntent(message: string): string {
  const lowerMessage = message.toLowerCase()

  if (lowerMessage.includes("thời tiết") || lowerMessage.includes("nhiệt độ")) {
    return "weather"
  }

  if (lowerMessage.includes("tham quan") || lowerMessage.includes("địa điểm") || lowerMessage.includes("điểm đến")) {
    return "attractions"
  }

  if (lowerMessage.includes("tour") || lowerMessage.includes("du lịch") || lowerMessage.includes("giá")) {
    return "tour_info"
  }

  if (lowerMessage.includes("đặt") || lowerMessage.includes("book")) {
    return "booking"
  }

  if (
    lowerMessage.includes("liên hệ") ||
    lowerMessage.includes("contact") ||
    lowerMessage.includes("số điện thoại") ||
    lowerMessage.includes("email")
  ) {
    return "contact"
  }

  if (lowerMessage.includes("cảm ơn") || lowerMessage.includes("thank")) {
    return "thanks"
  }

  if (lowerMessage.includes("xin chào") || lowerMessage.includes("chào") || lowerMessage.includes("hello")) {
    return "greeting"
  }

  return "unknown"
}

// Format currency
export function formatCurrency(amount: string): string {
  return amount
}
