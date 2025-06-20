import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const user = await prisma.user.create({
      data: {
        name: 'Alice',
        email: `alice+${Date.now()}@example.com`, // Always unique
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Error creating user' }, { status: 500 });
  }
}
