// pages/api/clockOut.ts
import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../src/utils/prisma';
import { auth } from '@clerk/nextjs/server';

export async function POST(req: NextRequest) {
  try {
    const session = auth();
    const { userId } = session;
    if (!userId) {
      console.log('Authorization failed, no user id.');
      return new NextResponse(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
    }

    const existingSession = await prisma.workSession.findFirst({
      where: { userId, clockOut: null },
      orderBy: { clockIn: 'desc' },
    });

    if (!existingSession) {
      throw new Error('No active session to clock out.');
    }

    const clockOutTime = new Date();
    const duration = Math.floor((clockOutTime.getTime() - existingSession.clockIn.getTime()) / 1000); // Calculate duration in seconds

    const workSession = await prisma.workSession.update({
      where: { id: existingSession.id },
      data: {
        clockOut: clockOutTime,
        duration,
      },
    });

    return new NextResponse(JSON.stringify(workSession), { status: 200 });
  } catch (error: unknown) {
    console.error('Error during clock-out:', error);
    return new NextResponse(JSON.stringify({ error: 'Error processing clock-out' }), { status: 500 });
  }
}
