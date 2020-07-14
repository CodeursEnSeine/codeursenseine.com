import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { IconButton, useTheme, Stack, Flex } from "@chakra-ui/core"
import { FiX } from "react-icons/fi"
import { Logo } from "../Logo"
import { NavSocial, NavPreviousYears, NavLink } from "./"

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
      <Stack px="2">
        <Flex p="2" align="center" justify="center">
          <Link to={`/${data.site.siteMetadata.currentYear}`}>
            <Logo w="10rem" h="5.5rem" />
          </Link>
        </Flex>
        <Stack>
          <NavLink
            isMain
            as={Link}
            to={`/${data.site.siteMetadata.currentYear}`}
          >
            Édition {data.site.siteMetadata.currentYear}
          </NavLink>
          <NavLink
            as={Link}
            to={`/${data.site.siteMetadata.currentYear}/organisateurs`}
          >
            Organisateurs
          </NavLink>
          <NavLink
            as={Link}
            to={`/${data.site.siteMetadata.currentYear}/sponsors`}
          >
            Sponsors
          </NavLink>
          <NavLink
            as={Link}
            to={`/${data.site.siteMetadata.currentYear}/code-of-conduct`}
          >
            Code of Conduct
          </NavLink>
        </Stack>
        <Stack spacing="0">
          <NavLink isMain as={Link} to="/meetups">
            Meetups
          </NavLink>
          <NavLink as={Link} to="/meetups/sponsors">
            Sponsors
          </NavLink>
        </Stack>
        <Stack>
          <NavLink isMain as={Link} to="/devoxx4kids" title="Devoxx4Kids">
            Devoxx4Kids
          </NavLink>
        </Stack>
      </Stack>
      <Stack mt="auto" p="2" mb="2">
        <NavSocial />
        <NavPreviousYears />
      </Stack>
    </Flex>
  )
}
