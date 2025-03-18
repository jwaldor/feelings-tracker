import { getFeelingsForUser } from "@/services/feelings";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const authobj = await auth();
    const clerkId = authobj.userId;

    if (!clerkId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const feelings = await getFeelingsForUser(clerkId);
    return NextResponse.json(feelings);
  } catch (error) {
    console.error("Error getting feelings:", error);
    return NextResponse.json(
      { error: "Failed to get feelings" },
      { status: 500 }
    );
  }
}
