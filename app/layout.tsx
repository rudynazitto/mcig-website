import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'MCIG — Massachusetts Residential Contractors Industry Group',
  description: 'The Massachusetts Residential Contractors Industry Group (MCIG) is a unified coalition representing residential contractors throughout Massachusetts. We advocate for fair pricing, professional standards, and constructive partnership with state officials.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
