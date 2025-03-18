import { saveFeeling } from "@/services/feelings";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const authobj = await auth();
    const clerkId = authobj.userId;

    if (!clerkId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { feeling } = await req.json();

    if (!feeling) {
      return NextResponse.json(
        { error: "Missing feeling text" },
        { status: 400 }
      );
    }

    const savedFeeling = await saveFeeling(clerkId, feeling);
    return NextResponse.json(savedFeeling);
  } catch (error) {
    console.error("Error saving feeling:", error);
    return NextResponse.json(
      { error: "Failed to save feeling" },
      { status: 500 }
    );
  }
}
