
import { SignIn } from "@clerk/nextjs"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 md:p-8">
      <SignIn
      // appearance={{
      //   elements: {
      //     rootBox: "mx-auto w-full max-w-md",
      //     card: "shadow-lg rounded-lg border bg-card text-card-foreground",
      //   },
      // }}
      // redirectUrl="/input"
      />
    </div>
  )
}

