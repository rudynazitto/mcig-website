import Link from 'next/link';

function ToolDivider() {
  return (
    <div className="flex items-center gap-4 my-10">
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
      <section style={{ backgroundColor: '#fbf9f6' }} className="py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-6 px-3 py-1.5 rounded-full" style={{ backgroundColor: '#E8E6E0', color: '#535e50', fontFamily: 'Work Sans, sans-serif' }}>
              Who We Are
            </div>
            <h1 className="font-serif font-bold text-4xl md:text-5xl leading-tight mb-6" style={{ color: '#1b1c1a' }}>
              Advocating for Professional Contractors in Massachusetts
            </h1>
            <p className="text-lg leading-relaxed mb-8" style={{ color: '#444842', fontFamily: 'Work Sans, sans-serif' }}>
              The Massachusetts Residential Contractors Industry Group (MCIG) is a unified coalition representing the essential partners implementing the Mass Save program. We stand for fair pricing, professional standards, and constructive partnership with state officials.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full" style={{ backgroundColor: '#E8E6E0' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#535e50" strokeWidth="2" strokeLinecap="round"/><circle cx="9" cy="7" r="4" stroke="#535e50" strokeWidth="2"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="#535e50" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
                <div>
                  <p className="font-bold text-lg font-serif" style={{ color: '#1b1c1a' }}>150+</p>
                  <p className="text-xs" style={{ color: '#747872', fontFamily: 'Work Sans, sans-serif' }}>Member contractors</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-72 md:h-96 rounded-2xl overflow-hidden" style={{ backgroundColor: '#E8E6E0' }}>
              <div className="w-full h-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #d9e6d4 0%, #6b7768 100%)' }}>
                <div className="text-center text-white">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="mx-auto mb-3 opacity-60"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="white" strokeWidth="1.5"/><polyline points="9 22 9 12 15 12 15 22" stroke="white" strokeWidth="1.5"/></svg>
                  <p className="text-white/70 text-sm font-sans">Massachusetts Contractors at Work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Mandate */}
      <section className="py-16" style={{ backgroundColor: '#F7F7F5' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <h2 className="font-serif font-bold text-3xl text-center mb-2" style={{ color: '#1b1c1a' }}>Our Mission & Mandate</h2>
          <ToolDivider />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2 bg-white rounded-2xl p-8" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
              <h3 className="font-serif font-semibold text-xl mb-4" style={{ color: '#1b1c1a' }}>United Industry Advocacy</h3>
              <p className="leading-relaxed mb-4" style={{ color: '#444842', fontFamily: 'Work Sans, sans-serif', fontSize: '16px' }}>
                We represent the only independent voice going to the house on the ground. MCIG ensures that the contractors delivering Mass Save benefits have a seat at the table where policy decisions are being made.
              </p>
              <ul className="space-y-3">
                {[
                  'Ensuring reasonable, fair pricing models for energy efficiency services',
                  'Maintaining the highest standards of professional residential contracting',
                  'Building constructive partnerships between contractors and state agencies',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="mt-1 flex-shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13 4L6 11L3 8" stroke="#535e50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span style={{ color: '#444842', fontFamily: 'Work Sans, sans-serif', fontSize: '15px' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl p-8 text-white" style={{ backgroundColor: '#535e50' }}>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#becab9', fontFamily: 'Work Sans, sans-serif' }}>Mass Save</p>
              <h3 className="font-serif font-bold text-xl mb-3">Primary Delivery Coalition</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#d9e6d4', fontFamily: 'Work Sans, sans-serif' }}>
                Our members perform the vast majority of residential energy audits and weatherization projects across Massachusetts, directly advancing the Commonwealth's climate and energy efficiency goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Coalition CTA */}
      <section className="py-20" style={{ backgroundColor: '#444842' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-center">
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4" style={{ color: '#ffffff' }}>Join the Coalition</h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: '#c4c8c0', fontFamily: 'Work Sans, sans-serif' }}>
            Your voice strengthens our collective impact. If you are a residential contractor in Massachusetts, MCIG is your advocate for a sustainable future.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/take-action" className="inline-block text-white font-semibold px-8 py-3 rounded-lg transition-colors" style={{ backgroundColor: '#E8743B', fontFamily: 'Work Sans, sans-serif' }}>
              Apply for Membership
            </Link>
            <Link href="/survey-results" className="inline-block font-semibold px-8 py-3 rounded-lg border-2 transition-colors" style={{ color: '#becab9', borderColor: '#becab9', fontFamily: 'Work Sans, sans-serif' }}>
              Read Our Survey
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
