import React from "react";
import { AspectRatio, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import { graphql, useStaticQuery } from "gatsby";
import { Card } from "components/Card";
import slugify from "slugify";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

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
                childImageSharp {
                  gatsbyImageData(
                    width: 320
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
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
        {sponsors.map(({ childMdx: { frontmatter } }) => {
          const image = getImage(frontmatter.logo);

          return (
            <Card
              key={slugify(frontmatter.name)}
              p={0}
              isLink
              as="a"
              href={frontmatter.link}
            >
              <AspectRatio ratio={320 / 190}>
                <GatsbyImage image={image} alt={frontmatter.name} />
              </AspectRatio>
            </Card>
          );
        })}
      </SimpleGrid>
    </Stack>
  );
};
