import React from "react"
import { Grid, Heading, Stack, Image } from "@chakra-ui/core"
import { Card } from "../Card"
import { useSponsors } from "../../hooks/queries/useSponsors"

export const MeetupSponsors = (props) => {
  const sponsorsData = useSponsors()

  return (
    <Stack spacing={6} {...props}>
      <Heading as="h2" size="lg" fontWeight="normal" mb={8}>
        Sponsors meetups
      </Heading>
      <Grid templateColumns="1fr 1fr" gap={4}>
        {sponsorsData.allFile.nodes.map(({ childMdx: sponsor }) => (
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
  )
}
