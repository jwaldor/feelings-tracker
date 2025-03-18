import type React from "react"
import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google"
import "./globals.css"
// import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Feelings Tracker",
  description: "Track your emotional journey",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
          {children}
          {/* </ThemeProvider> */}
        </body>
      </html>
    </ClerkProvider>
  )
}

