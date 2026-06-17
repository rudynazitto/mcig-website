import { JoinForm, InquiryForm } from '@/components/TakeActionForms';

export const metadata = { title: 'Take Action — MCIG' };

function ToolDivider() {
  return (
    <div className="flex items-center gap-4 my-10">
      <div className="flex-1 h-px" style={{ backgroundColor: '#c4c8c0' }}></div>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 17L8 12M8 12L6 7L10 3L14 7L10 11M8 12L10 11M10 11L15 16" stroke="#6b7768" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      <div className="flex-1 h-px" style={{ backgroundColor: '#c4c8c0' }}></div>
    </div>
  );
}

export default function TakeAction() {
  return (
    <>
      <section className="py-16 md:py-20" style={{ backgroundColor: '#fbf9f6' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-center">
          <h1 className="font-serif font-bold text-4xl md:text-5xl mb-4" style={{ color: '#1b1c1a' }}>
            The Industry Needs Your Voice
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#444842', fontFamily: 'Work Sans, sans-serif' }}>
            Professionalism in the Massachusetts residential contracting industry starts with professional engagement. Join us in shaping policy and ensuring fair representation for our trade.
          </p>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: '#F7F7F5' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <ToolDivider />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 bg-white rounded-2xl p-8" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
              <h2 className="font-serif font-bold text-2xl mb-2" style={{ color: '#1b1c1a' }}>Join the Coalition</h2>
              <p className="text-sm mb-6" style={{ color: '#747872', fontFamily: 'Work Sans, sans-serif' }}>
                Sign up to receive legislative updates, industry reports, and invitations to advocacy meetings.
              </p>
              <JoinForm />
            </div>
            <div className="lg:col-span-2 rounded-2xl p-8 text-white" style={{ backgroundColor: '#535e50' }}>
              <h2 className="font-serif font-bold text-xl mb-3">Media Relations</h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: '#d9e6d4', fontFamily: 'Work Sans, sans-serif' }}>
                Journalists looking for industry statements or contractor survey data can reach our press desk directly.
              </p>
              <a href="mailto:operations@MAContractorsGroup.com" className="text-sm font-semibold underline" style={{ color: '#becab9', fontFamily: 'Work Sans, sans-serif' }}>
                Email: operations@MAContractorsGroup.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: '#fbf9f6' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl h-64 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #d9e6d4 0%, #6b7768 100%)' }}>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" className="opacity-60">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="9" cy="7" r="4" stroke="white" strokeWidth="1.5"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <h2 className="font-serif font-bold text-2xl mb-3" style={{ color: '#1b1c1a' }}>General Inquiries</h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: '#444842', fontFamily: 'Work Sans, sans-serif' }}>
                Have a question about our advocacy work or how to get involved in your local chapter? Our team is here to support the professional contractor community.
              </p>
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
