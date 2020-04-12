import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Box, Flex, useTheme } from "@chakra-ui/core"

const updateCssViewportHeight = () => {
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty("--vh", `${vh}px`)
}

updateCssViewportHeight()
window.addEventListener("resize", () => {
  updateCssViewportHeight()
})

const Layout = ({ children }) => {
  const theme = useTheme()

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          currentYear
        }
      }
    }
  `)

  return (
    <Flex
      minH="100vh"
      style={{
        minHeight: "calc(var(--vh, 1vh) * 100)",
      }}
    >
      <Box
        background={`linear-gradient(45deg, ${theme.colors.brand[500]}, ${theme.colors.brand[600]})`}
        position="fixed"
        top="0"
        left="0"
        bottom="0"
        w={{ base: "100%", md: "20rem" }}
        transform={{ base: "translate(100%)", md: "none" }}
        zIndex="3"
      >
        Nav
      </Box>
      <Box as="main" ml={{ md: "20rem" }} position="relative" zIndex="1">
        {children}
      </Box>
    </Flex>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
