// pages/api/timesheets.ts
import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../src/utils/prisma';
import { auth } from '@clerk/nextjs/server';

export async function handler(req: NextRequest) {
    try {
        const session = auth();
        const userId = session.userId;

        if (!userId) {
          console.log("Authorization failed, no user id.");
          return new NextResponse(JSON.stringify({ message: "Authorization required." }), { status: 401 });
        }

        if (req.method === 'GET') {
            console.log(`Fetching timesheets for userId: ${userId}`);
            const timesheets = await prisma.workSession.findMany({
                where: { userId },
                orderBy: { clockIn: 'desc' }
            });

            console.log(`Timesheets fetched successfully for userId: ${userId}`);
            return new NextResponse(JSON.stringify(timesheets), { status: 200 });
        } else {
            return new NextResponse(null, {
                status: 405,
                headers: {
                    'Allow': 'GET'
                }
            });
        }
    } catch (error) {
        console.error("Error fetching timesheets:", error);
        return new NextResponse(JSON.stringify({ error: 'Internal server error while fetching timesheets' }), { status: 500 });
    }
}
