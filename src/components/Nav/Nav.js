import React from "react"
import { Box, IconButton, useTheme } from "@chakra-ui/core"
import { FiX } from "react-icons/fi"

export const Nav = ({
  breakpoint,
  isOpen,
  onNavClose = () => {},
  ...props
}) => {
  const theme = useTheme()

  return (
    <Box
      background={`linear-gradient(45deg, ${theme.colors.brand[500]}, ${theme.colors.brand[600]})`}
      color="white"
      position="fixed"
      top="0"
      left="0"
      bottom="0"
      transform={{
        base: `translate(${isOpen ? 0 : "100%"})`,
        [breakpoint]: "none",
      }}
      transition={{ base: "transform 0.4s", [breakpoint]: "none" }}
      overflowY="auto"
      overflowX="none"
      zIndex="3"
      as="nav"
      {...props}
    >
      Nav
      <IconButton
        variant="unstyled"
        aria-label="Menu"
        d={{ base: "inline-flex", [breakpoint]: "none" }}
        icon={FiX}
        onClick={() => onNavClose()}
      />
    </Box>
  )
}
