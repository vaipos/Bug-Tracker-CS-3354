import { NextResponse, NextRequest } from "next/server";
import prisma from "@/prisma/client";
import { z } from 'zod';

const schema = z.object({
  id: z.number(),
  status: z.string(),
});
/* Update Status API */
export async function PATCH(request: NextRequest) {
  const body = await request.json();
  console.log("Request Body:", body); // Add this line

  try {
    const validatedData = schema.parse(body);
    console.log("Validated Data:", validatedData); // Add this line

    const updatedIssue = await prisma.issues.update({
      where: {
        id: validatedData.id,
      },
      data: {
        status: validatedData.status,
      },
    });

    return NextResponse.json(updatedIssue);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Failed to update issue status" },
      { status: 500 }
    );
  }
}