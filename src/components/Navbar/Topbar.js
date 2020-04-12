import React from "react"
import { Box, IconButton, useTheme } from "@chakra-ui/core"
import { FiMenu } from "react-icons/fi"

export const NavTopbar = () => {
  const theme = useTheme()

  return (
    <Box
      d={{ md: "none" }}
      background={`linear-gradient(45deg, ${theme.colors.brand[500]}, ${theme.colors.brand[600]})`}
      color="white"
      h="3rem"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="2"
    >
      Topbar
      <IconButton
        variant="unstyled"
        aria-label="Menu"
        d="inline-flex"
        icon={FiMenu}
      />
    </Box>
  )
}
