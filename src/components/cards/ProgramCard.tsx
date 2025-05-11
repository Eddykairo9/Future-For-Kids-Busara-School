import Image from 'next/image';
import type { Program } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CircleCheckBig } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

interface ProgramCardProps {
  program: Program;
}

export function ProgramCard({ program }: ProgramCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-full h-56">
        <Image
          src={program.imageUrl}
          alt={program.title}
          fill
          className="object-cover"
          data-ai-hint={program.imageHint || "program image"}
        />
      </div>
      <CardHeader>
        <CardTitle className="text-2xl">{program.title}</CardTitle>
        <CardDescription className="text-base min-h-[3em] line-clamp-2">{program.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <h4 className="font-semibold mb-2 text-foreground/80">Future Goals:</h4>
        <ul className="space-y-1 text-sm text-muted-foreground">
          {program.futureGoals.map((goal, index) => (
            <li key={index} className="flex items-start">
              <CircleCheckBig className="h-4 w-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
              <span>{goal}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button variant="link" asChild className="text-primary p-0">
          <Link href={`/programs/#${program.id.toLowerCase().replace(/\s+/g, '-')}`}>Learn More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
