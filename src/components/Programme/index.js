import React, { Fragment } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Grid, GridItem } from "@chakra-ui/react";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import { ConferenceCard } from "components/Programme/_partials/ConferenceCard";
import { PauseCard } from "./_partials/PauseCard";
import { PleniereCard } from "./_partials/PleniereCard";
import { KeynoteCard } from "./_partials/KeynoteCard";

export const Programme = () => {
  const data = useStaticQuery(graphql`
    query {
      conferences: allFile(
        filter: { sourceInstanceName: { eq: "conferences" } }
        sort: {
          order: ASC
          fields: [
            childMdx___frontmatter___start
            childMdx___frontmatter___room
          ]
        }
      ) {
        nodes {
          id
          childMdx {
            frontmatter {
              type
              title
              start
              end
              speakers
              room
              columns
              rows
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

  const ROOM_GRID = {
    A: { base: 1, md: 1 },
    B: { base: 1, md: 2 },
    C: { base: 1, md: 3 },
    D: { base: 1, md: 4 },
  };

  return (
    <Grid
      templateColumns={{
        base: "1fr",
        md: "repeat(4, 1fr)",
      }}
      gap="4"
    >
      {conferences.nodes.map((conference) => (
        <Fragment key={conference?.id}>
          {conference?.childMdx?.frontmatter?.type === "pause" && (
            <GridItem colSpan={{ base: 1, md: 4 }}>
              <PauseCard title={conference?.childMdx?.frontmatter?.title} />
            </GridItem>
          )}
          {conference?.childMdx?.frontmatter?.type === "pleniere" && (
            <GridItem colSpan={{ base: 1, md: 4 }}>
              <PleniereCard
                title={conference?.childMdx?.frontmatter?.title}
                room={conference?.childMdx?.frontmatter?.room}
              />
            </GridItem>
          )}
          {conference?.childMdx?.frontmatter?.type === "keynote" && (
            <GridItem
              colSpan={{
                base: 1,
                md: conference?.childMdx?.frontmatter?.columns ?? 4,
              }}
            >
              <KeynoteCard />
            </GridItem>
          )}
          {conference?.childMdx?.frontmatter?.type === "conference" && (
            <GridItem
              colSpan="1"
              colStart={ROOM_GRID[conference?.childMdx?.frontmatter?.room]}
            >
              <ConferenceCard
                conference={conference}
                speakers={speakers?.nodes.filter((speaker) =>
                  conference?.childMdx?.frontmatter?.speakers?.includes(
                    speaker?.childMdx?.frontmatter?.slug
                  )
                )}
              />
            </GridItem>
          )}
          {conference?.childMdx?.frontmatter?.type === "quicky" && (
            <GridItem
              colSpan="1"
              colStart={ROOM_GRID[conference?.childMdx?.frontmatter?.room]}
            >
              <ConferenceCard
                conference={conference}
                speakers={speakers?.nodes.filter((speaker) =>
                  conference?.childMdx?.frontmatter?.speakers?.includes(
                    speaker?.childMdx?.frontmatter?.slug
                  )
                )}
              />
            </GridItem>
          )}
          {conference?.childMdx?.frontmatter?.type === "atelier" && (
            <GridItem
              colStart={ROOM_GRID[conference?.childMdx?.frontmatter?.room]}
              colSpan="1"
              rowSpan={conference?.childMdx?.frontmatter?.rows}
            >
              <ConferenceCard
                conference={conference}
                speakers={speakers?.nodes.filter((speaker) =>
                  conference?.childMdx?.frontmatter?.speakers?.includes(
                    speaker?.childMdx?.frontmatter?.slug
                  )
                )}
              />
            </GridItem>
          )}
        </Fragment>
      ))}
    </Grid>
  );
};
