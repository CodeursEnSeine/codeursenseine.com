import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Stack, SimpleGrid } from "@chakra-ui/react";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import { ConferenceCard } from "components/Programme/_partials/ConferenceCard";

export const Programme = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { sourceInstanceName: { eq: "conferences" } }
        sort: { order: ASC, fields: childMdx___frontmatter___eventDate }
      ) {
        nodes {
          childMdx {
            frontmatter {
              title
              eventDate
              startHour
              endHour
              speaker
              isKeynote
              meetupLink
            }
            body
          }
        }
      }
    }
  `);

  dayjs.locale("fr");

  const conferences = data.allFile.nodes.sort(
    (a, b) =>
      new Date(a.childMdx.frontmatter.eventDate) -
      new Date(b.childMdx.frontmatter.eventDate)
  );

  return (
    <Stack mt={5}>
      <SimpleGrid columns={[1, 1, 1, 1, 2]}>
        {conferences.map((conference, index) => (
          <ConferenceCard key={`conference-${index}`} conference={conference} />
        ))}
      </SimpleGrid>
    </Stack>
  );
};
