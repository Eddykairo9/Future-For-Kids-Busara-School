
import type { Program, NavItem, NewsArticle, Testimonial } from '@/types';
// Icon components are no longer directly used here for navLinks, only their names.

export const navLinks: NavItem[] = [
  { href: '/', label: 'Home', icon: 'Home' },
  { href: '/programs', label: 'Programs', icon: 'BookOpen' },
  { href: '/news', label: 'News', icon: 'Newspaper' },
  { href: '/impact', label: 'Testimonials', icon: 'Star' },
  { href: '/contact', label: 'Contact Us', icon: 'Send' },
  { href: '/ai-suggestions', label: 'AI Content Tools', icon: 'Lightbulb' },
];

export const programsData: Program[] = [
  {
    id: '1',
    title: 'Early Childhood Education at Future For Kids',
    description: 'Fostering foundational skills and a love for learning in young children through play-based activities and interactive lessons at Future For Kids Busara School.',
    imageUrl: 'https://picsum.photos/seed/program1/600/400',
    imageHint: 'children learning',
    futureGoals: ['Expand to 10 more communities', 'Develop new curriculum modules', 'Train 50 new educators'],
  },
  {
    id: '2',
    title: 'Youth Empowerment Workshops by Busara School',
    description: 'Equipping teenagers with leadership skills, critical thinking abilities, and vocational training for a successful transition to adulthood, facilitated by Future For Kids Busara School.',
    imageUrl: 'https://picsum.photos/seed/program2/600/400',
    imageHint: 'teenagers workshop',
    futureGoals: ['Launch mentorship program', 'Partner with local businesses for internships', 'Reach 500 youths annually'],
  },
  {
    id: '3',
    title: 'Nutritional Support Program',
    description: 'Providing nutritious meals and health education to ensure children at Future For Kids Busara School have the energy and well-being to thrive academically and physically.',
    imageUrl: 'https://picsum.photos/seed/program3/600/400',
    imageHint: 'healthy food children',
    futureGoals: ['Establish community gardens', 'Conduct regular health check-ups', 'Reduce malnutrition rates by 20%'],
  },
];

