import React, {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import Favorite, { Favorites } from '@/services/Favorite';
import { Talk } from 'contentlayer/generated';

type FavoritesContextType = {
  favorites: Favorites;
  addFavorite: (slug: Talk['slug']) => void;
  removeFavorite: (slug: Talk['slug']) => void;
};

const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});
export const useFavoriteContext = () => useContext(FavoritesContext);

export const FavoritesContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<Favorites>([]);

  useEffect(() => {
    setFavorites(Favorite.getFavorites());
  }, [setFavorites]);

  const addFavorite = (slug: Talk['slug']) => {
    Favorite.addFavorite(slug);

    setFavorites(Favorite.getFavorites());
  };

  const removeFavorite = (slug: Talk['slug']) => {
    Favorite.removeFavorite(slug);

    setFavorites(Favorite.getFavorites());
  };

  const value = useMemo(
    () => ({
      favorites,
      addFavorite,
      removeFavorite,
    }),
    [favorites]
  );

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};
