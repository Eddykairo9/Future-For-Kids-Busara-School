import { ContactForm } from '@/components/forms/ContactForm';
import { Metadata } from 'next';
import { Mail, Phone, MapPin, DollarSign, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us - Future For Kids Busara School',
  description: 'Get in touch with Future For Kids Busara School for inquiries, support, or to learn more about our work.',
};

export default function ContactPage() {
  return (
    <div className="space-y-16">
      <section className="text-center py-8 bg-gradient-to-b from-primary/5 to-transparent">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          We&apos;d love to hear from you! Whether you have a question, want to volunteer, or wish to support our cause, please reach out.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <ContactForm />
        </div>
        <div className="space-y-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <MapPin className="h-6 w-6 text-primary" /> Our Office
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>Future For Kids Busara School</p>
              <p>123 Hope Street, Future City, FC 12345</p>
              <p>Kenya</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Mail className="h-6 w-6 text-primary" /> Email Us
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                For general inquiries: <a href="mailto:info@futureforkidsbusara.org" className="text-primary hover:underline">info@futureforkidsbusara.org</a>
              </p>
              <p>
                For partnership opportunities: <a href="mailto:partnerships@futureforkidsbusara.org" className="text-primary hover:underline">partnerships@futureforkidsbusara.org</a>
              </p>
            </CardContent>
          </Card>
           <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Phone className="h-6 w-6 text-primary" /> Call Us
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>+254 700 000 000 (Mon-Fri, 9am-5pm EAT)</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="donate" className="py-12 bg-primary/10 rounded-lg text-center">
        <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-4">Support Our Mission</h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
          Your generous donations help us continue our vital work in empowering children. Every contribution, big or small, makes a significant impact.
        </p>
        <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href="#">Donate Securely Online</Link>
        </Button>
      </section>

      <section id="volunteer" className="py-12 bg-secondary/10 rounded-lg text-center">
        <Heart className="h-12 w-12 text-secondary mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-4">Volunteer With Us</h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
          Share your skills and passion to make a difference in children&apos;s lives. We have various volunteering opportunities available.
        </p>
        <Button size="lg" asChild variant="outline" className="border-secondary text-secondary hover:bg-secondary/5 hover:text-secondary">
          <Link href="#">Learn About Volunteering</Link>
        </Button>
      </section>
    </div>
  );
}
