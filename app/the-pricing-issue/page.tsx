import Image from 'next/image';

export const metadata = { title: 'The Pricing Issue — MCIG' };

function ToolDivider() {
  return (
    <div className="flex items-center gap-4 my-8">
      <div className="flex-1 h-px" style={{ backgroundColor: '#c4c8c0' }}></div>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 17L8 12M8 12L6 7L10 3L14 7L10 11M8 12L10 11M10 11L15 16" stroke="#6b7768" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      <div className="flex-1 h-px" style={{ backgroundColor: '#c4c8c0' }}></div>
    </div>
  );
}

export default function ThePricingIssue() {
  return (
    <>
      {/* Hero: text left, photo right */}
      <section className="py-12 md:py-16" style={{ backgroundColor: '#fbf9f6' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#a14005' }}>The Core Crisis</p>
            <h1 className="font-serif font-bold text-4xl md:text-5xl leading-tight mb-5" style={{ color: '#1b1c1a' }}>
              The Pricing Issue and <em style={{ color: '#a14005' }}>Professional Sustainability</em>
            </h1>
            <p className="leading-relaxed" style={{ color: '#444842', fontSize: '16px' }}>
              For decades, the Massachusetts residential contracting industry thrived on a model of averaged competitive bidding. Today, that has been disrupted by a Price Transparency mandate that imposes below-market pricing and threatens the operational stability of MA contractors.
            </p>
          </div>
          <div className="relative w-full h-72 md:h-80 rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&q=80"
              alt="Contractor working on a residential project"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Analysis + Inflation Reality Check side by side */}
      <section className="py-14" style={{ backgroundColor: '#F7F7F5' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Analysis */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-8" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded flex items-center justify-center" style={{ backgroundColor: '#F0EDEA' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="5" y="2" width="14" height="20" rx="2" stroke="#535e50" strokeWidth="1.5"/><path d="M9 7h6M9 11h6M9 15h4" stroke="#535e50" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </div>
              <h2 className="font-serif font-semibold text-xl" style={{ color: '#1b1c1a' }}>Analysis of Current Pricing Models</h2>
            </div>
            <ToolDivider />
            <p className="leading-relaxed mb-4" style={{ color: '#444842', fontSize: '15px' }}>
              The current regional model creates significant pressure on contractor margins. By prioritizing the lowest possible bid over long-term operational health, the state's energy efficiency program has established pricing structures that often fall below market rates. This presents a challenge to maintaining industry-wide quality and safety standards.
            </p>
            <p className="leading-relaxed" style={{ color: '#444842', fontSize: '15px' }}>
              Contractors provide critical energy efficiency expertise that requires specialized knowledge, insurance, and administrative oversight. When these services are treated as commoditized labor units, it can impact the operational stability of legitimate contracting businesses in Massachusetts and affect service quality.
            </p>
          </div>

          {/* Inflation Reality Check */}
          <div className="lg:col-span-2 rounded-2xl p-7" style={{ backgroundColor: '#535e50' }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: '#becab9' }}>Inflation Reality Check</p>
            <div className="space-y-5">
              <div className="pb-4 border-b" style={{ borderColor: '#6b7768' }}>
                <p className="text-xs mb-0.5" style={{ color: '#becab9' }}>2022–2024 Wx RFQ</p>
                <p className="text-sm font-semibold mb-1" style={{ color: '#d9e6d4' }}>Required Measures Increase</p>
                <p className="font-serif font-bold text-3xl" style={{ color: '#ffffff' }}>0.83%</p>
              </div>
              <div className="pb-4 border-b" style={{ borderColor: '#6b7768' }}>
                <p className="text-xs mb-0.5" style={{ color: '#becab9' }}>2025–2027 Wx RFQ</p>
                <p className="text-sm font-semibold mb-1" style={{ color: '#d9e6d4' }}>Pending Determination</p>
                <div className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 3v6M8 11v2" stroke="#fd844a" strokeWidth="2" strokeLinecap="round"/><path d="M4 9l4 4 4-4" stroke="#fd844a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <p className="font-serif font-bold text-3xl" style={{ color: '#ffffff' }}>? %</p>
                </div>
              </div>
              <div className="pb-4 border-b" style={{ borderColor: '#6b7768' }}>
                <p className="text-xs mb-0.5" style={{ color: '#becab9' }}>Real-World Inflation</p>
                <p className="text-sm font-semibold mb-1" style={{ color: '#d9e6d4' }}>Construction &amp; Labor</p>
                <p className="font-serif font-bold text-3xl" style={{ color: '#ffffff' }}>8.2%+</p>
              </div>
            </div>
            <p className="text-xs leading-relaxed mt-5 italic" style={{ color: '#becab9' }}>
              "87% of contractors surveyed report that current Mass Save pricing does not cover the base cost of materials and living-wage labor."
            </p>
          </div>
        </div>
      </section>

      {/* Discouraging Competition + State Auditor */}
      <section className="py-14" style={{ backgroundColor: '#fbf9f6' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.06)', borderTop: '4px solid #E8743B' }}>
            <div className="flex items-center gap-3 mb-1">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#ffdbcd' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="20" height="14" rx="2" stroke="#a14005" strokeWidth="1.5"/><path d="M8 21h8M12 17v4" stroke="#a14005" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </div>
              <h3 className="font-serif font-semibold text-xl" style={{ color: '#1b1c1a' }}>Discouraging Competition</h3>
            </div>
            <p className="text-xs mb-4" style={{ color: '#747872' }}>Reducing incentives that drive homeowner benefits</p>
            <p className="leading-relaxed mb-4 text-sm" style={{ color: '#444842' }}>
              Historically, a HPC Contract Generation Fee was a separate, performance-based bid reflecting the distinct costs of customer acquisition and administration. The new RFQ eliminates this separation, linking the fee to weatherization labor bids, which as weatherization pricing declines, so does the fee to HPCs. This reduction fails to account for the fact that administrative overhead remains independent of installation costs, ignoring the distinct cost drivers of the industry.
            </p>
            <div className="p-4 rounded-lg flex gap-3" style={{ backgroundColor: '#fff8f5', borderLeft: '3px solid #E8743B' }}>
              <svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#E8743B" strokeWidth="1.5"/><path d="M5.5 8l2 2 3-3.5" stroke="#E8743B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <p className="text-sm" style={{ color: '#444842' }}>
                MCIG demands the HPC Contract Generation Fee be restored as a separate, transparent line item that accurately reflects administrative and acquisition efforts and costs.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.06)', borderTop: '4px solid #535e50' }}>
            <div className="flex items-center gap-3 mb-1">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#d9e6d4' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="#535e50" strokeWidth="1.5"/><path d="M3 9h18M9 21V9" stroke="#535e50" strokeWidth="1.5"/></svg>
              </div>
              <h3 className="font-serif font-semibold text-xl" style={{ color: '#1b1c1a' }}>State Auditor &amp; Budget</h3>
            </div>
            <p className="text-xs mb-4" style={{ color: '#747872' }}>DPU Cuts &amp; Impending Reports</p>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#535e50' }}></span>
                <p className="text-sm leading-relaxed" style={{ color: '#444842' }}>
                  The recent <strong>$500M DPU budget cut</strong> threatens the very programs contractors rely on for steady work.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#535e50' }}></span>
                <p className="text-sm leading-relaxed" style={{ color: '#444842' }}>
                  The <span className="font-semibold underline" style={{ color: '#535e50' }}>Sept 2025 State Auditor Report</span> has been released, providing documented findings on the systemic inequities in contractor compensation.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-14" style={{ backgroundColor: '#F7F7F5' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif font-bold text-3xl mb-5" style={{ color: '#1b1c1a' }}>Partners, Not Line Items.</h2>
            <p className="leading-relaxed italic text-lg mb-2" style={{ color: '#444842' }}>
              "We support Mass Save's mission. We are requesting that the professionals who execute this work be recognized as essential partners in the state's energy goals, with pricing structures that reflect that partnership."
            </p>
          </div>
          <div className="relative w-full h-72 rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=900&q=80"
              alt="Contractors shaking hands — partners in Massachusetts energy efficiency"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
