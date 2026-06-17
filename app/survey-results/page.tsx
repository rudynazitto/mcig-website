export const metadata = { title: 'Survey Results — MCIG' };

const findings = [
  { stat: '97%', label: 'of contractors say Mass Save pricing does not cover their actual costs' },
  { stat: '84%', label: 'report difficulty recruiting and retaining skilled labor at current rates' },
  { stat: '71%', label: 'have considered exiting the Mass Save program in the past year' },
  { stat: '92%', label: 'support MCIG\'s push for a transparent, market-based pricing review' },
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

export default function SurveyResults() {
  return (
    <>
      <section className="py-16 md:py-24" style={{ backgroundColor: '#fbf9f6' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#a14005', fontFamily: 'Work Sans, sans-serif' }}>2025–26 Member Survey</p>
          <h1 className="font-serif font-bold text-4xl md:text-5xl leading-tight mb-6 max-w-3xl" style={{ color: '#1b1c1a' }}>
            Contractor Survey Results
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl" style={{ color: '#444842', fontFamily: 'Work Sans, sans-serif' }}>
            MCIG surveyed its member contractors to document the real-world impact of current Mass Save pricing structures. The results are unambiguous: the status quo is unsustainable.
          </p>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: '#535e50' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <h2 className="font-serif font-bold text-3xl mb-2" style={{ color: '#ffffff' }}>Key Findings</h2>
          <ToolDivider />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {findings.map((item, i) => (
              <div key={i} className="bg-white/10 rounded-2xl p-8 flex items-start gap-6">
                <p className="font-serif font-bold text-5xl flex-shrink-0" style={{ color: '#becab9' }}>{item.stat}</p>
                <p className="text-lg leading-relaxed mt-3" style={{ color: '#d9e6d4', fontFamily: 'Work Sans, sans-serif' }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: '#F7F7F5' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <h2 className="font-serif font-bold text-3xl mb-2" style={{ color: '#1b1c1a' }}>What Contractors Are Saying</h2>
          <ToolDivider />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[
              { quote: "We've been doing Mass Save work for 12 years. The new pricing model makes it economically impossible to keep our crew employed at fair wages.", author: "MCIG Member, Worcester County" },
              { quote: "The State Auditor confirmed what we've been saying for years. It's time for the program administrators to listen to the people actually doing the work.", author: "MCIG Member, Norfolk County" },
              { quote: "We support clean energy goals 100%. We just need pricing that doesn't force us to choose between the program and staying in business.", author: "MCIG Member, Middlesex County" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
                <p className="text-sm leading-relaxed mb-4 italic" style={{ color: '#444842', fontFamily: 'Work Sans, sans-serif' }}>"{item.quote}"</p>
                <p className="text-xs font-semibold" style={{ color: '#535e50', fontFamily: 'Work Sans, sans-serif' }}>— {item.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
