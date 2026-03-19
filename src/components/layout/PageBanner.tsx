import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

type BreadcrumbItem = { name: string; href?: string };

interface PageBannerProps {
  title: string;
  /** Array form: [{ name: 'Home', href: '/' }, { name: 'About' }] */
  paths?: BreadcrumbItem[];
  /** Legacy string form – used by the [slug] route */
  breadcrumbs?: string;
}

export default function PageBanner({ title, paths, breadcrumbs }: PageBannerProps) {
  // Build a unified list from either prop
  const crumbs: BreadcrumbItem[] = paths ?? [
    { name: 'Home', href: '/' },
    { name: breadcrumbs ?? title },
  ];

  return (
    <div className="w-full bg-[#0c3b31] pt-44 pb-20 relative overflow-hidden flex items-center">
      {/* Radial dot pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, #1ea173 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="container mx-auto px-6 max-w-[1240px] relative z-20 flex flex-col md:flex-row items-center justify-between gap-6">
        <h1 className="text-4xl lg:text-[48px] font-extrabold text-white leading-tight tracking-tight">
          {title}
        </h1>

        <nav className="flex items-center gap-2 text-gray-300 font-medium text-[15px]">
          {crumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <ChevronRight size={14} className="text-[#1ea173]" />}
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-white transition-colors">
                  {crumb.name}
                </Link>
              ) : (
                <span className="text-white">{crumb.name}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
}
