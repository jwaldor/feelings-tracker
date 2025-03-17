import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FeelingHistoryList } from "@/components/feeling-history-list"

export default function HistoryPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <span className="font-bold text-xl">Feelings Tracker</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/input" className="text-sm font-medium hover:underline underline-offset-4">
            New Entry
          </Link>
          <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
            Logout
          </Link>
        </nav>
      </header>
      <main className="flex-1 p-4 md:p-8">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Your Feeling History</h1>
            <Button asChild>
              <Link href="/input">Add New Entry</Link>
            </Button>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Emotional Journey</CardTitle>
              <CardDescription>Track your emotional patterns over time</CardDescription>
            </CardHeader>
            <CardContent>
              <FeelingHistoryList />
            </CardContent>
          </Card>
        </div>
      </main>
      <footer className="py-6 w-full shrink-0 items-center px-4 md:px-6 border-t text-center">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Feelings Tracker. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

