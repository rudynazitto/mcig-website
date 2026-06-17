export const metadata = { title: 'About — MCIG' };

function ToolDivider() {
  return (
    <div className="flex items-center gap-4 my-10">
      <div className="flex-1 h-px" style={{ backgroundColor: '#c4c8c0' }}></div>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 17L8 12M8 12L6 7L10 3L14 7L10 11M8 12L10 11M10 11L15 16" stroke="#6b7768" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      <div className="flex-1 h-px" style={{ backgroundColor: '#c4c8c0' }}></div>
    </div>
  );
}

export default function About() {
  return (
    <>
      <section className="py-16 md:py-24" style={{ backgroundColor: '#fbf9f6' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#a14005', fontFamily: 'Work Sans, sans-serif' }}>Our Story</p>
            <h1 className="font-serif font-bold text-4xl md:text-5xl leading-tight mb-6" style={{ color: '#1b1c1a' }}>
              About MCIG
            </h1>
            <p className="text-lg leading-relaxed mb-4" style={{ color: '#444842', fontFamily: 'Work Sans, sans-serif' }}>
              The Massachusetts Residential Contractors Industry Group (MCIG) was founded by contractors who recognized that without a unified voice, the industry would continue to lose ground to pricing policies that don't reflect real-world costs.
            </p>
            <p className="leading-relaxed" style={{ color: '#444842', fontFamily: 'Work Sans, sans-serif', fontSize: '16px' }}>
              We are not opponents of Mass Save or clean energy — we are its primary delivery mechanism. Our members install insulation, seal building envelopes, and upgrade heating systems for thousands of Massachusetts homeowners every year. We are committed to doing that work well, fairly, and sustainably.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { label: 'Founded', value: '2022' },
              { label: 'Member Contractors', value: '150+' },
              { label: 'Counties Represented', value: '14 of 14' },
              { label: 'Legislative Hearings', value: '3 in 2025–26' },
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center py-4 border-b" style={{ borderColor: '#E8E6E0' }}>
                <span className="font-medium" style={{ color: '#444842', fontFamily: 'Work Sans, sans-serif' }}>{item.label}</span>
                <span className="font-serif font-bold text-2xl" style={{ color: '#535e50' }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: '#F7F7F5' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <h2 className="font-serif font-bold text-3xl mb-2" style={{ color: '#1b1c1a' }}>Our Values</h2>
          <ToolDivider />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {[
              { title: 'Professionalism', desc: 'We hold our members to the highest standards of craft, licensing, and customer service. The MCIG seal means something.' },
              { title: 'Partnership', desc: 'We believe in constructive engagement with the Commonwealth, not confrontation. Fair policy serves everyone — contractors, homeowners, and the climate.' },
              { title: 'Trust', desc: 'Our advocacy is grounded in documented evidence, member testimony, and transparent communication with legislators and regulators.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
                <div className="w-10 h-1 mb-6 rounded-full" style={{ backgroundColor: '#E8743B' }}></div>
                <h3 className="font-serif font-bold text-xl mb-3" style={{ color: '#1b1c1a' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#444842', fontFamily: 'Work Sans, sans-serif' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: '#fbf9f6' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <h2 className="font-serif font-bold text-3xl mb-2" style={{ color: '#1b1c1a' }}>Leadership</h2>
          <ToolDivider />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-3xl">
            <div className="bg-white rounded-2xl p-6" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
              <div className="w-14 h-14 rounded-full mb-4 flex items-center justify-center font-serif font-bold text-2xl text-white" style={{ backgroundColor: '#535e50' }}>M</div>
              <h3 className="font-serif font-semibold text-lg" style={{ color: '#1b1c1a' }}>MCIG Leadership Team</h3>
              <p className="text-sm mt-1 mb-3" style={{ color: '#747872', fontFamily: 'Work Sans, sans-serif' }}>Executive Committee</p>
              <p className="text-sm leading-relaxed" style={{ color: '#444842', fontFamily: 'Work Sans, sans-serif' }}>
                Our volunteer leadership is drawn from active contractors across Massachusetts who donate their time to advance the industry's interests.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
              <div className="w-14 h-14 rounded-full mb-4 flex items-center justify-center font-serif font-bold text-2xl text-white" style={{ backgroundColor: '#a14005' }}>O</div>
              <h3 className="font-serif font-semibold text-lg" style={{ color: '#1b1c1a' }}>Operations</h3>
              <p className="text-sm mt-1 mb-3" style={{ color: '#747872', fontFamily: 'Work Sans, sans-serif' }}>Administrative Team</p>
              <a href="mailto:operations@MAContractorsGroup.com" className="text-sm font-medium" style={{ color: '#a14005', fontFamily: 'Work Sans, sans-serif' }}>
                operations@MAContractorsGroup.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
