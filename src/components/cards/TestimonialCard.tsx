import Image from 'next/image';
import type { Testimonial } from '@/types';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const fallbackInitials = testimonial.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <Card className="flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 bg-card">
      <Avatar className="w-24 h-24 mb-4 border-4 border-primary/20">
        <AvatarImage src={testimonial.imageUrl} alt={testimonial.name} data-ai-hint={testimonial.imageHint || "person photo"} />
        <AvatarFallback>{fallbackInitials}</AvatarFallback>
      </Avatar>
      <CardHeader className="p-0 mb-2">
        <h3 className="text-xl font-semibold text-foreground">{testimonial.name}</h3>
        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
      </CardHeader>
      <CardContent className="p-0 flex-grow relative">
        <Quote className="absolute top-0 left-0 h-8 w-8 text-primary/20 transform -translate-x-2 -translate-y-2" />
        <p className="text-foreground/80 italic leading-relaxed text-sm">
          &quot;{testimonial.testimonial}&quot;
        </p>
        <Quote className="absolute bottom-0 right-0 h-8 w-8 text-primary/20 transform translate-x-2 translate-y-2 rotate-180" />
      </CardContent>
    </Card>
  );
}
