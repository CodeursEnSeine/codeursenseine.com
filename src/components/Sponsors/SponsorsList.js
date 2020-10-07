import React from "react";
import {
  AspectRatioBox,
  Heading,
  Image,
  SimpleGrid,
  Stack,
} from "@chakra-ui/core";
import { graphql, useStaticQuery } from "gatsby";
import { Card } from "components/Card";
import slugify from "slugify";

export const SponsorsList = ({ ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          currentYear
        }
      }
      allFile(
        filter: {
          sourceInstanceName: { eq: "sponsors" }
          childMdx: { frontmatter: { sponsor: { ne: null } } }
        }
        sort: { fields: childMdx___frontmatter___name }
      ) {
        nodes {
          childMdx {
            frontmatter {
              name
              link
              sponsor
              logo {
                publicURL
              }
            }
          }
        }
      }
    }
  `);

  const meetupOnlineSponsors = data.allFile.nodes.filter(
    (node) => node.childMdx.frontmatter.sponsor === "Meetup Online"
  );

  const year = data?.site?.siteMetadata?.currentYear;

  return (
    <Stack spacing={8} {...props}>
      <Heading as="h2" size="md">
        Sponsors {year} : {meetupOnlineSponsors.length} sponsors.
      </Heading>
      <SimpleGrid columns={{ base: 3, sm: 4, lg: 5 }} gap={4}>
        {meetupOnlineSponsors.map(({ childMdx: { frontmatter } }) => (
          <Card
            key={slugify(frontmatter.name)}
            p={0}
            isLink
            as="a"
            href={frontmatter.link}
          >
            <AspectRatioBox ratio={320 / 190}>
              <Image
                src={frontmatter.logo.publicURL}
                alt={frontmatter.name}
                objectFit="fit"
              />
            </AspectRatioBox>
          </Card>
        ))}
      </SimpleGrid>
    </Stack>
  );
};
