
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us - Future For Kids Busara School',
  description: 'Learn about the mission, vision, and values of Future For Kids Busara School.',
};

export default function AboutUsPage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-8 bg-gradient-to-b from-primary/5 to-transparent">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Future For Kids Busara School</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Dedicated to nurturing young minds and empowering the next generation with quality education and holistic development.
        </p>
      </section>

      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-primary">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-6">
              To provide a safe, inclusive, and stimulating learning environment where every child can achieve their full potential. We are committed to fostering academic excellence, critical thinking, creativity, and strong moral values.
            </p>
            <h2 className="text-3xl font-semibold mb-4 text-primary">Our Vision</h2>
            <p className="text-lg text-muted-foreground">
              To be a leading educational institution recognized for empowering students to become compassionate, responsible, and innovative leaders of tomorrow, making a positive impact in their communities and the world.
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://picsum.photos/seed/aboutus/800/600"
              alt="School building or happy students"
              fill
              className="object-cover"
              data-ai-hint="school children group"
            />
          </div>
        </div>
      </section>

      <section className="bg-muted py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-8">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Excellence', description: 'Striving for the highest standards in all we do.' },
              { title: 'Integrity', description: 'Upholding honesty and strong moral principles.' },
              { title: 'Respect', description: 'Valuing diversity and treating everyone with dignity.' },
              { title: 'Community', description: 'Fostering a sense of belonging and collaboration.' },
            ].map(value => (
              <div key={value.title} className="p-6 bg-background rounded-lg shadow">
                <h3 className="text-xl font-bold text-secondary mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}