"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from './Logo';
import { NavLink } from './NavLink';
import { MobileNav } from './MobileNav';
import { navLinks } from '@/lib/data';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, type LucideIcon } from 'lucide-react';
import type { NavItem } from '@/types';
import { cn } from '@/lib/utils';
import * as LucideIcons from 'lucide-react';
import { ThemeToggleButton } from '@/components/theme/ThemeToggleButton';

// Helper to get icon component by name
const getIcon = (iconName?: string): LucideIcon | null => {
  if (!iconName) return null;
  const IconComponent = (LucideIcons as any)[iconName] as LucideIcon | undefined;
  return IconComponent || null;
};

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => {
            const IconComponent = getIcon(link.icon);
            const basePath = link.basePathForHighlight || link.href;
            const isActive = pathname === link.href || (basePath !== '/' && pathname.startsWith(basePath));

            if (link.children && link.children.length > 0) {
              return (
                <DropdownMenu key={link.label}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={cn(
                        "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-foreground/70 hover:text-foreground hover:bg-muted"
                      )}
                    >
                      {IconComponent && <IconComponent className="h-5 w-5" />}
                      <span>{link.label}</span>
                      <ChevronDown className="h-4 w-4 opacity-70" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    {link.children.map((child: NavItem) => {
                       const ChildIconComponent = getIcon(child.icon);
                       return (
                        <DropdownMenuItem key={child.href} asChild>
                          <Link href={child.href} className={cn("flex items-center gap-2 w-full", pathname === child.href ? "bg-muted" : "")}>
                            {ChildIconComponent && <ChildIconComponent className="h-4 w-4 opacity-80" />}
                            {child.label}
                          </Link>
                        </DropdownMenuItem>
                       );
                    })}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            }
            return <NavLink item={link} key={link.href} />;
          })}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggleButton />
          <Button variant="default" asChild className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/contact#donate">Donate</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
