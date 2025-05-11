
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Our History - Future For Kids Busara School',
  description: 'Discover the journey and milestones of Future For Kids Busara School.',
};

export default function HistoryPage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-8 bg-gradient-to-b from-secondary/5 to-transparent">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Journey</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Tracing the footsteps of Future For Kids Busara School from its humble beginnings to a beacon of hope and education.
        </p>
      </section>

      <section className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gray-200 dark:before:bg-gray-700">
            
            <div className="relative flex items-center space-x-6">
              <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center ring-4 ring-background ring-offset-1">
                <span className="font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">2010 - The Seed of an Idea</h3>
                <p className="text-muted-foreground mt-1">Future For Kids Busara School was founded with a vision to provide quality education to underserved children.</p>
              </div>
            </div>

            <div className="relative flex items-center space-x-6">
              <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center ring-4 ring-background ring-offset-1">
                <span className="font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">2012 - First Campus Opens</h3>
                <p className="text-muted-foreground mt-1">Our first small campus opened its doors, welcoming an initial batch of 50 students.</p>
              </div>
            </div>
            
            <div className="relative flex items-center space-x-6">
              <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center ring-4 ring-background ring-offset-1">
                <span className="font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">2015 - Expansion & Recognition</h3>
                <p className="text-muted-foreground mt-1">Expanded facilities to accommodate growing student numbers and received local community awards for our impact.</p>
              </div>
            </div>

            <div className="relative flex items-center space-x-6">
              <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center ring-4 ring-background ring-offset-1">
                <span className="font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">2020 - Adapting to Challenges</h3>
                <p className="text-muted-foreground mt-1">Successfully navigated global challenges by implementing innovative remote learning solutions.</p>
              </div>
            </div>
            
             <div className="relative flex items-center space-x-6">
              <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center ring-4 ring-background ring-offset-1">
                <span className="font-bold">5</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Today - Looking to the Future</h3>
                <p className="text-muted-foreground mt-1">Continuing our mission with new programs, a growing community, and an unwavering commitment to our students.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
       <section className="py-10">
        <div className="container mx-auto px-4 text-center">
           <div className="relative aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://picsum.photos/seed/historycollage/1000/500"
              alt="Collage of historical school photos"
              fill
              className="object-cover"
              data-ai-hint="old photos school"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
