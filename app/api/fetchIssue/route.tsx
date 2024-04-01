import { NextResponse, NextRequest } from "next/server";
import prisma from "@/prisma/client";

/*API call to retrieve all issues for a project */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const children = searchParams.get('children');

  if (!children) {
    return NextResponse.json({ error: 'Children value is missing' }, { status: 400 });
  }

  const data = await prisma.issues.findMany({
    where: {
      children: Number(children)
    }
  });

  return NextResponse.json(data, { status: 200 });
}