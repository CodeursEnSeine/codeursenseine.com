import React from "react"
import { Grid, Heading, Stack, Image, Flex } from "@chakra-ui/core"
import { Card } from "../Card"
import { useAssociations } from "../../hooks/queries/useAssociations"

export const MeetupAssociations = (props) => {
  const associationsData = useAssociations()

  return (
    <Stack spacing={6} {...props}>
      <Heading as="h2" size="lg" fontWeight="normal" mb={8}>
        Associations
      </Heading>
      <Grid templateColumns="1fr 1fr" gap={4}>
        {associationsData.allFile.nodes.map(({ childMdx: association }) => (
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
  )
}
