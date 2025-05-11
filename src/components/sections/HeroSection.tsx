import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  imageUrl: string;
  imageAlt: string;
  imageHint?: string;
}

export function HeroSection({ title, subtitle, ctaText, ctaLink, imageUrl, imageAlt, imageHint }: HeroSectionProps) {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold !leading-tight text-foreground">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            {subtitle}
          </p>
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform hover:scale-105 transition-transform">
            <Link href={ctaLink}>
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            priority
            className="object-cover"
            data-ai-hint={imageHint || "children happy"}
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
