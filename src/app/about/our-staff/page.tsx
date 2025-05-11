
import { Metadata } from 'next';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Our Staff - Future For Kids Busara School',
  description: 'Meet the dedicated team of educators and staff at Future For Kids Busara School.',
};

const staffMembers = [
  { name: 'Dr. Evelyn Wanjiku', role: 'School Director', imageUrl: 'https://picsum.photos/seed/staff1/200/200', bio: 'Leads the school with a passion for educational excellence and child development.', imageHint: 'woman director' },
  { name: 'Mr. James Kariuki', role: 'Head Teacher', imageUrl: 'https://picsum.photos/seed/staff2/200/200', bio: 'Oversees academic programs and fosters a supportive learning environment.', imageHint: 'man teacher' },
  { name: 'Ms. Amina Hussein', role: 'Lead Educator, Early Years', imageUrl: 'https://picsum.photos/seed/staff3/200/200', bio: 'Specializes in early childhood education, creating engaging experiences for young learners.', imageHint: 'woman educator' },
  { name: 'Mr. Peter Omondi', role: 'Sports Coordinator', imageUrl: 'https://picsum.photos/seed/staff4/200/200', bio: 'Manages all sports activities, promoting physical health and teamwork.', imageHint: 'man sports coach' },
  { name: 'Mrs. Grace Atieno', role: 'School Counselor', imageUrl: 'https://picsum.photos/seed/staff5/200/200', bio: 'Provides guidance and support to students, ensuring their well-being.', imageHint: 'woman counselor' },
  { name: 'Mr. John Mwangi', role: 'IT & Operations Manager', imageUrl: 'https://picsum.photos/seed/staff6/200/200', bio: 'Ensures smooth school operations and technology integration for enhanced learning.', imageHint: 'man technology' },
];

export default function OurStaffPage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-8 bg-gradient-to-b from-primary/5 to-transparent">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          The heart of Future For Kids Busara School lies in our passionate and dedicated staff, committed to nurturing every child.
        </p>
      </section>

      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {staffMembers.map((staff) => (
            <Card key={staff.name} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center">
                <Avatar className="w-32 h-32 mb-4 border-4 border-primary/20">
                  <AvatarImage src={staff.imageUrl} alt={staff.name} data-ai-hint={staff.imageHint || "person portrait"} />
                  <AvatarFallback>{staff.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <CardTitle className="text-2xl">{staff.name}</CardTitle>
                <p className="text-primary font-medium">{staff.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{staff.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
