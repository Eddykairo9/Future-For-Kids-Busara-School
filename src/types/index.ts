export interface Program {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  futureGoals: string[];
  imageHint?: string;
}

export interface GalleryMedia {
  id: string;
  type: 'image' | 'video';
  src: string;
  alt: string;
  caption?: string;
  thumbnail?: string; // for videos
  imageHint?: string;
}

export interface NavItem {
  href: string; // Parent items that are only triggers can use "#" or a base path
  label: string;
  icon?: string;
  children?: NavItem[]; // For sub-menus
  basePathForHighlight?: string; // Optional: For highlighting parent if href is "#"
}

export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  author: string;
  imageUrl: string;
  imageHint?: string;
  summary: string;
  slug: string;
  content: string; 
}

export interface Testimonial {
  id: string;
  name: string;
  role: string; 
  testimonial: string;
  imageUrl: string;
  imageHint?: string;
}