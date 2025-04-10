import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nida',
  description: 'Nida',
  icons: {
    apple: '/apple-touch-icon.png',
    icon: ['/favicon.ico', '/favicon.svg'],
    shortcut: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
