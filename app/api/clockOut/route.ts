// pages/api/clockOut.ts

import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../src/utils/prisma';
import { auth } from '@clerk/nextjs/server';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const session = auth();
    const { userId } = session;
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const lastSession = await prisma.workSession.findFirst({
      where: { userId, clockOut: null },
      orderBy: { clockIn: 'desc' },
    });

    if (!lastSession) {
      return res.status(404).json({ error: 'No active session found' });
    }

    const clockOutTime = new Date();
    const updatedSession = await prisma.workSession.update({
      where: { id: lastSession.id },
      data: {
        clockOut: clockOutTime,
        duration: Math.floor((clockOutTime.getTime() - lastSession.clockIn.getTime()) / 1000),
      },
    });

    return res.status(200).json(updatedSession);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(500).json({ error: 'Failed to clock out', details: error.message });
    } else {
      return res.status(500).json({ error: 'An unexpected error occurred' });
    }
  }
}
