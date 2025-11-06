import { runFlow } from 'genkit';
import { assistantFlow } from '@/ai/flows';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { query } = await req.json();

  if (!query) {
    return NextResponse.json({ error: 'Query is required' }, { status: 400 });
  }

  try {
    const response = await runFlow(assistantFlow, { query });
    return NextResponse.json({ response });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'An error occurred while processing your request.' }, { status: 500 });
  }
}