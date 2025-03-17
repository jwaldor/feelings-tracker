"use client"
import { format } from "date-fns"
import { Smile, Meh, Frown, SmilePlus, FolderOpenIcon as FrownOpen } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

// Mock data for demonstration
const mockFeelingHistory = [
  {
    date: new Date(2023, 2, 15),
    entries: [
      {
        id: 1,
        time: new Date(2023, 2, 15, 9, 30),
        feeling: "Happy",
        note: "Started the day with a good breakfast and meditation.",
      },
      {
        id: 2,
        time: new Date(2023, 2, 15, 16, 45),
        feeling: "Neutral",
        note: "Work was a bit stressful but manageable.",
      },
    ],
  },
  {
    date: new Date(2023, 2, 14),
    entries: [
      { id: 3, time: new Date(2023, 2, 14, 10, 15), feeling: "Very Happy", note: "Got great news about my project!" },
    ],
  },
  {
    date: new Date(2023, 2, 13),
    entries: [
      { id: 4, time: new Date(2023, 2, 13, 8, 0), feeling: "Sad", note: "Woke up feeling a bit down today." },
      {
        id: 5,
        time: new Date(2023, 2, 13, 14, 30),
        feeling: "Neutral",
        note: "Feeling better after lunch with friends.",
      },
      { id: 6, time: new Date(2023, 2, 13, 21, 0), feeling: "Happy", note: "Ended the day with a good book." },
    ],
  },
  {
    date: new Date(2023, 2, 12),
    entries: [
      { id: 7, time: new Date(2023, 2, 12, 12, 0), feeling: "Very Sad", note: "Difficult day, lots of challenges." },
    ],
  },
]

const getEmotionIcon = (feeling: string) => {
  switch (feeling) {
    case "Very Happy":
      return <SmilePlus className="h-5 w-5 text-green-500" />
    case "Happy":
      return <Smile className="h-5 w-5 text-blue-500" />
    case "Neutral":
      return <Meh className="h-5 w-5 text-gray-500" />
    case "Sad":
      return <Frown className="h-5 w-5 text-yellow-500" />
    case "Very Sad":
      return <FrownOpen className="h-5 w-5 text-red-500" />
    default:
      return <Meh className="h-5 w-5 text-gray-500" />
  }
}

const getEmotionColor = (feeling: string) => {
  switch (feeling) {
    case "Very Happy":
      return "bg-green-100 text-green-800 hover:bg-green-200"
    case "Happy":
      return "bg-blue-100 text-blue-800 hover:bg-blue-200"
    case "Neutral":
      return "bg-gray-100 text-gray-800 hover:bg-gray-200"
    case "Sad":
      return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
    case "Very Sad":
      return "bg-red-100 text-red-800 hover:bg-red-200"
    default:
      return "bg-gray-100 text-gray-800 hover:bg-gray-200"
  }
}

export function FeelingHistoryList() {
  return (
    <div className="space-y-8">
      {mockFeelingHistory.map((day) => (
        <div key={day.date.toISOString()} className="space-y-4">
          <h3 className="font-medium text-lg">{format(day.date, "EEEE, MMMM d, yyyy")}</h3>
          <div className="space-y-4">
            {day.entries.map((entry) => (
              <div key={entry.id} className="flex items-start space-x-4 p-4 rounded-lg border">
                <div className="flex-shrink-0 mt-1">{getEmotionIcon(entry.feeling)}</div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className={getEmotionColor(entry.feeling)}>
                      {entry.feeling}
                    </Badge>
                    <span className="text-sm text-gray-500">{format(entry.time, "h:mm a")}</span>
                  </div>
                  {entry.note && <p className="text-sm text-gray-700 dark:text-gray-300">{entry.note}</p>}
                </div>
              </div>
            ))}
          </div>
          <Separator />
        </div>
      ))}
    </div>
  )
}

