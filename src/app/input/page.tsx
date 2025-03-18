"use client";

import Link from "next/link"
import { UserButton } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { useFeelingsStore } from "@/stores/feelingsStore"

export default function FeelingInputPage() {
  const { feeling, isSaving, setFeeling, clearFeeling, saveFeeling } = useFeelingsStore();

  const handleSave = async () => {
    await saveFeeling();
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/input">
          <span className="font-bold text-xl">Feelings Tracker</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link href="/history" className="text-sm font-medium hover:underline underline-offset-4">
            History
          </Link>
          <UserButton afterSignOutUrl="/" />
        </nav>
      </header>
      <main className="flex-1 flex items-center justify-center p-4 md:p-8">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl">How are you feeling?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Textarea
                className="min-h-[100px]"
                value={feeling}
                onChange={(e) => setFeeling(e.target.value)}
                placeholder="Write about how you're feeling..."
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              variant="outline"
              onClick={clearFeeling}
              disabled={isSaving}
            >
              Clear
            </Button>
            <Button
              onClick={handleSave}
              disabled={!feeling.trim() || isSaving}
            >
              {isSaving ? "Saving..." : "Save Entry"}
            </Button>
          </CardFooter>
        </Card>
      </main>
      <footer className="py-6 w-full shrink-0 items-center px-4 md:px-6 border-t text-center">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Feelings Tracker. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

