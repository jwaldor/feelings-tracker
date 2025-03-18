"use client"
import { format } from "date-fns"
import { Separator } from "@/components/ui/separator"

// Mock data for demonstration
const mockFeelingHistory = [
  {
    date: new Date(2023, 2, 15),
    entries: [
      {
        id: 1,
        time: new Date(2023, 2, 15, 9, 30),
        note: "Started the day with a good breakfast and meditation.",
      },
      {
        id: 2,
        time: new Date(2023, 2, 15, 16, 45),
        note: "Work was a bit stressful but manageable.",
      },
    ],
  },
  {
    date: new Date(2023, 2, 14),
    entries: [
      { id: 3, time: new Date(2023, 2, 14, 10, 15), note: "Got great news about my project!" },
    ],
  },
  {
    date: new Date(2023, 2, 13),
    entries: [
      { id: 4, time: new Date(2023, 2, 13, 8, 0), note: "Woke up feeling a bit down today." },
      {
        id: 5,
        time: new Date(2023, 2, 13, 14, 30),
        note: "Feeling better after lunch with friends.",
      },
      { id: 6, time: new Date(2023, 2, 13, 21, 0), note: "Ended the day with a good book." },
    ],
  },
  {
    date: new Date(2023, 2, 12),
    entries: [
      { id: 7, time: new Date(2023, 2, 12, 12, 0), note: "Difficult day, lots of challenges." },
    ],
  },
]

export function FeelingHistoryList() {
  return (
    <div className="space-y-8">
      {mockFeelingHistory.map((day) => (
        <div key={day.date.toISOString()} className="space-y-4">
          <h3 className="font-medium text-lg">{format(day.date, "EEEE, MMMM d, yyyy")}</h3>
          <div className="space-y-4">
            {day.entries.map((entry) => (
              <div key={entry.id} className="flex items-start space-x-4 p-4 rounded-lg border">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
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

