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

  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //         currentYear
  //       }
  //     }
  //   }
  // `)

  return (
    <ThemeProvider theme={themes[theme]}>
      <CSSReset />
      <Flex
        minH="100vh"
        background="white"
        style={{
          minHeight: "calc(var(--vh, 1vh) * 100)",
        }}
      >
        <Nav
          isOpen={isOpen}
          w={{ base: "100%", [navBreakpoint]: navDesktopWidth }}
          breakpoint={navBreakpoint}
          onNavClose={onClose}
        />
        <NavTopbar h={navTopbarHeight} onNavOpen={onOpen} />
        <Box
          as="main"
          ml={{ [navBreakpoint]: navDesktopWidth }}
          mt={{ base: navTopbarHeight, [navBreakpoint]: "0" }}
          width="100%"
          position="relative"
          zIndex="1"
        >
          <Box maxWidth="75rem" marginX="auto" p={6}>
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
