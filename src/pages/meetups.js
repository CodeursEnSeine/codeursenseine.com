import React from "react"
import { graphql, Link } from "gatsby"
import { Box, Button, Flex, Grid, Heading, Stack, Text } from "@chakra-ui/core"
import slugify from "slugify"
import Layout from "../components/layout"
import { Card } from "../components/Card"
import SEO from "../components/seo"

const generateMeetupLink = (meetup) => {
  return `/meetups/events/${slugify(meetup.frontmatter.slug, {
    strict: true,
    lower: true,
  })}`
}

const Meetups = ({ data }) => {
  return (
    <Layout theme="meetup">
      <SEO title="Meetups" />
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
      <Grid templateColumns="2fr 1fr" gap={6}>
        <Stack spacing={6}>
          <Heading as="h1" fontWeight="normal" mb={6}>
            Tous les meetups
          </Heading>
          {data.allMdx.nodes.map((meetup) => (
            <Card
              key={meetup.parent.name}
              as={Link}
              to={generateMeetupLink(meetup)}
              isLink
            >
              <Stack>
                <Box>
                  <Heading
                    as="h3"
                    color="brand.700"
                    size="lg"
                    fontWeight="normal"
                  >
                    {meetup.frontmatter.title}
                  </Heading>
                  {meetup.frontmatter.excerpt !== "" && (
                    <Text>{meetup.frontmatter.excerpt}</Text>
                  )}
                </Box>
                <Box>
                  <Text fontWeight="bold">
                    Meetup le {meetup.frontmatter.meetup_date} de{" "}
                    {meetup.frontmatter.meetup_start_time} à{" "}
                    {meetup.frontmatter.meetup_end_time}
                  </Text>
                  <Text color="gray.500">
                    {meetup.frontmatter.meetup_location}
                  </Text>
                </Box>
              </Stack>
            </Card>
          ))}
        </Stack>
        <Stack spacing={6}>
          <Heading as="h2" fontWeight="normal" mb={6}>
            Sponsors meetups
          </Heading>
          <Grid templateColumns="1fr 1fr" gap={2}>
            {data.allFile.nodes.map(({ childMdx: sponsor }) => (
              <Card
                isLink
                as="a"
                href={sponsor.frontmatter.link}
                title={sponsor.frontmatter.name}
                key={sponsor.frontmatter.name}
                p={0}
              >
                <img
                  src={sponsor.frontmatter.logo.publicURL}
                  alt={sponsor.frontmatter.name}
                />
              </Card>
            ))}
          </Grid>
        </Stack>
      </Grid>
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
    allFile(
      filter: {
        sourceInstanceName: { eq: "sponsors" }
        childMdx: { frontmatter: { isMeetupSponsor: { eq: true } } }
      }
      sort: { order: ASC, fields: childMdx___frontmatter___name }
    ) {
      nodes {
        childMdx {
          frontmatter {
            name
            link
            logo {
              publicURL
            }
          }
        }
      }
    }
  }
`
