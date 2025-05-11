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
  href: string;
  label: string;
  icon?: string; // Changed from React.ComponentType to string
}

export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  author: string;
  imageUrl: string;
  imageHint?: string;
  summary: string;
  slug: string; // Changed from id for routing to be more SEO friendly
  content: string; // Full content for the individual page
}

export interface Testimonial {
  id: string;
  name: string;
  role: string; // e.g., "Student, Grade 5" or "Parent"
  testimonial: string;
  imageUrl: string;
  imageHint?: string;
}

