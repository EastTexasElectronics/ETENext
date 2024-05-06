import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const data = await req.json().catch((e) => {
        throw new Error('Invalid JSON input: ' + e.message);
    });

    if (!data.userId) {
            throw new Error('userId is required');
        }

        const workSession = await prisma.workSession.create({
            data: {
                userId: data.userId,
                clockIn: new Date(), // Add the clockIn property here
            }
        });
  

    return new NextResponse(JSON.stringify(workSession), { status: 200 });
} catch (error) {
    console.error('Request error', error);
    return new NextResponse(JSON.stringify({ error: 'Error saving contact information' }), { status: 500 });
  }
}
