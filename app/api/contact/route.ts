// File: app\api\contact\route.ts
/**
 * Handles the POST request for creating a new contact.
 * @param req - The NextRequest object containing the request data.
 * @returns A NextResponse object with the response data.
 */
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const data = await req.json(); // Parse the request body as JSON
    const contact = await prisma.contact.create({
      // Create a new contact using Prisma
      data,
    });
    return new NextResponse(JSON.stringify(contact), { status: 200 }); // Return the contact as a JSON response
  } catch (error) {
    console.error('Request error', error); // Log any errors that occur during the request
    return new NextResponse(JSON.stringify({ error: 'Error saving contact information' }), { status: 500 }); // Return an error response if there is an error
  }
}
