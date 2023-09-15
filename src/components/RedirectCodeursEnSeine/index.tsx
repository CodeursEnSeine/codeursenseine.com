'use client';

import { useEffect } from 'react';

export type RedirectCodeursEnSeineProps = {
  path: string;
};

export function RedirectCodeursEnSeine({ path }: RedirectCodeursEnSeineProps) {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_ARCHIVE_YEAR) {
      window.location.href = `https://www.codeursenseine.com${path}`;
    }
  }, [path]);

  return null;
}
