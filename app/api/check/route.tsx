import { NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');

  if (email) {
    const data = await prisma.user.findUnique({ where: { email } });

    if (data) {
      if (data.role === 'none' || data.role === null) {
        return NextResponse.json({ message: 'OH NO' }, { status: 200 });

      }
      else if (data.role === 'Tester' || data.role === null) {
        return NextResponse.json({ message: 'TESTER' }, { status: 200 });
        
      } 
      else if (data.role === 'Developer' || data.role === null) {
        return NextResponse.json({ message: 'DEVELOPER' }, { status: 200 });
        
      }else {
        return NextResponse.json(data, { status: 200 });
      }
    } else {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
  } else {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }
}