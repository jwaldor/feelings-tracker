import prisma from "@/prismaClient";

export async function saveFeeling(clerkId: string, feeling: string) {
  // First get the user by their clerkId
  const user = await prisma.user.findUnique({
    where: { clerkId },
  });

  if (!user) {
    throw new Error("User not found");
  }

  // Create the feeling entry
  return await prisma.feeling.create({
    data: {
      feeling,
      userId: user.id,
    },
  });
}

export async function getFeelingsForUser(clerkId: string) {
  const user = await prisma.user.findUnique({
    where: { clerkId },
    include: {
      feelings: {
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  return user.feelings;
}
