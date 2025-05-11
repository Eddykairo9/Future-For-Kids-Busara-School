"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ChevronDown, type LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Logo } from './Logo';
import { NavLink } from './NavLink'; // Still used for non-dropdown items
import { navLinks } from '@/lib/data';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import type { NavItem } from '@/types';
import { cn } from '@/lib/utils';
import * as LucideIcons from 'lucide-react';


// Helper to get icon component by name (copied from NavLink.tsx or similar)
const getIcon = (iconName?: string): LucideIcon | null => {
  if (!iconName) return null;
  const IconComponent = (LucideIcons as any)[iconName] as LucideIcon | undefined;
  return IconComponent || null;
};

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open navigation menu">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full max-w-xs p-0 flex flex-col">
        <div className="p-4 border-b">
          <Logo />
        </div>
        <nav className="flex-grow p-4 space-y-1 overflow-y-auto">
          {navLinks.map((link) => {
            const IconComponent = getIcon(link.icon);
            const basePath = link.basePathForHighlight || link.href;
            const isParentActive = pathname === link.href || (basePath !== '/' && pathname.startsWith(basePath));

            if (link.children && link.children.length > 0) {
              return (
                <Accordion type="single" collapsible className="w-full" key={link.label}>
                  <AccordionItem value={link.label} className="border-b-0">
                    <AccordionTrigger 
                      className={cn(
                        "flex items-center justify-between w-full px-3 py-2 rounded-md text-sm font-medium transition-colors hover:no-underline",
                        isParentActive ? "bg-primary/10 text-primary" : "text-foreground/70 hover:text-foreground hover:bg-muted"
                      )}
                    >
                        <div className="flex items-center gap-2">
                           {IconComponent && <IconComponent className="h-5 w-5" />}
                           <span>{link.label}</span>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-1 pb-0 pl-4">
                      <div className="space-y-1">
                        {link.children.map((child: NavItem) => {
                          const ChildIconComponent = getIcon(child.icon);
                          return (
                          <SheetClose asChild key={child.href}>
                            <Link
                              href={child.href}
                              onClick={() => setIsOpen(false)}
                              className={cn(
                                "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors w-full",
                                pathname === child.href
                                  ? "bg-muted text-primary"
                                  : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
                              )}
                            >
                              {ChildIconComponent && <ChildIconComponent className="h-4 w-4 opacity-80" />}
                              <span>{child.label}</span>
                            </Link>
                          </SheetClose>
                        )})}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              );
            }
            // Regular link
            return (
              <SheetClose asChild key={link.href}>
                <NavLink item={link} onClick={() => setIsOpen(false)} />
              </SheetClose>
            );
          })}
        </nav>
        <Separator />
        <div className="p-4 text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Future For Kids Busara School
        </div>
      </SheetContent>
    </Sheet>
  );
}