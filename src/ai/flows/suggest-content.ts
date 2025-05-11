'use server';
/**
 * @fileOverview AI-powered content suggestion tool for SEO improvement.
 *
 * - suggestContent - A function that suggests relevant content based on keywords.
 * - SuggestContentInput - The input type for the suggestContent function.
 * - SuggestContentOutput - The return type for the suggestContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestContentInputSchema = z.object({
  keywords: z
    .string()
    .describe('Keywords related to education and child development.'),
  numSuggestions: z.number().describe('The number of content suggestions to return.').default(3),
});
export type SuggestContentInput = z.infer<typeof SuggestContentInputSchema>;

const SuggestContentOutputSchema = z.object({
  suggestions: z.array(
    z.object({
      title: z.string().describe('The title of the suggested content.'),
      url: z.string().url().describe('The URL of the suggested content.'),
      summary: z.string().describe('A brief summary of the suggested content.'),
    })
  ).describe('A list of content suggestions.'),
});
export type SuggestContentOutput = z.infer<typeof SuggestContentOutputSchema>;

export async function suggestContent(input: SuggestContentInput): Promise<SuggestContentOutput> {
  return suggestContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestContentPrompt',
  input: {schema: SuggestContentInputSchema},
  output: {schema: SuggestContentOutputSchema},
  prompt: `You are an AI content suggestion tool specializing in education and child development.

  Based on the provided keywords, suggest relevant news articles and research.

  Keywords: {{{keywords}}}

  Provide {{numSuggestions}} content suggestions.  Each suggestion should include the title, url, and a brief summary.

  Format your output as a JSON array of objects, where each object has the following structure:

  {
    "title": "",
    "url": "",
    "summary": ""
  }`,
});

const suggestContentFlow = ai.defineFlow(
  {
    name: 'suggestContentFlow',
    inputSchema: SuggestContentInputSchema,
    outputSchema: SuggestContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
