
import { Metadata } from 'next';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Curriculum - Future For Kids Busara School',
  description: 'Explore the comprehensive and engaging curriculum offered at Future For Kids Busara School.',
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
    title: "Specialized Programs",
    details: "Beyond core academics, we offer specialized programs including coding clubs, debate teams, environmental conservation projects, and leadership workshops to cater to diverse interests and talents.",
    icon: CheckCircle,
    image: "https://picsum.photos/seed/curriculum4/600/400",
    imageHint: "students coding computers"
  }
];

export default function CurriculumPage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-8 bg-gradient-to-b from-primary/5 to-transparent">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Curriculum</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover how Future For Kids Busara School’s curriculum is designed to inspire a lifelong love of learning and prepare students for success.
        </p>
      </section>

      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-primary">Educational Philosophy</h2>
            <p className="text-muted-foreground">
              At Future For Kids Busara School, we believe in a student-centered approach to education. Our curriculum is designed to be engaging, relevant, and challenging, fostering not only academic achievement but also personal growth. We aim to develop critical thinkers, creative problem-solvers, and compassionate individuals.
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
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-primary mb-6">Curriculum Overview</h2>
            <Accordion type="single" collapsible className="w-full">
              {curriculumSections.map((section, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-xl hover:no-underline">
                    <section.icon className="h-6 w-6 mr-2 text-secondary flex-shrink-0" />
                    {section.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base pl-10">
                    <div className="relative aspect-video rounded-md overflow-hidden my-4">
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
    </div>
  );
}
