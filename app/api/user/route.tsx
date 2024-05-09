import { NextResponse } from 'next/server';
import { currentUser, auth } from '@clerk/nextjs/server';

/**
 * Handles the GET request to fetch current user details.
 * @param req - The NextRequest object containing the request data.
 * @returns A NextResponse object with the user data or an error message.
 */
export async function GET(req: any) {
    try {
        const { userId } = auth(); // Authenticate the user
        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const user = await currentUser(); // Fetch the user details from Clerk
        return new NextResponse(JSON.stringify(user), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        console.error('Request error', error);
        return new NextResponse(JSON.stringify({ error: 'Failed to fetch user information' }), { status: 500 });
    }
}
