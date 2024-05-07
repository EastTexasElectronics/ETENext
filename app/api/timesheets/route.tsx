// pages/api/timesheets.ts

import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../src/utils/prisma';
import { auth } from '@clerk/nextjs/server';

/**
 * Handles the GET request for fetching timesheets.
 * @param req - The NextRequest object representing the incoming request.
 * @returns A NextResponse object with the timesheets data or an error response.
 */
export async function GET(req: NextRequest) {
  try {
    // Authenticate the user
    const session = auth();
    const userId = session.userId;
    if (!userId) {
      console.log('Authorization failed, no user id.');
      return new NextResponse(JSON.stringify({ message: 'Authorization required.' }), { status: 401 });
    }

    if (req.method === 'GET') {
      console.log(`Fetching timesheets for userId: ${userId}`);
      // Fetch timesheets from the database
      const timesheets = await prisma.workSession.findMany({
        where: { userId },
        orderBy: { clockIn: 'desc' },
      });

      console.log(`Timesheets fetched successfully for userId: ${userId}`);
      return new NextResponse(JSON.stringify(timesheets), { status: 200 });
    } else {
      // Return a 405 Method Not Allowed response for non-GET requests
      return new NextResponse(null, {
        status: 405,
        headers: {
          Allow: 'GET',
        },
      });
    }
  } catch (error) {
    console.error('Error fetching timesheets:', error);
    // Return a 500 Internal Server Error response for any errors
    return new NextResponse(JSON.stringify({ error: 'Internal server error while fetching timesheets' }), {
      status: 500,
    });
  }
}
