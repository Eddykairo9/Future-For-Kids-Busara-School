"use client";

import Link from 'next/link';
import { Logo } from './Logo';
import { NavLink } from './NavLink';
import { MobileNav } from './MobileNav';
import { navLinks } from '@/lib/data';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
          {navLinks.map((link) => (
            <NavLink item={link} key={link.href} />
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="default" asChild className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/contact#donate">Donate</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
