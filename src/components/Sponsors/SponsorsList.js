import React from "react";
import {
  AspectRatio,
  Heading,
  Image,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
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
          childMdx: { frontmatter: { sponsor: { ne: "disabled" } } }
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

  const sponsors = data.allFile.nodes.filter(
    (node) => !!node.childMdx?.frontmatter?.sponsor
  );

  const year = data?.site?.siteMetadata?.currentYear;

  return (
    <Stack spacing={8} {...props}>
      <Heading as="h2" size="md">
        Sponsors {year} : {sponsors.length} sponsor
        {sponsors.length > 1 ? "s" : ""}.
      </Heading>
      <SimpleGrid columns={{ base: 3, sm: 4, lg: 5 }} gap={4}>
        {sponsors.map(({ childMdx: { frontmatter } }) => (
          <Card
            key={slugify(frontmatter.name)}
            p={0}
            isLink
            as="a"
            href={frontmatter.link}
          >
            <AspectRatio ratio={320 / 190}>
              <Image
                src={frontmatter.logo?.publicURL}
                alt={frontmatter.name}
                objectFit="fit"
              />
            </AspectRatio>
          </Card>
        ))}
      </SimpleGrid>
    </Stack>
  );
};
