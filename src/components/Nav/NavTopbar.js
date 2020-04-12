import React from "react"
import { Box, IconButton, useTheme } from "@chakra-ui/core"
import { FiMenu } from "react-icons/fi"

export const NavTopbar = ({ onNavOpen = () => {}, ...props }) => {
  const theme = useTheme()

  return (
    <Box
      d={{ md: "none" }}
      background={theme.gradients.brand}
      color="white"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="2"
      as="nav"
      {...props}
    >
      Topbar
      <IconButton
        variant="unstyled"
        aria-label="Menu"
        d="inline-flex"
        icon={FiMenu}
        onClick={() => onNavOpen()}
      />
    </Box>
  )
}
