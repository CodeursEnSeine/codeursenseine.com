import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Stack } from "@chakra-ui/react";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import { ConferenceCard } from "components/Programme/_partials/ConferenceCard";

export const Programme = () => {
  const data = useStaticQuery(graphql`
    query {
      conferences:allFile(
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
              speaker2
              isKeynote
              meetupLink
            }
            body
          }
        }
      }

      speakers:allFile(
        filter: { sourceInstanceName: { eq: "speakers" } }
        sort: { fields: childMdx___frontmatter___name }
      ) {
        nodes {
          childMdx {
            frontmatter {
              slug
              name
              image {
                publicURL
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
          speaker={speakers.nodes.find(speaker => speaker?.childMdx?.frontmatter?.slug === conference?.childMdx?.frontmatter?.speaker)}
          speaker2={speakers.nodes.find(speaker => speaker?.childMdx?.frontmatter?.slug === conference?.childMdx?.frontmatter?.speaker2)}
        />
      ))}
    </Stack>
  );
};
