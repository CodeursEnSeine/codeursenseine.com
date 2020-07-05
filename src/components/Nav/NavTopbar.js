import React from "react"
import { Flex, IconButton, useTheme } from "@chakra-ui/core"
import { FiMenu } from "react-icons/fi"
import { Logo } from "../Logo"
import { Link } from "gatsby"

export const NavTopbar = ({ onNavOpen = () => {}, ...props }) => {
  const theme = useTheme()

  return (
    <Flex
      as="nav"
      d={{ md: "none" }}
      background={theme.gradients.brand}
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
        <Logo w="4.5" h="2.5rem" />
      </Link>
      <IconButton
        variant="unstyled"
        aria-label="Menu"
        d="inline-flex"
        icon={FiMenu}
        ml="auto"
        onClick={() => onNavOpen()}
      />
    </Flex>
  )
}
