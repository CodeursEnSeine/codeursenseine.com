'use client';

import Layout from '@/components/layout';
import { ReactNode } from 'react';

export default function LegalLayout({ children }: { children: ReactNode }) {
  return <Layout>{children}</Layout>;
}
