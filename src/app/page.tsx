'use client';

import { currentYear } from '@/constants/site';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Index() {
  const router = useRouter();
  useEffect(() => {
    router.replace(`/${currentYear}`);
  }, [router]);

  return null;
}
