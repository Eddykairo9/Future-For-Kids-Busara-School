
import Link from 'next/link';
import Image from 'next/image';
import { HeroSection } from '@/components/sections/HeroSection';
import { NewsCard } from '@/components/cards/NewsCard';
import { TestimonialCard } from '@/components/cards/TestimonialCard';
import { Button } from '@/components/ui/button';
import { newsArticlesData, testimonialsData } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight, Users, Target, Heart, Newspaper, BookOpen, Eye, GoalIcon } from 'lucide-react';

export default function Home() {
  const featuredNews = newsArticlesData.slice(0, 6);
  const featuredTestimonials = testimonialsData.slice(0, 3);

  return (
    <div className="space-y-16 md:space-y-24">
      <HeroSection
        title="Future For Kids Busara School: Nurturing Potential, Inspiring Futures"
        subtitle="We are dedicated to providing children with the tools, resources, and support they need to thrive and build a better tomorrow."
        ctaText="Discover Our Programs"
        ctaLink="/programs"
        imageUrl="https://picsum.photos/seed/hero/1200/800"
        imageAlt="Happy children learning and playing"
        imageHint="children group happy"
      />

      <section id="welcome-intro" className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
          Welcome to Future For Kids Busara School
        </h2>
        <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          Welcome to the Future For Kids Busara School in Ukunda—an admirable project of the non-profit organization &quot;Future for Kids Kenia eV&quot; based in Öhningen (Baden-Württemberg).
          For 12 years now, we have been passionately committed to education and a better future.<br />
          We are proud that we started with just a few children and are now a significant educational institution in the region.
          Our focus is on giving children from disadvantaged backgrounds a chance at a successful future that they can shape on their own.
        </p>
      </section>

      <section id="our-guiding-principles" className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Guiding Principles</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit mb-4">
                <BookOpen className="h-8 w-8" />
              </div>
              <CardTitle className="text-2xl">Motto</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Empowering children, shaping the future through education and compassion.</p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="mx-auto bg-secondary/10 text-secondary p-3 rounded-full w-fit mb-4">
                <Eye className="h-8 w-8" />
              </div>
              <CardTitle className="text-2xl">Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">To build a world where every child has access to quality education, regardless of their background.</p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="mx-auto bg-accent/20 text-yellow-600 p-3 rounded-full w-fit mb-4">
                 <GoalIcon className="h-8 w-8" />
              </div>
              <CardTitle className="text-2xl">Mission Statement</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Our mission is to provide affordable, high-quality education to children in the community and foster an environment of holistic development.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="our-approach" className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Future For Kids Busara School is committed to fostering holistic development in children from underserved communities. We believe every child deserves access to quality education, healthcare, and a nurturing environment.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit mb-4">
                <Users className="h-8 w-8" />
              </div>
              <CardTitle className="text-2xl">Empowerment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">We empower children by providing them with knowledge, skills, and confidence to reach their full potential.</p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="mx-auto bg-secondary/10 text-secondary p-3 rounded-full w-fit mb-4">
                <Target className="h-8 w-8" />
              </div>
              <CardTitle className="text-2xl">Integrity</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">We operate with transparency and accountability in all our endeavors, ensuring trust with our stakeholders.</p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="mx-auto bg-accent/20 text-yellow-600 p-3 rounded-full w-fit mb-4">
                 <Heart className="h-8 w-8" />
              </div>
              <CardTitle className="text-2xl">Compassion</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">We approach our work with empathy and a deep understanding of the challenges faced by the children we serve.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="who-we-are-detailed" className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Who We Are</h2>
        </div>
        <div className="max-w-4xl mx-auto text-lg text-muted-foreground space-y-6 leading-relaxed">
          <p>
            We are a non profit association recognized by the tax office for the promotion of school children in Kenya. We run our own school with 448 children in Ukunda,
            in Kenya on the south coast of Mombasa.<br />
            School fees are kept low and the food is good. This means that many more children can enjoy a good school education.
            We check every payment, no matter how small, through our association in Germany and, if possible, pay everything ourselves. That way, every euro donated goes to the designated place!
          </p>
          <p>
            Thanks to the support of our generous donors and dedicated supporters, we have been able to make Future For Kids Diani Busara School what it is today—a place of hope, education, and opportunity.
            We firmly believe thateducation can change the world and are grateful to be able to embark on this journey together with our students and their families.
          </p>
          <p>
            We warmly invite you to learn more about our school and our work, and perhaps even become part of our future for children in Kenya. Together we can change the world and give children a better future.
          </p>
        </div>
      </section>

      <section id="news-articles" className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Latest News & Updates</h2>
          <p className="text-lg text-muted-foreground mt-2">Stay informed about happenings at Future For Kids Busara School.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredNews.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" asChild variant="outline" className="border-primary text-primary hover:bg-primary/5 hover:text-primary">
            <Link href="/news">
              View All News <Newspaper className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <section id="testimonials-preview" className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Voices From Our Community</h2>
           <p className="text-lg text-muted-foreground mt-2">Hear what our students, parents, and alumni have to say.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featuredTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" asChild variant="outline" className="border-secondary text-secondary hover:bg-secondary/5 hover:text-secondary">
            <Link href="/impact">
              More Testimonials <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

       <section id="get-involved" className="bg-muted py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Make a Difference</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Your support can change lives. Join us in our mission to create a brighter future for children at Future For Kids Busara School. Whether you volunteer your time, make a donation, or spread the word, every contribution counts.
          </p>
          <div className="space-x-4">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/contact#donate">Donate Now</Link>
            </Button>
            <Button size="lg" asChild variant="secondary" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <Link href="/volunteers">Volunteer</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
