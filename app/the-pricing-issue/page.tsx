export const metadata = { title: 'The Pricing Issue — MCIG' };

function ToolDivider() {
  return (
    <div className="flex items-center gap-4 my-10">
      <div className="flex-1 h-px" style={{ backgroundColor: '#c4c8c0' }}></div>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 17L8 12M8 12L6 7L10 3L14 7L10 11M8 12L10 11M10 11L15 16" stroke="#6b7768" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      <div className="flex-1 h-px" style={{ backgroundColor: '#c4c8c0' }}></div>
    </div>
  );
}

export default function ThePricingIssue() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#fbf9f6' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#a14005', fontFamily: 'Work Sans, sans-serif' }}>The Core Issue</p>
            <h1 className="font-serif font-bold text-4xl md:text-5xl leading-tight mb-6" style={{ color: '#1b1c1a' }}>
              The Pricing Issue and <em style={{ color: '#a14005' }}>Professional Sustainability</em>
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: '#444842', fontFamily: 'Work Sans, sans-serif' }}>
              For decades, the Massachusetts residential contracting industry thrived on a model of averaged competitive bidding. Today, that has been disrupted by a Price Transparency mandate that imposes below-market pricing and threatens the operational viability of MA contractors.
            </p>
          </div>
          <div className="rounded-2xl p-8" style={{ backgroundColor: '#535e50' }}>
            <p className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: '#becab9', fontFamily: 'Work Sans, sans-serif' }}>Inflation Reality Check</p>
            <div className="space-y-6">
              {[
                { year: '2020–2026 MA CPI', label: 'Cumulative Inflation', value: '0.83%', positive: true },
                { year: '2020–2026 PPI', label: 'Construction Materials', value: '+7%', positive: true },
                { year: '2026 YoY PPI', label: 'Year-over-Year', value: '8.2%', positive: true },
              ].map((stat, i) => (
                <div key={i} className="flex justify-between items-center pb-4 border-b" style={{ borderColor: '#6b7768' }}>
                  <div>
                    <p className="text-xs mb-1" style={{ color: '#becab9', fontFamily: 'Work Sans, sans-serif' }}>{stat.year}</p>
                    <p className="text-sm font-semibold" style={{ color: '#d9e6d4', fontFamily: 'Work Sans, sans-serif' }}>{stat.label}</p>
                  </div>
                  <p className="font-serif font-bold text-2xl" style={{ color: '#ffffff' }}>{stat.value}</p>
                </div>
              ))}
              <p className="text-xs leading-relaxed" style={{ color: '#becab9', fontFamily: 'Work Sans, sans-serif' }}>
                *97% of contractors surveyed report that Mass Save pricing does not reflect real-world costs of materials and living wages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Analysis */}
      <section className="py-16" style={{ backgroundColor: '#F7F7F5' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <h2 className="font-serif font-bold text-3xl mb-2" style={{ color: '#1b1c1a' }}>Analysis of Current Pricing Models</h2>
          <ToolDivider />
          <div className="max-w-3xl mt-8">
            <p className="text-lg leading-relaxed mb-4" style={{ color: '#444842', fontFamily: 'Work Sans, sans-serif' }}>
              The current system creates significant pressure on contractor margins by prioritizing the lowest possible unit price over fair market value. This presents a challenge to maintaining a skilled, stable contractor workforce.
            </p>
            <p className="leading-relaxed" style={{ color: '#444842', fontFamily: 'Work Sans, sans-serif', fontSize: '16px' }}>
              Contractors rely on a complex mix of local knowledge, insurance, and administrative oversight. When their services are treated as commodities, this erodes the profession's ability to self-regulate, jeopardizing program outcomes and often-sought safety standards.
            </p>
          </div>
        </div>
      </section>

      {/* Two columns: Discouraging Competition + State Auditor */}
      <section className="py-16" style={{ backgroundColor: '#fbf9f6' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.06)', borderTop: '4px solid #E8743B' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#ffdbcd' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M10 3H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V9l-6-6zm4 14H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H11z" fill="#a14005"/></svg>
              </div>
              <h3 className="font-serif font-semibold text-xl" style={{ color: '#1b1c1a' }}>Discouraging Competition</h3>
            </div>
            <p className="leading-relaxed mb-4" style={{ color: '#444842', fontFamily: 'Work Sans, sans-serif', fontSize: '15px' }}>
              Historically, our industry has thrived on fair and competitive markets that serve consumers well. The new HPC Contract Submission has altered this, now requiring contractors to submit a below-market bid that constrains real operational costs and sets a ceiling, not a floor.
            </p>
            <div className="mt-4 p-4 rounded-lg text-sm" style={{ backgroundColor: '#fff8f5', borderLeft: '3px solid #E8743B', fontFamily: 'Work Sans, sans-serif', color: '#444842' }}>
              MCIG demands the HPC Contract Submission be treated as a proposal, transparent and submitted to review processes, with true enforcement and due-process protections.
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.06)', borderTop: '4px solid #535e50' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#d9e6d4' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="#535e50" strokeWidth="2"/><path d="M3 9h18M9 21V9" stroke="#535e50" strokeWidth="2"/></svg>
              </div>
              <h3 className="font-serif font-semibold text-xl" style={{ color: '#1b1c1a' }}>State Auditor & Budget</h3>
            </div>
            <p className="leading-relaxed mb-4" style={{ color: '#444842', fontFamily: 'Work Sans, sans-serif', fontSize: '15px' }}>
              The recent State Auditor's Report on Mass Save identifies the new program parameters and raises important concerns about procurement transparency, long-term sustainability, and contractor viability.
            </p>
            <p className="leading-relaxed" style={{ color: '#444842', fontFamily: 'Work Sans, sans-serif', fontSize: '15px' }}>
              The <strong>2026 State Auditor Report</strong> has raised pointed concerns, producing documented findings on the system's inadequacies in contractor protections.
            </p>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16" style={{ backgroundColor: '#F7F7F5' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl h-64 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #d9e6d4 0%, #6b7768 100%)' }}>
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" className="opacity-60"><path d="M17 1l4 4-4 4M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <div>
            <h2 className="font-serif font-bold text-3xl mb-4" style={{ color: '#1b1c1a' }}>Partners, Not Line Items.</h2>
            <p className="leading-relaxed mb-4" style={{ color: '#444842', fontFamily: 'Work Sans, sans-serif', fontSize: '16px' }}>
              We support Mass Save's mission. We are requesting that MA professionals and the wider industry use fair and reasonable energy efficiency pricing goals, with pricing structures that align incentives properly.
            </p>
            <p className="leading-relaxed" style={{ color: '#444842', fontFamily: 'Work Sans, sans-serif', fontSize: '16px' }}>
              The contractor community is willing to be a true partner in meeting Massachusetts' clean energy goals — with pricing that respects the true cost of skilled labor and materials.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
