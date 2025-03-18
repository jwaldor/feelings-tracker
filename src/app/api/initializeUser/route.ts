import { checkUserExists, createUser } from "@/services/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { userId } = await req.json();
  const userExists = await checkUserExists(userId);
  if (!userExists) {
    await createUser(userId);
  }
  return NextResponse.json({ userExists });
}
