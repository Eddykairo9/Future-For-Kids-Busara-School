// src/components/layout/NavLink.tsx
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import type { NavItem } from '@/types';
import * as LucideIcons from 'lucide-react';

// Helper to get icon component by name
const getIcon = (iconName?: string): React.ComponentType<{ className?: string }> | null => {
  if (!iconName) return null;
  // Type assertion needed as LucideIcons is a module, and we're accessing its exports dynamically.
  const IconComponent = (LucideIcons as any)[iconName] as React.ComponentType<{ className?: string }> | undefined;
  return IconComponent || null;
};

interface NavLinkProps {
  item: NavItem; // NavItem will now have icon: string | undefined
  onClick?: () => void;
}

export function NavLink({ item, onClick }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === item.href;
  const IconComponent = getIcon(item.icon);

  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
        isActive
          ? "bg-primary/10 text-primary"
          : "text-foreground/70 hover:text-foreground hover:bg-muted",
        IconComponent && "justify-start"
      )}
      aria-current={isActive ? "page" : undefined}
    >
      {IconComponent && <IconComponent className="h-5 w-5" />}
      <span>{item.label}</span>
    </Link>
  );
}
