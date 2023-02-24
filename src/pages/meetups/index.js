import React from "react";
import parse from "html-react-parser";
import { graphql, Link } from "gatsby";
import { Box, Grid, Stack, Heading, Image, Flex, Text } from "@chakra-ui/react";
import Layout from "components/layout";

import { Card } from "components/Card";
import Seo from "components/seo";
import { generateMeetupLink } from "utils/generateMeetupLink";
import RedirectCodeursEnSeine from "components/RedirectCodeursEnSeine";

const Meetups = ({ data }) => {
  const meetups = data.meetups.nodes.filter(
    (meetup) =>
      meetup.childMdx &&
      meetup.childMdx.frontmatter &&
      meetup.childMdx.frontmatter.meetup_date !== null
  );

  if (process.env.GATSBY_ARCHIVE) {
    return <RedirectCodeursEnSeine path="/meetups" />;
  }

  return (
    <Layout theme="meetups">
      <Seo
        title="Meetups"
        meta={[
          {
            property: `og:image`,
            content: `${process.env.GATSBY_ORIGIN}/images/meetups/social.jpg`,
          },
        ]}
      />
      <Grid templateColumns={{ base: "1fr", md: "2.5fr 1fr" }} gap={8}>
        <Box>
          <Stack spacing={6}>
            <Heading as="h1" mb={6}>
              Tous les meetups
            </Heading>
            {meetups.map(({ childMdx: meetup, name }) => (
              <Card key={name} as={Link} to={generateMeetupLink(meetup)} isLink>
                <Stack>
                  <Box>
                    <Heading
                      as="h3"
                      color="brand.700"
                      size="lg"
                      fontWeight="normal"
                    >
                      {parse(meetup.frontmatter.title)}
                    </Heading>
                    {meetup.frontmatter.excerpt !== "" && (
                      <Text>{meetup.frontmatter.excerpt}</Text>
                    )}
                  </Box>
                  <Box>
                    <Text fontWeight="bold">
                      Meetup le {meetup.frontmatter.meetup_date} de{" "}
                      {meetup.frontmatter.meetup_start_time} à{" "}
                      {meetup.frontmatter.meetup_end_time}
                    </Text>
                    <Text color="gray.500">
                      {meetup.frontmatter.meetup_location}
                    </Text>
                  </Box>
                </Stack>
              </Card>
            ))}
          </Stack>
        </Box>
        <Stack spacing={10}>
          <Stack spacing={6}>
            <Heading as="h2" size="lg" fontWeight="normal" mb={8}>
              Sponsors meetups
            </Heading>
            <a href="https://www.devoxx.fr" target="_blank" style="margin-left: 5px;"><img 
                    src="/images/meetups/devoxx-2023.jpg" 
                    alt="devoxx france 2023, 11ème édition, du 12 au 14 avril, illustration de robot steam punk"
                  /></a>
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

export const query = graphql`
  {
    meetups: allFile(
      sort: { fields: name, order: DESC }
      filter: {
        childMdx: { frontmatter: { published: { ne: false } } }
        sourceInstanceName: { eq: "meetups" }
      }
    ) {
      nodes {
        childMdx {
          frontmatter {
            title
            excerpt
            meetup_location
            meetup_date(formatString: "dddd DD MMMM YYYY", locale: "fr-FR")
            meetup_end_time
            meetup_start_time
            slug
          }
        }
        name
      }
    }
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
`;

export default Meetups;
