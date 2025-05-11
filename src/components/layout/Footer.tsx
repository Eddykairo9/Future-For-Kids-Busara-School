
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Logo } from './Logo';
import { navLinks } from '@/lib/data'; // Import navLinks to dynamically generate some links

export function Footer() {
  // Filter for top-level navigation items to display in footer, excluding Home
  const footerLinks = navLinks.filter(link => link.href !== '/' && !link.children);
  const aboutParentLink = navLinks.find(link => link.label === 'About');
  const programsParentLink = navLinks.find(link => link.label === 'Programs');


  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Logo />
            <p className="mt-2 text-sm text-muted-foreground">
              Empowering children for a brighter future through education and support.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              {aboutParentLink && (
                 <li><Link href={aboutParentLink.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{aboutParentLink.label}</Link></li>
              )}
              {programsParentLink && (
                 <li><Link href={programsParentLink.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{programsParentLink.label}</Link></li>
              )}
              {footerLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li><Link href="/news" className="text-sm text-muted-foreground hover:text-primary transition-colors">News</Link></li>
              <li><Link href="/impact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Testimonials</Link></li>
              <li><Link href="/contact#donate" className="text-sm text-muted-foreground hover:text-primary transition-colors">Donate</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={20} /></Link>
              <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={20} /></Link>
              <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={20} /></Link>
              <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={20} /></Link>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              123 Hope Street, Future City, FC 12345
            </p>
            <p className="text-sm text-muted-foreground">
              info@futureforkidsbusara.org
            </p>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Future For Kids Busara School. All rights reserved.
        </div>
      </div>
    </footer>
  );
}