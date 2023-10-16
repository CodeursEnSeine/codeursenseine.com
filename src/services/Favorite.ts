import { currentYear } from '@/constants/site';
import { isBrowser } from '@/utils/ssr';

import { Talk } from 'contentlayer/generated';

const FAVORITE_KEY = `ces-favorite-${currentYear}`;

export type Favorites = Array<Talk['slug']>;

export default class Favorite {
  /**
   * Get the favorites stored in local storage
   *
   * @returns {Array<String>}
   */
  static getFavorites = (): Favorites => {
    if (isBrowser) {
      const favorites = localStorage.getItem(FAVORITE_KEY);

      if (favorites) {
        return JSON.parse(favorites);
      } else {
        return [];
      }
    }

    return [];
  };

  /**
   * Save a the list of favorites.
   *
   * @param {Array<string>} favorites The list of favorites to save.
   */
  static setFavorites = (favorites: Favorites) => {
    localStorage.setItem(FAVORITE_KEY, JSON.stringify(favorites));
  };

  /**
   * Add the conference in the favorites.
   *
   * @param {string} slug The identifier of the conference.
   */
  static addFavorite = (slug: Talk['slug']) => {
    const favorites = Favorite.getFavorites();

    // If it is already a favorite, we do not add it again.
    if (favorites.includes(slug)) {
      return;
    }

    favorites.push(slug);

    Favorite.setFavorites(favorites);
  };

  /**
   * Check if the conference matching the identifier is a favorite.
   *
   * @param {string} id The identifier of the conference.
   */
  static isFavorite = (slug: Talk['slug']) => {
    return Favorite.getFavorites().includes(slug);
  };

  /**
   * Remove the conference matching identifier from the favorites.
   *
   * @param {string} id The identifier of the conference.
   */
  static removeFavorite = (slug: Talk['slug']) => {
    const favorites = Favorite.getFavorites();

    const newFavorites = favorites.filter((favorite) => favorite !== slug);

    Favorite.setFavorites(newFavorites);
  };
}
