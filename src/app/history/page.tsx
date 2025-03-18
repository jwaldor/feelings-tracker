"use client";

import Link from "next/link"
import { UserButton } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useFeelingsStore } from "@/stores/feelingsStore"
import { useEffect } from "react"

export default function HistoryPage() {
  const { feelings, isLoading, fetchFeelings } = useFeelingsStore();

  useEffect(() => {
    fetchFeelings();
  }, [fetchFeelings]);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/input">
          <span className="font-bold text-xl">Feelings Tracker</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link href="/input" className="text-sm font-medium hover:underline underline-offset-4">
            New Entry
          </Link>
          <UserButton afterSignOutUrl="/" />
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
              <CardDescription>Track your feelings</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="text-center py-4">Loading...</div>
              ) : feelings.length === 0 && !isLoading ? (
                <div className="text-center py-4 text-gray-500">
                  No feelings recorded yet. Start by adding a new entry!
                </div>
              ) : (
                <div className="space-y-4">
                  {feelings.map((feeling) => (
                    <div
                      key={feeling.id}
                      className="p-4 border rounded-lg bg-white dark:bg-gray-800"
                    >
                      <p className="text-gray-700 dark:text-gray-300">{feeling.feeling}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        {new Date(feeling.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              )}
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

