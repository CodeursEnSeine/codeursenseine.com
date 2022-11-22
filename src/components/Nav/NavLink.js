import React from "react";
import { useLocation } from "@reach/router";
import { Box } from "@chakra-ui/react";

export const NavLink = ({
  children = null,
  isMain = false,
  to = "",
  ...rest
}) => {
  const { pathname } = useLocation();
  const isActive = pathname === to;

  return (
    <Box
      role="group"
      display="block"
      textAlign={{ md: "right" }}
      to={to}
      {...rest}
    >
      <Box
        as="span"
        display="inline-flex"
        transition="0.2s"
        borderRadius="md"
        py="1"
        px="4"
        position="relative"
        fontFamily="heading"
        fontSize={isMain ? "xl" : "sm"}
        _hover={{ bg: "rgba(0, 0, 0, 0.1)" }}
        _after={
          isActive && {
            content: `""`,
            position: "absolute",
            left: 4,
            right: 4,
            bottom: "0.3rem",
            height: "0.15rem",
            bg: "brand.400",
          }
        }
      >
        {children}
      </Box>
    </Box>
  );
};
