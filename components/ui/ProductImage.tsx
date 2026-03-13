import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductImageProps {
  icon: LucideIcon;
  gradient?: string;
  className?: string;
}

export default function ProductImage({ icon: Icon, gradient, className }: ProductImageProps) {
  return (
    <div
      className={cn(
        'aspect-[4/5] bg-gray-100 rounded-2xl flex items-center justify-center p-8',
        gradient ? gradient : 'bg-gradient-to-br from-teal-100 to-blue-100',
        className
      )}
    >
      <Icon className="w-20 h-20 md:w-28 md:h-28 text-blue-400 drop-shadow-lg" strokeWidth={1.5} />
    </div>
  );
}
