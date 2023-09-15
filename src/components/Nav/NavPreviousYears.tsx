import React from 'react';
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  BoxProps,
} from '@chakra-ui/react';
import { FiRewind } from 'react-icons/fi';
import { pastYears } from '@/constants/site';

const IconRewind = (props: BoxProps) => (
  <Box as={FiRewind} opacity="0.4" display="inline-block" mr="2" {...props} />
);

export const NavPreviousYears = (props: BoxProps) => {
  return (
    <Box textAlign="center" {...props}>
      <Menu>
        <MenuButton
          as={Button}
          size="xs"
          variant="unstyled"
          display="inline-flex"
          alignItems="center"
          leftIcon={<IconRewind />}
        >
          Sites des éditions précédentes
        </MenuButton>
        <MenuList color="gray.800" minWidth="7rem">
          {pastYears.map((year) => (
            <MenuItem
              key={year}
              as="a"
              href={`https://www.codeursenseine.com/${year}/`}
            >
              <IconRewind />
              <Text as="span" fontWeight="bold" ml="2">
                {year}
              </Text>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};
