import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

type PostData = Record<string, unknown>;

export async function GET() {
  const headersList = await headers();
  const userAgent = headersList.get('user-agent') ?? 'Unknown';

  return NextResponse.json({
    message: 'Hello from the API!',
    timestamp: new Date().toISOString(),
    userAgent,
  });
}

export async function POST(request: Request) {
  const body = await request.json() as PostData;
  
  return NextResponse.json({
    message: 'Data received!',
    data: body,
    timestamp: new Date().toISOString(),
  });
} 