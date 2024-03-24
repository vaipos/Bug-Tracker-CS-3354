import { NextResponse, NextRequest } from "next/server";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {

  const data = await prisma.issues.findMany();

  return NextResponse.json(data, { status: 200 });
}