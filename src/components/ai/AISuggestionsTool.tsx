"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { suggestContent, type SuggestContentInput, type SuggestContentOutput } from '@/ai/flows/suggest-content';
import { Loader2, Lightbulb, ExternalLink, Zap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';

const aiSuggestionsSchema = z.object({
  keywords: z.string().min(3, "Keywords must be at least 3 characters long."),
  numSuggestions: z.number().min(1).max(10).default(3),
});

type AISuggestionsFormData = z.infer<typeof aiSuggestionsSchema>;

export function AISuggestionsTool() {
  const [suggestions, setSuggestions] = useState<SuggestContentOutput['suggestions'] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<AISuggestionsFormData>({
    resolver: zodResolver(aiSuggestionsSchema),
    defaultValues: {
      keywords: "",
      numSuggestions: 3,
    },
  });

  async function onSubmit(data: AISuggestionsFormData) {
    setIsLoading(true);
    setSuggestions(null);
    try {
      const result = await suggestContent({
        keywords: data.keywords,
        numSuggestions: data.numSuggestions,
      });
      setSuggestions(result.suggestions);
      toast({
        title: "Suggestions Generated!",
        description: `Found ${result.suggestions.length} content ideas.`,
      });
    } catch (error) {
      console.error("Error fetching AI suggestions:", error);
      toast({
        title: "Error",
        description: "Failed to generate suggestions. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="w-full max-w-3xl mx-auto shadow-xl">
      <CardHeader className="text-center">
        <Zap className="h-12 w-12 text-primary mx-auto mb-2"/>
        <CardTitle className="text-3xl">AI Content Idea Generator</CardTitle>
        <CardDescription>
          Enter keywords related to education and child development to get relevant news articles and research ideas to enhance your content strategy and SEO.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="keywords"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Keywords</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., early childhood literacy, STEM education for girls" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="numSuggestions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Number of Suggestions (1-10)</FormLabel>
                  <FormControl>
                    <Input type="number" min="1" max="10" {...field} 
                           onChange={event => field.onChange(+event.target.value)} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6">
              {isLoading ? (
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              ) : (
                <Lightbulb className="mr-2 h-5 w-5" />
              )}
              Generate Suggestions
            </Button>
          </form>
        </Form>
      </CardContent>

      {suggestions && suggestions.length > 0 && (
        <CardFooter className="flex flex-col items-start gap-4 mt-6 pt-6 border-t">
          <h3 className="text-2xl font-semibold">Suggested Content:</h3>
          <div className="space-y-6 w-full">
            {suggestions.map((suggestion, index) => (
              <Card key={index} className="bg-muted/50 w-full shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl hover:text-primary transition-colors">
                    <Link href={suggestion.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                       {suggestion.title} <ExternalLink className="h-4 w-4" />
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-3">{suggestion.summary}</p>
                </CardContent>
                <CardFooter>
                   <Button variant="link" asChild className="p-0 text-sm text-primary">
                     <Link href={suggestion.url} target="_blank" rel="noopener noreferrer">
                        Read More <ExternalLink className="ml-1 h-3 w-3" />
                     </Link>
                   </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </CardFooter>
      )}
       {suggestions && suggestions.length === 0 && !isLoading && (
        <CardFooter className="mt-6 pt-6 border-t">
            <p className="text-muted-foreground text-center w-full">No suggestions found for the given keywords. Try broadening your search terms.</p>
        </CardFooter>
      )}
    </Card>
  );
}
