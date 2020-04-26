import React from "react"
import { graphql, Link } from "gatsby"
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/core"
import slugify from "slugify"
import Layout from "../components/layout"

const generateMeetupLink = (meetup) => {
  return `/meetups/events/${slugify(meetup.frontmatter.slug, {
    strict: true,
    lower: true,
  })}`
}

const Meetups = ({ data }) => {
  return (
    <Layout theme="meetup">
      <Flex justify="space-between">
        <Box>
          <Text>Retrouvez Codeurs en Seine toute l'année !</Text>
          <Text as="strong">Meetups Codeurs en Seine</Text>
        </Box>
        <Box>
          <Button
            as={Link}
            to="/meetups/sponsors"
            variant="outline"
            variantColor="brand"
          >
            Devenir sponsor
          </Button>
        </Box>
      </Flex>
      <Heading as="h1">Tous les meetups</Heading>
      {data.allMdx.nodes.map((meetup) => (
        <Box as={Link} to={generateMeetupLink(meetup)}>
          <Heading as="h3" color="brand.700" size="lg">
            {meetup.frontmatter.title}
          </Heading>
          {meetup.frontmatter.excerpt !== "" && (
            <Text>{meetup.frontmatter.excerpt}</Text>
          )}
          <Text>
            Meetup le {meetup.frontmatter.meetup_date} de{" "}
            {meetup.frontmatter.meetup_start_time} à{" "}
            {meetup.frontmatter.meetup_end_time}
          </Text>
          <Text>{meetup.frontmatter.meetup_location}</Text>
        </Box>
      ))}
    </Layout>
  )
}

export default Meetups

export const meetupsPageQuery = graphql`
  query {
    allMdx(
      sort: { fields: frontmatter___meetup_date, order: DESC }
      filter: {
        frontmatter: { published: { ne: false }, meetup_date: { ne: null } }
      }
    ) {
      nodes {
        frontmatter {
          title
          excerpt
          meetup_location
          meetup_date(formatString: "dddd DD MMMM YYYY", locale: "fr-FR")
          meetup_end_time
          meetup_start_time
          slug
        }
        parent {
          ... on File {
            name
          }
        }
      }
    }
  }
`
