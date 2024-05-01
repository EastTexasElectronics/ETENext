import prisma from '../../../src/utils/prisma';  // Ensure you have a similar prisma instance setup
import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

export async function POST(req: NextApiRequest) {
    try {
        const data = await (req as NextApiRequest & { json: () => Promise<any> }).json();
        const contact = await prisma.contact.create({
            data
        });
        return NextResponse.json(contact);
    } catch (error) {
        console.error('Request error', error);
        return NextResponse.json({ error: 'Error saving contact information' }, { status: 500 });
    }
}


