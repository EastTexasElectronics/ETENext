// File: app\api\contact\route.ts
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    // Assuming NextRequest has a json method, else parse manually
    const data = await req.json();
    const contact = await prisma.contact.create({
      data
    });
    return new NextResponse(JSON.stringify(contact), { status: 200 });
  } catch (error) {
    console.error('Request error', error);
    return new NextResponse(JSON.stringify({ error: 'Error saving contact information' }), { status: 500 });
  }
}
