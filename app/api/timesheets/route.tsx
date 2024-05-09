// pages/api/timesheets.ts

import { NextResponse } from 'next/server';
import prisma from '../../../src/utils/prisma';
import { auth } from '@clerk/nextjs/server';

export async function GET() {
    // Use the auth() helper to get authentication information
    const { userId } = auth();

    // If no user ID is present, the user is not signed in
    if (!userId) {
        return new NextResponse("Unauthorized", { status: 401 });
    }

    // Fetch timesheets from the database for the authenticated user
    try {
        const timesheets = await prisma.workSession.findMany({
            where: { userId },
            orderBy: { clockIn: 'desc' },
        });
        return NextResponse.json(timesheets, { status: 200 });
    } catch (error) {
        console.error('Error fetching timesheets:', error);
        return new NextResponse(JSON.stringify({ error: 'Internal server error while fetching timesheets' }), {
            status: 500,
        });
    }
}
