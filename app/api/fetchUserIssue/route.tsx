import { NextResponse, NextRequest } from "next/server";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("email");
  if (name) {
    const data = await prisma.issues.findMany({
      where: {
        assignedTo: name,
      },
    });
    return NextResponse.json(data);
  } else {
    return NextResponse.json("No name provided");
  }
}