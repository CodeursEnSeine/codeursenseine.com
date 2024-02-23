'use client';

import { FavoritesContextProvider } from '@/contexts/FavoritesContext';
import { ReactNode } from 'react';

export default function LayoutCes(props: { children: ReactNode }) {
  return <FavoritesContextProvider>{props.children}</FavoritesContextProvider>;
}