export const newsArticlesData: NewsArticle[] = [
  {
    id: '1',
    slug: 'new-library-wing-opens',
    title: 'New Library Wing Opens at Future For Kids Busara School',
    date: 'October 26, 2023',
    author: 'Admin Staff',
    imageUrl: 'https://picsum.photos/seed/news1/600/400',
    imageHint: 'library books',
    summary: 'We are thrilled to announce the opening of our new library wing, providing more resources for our students.',
    content: '<p>The new library wing at Future For Kids Busara School was officially opened on October 26, 2023. This state-of-the-art facility houses thousands of new books, digital resources, and quiet study areas. Students and teachers alike are excited about the enhanced learning opportunities this new space will provide. The project was made possible through generous donations from our supporters and a grant from the Education Equity Foundation.</p><p>Features of the new wing include:</p><ul><li>Expanded collection of fiction and non-fiction books.</li><li>Dedicated sections for different age groups.</li><li>Computer stations with internet access for research.</li><li>A comfortable reading lounge.</li></ul><p>We believe this new library will be a cornerstone of academic excellence at our school for years to come.</p>'
  },
  {
    id: '2',
    slug: 'annual-sports-day-highlights',
    title: 'Annual Sports Day A Resounding Success!',
    date: 'November 5, 2023',
    author: 'Sports Committee',
    imageUrl: 'https://picsum.photos/seed/news2/600/400',
    imageHint: 'children sports',
    summary: 'Our annual sports day was filled with thrilling competitions, teamwork, and school spirit.',
    content: '<p>Future For Kids Busara School held its Annual Sports Day on November 5, 2023, and it was a day filled with energy, enthusiasm, and outstanding sportsmanship. Students from all grades participated in a variety of track and field events, as well as team games. The highlight of the day was the inter-house relay race, which saw fierce but friendly competition.</p><p>Parents and community members turned out in large numbers to support the students. The event not only promoted physical fitness but also instilled values of teamwork, discipline, and perseverance. Congratulations to all participants and winners!</p>'
  },
  {
    id: '3',
    slug: 'science-fair-innovation',
    title: 'Students Showcase Innovation at Annual Science Fair',
    date: 'November 15, 2023',
    author: 'Science Department',
    imageUrl: 'https://picsum.photos/seed/news3/600/400',
    imageHint: 'science experiment',
    summary: 'Young scientists from Future For Kids Busara School impressed judges with their creative and insightful projects.',
    content: '<p>The Annual Science Fair at Future For Kids Busara School, held on November 15, 2023, was a testament to our students\' creativity and scientific curiosity. Projects ranged from renewable energy models to explorations of local ecosystems. Judges, comprising local scientists and educators, were highly impressed with the quality of research and presentation.</p><p>The fair aims to encourage students to explore scientific concepts beyond the classroom and develop critical thinking and problem-solving skills. Top projects will be entered into the regional science competition next month.</p>'
  },
  {
    id: '4',
    slug: 'community-outreach-program-launch',
    title: 'Future For Kids Busara School Launches New Community Outreach Program',
    date: 'December 1, 2023',
    author: 'Outreach Coordinator',
    imageUrl: 'https://picsum.photos/seed/news4/600/400',
    imageHint: 'community meeting',
    summary: 'Our new initiative aims to strengthen ties with the local community and provide educational support beyond our walls.',
    content: '<p>Future For Kids Busara School is excited to launch its new Community Outreach Program starting December 1, 2023. This initiative will involve student and teacher volunteers engaging in various community service activities, including tutoring sessions for underprivileged children in neighboring areas, environmental clean-up drives, and adult literacy workshops.</p><p>The program is designed to foster a sense of social responsibility among our students and to make a positive impact on the wider community. We believe that education extends beyond the classroom, and this program embodies that philosophy.</p>'
  },
  {
    id: '5',
    slug: 'art-exhibition-creativity-unleashed',
    title: 'Creativity Unleashed: Annual Art Exhibition Dazzles',
    date: 'December 10, 2023',
    author: 'Art Department',
    imageUrl: 'https://picsum.photos/seed/news5/600/400',
    imageHint: 'art gallery children',
    summary: 'Students\' artistic talents were on full display at our vibrant annual art exhibition.',
    content: '<p>The halls of Future For Kids Busara School were transformed into a vibrant art gallery for our Annual Art Exhibition on December 10, 2023. The event showcased a diverse collection of artworks created by students from all grade levels, including paintings, sculptures, pottery, and digital art.</p><p>Parents, teachers, and art enthusiasts from the community attended the exhibition, admiring the creativity and skill of our young artists. The theme for this year\'s exhibition was "Our World, Our Future," inspiring many thought-provoking pieces. The Art Department is incredibly proud of the students\' accomplishments.</p>'
  },
  {
    id: '6',
    slug: 'technology-integration-in-classrooms',
    title: 'Enhancing Learning Through Technology Integration',
    date: 'January 5, 2024',
    author: 'IT Department',
    imageUrl: 'https://picsum.photos/seed/news6/600/400',
    imageHint: 'classroom technology',
    summary: 'Future For Kids Busara School is upgrading its classrooms with new technology to enhance the learning experience.',
    content: '<p>Future For Kids Busara School is embarking on a significant upgrade to its classroom technology, starting January 2024. This initiative includes the installation of interactive whiteboards, new computers, and educational software across all grade levels. Teachers are undergoing training to effectively integrate these new tools into their lesson plans.</p><p>The aim is to create a more engaging and interactive learning environment, preparing students for a digitally-driven world. This investment in technology underscores our commitment to providing a modern and effective education for all our students.</p>'
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: '1',
    name: 'Aisha Njoroge',
    role: 'Student, Grade 5',
    testimonial: 'Future For Kids Busara School has helped me discover my love for science! The teachers are so supportive and make learning fun. The new library is my favorite place.',
    imageUrl: 'https://picsum.photos/seed/student1/200/200',
    imageHint: 'girl smiling'
  },
  {
    id: '2',
    name: 'Mr. David Otieno',
    role: 'Parent',
    testimonial: 'Since my son started attending Future For Kids Busara School, I\'ve seen a huge improvement in his confidence and academic performance. The school truly cares about each child.',
    imageUrl: 'https://picsum.photos/seed/parent1/200/200',
    imageHint: 'man portrait'
  },
  {
    id: '3',
    name: 'Fatuma Ibrahim',
    role: 'Alumni',
    testimonial: 'The foundation I received at Future For Kids Busara School prepared me well for higher education and my career. I am grateful for the dedicated teachers and the values instilled in me.',
    imageUrl: 'https://picsum.photos/seed/alumni1/200/200',
    imageHint: 'woman professional'
  },
   {
    id: '4',
    name: 'Samuel Kariuki',
    role: 'Student, Grade 8',
    testimonial: 'The youth empowerment workshops taught me leadership skills that I use every day. Future For Kids Busara School is more than just a school, it’s a community.',
    imageUrl: 'https://picsum.photos/seed/student2/200/200',
    imageHint: 'boy happy'
  }
];
