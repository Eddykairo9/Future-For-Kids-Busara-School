
import { Metadata } from 'next';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, BookOpenText, Goal, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Curriculum - Future For Kids Busara School',
  description: 'Explore the comprehensive and engaging curriculum offered at Future For Kids Busara School, forming the core of our educational programs.',
};

const curriculumSections = [
  {
    title: "Early Years Foundation Stage (Ages 3-5)",
    details: "Our play-based curriculum focuses on holistic development, nurturing curiosity, creativity, and social skills. Key areas include communication and language, physical development, personal, social and emotional development, literacy, mathematics, understanding the world, and expressive arts and design.",
    icon: CheckCircle,
    image: "https://picsum.photos/seed/curriculum1/600/400",
    imageHint: "toddlers playing education"
  },
  {
    title: "Primary School (Ages 6-11)",
    details: "We offer a balanced and challenging curriculum aligned with national standards, emphasizing core subjects like English, Mathematics, Science, and Social Studies, alongside arts, music, and physical education. We encourage critical thinking and problem-solving skills.",
    icon: CheckCircle,
    image: "https://picsum.photos/seed/curriculum2/600/400",
    imageHint: "children classroom learning"
  },
  {
    title: "Junior Secondary (Ages 12-14)",
    details: "Our curriculum prepares students for future academic success by building on foundational knowledge and introducing more specialized subjects. We focus on developing independent learners and responsible citizens, with an emphasis on STEM, humanities, and digital literacy.",
    icon: CheckCircle,
    image: "https://picsum.photos/seed/curriculum3/600/400",
    imageHint: "teenagers studying science"
  },
  {
    title: "Specialized Learning Programs",
    details: "Beyond core academics, we offer specialized programs including coding clubs, debate teams, environmental conservation projects, and leadership workshops to cater to diverse interests and talents.",
    icon: CheckCircle,
    image: "https://picsum.photos/seed/curriculum4/600/400",
    imageHint: "students coding computers"
  }
];

export default function ProgramsPage() { // This page now effectively serves as the main "Our Curriculum" page
  return (
    <div className="space-y-12">
      <section className="text-center py-8 bg-gradient-to-b from-primary/5 to-transparent">
        <BookOpenText className="h-16 w-16 text-primary mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Educational Programs & Curriculum</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          At Future For Kids Busara School, our programs are built upon a robust and engaging curriculum designed to inspire a lifelong love of learning and prepare students for success.
        </p>
      </section>

      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-primary">Educational Philosophy</h2>
            <p className="text-muted-foreground">
              We believe in a student-centered approach. Our curriculum is designed to be engaging, relevant, and challenging, fostering not only academic achievement but also personal growth. We aim to develop critical thinkers, creative problem-solvers, and compassionate individuals.
            </p>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="https://picsum.photos/seed/philosophy/600/338"
                alt="Teacher guiding students"
                fill
                className="object-cover"
                data-ai-hint="teacher students interaction"
              />
            </div>
             <div className="mt-8 space-y-4">
                <Button asChild size="lg" className="w-full md:w-auto">
                    <Link href="/programs/sports-and-activities" className="flex items-center justify-center">
                        <Goal className="mr-2 h-5 w-5" /> Explore Sports & Activities
                    </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full md:w-auto">
                     <Link href="/programs/clubs-and-trips" className="flex items-center justify-center">
                        <Plane className="mr-2 h-5 w-5" /> Discover Clubs & Trips
                    </Link>
                </Button>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-primary mb-6">Curriculum Highlights</h2>
            <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
              {curriculumSections.map((section, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-xl hover:no-underline text-left">
                    <section.icon className="h-6 w-6 mr-3 text-secondary flex-shrink-0" />
                    {section.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base pl-10">
                    <div className="relative aspect-video rounded-md overflow-hidden my-4 shadow">
                      <Image 
                        src={section.image}
                        alt={section.title}
                        fill
                        className="object-cover"
                        data-ai-hint={section.imageHint}
                      />
                    </div>
                    {section.details}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
          Your support can help us expand these programs and reach more children in need. Consider donating or volunteering today.
        </p>
        <div className="space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 flex flex-col sm:flex-row items-center justify-center">
          <Button asChild size="lg">
            <Link href="/contact#donate">Donate Now</Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="/volunteers">Volunteer With Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}