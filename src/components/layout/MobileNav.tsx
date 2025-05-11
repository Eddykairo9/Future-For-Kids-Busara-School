"use client";

import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Logo } from './Logo';
import { NavLink } from './NavLink';
import { navLinks } from '@/lib/data';
import { Separator } from '@/components/ui/separator';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open navigation menu">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full max-w-xs p-0">
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <Logo />
          </div>
          <nav className="flex-grow p-4 space-y-2">
            {navLinks.map((link) => (
              <SheetClose asChild key={link.href}>
                 <NavLink item={link} onClick={() => setIsOpen(false)} />
              </SheetClose>
            ))}
          </nav>
          <Separator />
          <div className="p-4 text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Future For Kids Busara School
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
