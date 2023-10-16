'use client';

import { FC, useEffect, useState } from 'react';

import {
  Button,
  ButtonProps,
  IconButton,
  IconButtonProps,
} from '@chakra-ui/react';
import { MdFavorite } from 'react-icons/md';

import { useFavoriteContext } from '@/contexts/FavoritesContext';
import Favorite from '@/services/Favorite';
import { Talk } from 'contentlayer/generated';

type FavoriteButtonProps = Omit<IconButtonProps, 'aria-label'> &
  ButtonProps & {
    slug: Talk['slug'];
    isIconButton?: boolean;
  };

export const FavoriteButton: FC<FavoriteButtonProps> = ({
  slug,
  isIconButton = false,
  ...rest
}) => {
  const { addFavorite, removeFavorite } = useFavoriteContext();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(Favorite.isFavorite(slug));
  }, [slug]);

  const handleOnClick = () => {
    if (isFavorite) {
      removeFavorite(slug);
      setIsFavorite(false);
    } else {
      addFavorite(slug);
      setIsFavorite(true);
    }
  };

  if (isIconButton) {
    return (
      <IconButton
        aria-label={
          isFavorite ? 'Supprimer des favoris' : 'Ajouter aux favoris'
        }
        isRound
        colorScheme={isFavorite ? 'pink' : 'gray'}
        icon={<MdFavorite />}
        onClick={handleOnClick}
        {...rest}
      />
    );
  }

  return (
    <Button
      colorScheme="pink"
      variant={isFavorite ? 'solid' : 'outline'}
      leftIcon={<MdFavorite />}
      onClick={handleOnClick}
      {...rest}
    >
      {isFavorite ? 'Supprimer des favoris' : 'Ajouter aux favoris'}
    </Button>
  );
};
