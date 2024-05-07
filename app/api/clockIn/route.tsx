// pages/api/clockIn.ts
import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../src/utils/prisma';
import { auth } from '@clerk/nextjs/server';

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const session = auth();
    const { userId } = session;
    let workSession = null; // Declare and assign a default value to 'workSession'
    if (!userId) {
      console.log('Authorization failed, no user id.');
      return new NextResponse(JSON.stringify(workSession), { status: 401 });
    }

    const clockInTime = new Date();
    console.log(`Attempting to clock in for userId: ${userId} at ${clockInTime}`);
    workSession = await prisma.workSession.create({
      // Assign a value to 'workSession'
      data: {
        userId,
        clockIn: clockInTime,
      },
    });

    console.log(`Clock-in successful: ${JSON.stringify(workSession)}`);
    return new NextResponse(JSON.stringify(workSession), { status: 200 });
  } catch (error: unknown) {
    console.error('Error during clock-in:', error);
    if (error instanceof Error) {
      return new NextResponse(JSON.stringify({ error: 'Error saving contact information' }), { status: 500 });
    } else {
      return new NextResponse(JSON.stringify({ error: 'Error saving contact information' }), { status: 500 });
    }
  }
}
