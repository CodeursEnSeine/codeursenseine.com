import React from "react";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
} from "@chakra-ui/react";
import { FiRewind } from "react-icons/fi";

const years = [2013, 2014, 2015, 2016, 2017, 2018, 2019];

const IconRewind = (props) => (
  <Box as={FiRewind} opacity="0.4" display="inline-block" mr="2" {...props} />
);

export const NavPreviousYears = (props) => {
  return (
    <Box textAlign="center" {...props}>
      <Menu>
        <MenuButton
          as={Button}
          size="xs"
          variant="unstyled"
          d="inline-flex"
          alignItems="center"
          leftIcon={<IconRewind />}
        >
          Sites des éditions précédentes
        </MenuButton>
        <MenuList color="gray.800" minWidth="7rem">
          {years.map((year) => (
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
