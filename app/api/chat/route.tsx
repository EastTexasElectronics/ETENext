// app/api/chat/route.tsx

import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import fs from 'fs';
import path from 'path';
import logger from '~/utils/logger';
import { LoggerStep, InstructionsData } from '~/shared/types';

/**
 * Processes POST requests to the chat API, handling user input and interacting with OpenAI's API.
 *
 * @param req - The request object from Next.js, providing access to request details.
 * @returns A NextResponse object with the result of the AI interaction or error details.
 */
export async function POST(req: NextRequest) {
  // Validate that the request content type is application/json
  if (req.headers.get('content-type') !== 'application/json') {
    logger.error('Incorrect content type');
    return new NextResponse('Content-Type must be application/json', { status: 415 });
  }

  try {
    const { userInput } = await req.json(); // Attempt to parse user input from the request body
    if (!userInput) {
      logger.warn('Missing userInput in request'); // Log a warning if userInput is missing
      return new NextResponse(JSON.stringify({ error: 'Missing required parameter: userInput' }), { status: 400 });
    }

    // Resolve the path to the JSON file containing instructions data
    const baseDir = path.join(process.cwd(), 'src', 'chatBotTraining');
    const instructionsPath = path.join(baseDir, 'instructions.json');

    // Read and parse the JSON file to obtain structured data for the chatbot
    const instructionsData: InstructionsData = JSON.parse(fs.readFileSync(instructionsPath, 'utf8'));

    // Construct a formatted message from the instructions data
    const systemMessage =
      `Role: **${instructionsData.role}**\nObjective: **${instructionsData.objective}**\n\n` +
      `**Interaction Steps:**\n${instructionsData.steps.map((step: LoggerStep) => `- ${step.description}`).join('\n')}\n\n` +
      `**Please use clear, concise language and include key details only. Our phone number is 9034711575 For more comprehensive guidance:**\n${instructionsData.integration.bookingLink}`;

    // Initialize the OpenAI API client with the provided API key
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // Generate a chat completion using the OpenAI chat model
    const chatCompletion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo-0125',
      messages: [
        { role: 'system', content: systemMessage },
        { role: 'user', content: userInput },
      ],
      max_tokens: 512,
      temperature: 0.4,
    });

    // Return the result of the chat completion as a response
    return new NextResponse(JSON.stringify(chatCompletion), { status: 200 });
  } catch (error) {
    logger.error('Error with OpenAI API: %o', error); // Log any errors encountered during API interaction
    return new NextResponse(JSON.stringify({ error: 'Failed to connect to OpenAI API' }), { status: 500 });
  }
}
