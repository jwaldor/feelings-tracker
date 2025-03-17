"use client"

import type React from "react"

import { useState } from "react"
import { SmilePlus, Smile, Meh, Frown, FolderOpenIcon as FrownOpen } from "lucide-react"

type Emotion = {
  name: string
  icon: React.ReactNode
  color: string
}

const emotions: Emotion[] = [
  {
    name: "Very Happy",
    icon: <SmilePlus className="h-6 w-6" />,
    color: "bg-green-100 border-green-300 text-green-700 hover:bg-green-200",
  },
  {
    name: "Happy",
    icon: <Smile className="h-6 w-6" />,
    color: "bg-blue-100 border-blue-300 text-blue-700 hover:bg-blue-200",
  },
  {
    name: "Neutral",
    icon: <Meh className="h-6 w-6" />,
    color: "bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200",
  },
  {
    name: "Sad",
    icon: <Frown className="h-6 w-6" />,
    color: "bg-yellow-100 border-yellow-300 text-yellow-700 hover:bg-yellow-200",
  },
  {
    name: "Very Sad",
    icon: <FrownOpen className="h-6 w-6" />,
    color: "bg-red-100 border-red-300 text-red-700 hover:bg-red-200",
  },
]

export function EmotionSelector() {
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null)

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium">Select how you feel</h3>
      <div className="grid grid-cols-5 gap-2">
        {emotions.map((emotion) => (
          <button
            key={emotion.name}
            onClick={() => setSelectedEmotion(emotion.name)}
            className={`flex flex-col items-center justify-center p-3 rounded-lg border transition-colors ${
              selectedEmotion === emotion.name ? `${emotion.color} border-2` : "bg-background hover:bg-muted"
            }`}
          >
            {emotion.icon}
            <span className="mt-1 text-xs">{emotion.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

