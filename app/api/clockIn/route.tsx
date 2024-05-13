// pages/api/clockIn.ts
import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../src/utils/prisma';
import { auth, currentUser } from '@clerk/nextjs/server';

export async function POST(req: NextRequest) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
    }

    // Assuming that we need to typecast because the Clerk type definitions do not include firstName, lastName, email by default
    const user = await currentUser();
    if (!user) {
      return new NextResponse(JSON.stringify({ error: 'User not found' }), { status: 404 });
    }

    // Safely access user details
    const firstName = (user as any).firstName as string;
    const lastName = (user as any).lastName as string;
    const email = (user as any).email as string;

    const clockInTime = new Date();
    const workSession = await prisma.workSession.create({
      data: {
        userId,
        firstName,  // Storing first name
        lastName,   // Storing last name
        email,      // Storing email
        clockIn: clockInTime,
      },
    });

    return new NextResponse(JSON.stringify(workSession), { status: 200 });
  } catch (error) {
    console.error('Error during clock-in:', error);
    return new NextResponse(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
