import React from 'react';
import { Box, BoxProps, useTheme } from '@chakra-ui/react';
import Image from 'next/image';

export const Logo = (props: BoxProps) => {
  const theme = useTheme();

  return (
    <Box {...props}>
      <Image
        style={{ height: '100%', width: '100%' }}
        src={theme.logos.white}
        alt={theme.logos.alt}
        width={192}
        height={106}
      />
    </Box>
  );
};
