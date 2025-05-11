import { NewsCard } from '@/components/cards/NewsCard';
import { newsArticlesData } from '@/lib/data';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'News & Updates - Future For Kids Busara School',
  description: 'Stay updated with the latest news, events, and stories from Future For Kids Busara School.',
};

export default function NewsPage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-8 bg-gradient-to-b from-primary/5 to-transparent">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Updates</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover the latest happenings, achievements, and stories from Future For Kids Busara School.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsArticlesData.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </section>

      <section className="py-12 bg-muted rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
          Follow us on social media or subscribe to our newsletter to get the latest updates directly.
        </p>
        <div className="space-x-4">
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
