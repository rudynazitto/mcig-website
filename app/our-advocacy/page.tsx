export const metadata = { title: 'Our Advocacy — MCIG' };

const initiatives = [
  {
    title: 'Pricing Transparency Reform',
    description: 'Advocating for fair, market-rate compensation in Mass Save contractor agreements that reflect true costs of materials, labor, and overhead.',
    icon: '📋',
  },
  {
    title: 'Legislative Engagement',
    description: 'Actively participating in Beacon Hill hearings and working with legislators to craft balanced energy efficiency policy that sustains the contractor workforce.',
    icon: '🏛️',
  },
  {
    title: 'State Auditor Collaboration',
    description: 'Providing documented evidence and contractor testimony to support the State Auditor\'s review of Mass Save program procurement practices.',
    icon: '🔍',
  },
  {
    title: 'Workforce Protection',
    description: 'Pushing for contractor protections that prevent below-cost bidding mandates from hollowing out the skilled trades pipeline in Massachusetts.',
    icon: '🛡️',
  },
  {
    title: 'Program Quality Standards',
    description: 'Maintaining the highest professional standards so Mass Save remains a model energy efficiency program with verifiable, lasting results.',
    icon: '⭐',
  },
  {
    title: 'Member Coalition Building',
    description: 'Uniting residential contractors across Massachusetts into a single, powerful voice that state agencies and legislators cannot ignore.',
    icon: '🤝',
  },
];

function ToolDivider() {
  return (
    <div className="flex items-center gap-4 my-10">
      <div className="flex-1 h-px" style={{ backgroundColor: '#c4c8c0' }}></div>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 17L8 12M8 12L6 7L10 3L14 7L10 11M8 12L10 11M10 11L15 16" stroke="#6b7768" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      <div className="flex-1 h-px" style={{ backgroundColor: '#c4c8c0' }}></div>
    </div>
  );
}

export default function OurAdvocacy() {
  return (
    <>
      <section className="py-16 md:py-24" style={{ backgroundColor: '#fbf9f6' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#a14005', fontFamily: 'Work Sans, sans-serif' }}>What We Fight For</p>
          <h1 className="font-serif font-bold text-4xl md:text-5xl leading-tight mb-6 max-w-3xl" style={{ color: '#1b1c1a' }}>
            Our Advocacy Platform
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl" style={{ color: '#444842', fontFamily: 'Work Sans, sans-serif' }}>
            MCIG pursues a focused, evidence-based advocacy agenda on behalf of Massachusetts residential contractors. Every initiative is grounded in protecting the industry's ability to deliver quality energy efficiency work sustainably.
          </p>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: '#F7F7F5' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <h2 className="font-serif font-bold text-3xl mb-2" style={{ color: '#1b1c1a' }}>Key Initiatives</h2>
          <ToolDivider />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {initiatives.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-serif font-semibold text-lg mb-3" style={{ color: '#1b1c1a' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#444842', fontFamily: 'Work Sans, sans-serif' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#535e50' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-center">
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4" style={{ color: '#ffffff' }}>Our Wins So Far</h2>
          <p className="text-lg mb-12 max-w-xl mx-auto" style={{ color: '#d9e6d4', fontFamily: 'Work Sans, sans-serif' }}>
            Through coalition-building and persistent engagement, MCIG has achieved meaningful progress.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { stat: '3', label: 'Legislative hearings attended in 2025–26' },
              { stat: '150+', label: 'Contractor signatures on our pricing petition' },
              { stat: '1', label: 'State Auditor report citing contractor concerns' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <p className="font-serif font-bold text-5xl mb-2" style={{ color: '#becab9' }}>{item.stat}</p>
                <p className="text-sm" style={{ color: '#d9e6d4', fontFamily: 'Work Sans, sans-serif' }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
