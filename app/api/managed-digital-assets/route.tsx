import { NextResponse } from 'next/server';
import { getAuth } from '@clerk/nextjs/server';
import prisma from '~/utils/prisma';

export async function GET(request: Request) {
  const { userId } = getAuth(request);

  if (!userId) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const services = await prisma.service.findMany({ where: { userId } });
  return NextResponse.json(services);
}

export async function POST(request: Request) {
  const { userId } = getAuth(request);

  if (!userId) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const { title, serviceUrl, serviceType, icon } = await request.json();

  const newService = await prisma.service.create({
    data: {
      userId,
      title,
      serviceUrl,
      serviceType,
      icon,
    },
  });

  return NextResponse.json(newService, { status: 201 });
}
