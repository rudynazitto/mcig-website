export const metadata = { title: 'News & Resources — MCIG' };

const articles = [
  {
    date: 'June 2026',
    category: 'State Policy',
    title: 'State Auditor Releases Report on Mass Save Contractor Pricing',
    excerpt: 'The 2026 State Auditor Report documents systemic issues in Mass Save procurement, validating MCIG\'s years-long advocacy for pricing reform and contractor protections.',
  },
  {
    date: 'May 2026',
    category: 'Industry Update',
    title: 'MCIG Testifies Before Joint Committee on Telecommunications, Utilities & Energy',
    excerpt: 'MCIG leadership presented contractor survey data to the Joint Committee, calling for a transparent pricing review and market-rate compensation standards.',
  },
  {
    date: 'April 2026',
    category: 'Coalition News',
    title: 'MCIG Membership Reaches 150 Contractors Across Massachusetts',
    excerpt: 'The coalition continues to grow, with contractors from every region of the Commonwealth joining to amplify the industry\'s voice on Mass Save pricing.',
  },
  {
    date: 'March 2026',
    category: 'Resources',
    title: 'Understanding the HPC Contract Submission Process',
    excerpt: 'A guide for MCIG members on navigating the Home Performance Contractor agreement requirements and documenting cost impacts for advocacy purposes.',
  },
  {
    date: 'February 2026',
    category: 'State Policy',
    title: 'New Inflation Data Strengthens Case for Pricing Reform',
    excerpt: 'Construction material costs have risen 7% year-over-year while Mass Save reimbursement rates have remained flat — a growing gap that threatens program sustainability.',
  },
  {
    date: 'January 2026',
    category: 'Coalition News',
    title: 'MCIG Launches Formal Advocacy Campaign for 2026 Legislative Session',
    excerpt: 'MCIG kicks off the 2026 session with a coordinated effort to engage legislators, regulators, and program administrators on fair pricing and contractor rights.',
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

const categoryColors: Record<string, string> = {
  'State Policy': '#ffdbcd',
  'Industry Update': '#d9e6d4',
  'Coalition News': '#E8E6E0',
  'Resources': '#f9dbe1',
};
const categoryText: Record<string, string> = {
  'State Policy': '#7c2e00',
  'Industry Update': '#141e13',
  'Coalition News': '#1b1c1a',
  'Resources': '#27171b',
};

export default function News() {
  return (
    <>
      <section className="py-16 md:py-24" style={{ backgroundColor: '#fbf9f6' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <h1 className="font-serif font-bold text-4xl md:text-5xl mb-4" style={{ color: '#1b1c1a' }}>News & Resources</h1>
          <p className="text-lg max-w-2xl" style={{ color: '#444842', fontFamily: 'Work Sans, sans-serif' }}>
            The latest updates from MCIG, Massachusetts energy policy, and the residential contracting industry.
          </p>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: '#F7F7F5' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <h2 className="font-serif font-bold text-2xl mb-2" style={{ color: '#1b1c1a' }}>Latest Updates</h2>
          <ToolDivider />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {articles.map((article, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 flex flex-col" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ backgroundColor: categoryColors[article.category] || '#E8E6E0', color: categoryText[article.category] || '#1b1c1a', fontFamily: 'Work Sans, sans-serif' }}>
                    {article.category}
                  </span>
                  <span className="text-xs" style={{ color: '#747872', fontFamily: 'Work Sans, sans-serif' }}>{article.date}</span>
                </div>
                <h3 className="font-serif font-semibold text-lg mb-3 flex-1" style={{ color: '#1b1c1a' }}>{article.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#444842', fontFamily: 'Work Sans, sans-serif' }}>{article.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
