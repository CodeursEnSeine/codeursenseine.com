import React from "react"
import PropTypes from "prop-types"
import {
  Box,
  Flex,
  useDisclosure,
  ThemeProvider,
  CSSReset,
} from "@chakra-ui/core"
import { Nav, NavTopbar } from "./Nav"
import { PageHeader } from "./PageHeader"
import themes from "../themes"
import { Mdx } from "../renderers/Mdx"

const updateCssViewportHeight = () => {
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty("--vh", `${vh}px`)
}

if (typeof window !== "undefined") {
  updateCssViewportHeight()
  window.addEventListener("resize", () => {
    updateCssViewportHeight()
  })
}

const navBreakpoint = "md"
const navTopbarHeight = "3rem"
const navDesktopWidth = "30vw"

const Layout = ({ children, theme = "ces" }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <ThemeProvider theme={themes[theme]}>
      <CSSReset />
      <Flex
        minH="100vh"
        maxW="100vw"
        background="white"
        color="brand.900"
        style={{
          minHeight: "calc(var(--vh, 1vh) * 100)",
        }}
      >
        <Nav
          isOpen={isOpen}
          maxW="100vw"
          w={{ base: "100%", [navBreakpoint]: navDesktopWidth }}
          breakpoint={navBreakpoint}
          onNavClose={onClose}
        />
        <NavTopbar maxW="100vw" h={navTopbarHeight} onNavOpen={onOpen} />
        <Box
          as="main"
          ml={{ [navBreakpoint]: navDesktopWidth }}
          mt={{ base: navTopbarHeight, [navBreakpoint]: "0" }}
          width="100%"
          position="relative"
          zIndex="1"
        >
          <Box
            maxWidth="60rem"
            width="100%"
            overflow="auto"
            marginX="auto"
            p={6}
          >
            <PageHeader />
            <Mdx>{children}</Mdx>
          </Box>
        </Box>
      </Flex>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
