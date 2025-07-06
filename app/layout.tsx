import './globals.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { Roboto_Slab, Playfair_Display } from 'next/font/google';
import Navbar from './components/navbar';
import SocialIcons from './components/social-icons';

const robotoSlab = Roboto_Slab({ subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rooted In Sports - The Sports Chronicle',
  description: 'Sports news and commentary in classic newspaper style.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${robotoSlab.className} bg-amber-50 text-gray-900`}>
        <div className="max-w-6xl mx-auto px-4 py-6 lg:px-8 lg:py-8 flex flex-col gap-6 border-x border-gray-400 shadow-md bg-amber-50 min-h-screen">
          <header className={`${playfair.className} border-b-4 border-gray-900 pb-2`}>
            <Navbar />
          </header>
          <main className="flex-grow">{children}</main>
          <footer className="border-t border-gray-400 pt-4 mt-8">
            <SocialIcons />
          </footer>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
