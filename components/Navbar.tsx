'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/the-pricing-issue', label: 'The Pricing Issue' },
  { href: '/our-advocacy', label: 'Our Advocacy' },
  { href: '/upcoming-events', label: 'Upcoming Events' },
  { href: '/survey-results', label: 'Survey Results' },
  { href: '/news', label: 'News' },
  { href: '/about', label: 'About' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #E8E6E0' }} className="sticky top-0 z-50">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <Link href="/" className="font-serif font-bold text-xl" style={{ color: '#535e50' }}>
          MCIG
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium transition-colors"
              style={{
                fontFamily: 'Work Sans, sans-serif',
                color: pathname === href ? '#535e50' : '#444842',
                borderBottom: pathname === href ? '3px solid #535e50' : '3px solid transparent',
                paddingBottom: '2px',
              }}
            >
              {label}
            </Link>
          ))}
        </div>

        <Link
          href="/take-action"
          className="hidden lg:inline-block text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors"
          style={{ backgroundColor: '#E8743B', fontFamily: 'Work Sans, sans-serif' }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#C95B2A')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#E8743B')}
        >
          Join MCIG
        </Link>

        {/* Mobile hamburger */}
        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          <div className="space-y-1.5">
            <span className="block w-6 h-0.5 bg-on-surface" style={{ backgroundColor: '#1b1c1a' }}></span>
            <span className="block w-6 h-0.5" style={{ backgroundColor: '#1b1c1a' }}></span>
            <span className="block w-6 h-0.5" style={{ backgroundColor: '#1b1c1a' }}></span>
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden px-6 pb-4 space-y-2" style={{ backgroundColor: '#ffffff' }}>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium"
              style={{ color: pathname === href ? '#535e50' : '#444842', fontFamily: 'Work Sans, sans-serif' }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/take-action"
            onClick={() => setOpen(false)}
            className="block mt-2 text-center text-white text-sm font-semibold px-5 py-2 rounded-lg"
            style={{ backgroundColor: '#E8743B', fontFamily: 'Work Sans, sans-serif' }}
          >
            Join MCIG
          </Link>
        </div>
      )}
    </nav>
  );
}
