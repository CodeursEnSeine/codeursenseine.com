import React from "react"
import { graphql, Link } from "gatsby"
import { Box, Heading, Stack, Text } from "@chakra-ui/core"
import slugify from "slugify"
import { Card } from "../../components/Card"
import { MeetupLayout } from "../../components/Meetup"

const generateMeetupLink = (meetup) => {
  return `/meetups/events/${slugify(meetup.frontmatter.slug, {
    strict: true,
    lower: true,
  })}`
}

const Meetups = ({ data }) => {
  return (
    <MeetupLayout title="Meetups">
      <Stack spacing={6}>
        <Heading as="h1" fontWeight="normal" mb={6}>
          Tous les meetups
        </Heading>
        {data.allFile.nodes.map(({ childMdx: meetup }) => (
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
    </MeetupLayout>
  )
}

export default Meetups

export const query = graphql`
  query Meetups {
    allFile(
      sort: { fields: childMdx___frontmatter___meetup_date, order: DESC }
      filter: {
        sourceInstanceName: { eq: "meetups" }
        childMdx: {
          frontmatter: { published: { ne: false }, meetup_date: { ne: null } }
        }
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
  }
`
