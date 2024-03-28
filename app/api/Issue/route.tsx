import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod';
import prisma from "@/prisma/client";

const schema = z.object({
    title: z.string().min(1),
    description: z.string().min(1),

})

export async function POST(request: NextRequest) {
    try {
      const req = await request.json();
      const valid = schema.safeParse(req);
      if (!valid.success) {
        return NextResponse.json(valid.error.errors, { status: 400 });
      }
  
      const priority = req.priority.toUpperCase();
      const createdAt = new Date(req.createdAt); 
  
      const newIssue = await prisma.issues.create({
        data: {
          title: req.title,
          description: req.description,
          priority,
          createdAt, 
          children: req.p,
        },
      });
  
      return NextResponse.json(newIssue, { status: 201 });
    } catch (error) {
      console.log("UHOH data:", error); 
    }
  }