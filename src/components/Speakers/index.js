import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Stack, SimpleGrid, Box } from "@chakra-ui/react";
import { SpeakerCard } from "components/Speakers/_partials/SpeakerCard";

export const Speakers = () => {
  const data = useStaticQuery(graphql`
    query {
      conferences: allFile(
        filter: { sourceInstanceName: { eq: "conferences" } }
      ) {
        nodes {
          childMdx {
            frontmatter {
              speakers
            }
          }
        }
      }
      speakers: allFile(
        filter: { sourceInstanceName: { eq: "speakers" } }
        sort: { fields: childMdx___frontmatter___slug }
      ) {
        nodes {
          id
          childMdx {
            frontmatter {
              slug
              name
              image {
                childImageSharp {
                  gatsbyImageData(width: 200, placeholder: BLURRED)
                }
              }
              company
              twitterLink
              githubLink
            }
            body
          }
        }
      }
    }
  `);

  const speakers = data.speakers.nodes.filter(
    (speaker) =>
      speaker.childMdx &&
      data.conferences.nodes.some((conference) =>
        conference.childMdx?.frontmatter?.speakers?.includes(
          speaker.childMdx?.frontmatter?.slug
        )
      )
  );

  return (
    <Box w="full" sx={{ columnCount: { base: 1, md: 2 }, columnGap: "4" }}>
      {speakers.map((speaker) => (
        <SpeakerCard mb="4" key={speaker.id} speaker={speaker} />
      ))}
    </Box>
  );
};
