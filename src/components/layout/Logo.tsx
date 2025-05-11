import Link from 'next/link';
import { HeartHandshake } from 'lucide-react'; // Or any other suitable icon

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary hover:text-primary/90 transition-colors" aria-label="Future For Kids Busara School Home">
      <HeartHandshake className="h-7 w-7" />
      <span className="text-base sm:text-xl">Future For Kids Busara School</span>
    </Link>
  );
}
