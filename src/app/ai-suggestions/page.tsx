import { AISuggestionsTool } from '@/components/ai/AISuggestionsTool';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Content Suggestions - Future For Kids Busara School',
  description: 'Leverage AI to find relevant content ideas for education and child development, helping improve your website SEO.',
};

export default function AISuggestionsPage() {
  return (
    <div className="space-y-8">
      <section className="text-center py-8 bg-gradient-to-b from-primary/5 to-transparent">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">AI-Powered Content Insights</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Stay ahead with fresh and relevant content ideas. Our AI tool scours the web for news and research based on your keywords, helping you create engaging and informative content.
        </p>
      </section>
      
      <section>
        <AISuggestionsTool />
      </section>

      <section className="py-12 bg-muted rounded-lg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-6 bg-background rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2 text-primary">1. Enter Keywords</h3>
              <p className="text-sm text-muted-foreground">Provide specific keywords related to your area of interest in child development or education.</p>
            </div>
            <div className="p-6 bg-background rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2 text-primary">2. Get Suggestions</h3>
              <p className="text-sm text-muted-foreground">Our AI analyzes your input and suggests relevant articles, research papers, and news items.</p>
            </div>
            <div className="p-6 bg-background rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2 text-primary">3. Enhance Your Content</h3>
              <p className="text-sm text-muted-foreground">Use these insights to create compelling content, improve SEO, and engage your audience effectively.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
