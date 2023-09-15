import './global.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_BASE_URL
    ? new URL(process.env.NEXT_PUBLIC_BASE_URL)
    : undefined,
  title: `Codeurs en Seine`,
  description: `Rencontre de codeuses & codeurs à Rouen`,
  openGraph: {
    title: `Codeurs en Seine`,
    description: `Rencontre de codeuses & codeurs à Rouen`,
    images: [{ url: '/images/ces/social.jpg', alt: 'Codeurs en Seine' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
