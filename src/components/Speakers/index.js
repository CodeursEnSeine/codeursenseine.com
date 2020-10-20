import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Stack, SimpleGrid } from "@chakra-ui/core";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import { SpeakerCard } from "components/Speakers/_partials/SpeakerCard";

export const Speakers = () => {
  const speakers = useStaticQuery(graphql`
    query {
      allFile(
        filter: { sourceInstanceName: { eq: "speakers" } }
      ) {
        nodes {
          childMdx {
            frontmatter {
              name
              image {
                publicURL
              }
              company
              bio
              References
            }
            body
          }
        }
      }
    }
  `);

  dayjs.locale("fr");

  return (
    <Stack mt={5}>
      <SimpleGrid columns={[1, null, null, 2]}>
        {speakers.map((speaker, index) => (
          <SpeakerCard key={`speaker-${index}`} speaker={speaker} />
        ))}
      </SimpleGrid>
    </Stack>
  );
};
