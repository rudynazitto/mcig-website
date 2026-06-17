import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#30302f', color: '#f3f0ed' }} className="mt-auto">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <p className="font-serif font-bold text-xl mb-3" style={{ color: '#becab9' }}>MCIG</p>
            <p className="text-sm leading-relaxed" style={{ color: '#c4c8c0', fontFamily: 'Work Sans, sans-serif' }}>
              Professionalism. Partnership. Trust. The voice of Massachusetts residential contracting.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#becab9', fontFamily: 'Work Sans, sans-serif' }}>Quick Links</p>
            <ul className="space-y-2 text-sm" style={{ fontFamily: 'Work Sans, sans-serif', color: '#c4c8c0' }}>
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/the-pricing-issue" className="hover:text-white transition-colors">The Pricing Issue</Link></li>
              <li><Link href="/our-advocacy" className="hover:text-white transition-colors">Our Advocacy</Link></li>
              <li><Link href="/upcoming-events" className="hover:text-white transition-colors">Upcoming Events</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#becab9', fontFamily: 'Work Sans, sans-serif' }}>Resources</p>
            <ul className="space-y-2 text-sm" style={{ fontFamily: 'Work Sans, sans-serif', color: '#c4c8c0' }}>
              <li><Link href="/survey-results" className="hover:text-white transition-colors">Survey Results</Link></li>
              <li><Link href="/news" className="hover:text-white transition-colors">News</Link></li>
              <li><Link href="/take-action" className="hover:text-white transition-colors">Take Action</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#becab9', fontFamily: 'Work Sans, sans-serif' }}>Contact</p>
            <p className="text-sm" style={{ fontFamily: 'Work Sans, sans-serif', color: '#c4c8c0' }}>
              Questions about joining or our advocacy? Reach out to our leadership team.
            </p>
            <a href="mailto:operations@MAContractorsGroup.com" className="text-sm mt-3 block hover:text-white transition-colors" style={{ color: '#becab9', fontFamily: 'Work Sans, sans-serif' }}>
              operations@MAContractorsGroup.com
            </a>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t text-xs text-center" style={{ borderColor: '#444842', color: '#747872', fontFamily: 'Work Sans, sans-serif' }}>
          © 2026 Massachusetts Residential Contractors Industry Group (MCIG). Professionalism. Partnership. Trust.
        </div>
      </div>
    </footer>
  );
}
