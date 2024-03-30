import { NextResponse, NextRequest } from "next/server";
import prisma from "@/prisma/client";

export async function PATCH(req: NextRequest) {
  const { role, email } = await req.json();

  if (!email || !role) {
    return NextResponse.json(
      { error: "Email and role are required" },
      { status: 400 }
    );
  }

  if (role !== "Tester" && role !== "Developer") {
    return NextResponse.json(
      { error: 'Invalid role. Must be either "Tester" or "Developer"' },
      { status: 400 }
    );
  }

  try {
    const updatedUser = await prisma.user.update({
      where: { email },
      data: { role },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update user role" },
      { status: 500 }
    );
  }
}