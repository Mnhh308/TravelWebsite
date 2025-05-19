"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Info, CloudSun } from "lucide-react"

interface WelcomeMessageProps {
  onQuickReplyClick: (message: string) => void
}

export default function WelcomeMessage({ onQuickReplyClick }: WelcomeMessageProps) {
  const quickReplies = [
    {
      icon: <MapPin className="h-4 w-4" />,
      text: "Điểm tham quan",
      message: "Các điểm tham quan nổi tiếng ở Đà Lạt?",
    },
    {
      icon: <Calendar className="h-4 w-4" />,
      text: "Tour du lịch",
      message: "Có tour du lịch nào đến Phú Quốc không?",
    },
    {
      icon: <CloudSun className="h-4 w-4" />,
      text: "Thời tiết",
      message: "Thời tiết ở Hà Nội hôm nay thế nào?",
    },
    {
      icon: <Info className="h-4 w-4" />,
      text: "Liên hệ",
      message: "Thông tin liên hệ của công ty?",
    },
  ]

  return (
    <Card className="border-none shadow-none bg-transparent">
      <CardContent className="p-0">
        <p className="text-sm mb-3">Bạn có thể hỏi tôi về:</p>
        <div className="grid grid-cols-2 gap-2">
          {quickReplies.map((reply, index) => (
            <Button
              key={index}
              variant="outline"
              className="flex items-center justify-start h-auto py-2 px-3"
              onClick={() => onQuickReplyClick(reply.message)}
            >
              {reply.icon}
              <span className="ml-2 text-xs">{reply.text}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
