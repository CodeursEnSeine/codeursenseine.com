import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Stack } from "@chakra-ui/react";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import { ConferenceCard } from "components/Programme/_partials/ConferenceCard";

export const Programme = () => {
  const data = useStaticQuery(graphql`
    query {
      conferences: allFile(
        filter: { sourceInstanceName: { eq: "conferences" } }
        sort: { order: ASC, fields: childMdx___frontmatter___start }
      ) {
        nodes {
          childMdx {
            frontmatter {
              type
              title
              start
              end
              speakers
              room
            }
            body
          }
        }
      }

      speakers: allFile(
        filter: { sourceInstanceName: { eq: "speakers" } }
        sort: { fields: childMdx___frontmatter___name }
      ) {
        nodes {
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

  dayjs.locale("fr");

  const { conferences, speakers } = data;

  const conferencesData = conferences.nodes.sort(
    (a, b) =>
      new Date(a.childMdx.frontmatter.eventDate) -
      new Date(b.childMdx.frontmatter.eventDate)
  );

  return (
    <Stack mt={5}>
      {conferencesData.map((conference, index) => (
        <ConferenceCard
          key={`conference-${index}`}
          conference={conference}
          speakers={speakers?.nodes.filter((speaker) =>
            conference?.childMdx?.frontmatter?.speakers?.includes(
              speaker?.childMdx?.frontmatter?.slug
            )
          )}
        />
      ))}
    </Stack>
  );
};
