import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"
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
  const { pathname } = useLocation()

  const data = useStaticQuery(graphql`
    query NavPagesQuery {
      site {
        siteMetadata {
          currentYear
        }
      }
      allMdx(
        filter: { frontmatter: { navigation: { eq: true } } }
        sort: { fields: frontmatter___order }
      ) {
        nodes {
          frontmatter {
            title
          }
          parent {
            ... on File {
              id
              name
              relativeDirectory
            }
          }
        }
      }
    }
  `)

  const groupedPages = data.allMdx.nodes.reduce((previousValues, current) => {
    if (!previousValues[current.parent.relativeDirectory]) {
      previousValues[current.parent.relativeDirectory] = []
    }

    previousValues[current.parent.relativeDirectory].push(current)

    return previousValues
  }, {})

  const currentYear = data.site.siteMetadata.currentYear

  return (
    <Flex
      direction="column"
      alignItems={{ [breakpoint]: "flex-end" }}
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
      <Flex direction="column" flexGrow={1}>
        <IconButton
          variant="unstyled"
          aria-label="Menu"
          d={{ base: "inline-flex", [breakpoint]: "none" }}
          icon={FiX}
          size="lg"
          position="absolute"
          top="0"
          right="0"
          onClick={() => onNavClose()}
        />
        <Stack px="2">
          <Flex
            px="2"
            pt="4vh"
            pb="2vh"
            align="center"
            justify={{ base: "center", [breakpoint]: "flex-end" }}
          >
            <Link to={`/${currentYear}`}>
              <Logo w={{ base: "8rem", [breakpoint]: "12rem" }} />
            </Link>
          </Flex>
          <Stack>
            <NavLink isMain as={Link} to={`/${currentYear}`}>
              Édition {currentYear}
            </NavLink>
            {pathname.startsWith(`/${currentYear}`) && (
              <>
                <NavLink as={Link} to={`/${currentYear}/organisateurs`}>
                  Organisateurs
                </NavLink>
                <NavLink
                  isActive={true}
                  as={Link}
                  to={`/${currentYear}/sponsors`}
                >
                  Sponsors
                </NavLink>
                {groupedPages["ces"] &&
                  groupedPages["ces"].map((page) => (
                    <NavLink
                      key={page.parent.name}
                      as={Link}
                      to={`/${currentYear}/${page.parent.name}`}
                    >
                      {page.frontmatter.title}
                    </NavLink>
                  ))}
              </>
            )}
          </Stack>
          <Stack spacing="0">
            <NavLink isMain as={Link} to="/meetups">
              Meetups
            </NavLink>
            {pathname.startsWith("/meetups") && (
              <>
                <NavLink as={Link} to="/meetups/sponsors">
                  Sponsors
                </NavLink>
                {groupedPages["meetups"] &&
                  groupedPages["meetups"].map((page) => (
                    <NavLink
                      key={page.name}
                      as={Link}
                      to={`/meetups/${page.name}`}
                    >
                      {page.childMdx.frontmatter.title}
                    </NavLink>
                  ))}
              </>
            )}
          </Stack>
          <Stack>
            <NavLink isMain as={Link} to="/devoxx4kids" title="Devoxx4Kids">
              Devoxx4Kids
            </NavLink>
          </Stack>
        </Stack>
        <Stack mt="auto" p="4" mb="2">
          <NavSocial />
          <NavPreviousYears />
        </Stack>
      </Flex>
    </Flex>
  )
}
