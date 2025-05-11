import Image from 'next/image';
import Link from 'next/link';
import type { NewsArticle } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, UserCircle } from 'lucide-react';

interface NewsCardProps {
  article: NewsArticle;
}

export function NewsCard({ article }: NewsCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Link href={`/news/${article.slug}`} className="block">
        <div className="relative w-full h-56">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-cover"
            data-ai-hint={article.imageHint || "news article"}
          />
        </div>
      </Link>
      <CardHeader>
        <Link href={`/news/${article.slug}`}>
          <CardTitle className="text-xl hover:text-primary transition-colors line-clamp-2">{article.title}</CardTitle>
        </Link>
        <div className="text-xs text-muted-foreground flex items-center gap-4 pt-1">
          <div className="flex items-center gap-1">
            <CalendarDays className="h-3 w-3" />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <UserCircle className="h-3 w-3" />
            <span>{article.author}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm line-clamp-3">{article.summary}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="link" asChild className="text-primary p-0">
          <Link href={`/news/${article.slug}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
