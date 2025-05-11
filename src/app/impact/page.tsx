import { TestimonialCard } from '@/components/cards/TestimonialCard';
import { testimonialsData } from '@/lib/data';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Testimonials - Future For Kids Busara School',
  description: 'Hear from students, parents, and alumni about the impact of Future For Kids Busara School.',
};

export default function TestimonialsPage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-8 bg-gradient-to-b from-secondary/5 to-transparent">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Voices From Our Community</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Read what students, parents, and alumni have to say about their experiences with Future For Kids Busara School and the positive impact we strive to make.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonialsData.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </section>

       <section className="py-12 bg-muted rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Be Part of Our Story</h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
          These inspiring stories are made possible by supporters like you. Help us continue to empower children and create more success stories at Future For Kids Busara School.
        </p>
        <div className="space-x-4">
           <Button asChild>
             <Link href="/contact#donate">Support Our Work</Link>
           </Button>
        </div>
      </section>
    </div>
  );
}
