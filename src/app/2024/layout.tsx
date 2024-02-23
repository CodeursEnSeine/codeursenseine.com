'use client';

import Layout from '@/components/layout';
import { ReactNode } from 'react';

export default function LayoutCes(props: { children: ReactNode }) {
  return <Layout>{props.children}</Layout>;
}
