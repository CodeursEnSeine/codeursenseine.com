import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Box, Grid, Stack, Heading, Image, Flex } from "@chakra-ui/react";
import SEO from "components/seo";
import Layout from "components/layout";
import { Card } from "components/Card";

const MeetupLayout = ({ children, title }) => {
  const data = useStaticQuery(graphql`
    {
      sponsors: allFile(
        filter: {
          sourceInstanceName: { eq: "sponsors" }
          childMdx: { frontmatter: { isMeetupSponsor: { eq: true } } }
        }
        sort: { order: ASC, fields: childMdx___frontmatter___name }
      ) {
        nodes {
          childMdx {
            frontmatter {
              name
              link
              logo {
                publicURL
              }
            }
          }
        }
      }
      associations: allFile(
        filter: {
          sourceInstanceName: { eq: "associations" }
          internal: {}
          extension: { eq: "mdx" }
        }
        sort: { fields: childMdx___frontmatter___name }
      ) {
        nodes {
          childMdx {
            frontmatter {
              name
              link
              logo {
                publicURL
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Layout theme="meetups">
      <SEO title={title} />
      <Grid templateColumns={{ base: "1fr", md: "2.5fr 1fr" }} gap={8}>
        <Box>{children}</Box>
        <Stack spacing={10}>
          <Stack spacing={6}>
            <Heading as="h2" size="lg" fontWeight="normal" mb={8}>
              Sponsors meetups
            </Heading>
            <Grid templateColumns="1fr 1fr" gap={4}>
              {data.sponsors.nodes.map(({ childMdx: sponsor }) => (
                <Card
                  isLink
                  as="a"
                  href={sponsor.frontmatter.link}
                  title={sponsor.frontmatter.name}
                  key={sponsor.frontmatter.name}
                  p={0}
                >
                  <Image
                    src={sponsor.frontmatter.logo.publicURL}
                    alt={sponsor.frontmatter.name}
                  />
                </Card>
              ))}
            </Grid>
          </Stack>
          <Stack spacing={6}>
            <Heading as="h2" size="lg" fontWeight="normal" mb={8}>
              Associations
            </Heading>
            <Grid templateColumns="1fr 1fr" gap={4}>
              {data.associations.nodes.map(({ childMdx: association }) => (
                <Card
                  isLink
                  as="a"
                  href={association.frontmatter.link}
                  title={association.frontmatter.name}
                  key={association.frontmatter.name}
                  p={0}
                >
                  <Flex align="center" justify="center">
                    <Image
                      src={association.frontmatter.logo.publicURL}
                      alt={association.frontmatter.name}
                    />
                  </Flex>
                </Card>
              ))}
            </Grid>
          </Stack>
        </Stack>
      </Grid>
    </Layout>
  );
};

export default MeetupLayout;
