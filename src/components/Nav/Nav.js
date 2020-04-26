import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { IconButton, useTheme, Stack, Flex } from "@chakra-ui/core"
import { FiX } from "react-icons/fi"
import { Logo } from "../Logo"
import { NavSocial, NavPreviousYears } from "./"

export const Nav = ({
  breakpoint,
  isOpen,
  onNavClose = () => {},
  ...props
}) => {
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
      direction="column"
      background={theme.gradients.brand}
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
      <IconButton
        variant="unstyled"
        aria-label="Menu"
        d={{ base: "inline-flex", [breakpoint]: "none" }}
        icon={FiX}
        position="absolute"
        top="0"
        right="0"
        onClick={() => onNavClose()}
      />
      <Stack>
        <Flex p="2" align="center" justify="center">
          <Logo w="10rem" h="5.5rem" />
        </Flex>
        <Link to={`${data.site.siteMetadata.currentYear}`}>
          Edition {data.site.siteMetadata.currentYear}
        </Link>
        <Link to="/meetups">Meetups</Link>
      </Stack>
      <Stack mt="auto" p="2" mb="2">
        <NavSocial />
        <NavPreviousYears />
      </Stack>
    </Flex>
  )
}
