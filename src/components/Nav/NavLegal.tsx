import React from 'react';
import { Box, Text, BoxProps, Link } from '@chakra-ui/react';
import { FiRewind } from 'react-icons/fi';
import NextLink from 'next/link';

export const NavLegal = (props: BoxProps) => {
  return (
    <Box textAlign="center" color="whiteAlpha.800" fontSize="xs" {...props}>
      <Text
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        textTransform="uppercase"
        letterSpacing="widest"
        fontSize="0.6rem"
        opacity={0.8}
        mb="1"
        gap="2"
      >
        Informations légales
      </Text>
      <Text>
        <Link
          as={NextLink}
          href="/mentions-legales"
          textDecoration="underline"
        >
          Mentions légales
        </Link>
        <Box as="span" mx="2" opacity={0.6}>
          |git 
        </Box>
        <Link
          as={NextLink}
          href="/confidentialite"
          textDecoration="underline"
        >
          Politique de confidentialité
        </Link>
      </Text>
    </Box>
  );
};
