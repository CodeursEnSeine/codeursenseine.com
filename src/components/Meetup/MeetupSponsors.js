import React from "react"
import { Grid, Heading, Stack } from "@chakra-ui/core"
import { Card } from "../Card"
import { useStaticQuery, graphql } from "gatsby"

export const MeetupSponsors = () => {
  const data = useStaticQuery(graphql`
    query Sponsors {
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
  `)

  return (
    <Stack spacing={6}>
      <Heading as="h2" size="lg" fontWeight="normal" mb={8}>
        Sponsors meetups
      </Heading>
      <Grid templateColumns="1fr 1fr" gap={4}>
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
  )
}
