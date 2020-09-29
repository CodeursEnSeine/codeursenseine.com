import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  Stack,
  SimpleGrid,
} from "@chakra-ui/core"
import dayjs from "dayjs"
import "dayjs/locale/fr"
import { ConferenceCard } from "components/Programme/_partials/ConferenceCard"

export const Programme = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "conferences" }
        }
      ) {
        nodes {
          childMdx {
            frontmatter {
              title,
              eventDate,
              startHour,
              endHour,
              speaker,
              isKeynote,
              description,
            }
          }
        }
      }
    }
  `)

  dayjs.locale('fr');

  return (
    <Stack mt={5}>
      <SimpleGrid columns={[1, 1, 1, 2, 2]}>
        {data.allFile.nodes.map((conference, index) => (
          <ConferenceCard
            key={`conference-${index}`}
            conference={conference}
          />
        ))}
      </SimpleGrid>
    </Stack>
  )
}
