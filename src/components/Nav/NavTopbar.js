import React from "react";
import {
  Box,
  Text,
  Heading,
  Flex,
  IconButton,
  useTheme,
} from "@chakra-ui/core";
import { FiMenu } from "react-icons/fi";
import { Logo } from "../Logo";
import { Link } from "gatsby";

export const NavTopbar = ({ onNavOpen = () => {}, ...props }) => {
  const theme = useTheme();

  return (
    <Flex
      as="nav"
      d={{ md: "none" }}
      background={theme.gradients.brand}
      justifyContent="space-between"
      color="white"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="2"
      align="center"
      {...props}
    >
      {/* TODO: if possible, set the link to current year to avoid multiple redirect */}
      <Link to="/">
        <Logo w="4.5" h="2.5rem" pl="2" />
      </Link>
      <Box textAlign="center">
        <Text fontFamily="heading" fontSize="0.6rem">
          {theme.data.pretitle}
        </Text>
        <Heading as="h4" fontSize="0.7rem">
          {theme.data.title}
        </Heading>
      </Box>
      <IconButton
        variant="unstyled"
        aria-label="Menu"
        d="inline-flex"
        icon={FiMenu}
        size="lg"
        onClick={() => onNavOpen()}
      />
    </Flex>
  );
};
