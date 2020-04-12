import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Box, Flex, useTheme, useDisclosure } from "@chakra-ui/core"
import { Nav, NavTopbar } from "./Nav"

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

const Layout = ({ children }) => {
  const theme = useTheme()
  const { isOpen, onOpen, onClose } = useDisclosure()

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
        position="relative"
        zIndex="1"
      >
        {children}
        FIRST ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        tempora obcaecati provident quae repudiandae nesciunt numquam fuga quam
        perferendis! Velit, magni aspernatur maiores dicta voluptatum temporibus
        impedit! Inventore, sequi quis!
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        tempora obcaecati provident quae repudiandae nesciunt numquam fuga quam
        perferendis! Velit, magni aspernatur maiores dicta voluptatum temporibus
        impedit! Inventore, sequi quis!
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        tempora obcaecati provident quae repudiandae nesciunt numquam fuga quam
        perferendis! Velit, magni aspernatur maiores dicta voluptatum temporibus
        impedit! Inventore, sequi quis!
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        tempora obcaecati provident quae repudiandae nesciunt numquam fuga quam
        perferendis! Velit, magni aspernatur maiores dicta voluptatum temporibus
        impedit! Inventore, sequi quis!
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        tempora obcaecati provident quae repudiandae nesciunt numquam fuga quam
        perferendis! Velit, magni aspernatur maiores dicta voluptatum temporibus
        impedit! Inventore, sequi quis!
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        tempora obcaecati provident quae repudiandae nesciunt numquam fuga quam
        perferendis! Velit, magni aspernatur maiores dicta voluptatum temporibus
        impedit! Inventore, sequi quis!
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        tempora obcaecati provident quae repudiandae nesciunt numquam fuga quam
        perferendis! Velit, magni aspernatur maiores dicta voluptatum temporibus
        impedit! Inventore, sequi quis!
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        tempora obcaecati provident quae repudiandae nesciunt numquam fuga quam
        perferendis! Velit, magni aspernatur maiores dicta voluptatum temporibus
        impedit! Inventore, sequi quis!
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        tempora obcaecati provident quae repudiandae nesciunt numquam fuga quam
        perferendis! Velit, magni aspernatur maiores dicta voluptatum temporibus
        impedit! Inventore, sequi quis!
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        tempora obcaecati provident quae repudiandae nesciunt numquam fuga quam
        perferendis! Velit, magni aspernatur maiores dicta voluptatum temporibus
        impedit! Inventore, sequi quis!
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        tempora obcaecati provident quae repudiandae nesciunt numquam fuga quam
        perferendis! Velit, magni aspernatur maiores dicta voluptatum temporibus
        impedit! Inventore, sequi quis!
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        tempora obcaecati provident quae repudiandae nesciunt numquam fuga quam
        perferendis! Velit, magni aspernatur maiores dicta voluptatum temporibus
        impedit! Inventore, sequi quis!
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        tempora obcaecati provident quae repudiandae nesciunt numquam fuga quam
        perferendis! Velit, magni aspernatur maiores dicta voluptatum temporibus
        impedit! Inventore, sequi quis!
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        tempora obcaecati provident quae repudiandae nesciunt numquam fuga quam
        perferendis! Velit, magni aspernatur maiores dicta voluptatum temporibus
        impedit! Inventore, sequi quis!
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        tempora obcaecati provident quae repudiandae nesciunt numquam fuga quam
        perferendis! Velit, magni aspernatur maiores dicta voluptatum temporibus
        impedit! Inventore, sequi quis!
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        tempora obcaecati provident quae repudiandae nesciunt numquam fuga quam
        perferendis! Velit, magni aspernatur maiores dicta voluptatum temporibus
        impedit! Inventore, sequi quis!
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        tempora obcaecati provident quae repudiandae nesciunt numquam fuga quam
        perferendis! Velit, magni aspernatur maiores dicta voluptatum temporibus
        impedit! Inventore, sequi quis!
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        tempora obcaecati provident quae repudiandae nesciunt numquam fuga quam
        perferendis! Velit, magni aspernatur maiores dicta voluptatum temporibus
        impedit! Inventore, sequi quis!
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        tempora obcaecati provident quae repudiandae nesciunt numquam fuga quam
        perferendis! Velit, magni aspernatur maiores dicta voluptatum temporibus
        impedit! Inventore, sequi quis!
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        tempora obcaecati provident quae repudiandae nesciunt numquam fuga quam
        perferendis! Velit, magni aspernatur maiores dicta voluptatum temporibus
        impedit! Inventore, sequi quis!
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        tempora obcaecati provident quae repudiandae nesciunt numquam fuga quam
        perferendis! Velit, magni aspernatur maiores dicta voluptatum temporibus
        impedit! Inventore, sequi quis!
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        tempora obcaecati provident quae repudiandae nesciunt numquam fuga quam
        perferendis! Velit, magni aspernatur maiores dicta voluptatum temporibus
        impedit! Inventore, sequi quis!
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        tempora obcaecati provident quae repudiandae nesciunt numquam fuga quam
        perferendis! Velit, magni aspernatur maiores dicta voluptatum temporibus
        impedit! Inventore, sequi quis!
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        tempora obcaecati provident quae repudiandae nesciunt numquam fuga quam
        perferendis! Velit, magni aspernatur maiores dicta voluptatum temporibus
        impedit! Inventore, sequi quis!
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        tempora obcaecati provident quae repudiandae nesciunt numquam fuga quam
        perferendis! Velit, magni aspernatur maiores dicta voluptatum temporibus
        impedit! Inventore, sequi quis!
        <br />
        END ipsum dolor sit amet consectetur adipisicing elit. Assumenda tempora
        obcaecati provident quae repudiandae nesciunt numquam fuga quam
        perferendis! Velit, magni aspernatur maiores dicta voluptatum temporibus
        impedit! Inventore, sequi quis!
        <br />
      </Box>
    </Flex>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
