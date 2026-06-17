export const metadata = { title: 'Upcoming Events — MCIG' };

function ToolDivider() {
  return (
    <div className="flex items-center gap-4 my-10">
      <div className="flex-1 h-px" style={{ backgroundColor: '#c4c8c0' }}></div>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 17L8 12M8 12L6 7L10 3L14 7L10 11M8 12L10 11M10 11L15 16" stroke="#6b7768" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      <div className="flex-1 h-px" style={{ backgroundColor: '#c4c8c0' }}></div>
    </div>
  );
}

export default function UpcomingEvents() {
  return (
    <>
      <section className="py-16 md:py-24" style={{ backgroundColor: '#fbf9f6' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-center">
          <h1 className="font-serif font-bold text-4xl md:text-5xl mb-4" style={{ color: '#1b1c1a' }}>
            Upcoming Events & Hearings
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#444842', fontFamily: 'Work Sans, sans-serif' }}>
            Stay informed and engaged. Join our advocacy meetings, attend public hearings, and participate in industry webinars crucial to the residential contracting community in Massachusetts.
          </p>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: '#F7F7F5' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <h2 className="font-serif font-bold text-2xl mb-2" style={{ color: '#1b1c1a' }}>Scheduled Events</h2>
          <ToolDivider />

          {/* Empty state */}
          <div className="max-w-lg mx-auto mt-8 bg-white rounded-2xl p-12 text-center" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
            <div className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E8E6E0' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="4" width="18" height="18" rx="2" stroke="#6b7768" strokeWidth="1.5"/>
                <path d="M16 2v4M8 2v4M3 10h18" stroke="#6b7768" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="font-serif font-semibold text-xl mb-2" style={{ color: '#1b1c1a' }}>Upcoming Events</h3>
            <p className="text-sm leading-relaxed" style={{ color: '#747872', fontFamily: 'Work Sans, sans-serif' }}>
              Check back for upcoming in person events about the future of the Mass Save program!
            </p>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: '#fbf9f6' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <h2 className="font-serif font-bold text-2xl mb-6" style={{ color: '#1b1c1a' }}>Stay in the Loop</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Coalition Meetings', desc: 'Monthly MCIG member calls to align on advocacy priorities and share industry updates.', icon: '👥' },
              { title: 'Legislative Hearings', desc: 'Public hearings at the State House where MCIG members can testify on pricing and program reform.', icon: '🏛️' },
              { title: 'Industry Webinars', desc: 'Educational sessions on regulatory changes, compliance, and best practices for Mass Save contractors.', icon: '💻' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-serif font-semibold text-lg mb-2" style={{ color: '#1b1c1a' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#444842', fontFamily: 'Work Sans, sans-serif' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
