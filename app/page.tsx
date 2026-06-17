import Link from 'next/link';
import Image from 'next/image';

function ToolDivider() {
  return (
    <div className="flex items-center gap-4 my-8">
      <div className="flex-1 h-px" style={{ backgroundColor: '#c4c8c0' }}></div>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M3 17L8 12M8 12L6 7L10 3L14 7L10 11M8 12L10 11M10 11L15 16" stroke="#6b7768" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <div className="flex-1 h-px" style={{ backgroundColor: '#c4c8c0' }}></div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: '#fbf9f6' }} className="py-12 md:py-16">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-5 px-3 py-1.5 rounded-full" style={{ backgroundColor: '#E8E6E0', color: '#535e50' }}>
              Who We Are
            </div>
            <h1 className="font-serif font-bold text-4xl md:text-5xl leading-tight mb-5" style={{ color: '#1b1c1a' }}>
              Advocating for Professional Contractors in Massachusetts
            </h1>
            <p className="text-base leading-relaxed mb-8" style={{ color: '#444842' }}>
              The Massachusetts Residential Contractors Industry Group (MCIG) is a unified coalition representing the essential partners delivering the Mass Save program. We stand for fair pricing, professional excellence, and constructive partnership with state utilities.
            </p>
            <div className="inline-flex items-center gap-3 px-4 py-3 rounded-xl" style={{ backgroundColor: '#F0EDEA' }}>
              <div className="flex items-center justify-center w-9 h-9 rounded-full" style={{ backgroundColor: '#E8E6E0' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#535e50" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="9" cy="7" r="4" stroke="#535e50" strokeWidth="2"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="#535e50" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <p className="font-serif font-bold text-xl leading-none" style={{ color: '#1b1c1a' }}>150+</p>
                <p className="text-xs font-semibold uppercase tracking-widest mt-0.5" style={{ color: '#747872' }}>Member Companies</p>
              </div>
            </div>
          </div>
          <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80"
              alt="Massachusetts residential contractors reviewing plans"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Mission & Mandate */}
      <section className="py-14" style={{ backgroundColor: '#F7F7F5' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <h2 className="font-serif font-bold text-3xl text-center mb-1" style={{ color: '#1b1c1a' }}>Our Mission & Mandate</h2>
          <ToolDivider />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            <div className="lg:col-span-2 bg-white rounded-2xl p-8" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-serif font-semibold text-xl" style={{ color: '#1b1c1a' }}>Unified Industry Advocacy</h3>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 ml-4 opacity-20">
                  <path d="M11 17.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13zM20.5 20.5l-3-3" stroke="#535e50" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M8 11.5c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3" stroke="#535e50" strokeWidth="1.5"/>
                </svg>
              </div>
              <p className="leading-relaxed mb-5" style={{ color: '#444842', fontSize: '15px' }}>
                We represent the vital link between state energy goals and the boots on the ground. MCIG ensures that the contractors delivering Mass Save benefits have a seat at the table when pricing and policy are determined.
              </p>
              <ul className="space-y-3">
                {[
                  'Ensuring sustainable, fair pricing models for energy efficiency services',
                  'Maintaining the highest standards of professional residential contracting',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="mt-0.5 flex-shrink-0" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <circle cx="9" cy="9" r="8" stroke="#535e50" strokeWidth="1.5"/>
                      <path d="M5.5 9l2.5 2.5 4-5" stroke="#535e50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span style={{ color: '#444842', fontSize: '15px' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl p-8 text-white" style={{ backgroundColor: '#535e50' }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#becab9' }}>Mass Save</p>
              <h3 className="font-serif font-bold text-2xl mb-4">Primary Delivery Coalition</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#d9e6d4' }}>
                Our members perform the vast majority of residential energy audits and weatherization projects across the Commonwealth, securing Massachusetts' position as a leader in energy efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Coalition CTA */}
      <section className="py-16" style={{ backgroundColor: '#444842' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-center">
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4" style={{ color: '#ffffff' }}>Join the Coalition</h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: '#c4c8c0' }}>
            Your voice strengthens our collective impact. If you are a residential contractor in Massachusetts, MCIG is your advocate for a sustainable future.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/take-action" className="inline-block text-white font-semibold px-8 py-3 rounded-lg transition-colors" style={{ backgroundColor: '#E8743B' }}>
              Apply for Membership
            </Link>
            <Link href="/survey-results" className="inline-block font-semibold px-8 py-3 rounded-lg border-2 transition-colors" style={{ color: '#becab9', borderColor: '#becab9' }}>
              Read Our Survey
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
