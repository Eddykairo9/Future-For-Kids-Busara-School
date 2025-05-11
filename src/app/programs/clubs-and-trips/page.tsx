
import { Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, BookOpen, Sprout, Plane, Landmark, Group } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Clubs & Trips - Future For Kids Busara School',
  description: 'Discover the exciting clubs and educational trips offered at Future For Kids Busara School.',
};

const clubs = [
  { name: 'Science Club', description: 'Explore the wonders of science through experiments and projects.', icon: Lightbulb, image: 'https://picsum.photos/seed/scienceclub/400/300', imageHint: 'kids science experiment' },
  { name: 'Debate Club', description: 'Develop critical thinking and public speaking skills.', icon: Group, image: 'https://picsum.photos/seed/debateclub/400/300', imageHint: 'students debate' },
  { name: 'Environmental Club', description: 'Promote conservation and environmental awareness.', icon: Sprout, image: 'https://picsum.photos/seed/envclub/400/300', imageHint: 'children planting tree' },
  { name: 'Reading Club', description: 'Foster a love for literature and storytelling.', icon: BookOpen, image: 'https://picsum.photos/seed/readclub/400/300', imageHint: 'kids reading books' },
];

const trips = [
  { name: 'Museum Visits', description: 'Explore local history and culture at nearby museums.', icon: Landmark, image: 'https://picsum.photos/seed/museumtrip/400/300', imageHint: 'museum building kids' },
  { name: 'Nature Park Excursions', description: 'Learn about local flora and fauna in natural settings.', icon: Plane, image: 'https://picsum.photos/seed/naturetrip/400/300', imageHint: 'nature park children' },
  { name: 'Community Service Trips', description: 'Engage in meaningful service projects within the local community.', icon: Group, image: 'https://picsum.photos/seed/communitytrip/400/300', imageHint: 'volunteers children community' },
];

export default function ClubsAndTripsPage() {
  return (
    <div className="space-y-16">
      <section className="text-center py-8 bg-gradient-to-b from-accent/5 to-transparent">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Clubs & Educational Trips</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Enriching learning experiences beyond the classroom through diverse clubs and insightful trips at Future For Kids Busara School.
        </p>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-10 text-primary">Our Clubs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {clubs.map((club) => {
            const IconComponent = club.icon;
            return (
            <Card key={club.name} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative w-full h-48">
                <Image src={club.image} alt={club.name} fill className="object-cover rounded-t-lg" data-ai-hint={club.imageHint}/>
              </div>
              <CardHeader className="flex-row items-center gap-3">
                <IconComponent className="h-8 w-8 text-accent flex-shrink-0" />
                <CardTitle className="text-xl">{club.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{club.description}</CardDescription>
              </CardContent>
            </Card>
          )})}
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-10 text-primary">Educational Trips</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trips.map((trip) => {
             const IconComponent = trip.icon;
             return (
            <Card key={trip.name} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative w-full h-56">
                <Image src={trip.image} alt={trip.name} fill className="object-cover rounded-t-lg" data-ai-hint={trip.imageHint}/>
              </div>
              <CardHeader className="flex-row items-center gap-3">
                 <IconComponent className="h-8 w-8 text-accent flex-shrink-0" />
                <CardTitle className="text-xl">{trip.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{trip.description}</CardDescription>
              </CardContent>
            </Card>
          )})}
        </div>
      </section>
    </div>
  );
}
