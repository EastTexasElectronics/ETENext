// app/api/chat/route.tsx
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import fs from 'fs';
import path from 'path';

// Define interfaces for structured data
interface Step {
  stepNumber: number;
  description: string;
}

interface InstructionsData {
  role: string;
  objective: string;
  steps: Step[];
  integration: {
    bookingLink: string;
  };
}

export async function POST(req: NextRequest) {
  if (req.headers.get('content-type') !== 'application/json') {
    return new NextResponse('Content-Type must be application/json', { status: 415 });
  }

  try {
    const { userInput } = await req.json();
    if (!userInput) {
      return new NextResponse(JSON.stringify({ error: 'Missing required parameter: userInput' }), { status: 400 });
    }

    // Path to JSON files
    const baseDir = path.join(process.cwd(), 'src', 'chatBotTraining');
    const instructionsPath = path.join(baseDir, 'instructions.json');

    // Read and parse JSON files
    const instructionsData: InstructionsData = JSON.parse(fs.readFileSync(instructionsPath, 'utf8'));

    // Construct the initial system message from the instructions data with formatting
    const systemMessage =
      `Role: **${instructionsData.role}**\nObjective: **${instructionsData.objective}**\n\n` +
      `**Interaction Steps:**\n${instructionsData.steps.map((step: Step) => `- ${step.description}`).join('\n')}\n\n` +
      `**Please use clear, concise language and include key details only. For more comprehensive guidance:**\n${instructionsData.integration.bookingLink}`;

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // Create the chat completion with structured content
    const chatCompletion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo-0125', // Correct placement of model
      messages: [
        { role: 'system', content: systemMessage },
        { role: 'user', content: userInput },
      ],
      max_tokens: 256, // Reduced max tokens to encourage brevity
      temperature: 0.7, // Adjust temperature for creativity and relevance
    });

    return new NextResponse(JSON.stringify(chatCompletion), { status: 200 });
  } catch (error) {
    console.error('Error with OpenAI API:', error);
    return new NextResponse(JSON.stringify({ error: 'Failed to connect to OpenAI API' }), { status: 500 });
  }
}
