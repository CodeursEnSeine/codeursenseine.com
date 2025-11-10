import React from 'react';
import { Box, Text, BoxProps, Link } from '@chakra-ui/react';
import { FiRewind } from 'react-icons/fi';
import NextLink from 'next/link';

const IconRewind = (props: BoxProps) => (
  <Box as={FiRewind} opacity="0.4" display="inline-block" mr="2" {...props} />
);

type NavLegalProps = BoxProps & {
  onNavigate?: () => void;
};

export const NavLegal = ({ onNavigate, ...props }: NavLegalProps) => {
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
        <IconRewind aria-hidden="true" mr="1" />
        Informations légales
      </Text>
      <Text>
        <Link
          as={NextLink}
          href="/mentions-legales"
          textDecoration="underline"
          onClick={onNavigate}
        >
          Mentions légales
        </Link>
        <Box as="span" mx="2" opacity={0.6}>
          |
        </Box>
        <Link
          as={NextLink}
          href="/confidentialite"
          textDecoration="underline"
          onClick={onNavigate}
        >
          Politique de confidentialité
        </Link>
      </Text>
    </Box>
  );
};
