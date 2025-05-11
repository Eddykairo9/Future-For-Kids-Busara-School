
import { Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Zap, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sports & Activities - Future For Kids Busara School',
  description: 'Explore the vibrant sports programs and extracurricular activities at Future For Kids Busara School.',
};

const sportsAndActivities = [
  { name: 'Football (Soccer)', description: 'Our most popular sport, with teams for various age groups competing in local leagues.', icon: Zap, imageHint: 'children football match' },
  { name: 'Athletics', description: 'Track and field events, fostering speed, endurance, and discipline.', icon: Trophy, imageHint: 'running track kids' },
  { name: 'Netball & Volleyball', description: 'Team sports promoting coordination and teamwork, popular among girls and boys.', icon: Users, imageHint: 'volleyball game students' },
  { name: 'Traditional Games', description: 'Celebrating our culture through indigenous games and activities.', icon: Zap, imageHint: 'cultural games children' },
  { name: 'Inter-House Competitions', description: 'Annual events that build school spirit and healthy competition.', icon: Trophy, imageHint: 'school competition trophy' },
  { name: 'Physical Education Classes', description: 'Regular PE classes ensure all students develop physical literacy and fitness.', icon: Users, imageHint: 'kids exercise class' },
];

export default function SportsAndActivitiesPage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-8 bg-gradient-to-b from-secondary/5 to-transparent">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Sports & Activities</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          At Future For Kids Busara School, we believe in the power of sports and activities to build character, promote health, and foster teamwork.
        </p>
      </section>

      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-secondary">Importance of Physical Activity</h2>
            <p className="text-muted-foreground mb-4">
              Physical activity is crucial for a child’s development. It helps in building strong bones and muscles, improving cardiovascular health, maintaining a healthy weight, and reducing the risk of chronic diseases.
            </p>
            <p className="text-muted-foreground">
              Beyond physical health, sports teach valuable life skills such as discipline, perseverance, leadership, and how to work collaboratively towards a common goal. Our programs are designed to be inclusive and fun for all students.
            </p>
          </div>
           <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://picsum.photos/seed/sportsmain/800/450"
              alt="Children participating in various sports"
              fill
              className="object-cover"
              data-ai-hint="kids sports collage"
            />
          </div>
        </div>

        <h2 className="text-3xl font-semibold text-center mb-8 text-primary">Our Offerings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sportsAndActivities.map((activity) => {
            const IconComponent = activity.icon;
            return (
              <Card key={activity.name} className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <IconComponent className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">{activity.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                   <div className="mt-4 relative aspect-[16/9] rounded-md overflow-hidden">
                    <Image
                      src={`https://picsum.photos/seed/${activity.name.toLowerCase().replace(/\s+/g, '')}/400/225`}
                      alt={activity.name}
                      fill
                      className="object-cover"
                      data-ai-hint={activity.imageHint}
                    />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}
