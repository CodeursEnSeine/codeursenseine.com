'use client';

import Layout from '@/components/layout';
import { ReactNode } from 'react';

export default function LayoutMeetup(props: { children: ReactNode }) {
  return <Layout theme="devoxx4kids">{props.children}</Layout>;
}
