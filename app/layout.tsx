import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Telecomparts - Telefoonaccessoires & Gaming Gear',
  description:
    'Je specialist in telefoonaccessoires en gaming gear. Alleen de beste kwaliteit voor de beste prijs.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className={inter.className}>{children}</body>
    </html>
  );
}