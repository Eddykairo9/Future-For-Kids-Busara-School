import { newsArticlesData } from '@/lib/data';
import type { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CalendarDays, UserCircle } from 'lucide-react';
import { notFound } from 'next/navigation';

type Props = {
  params: { id: string }; // Changed from slug to id as per user later clarification
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const article = newsArticlesData.find((p) => p.slug === params.id); // Using slug for lookup as data uses slug

  if (!article) {
    return {
      title: 'Article Not Found - Future For Kids Busara School',
    };
  }

  return {
    title: `${article.title} - Future For Kids Busara School`,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      images: [
        {
          url: article.imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
  };
}

export default function NewsArticlePage({ params }: Props) {
  const article = newsArticlesData.find((p) => p.slug === params.id); // Using slug for lookup as data uses slug

  if (!article) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 py-8">
      <div className="mb-8">
        <Button variant="outline" asChild>
          <Link href="/news" className="inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to News
          </Link>
        </Button>
      </div>

      <article className="bg-card p-6 sm:p-8 rounded-lg shadow-xl">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{article.title}</h1>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <UserCircle className="h-4 w-4" />
              <span>By {article.author}</span>
            </div>
          </div>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              className="object-cover"
              priority
              data-ai-hint={article.imageHint || "news article image"}
            />
          </div>
        </header>

        <div
          className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>
    </div>
  );
}

// If using dynamic params and want to pre-render them at build time
export async function generateStaticParams() {
  return newsArticlesData.map((article) => ({
    id: article.slug, // param should be 'id' as per file name [id], but data uses 'slug'
  }));
}
