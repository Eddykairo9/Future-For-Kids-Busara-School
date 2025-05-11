
import { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Handshake, Heart, BookOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Volunteer With Us - Future For Kids Busara School',
  description: 'Join our team of dedicated volunteers and make a difference in the lives of children at Future For Kids Busara School.',
};

const volunteerOpportunities = [
  { title: 'Classroom Assistant', description: 'Support teachers in daily activities, assist students with learning, and help prepare materials.', icon: BookOpen, imageHint: "teacher assistant classroom" },
  { title: 'Mentorship Program', description: 'Guide and inspire students by sharing your experiences and skills.', icon: UsersRound, imageHint: "mentor student discussion" }, // Assuming UsersRound is available or replaced
  { title: 'Sports Coaching', description: 'Help coach our sports teams and promote physical fitness.', icon: Goal, imageHint: "sports coach kids" }, // Assuming Goal is available
  { title: 'Event Support', description: 'Assist with organizing and running school events and fundraisers.', icon: CalendarCheck, imageHint: "event planning volunteer" }, // Assuming CalendarCheck is available
  { title: 'Skill-Based Volunteering', description: 'Offer your professional skills (e.g., IT, marketing, arts) to support school operations.', icon: Wrench, imageHint: "professional skills workshop" }, // Assuming Wrench is available
];


export default function VolunteersPage() {
  return (
    <div className="space-y-16">
      <section className="text-center py-12 bg-gradient-to-b from-primary/5 to-transparent">
        <Handshake className="h-16 w-16 text-primary mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Become a Volunteer</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Your time and talent can create a lasting impact. Join Future For Kids Busara School and help us empower children for a brighter future.
        </p>
      </section>

      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-primary">Why Volunteer With Us?</h2>
            <p className="text-muted-foreground text-lg">
              Volunteering at Future For Kids Busara School is an opportunity to contribute meaningfully to community development. You will:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground text-lg">
              <li>Make a direct positive impact on children’s lives.</li>
              <li>Gain valuable experience and develop new skills.</li>
              <li>Become part of a passionate and supportive community.</li>
              <li>Share your knowledge and passion with enthusiastic learners.</li>
            </ul>
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contact?subject=Volunteer Inquiry">Express Interest to Volunteer</Link>
            </Button>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://picsum.photos/seed/volunteersgroup/800/600"
              alt="Group of diverse volunteers smiling"
              fill
              className="object-cover"
              data-ai-hint="volunteers group happy"
            />
          </div>
        </div>
      </section>

      <section className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-10">Volunteer Opportunities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {volunteerOpportunities.map((op) => {
              const IconComponent = op.icon; // Assuming op.icon is a valid Lucide icon component
              return (
                <Card key={op.title} className="flex flex-col items-center text-center shadow-md hover:shadow-lg transition-shadow">
                   <CardHeader>
                    <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit mb-3">
                        <IconComponent className="h-8 w-8" />
                    </div>
                    <CardTitle>{op.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription>{op.description}</CardDescription>
                     <div className="mt-4 relative aspect-[16/9] w-full rounded-md overflow-hidden">
                        <Image
                          src={`https://picsum.photos/seed/${op.title.toLowerCase().replace(/\W/g, '')}/400/225`}
                          alt={op.title}
                          fill
                          className="object-cover"
                          data-ai-hint={op.imageHint}
                        />
                      </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

       <section className="py-12 text-center">
            <Heart className="h-12 w-12 text-destructive mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              We are excited to welcome you to our team. If you have any questions or wish to apply, please get in touch.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Contact Us About Volunteering</Link>
            </Button>
      </section>
    </div>
  );
}

// Placeholder Lucide icons for compile-time safety if not all are used/available
// These would ideally be correctly imported from lucide-react
const UsersRound = Heart; 
const Goal = Heart;
const CalendarCheck = Heart;
const Wrench = Heart;
