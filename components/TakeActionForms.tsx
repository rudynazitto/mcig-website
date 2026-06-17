'use client';

export function JoinForm() {
  return (
    <form className="space-y-4" onSubmit={e => e.preventDefault()}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold mb-1.5" style={{ color: '#444842', fontFamily: 'Work Sans, sans-serif' }}>Full Name</label>
          <input type="text" placeholder="John Doe" className="w-full px-4 py-2.5 rounded-lg text-sm border outline-none focus:ring-2" style={{ borderColor: '#E8E6E0', fontFamily: 'Work Sans, sans-serif', color: '#1b1c1a' }} />
        </div>
        <div>
          <label className="block text-xs font-semibold mb-1.5" style={{ color: '#444842', fontFamily: 'Work Sans, sans-serif' }}>Company Name</label>
          <input type="text" placeholder="Doe Construction LLC" className="w-full px-4 py-2.5 rounded-lg text-sm border outline-none focus:ring-2" style={{ borderColor: '#E8E6E0', fontFamily: 'Work Sans, sans-serif', color: '#1b1c1a' }} />
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold mb-1.5" style={{ color: '#444842', fontFamily: 'Work Sans, sans-serif' }}>Email Address</label>
        <input type="email" placeholder="john@example.com" className="w-full px-4 py-2.5 rounded-lg text-sm border outline-none focus:ring-2" style={{ borderColor: '#E8E6E0', fontFamily: 'Work Sans, sans-serif', color: '#1b1c1a' }} />
      </div>
      <button type="submit" className="w-full py-3 rounded-lg font-semibold text-white text-sm transition-colors" style={{ backgroundColor: '#535e50', fontFamily: 'Work Sans, sans-serif' }}>
        Submit Registration
      </button>
    </form>
  );
}

export function InquiryForm() {
  return (
    <form className="space-y-4" onSubmit={e => e.preventDefault()}>
      <div>
        <label className="block text-xs font-semibold mb-1.5" style={{ color: '#444842', fontFamily: 'Work Sans, sans-serif' }}>Subject</label>
        <input type="text" placeholder="Subject" className="w-full px-4 py-2.5 rounded-lg text-sm border outline-none" style={{ borderColor: '#E8E6E0', fontFamily: 'Work Sans, sans-serif' }} />
      </div>
      <div>
        <label className="block text-xs font-semibold mb-1.5" style={{ color: '#444842', fontFamily: 'Work Sans, sans-serif' }}>Your Message</label>
        <textarea rows={4} placeholder="Your Message" className="w-full px-4 py-2.5 rounded-lg text-sm border outline-none resize-none" style={{ borderColor: '#E8E6E0', fontFamily: 'Work Sans, sans-serif' }}></textarea>
      </div>
      <button type="submit" className="px-8 py-3 rounded-lg font-semibold text-white text-sm" style={{ backgroundColor: '#E8743B', fontFamily: 'Work Sans, sans-serif' }}>
        Send Message
      </button>
    </form>
  );
}
