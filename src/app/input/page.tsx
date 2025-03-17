import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { EmotionSelector } from "@/components/emotion-selector"

export default function FeelingInputPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <span className="font-bold text-xl">Feelings Tracker</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/history" className="text-sm font-medium hover:underline underline-offset-4">
            History
          </Link>
          <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
            Logout
          </Link>
        </nav>
      </header>
      <main className="flex-1 flex items-center justify-center p-4 md:p-8">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl">How are you feeling today?</CardTitle>
            <CardDescription>Select your current mood and add any notes about your day</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <EmotionSelector />
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Add some notes (optional)</h3>
              <Textarea placeholder="What's on your mind today?" className="min-h-[100px]" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Save Entry</Button>
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

