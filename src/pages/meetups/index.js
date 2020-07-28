import React from "react"
import { graphql, Link } from "gatsby"
import { Box, Grid, Stack, Heading, Image, Flex, Text } from "@chakra-ui/core"
import Layout from "components/layout"

import { Card } from "components/Card"
import SEO from "components/seo"
import { generateMeetupLink } from "../../utils/generateMeetupLink"

const Meetups = ({ data }) => {
  console.log(data.meetups.nodes)

  const meetups = data.meetups.nodes.filter(
    (meetup) =>
      meetup.childMdx &&
      meetup.childMdx.frontmatter &&
      meetup.childMdx.frontmatter.meetup_date !== null
  )

  return (
    <Layout theme="meetups">
      <SEO title="Meetups" />
      <Grid templateColumns={{ base: "1fr", md: "2.5fr 1fr" }} gap={8}>
        <Box>
          <Stack spacing={6}>
            <Heading as="h1" mb={6}>
              Tous les meetups
            </Heading>
            {meetups.map(({ childMdx: meetup }) => (
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
        </Box>
        <Stack spacing={10}>
          <Stack spacing={6}>
            <Heading as="h2" size="lg" fontWeight="normal" mb={8}>
              Sponsors meetups
            </Heading>
            <Grid templateColumns="1fr 1fr" gap={4}>
              {data.sponsors.nodes.map(({ childMdx: sponsor }) => (
                <Card
                  isLink
                  as="a"
                  href={sponsor.frontmatter.link}
                  title={sponsor.frontmatter.name}
                  key={sponsor.frontmatter.name}
                  p={0}
                >
                  <Image
                    src={sponsor.frontmatter.logo.publicURL}
                    alt={sponsor.frontmatter.name}
                  />
                </Card>
              ))}
            </Grid>
          </Stack>
          <Stack spacing={6}>
            <Heading as="h2" size="lg" fontWeight="normal" mb={8}>
              Associations
            </Heading>
            <Grid templateColumns="1fr 1fr" gap={4}>
              {data.associations.nodes.map(({ childMdx: association }) => (
                <Card
                  isLink
                  as="a"
                  href={association.frontmatter.link}
                  title={association.frontmatter.name}
                  key={association.frontmatter.name}
                  p={0}
                >
                  <Flex align="center" justify="center">
                    <Image
                      src={association.frontmatter.logo.publicURL}
                      alt={association.frontmatter.name}
                    />
                  </Flex>
                </Card>
              ))}
            </Grid>
          </Stack>
        </Stack>
      </Grid>
    </Layout>
  )
}

export const query = graphql`
  {
    meetups: allFile(
      sort: { fields: childMdx___frontmatter___meetup_date, order: DESC }
      filter: {
        childMdx: {
          frontmatter: { published: { ne: false }, meetup_date: { ne: null } }
        }
        sourceInstanceName: { eq: "meetups" }
      }
    ) {
      nodes {
        childMdx {
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
    sponsors: allFile(
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
    associations: allFile(
      filter: {
        sourceInstanceName: { eq: "associations" }
        internal: {}
        extension: { eq: "mdx" }
      }
      sort: { fields: childMdx___frontmatter___name }
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

export default Meetups
