import { ProgramCard } from '@/components/cards/ProgramCard';
import { programsData } from '@/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Programs - Future For Kids Busara School',
  description: 'Explore the various programs and initiatives by Future For Kids Busara School aimed at child development and empowerment.',
};

export default function ProgramsPage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-8 bg-gradient-to-b from-primary/5 to-transparent">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Programs</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover the diverse range of programs Future For Kids Busara School offers to nurture, educate, and empower children for a brighter future. Each program is designed with specific goals to make a lasting impact.
        </p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programsData.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </section>

      <section className="py-12 bg-muted rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
          Your support can help us expand these programs and reach more children in need. Consider donating or volunteering today.
        </p>
        <div className="space-x-4">
          <a href="/contact#donate" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-primary-foreground bg-primary hover:bg-primary/90">
            Donate Now
          </a>
          <a href="/contact#volunteer" className="inline-flex items-center justify-center px-6 py-3 border border-secondary text-base font-medium rounded-md text-secondary bg-secondary/10 hover:bg-secondary/20">
            Volunteer
          </a>
        </div>
      </section>
    </div>
  );
}
