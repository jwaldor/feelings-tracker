import prisma from "@/prismaClient";

export async function checkUserExists(clerkId: string): Promise<boolean> {
  try {
    const user = await prisma.user.findUnique({
      where: { clerkId },
    });
    return user !== null;
  } catch (error) {
    console.error("Error checking if user exists:", error);
    throw error;
  }
}

export async function createUser(clerkId: string) {
  try {
    return await prisma.user.create({
      data: {
        clerkId,
      },
    });
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}
