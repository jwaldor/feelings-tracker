import Link from "next/link"
import { Button } from "@/components/ui/button"
import { RedirectIfAuthenticated } from "@/components/auth/RedirectIfAuthenticated"

export default function WelcomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <RedirectIfAuthenticated />
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <span className="font-bold text-xl">Feelings Tracker</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/login" className="text-sm font-medium hover:underline underline-offset-4">
            Log In
          </Link>
          <Link href="/signup" className="text-sm font-medium hover:underline underline-offset-4">
            Sign Up
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Track Your Emotional Journey
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Understand your feelings better by tracking them daily. Gain insights into your emotional patterns and
                  improve your well-being.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild size="lg">
                  <Link href="/signup">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/login">Sign In</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3 items-center">
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex flex-col space-y-2">
                  <h3 className="text-xl font-bold">Track Daily</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Record how you&apos;re feeling each day with a simple interface.
                  </p>
                </div>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex flex-col space-y-2">
                  <h3 className="text-xl font-bold">View History</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    See your emotional journey over time with detailed history.
                  </p>
                </div>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex flex-col space-y-2">
                  <h3 className="text-xl font-bold">Gain Insights</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Understand patterns in your emotional well-being.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Feelings Tracker. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

