import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import {
  Button,
  Grid,
  Heading,
  Text,
  Stack,
  Box,
  Divider,
  SimpleGrid,
} from "@chakra-ui/react";
import Layout from "components/layout";
import Seo from "components/seo";

import { A } from "components/A";
import { ButtonGroup } from "components/ButtonGroup";
import { OGImage } from "components/OG";
import { SponsorCard } from "components/Sponsors";

const SponsorsPage = ({ pageContext }) => {
  const { sponsors } = pageContext;

  const data = useStaticQuery(graphql`
    {
      placeholderImage: file(
        relativePath: { eq: "ces/dossier-sponsoring.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 250, quality: 80, layout: CONSTRAINED)
        }
      }
    }
  `);

  return (
    <Layout theme="ces">
      <OGImage path="/images/ces/social.jpg" />
      <Seo title="Sponsors" />
      <Heading as="h1" mb={8}>
        Devenir Sponsor
      </Heading>

      <Grid templateColumns={["1fr", "1fr", "1fr 2fr"]} gap={8} mb={8}>
        <Box maxWidth="250px">
          <A
            d="block"
            boxShadow="brand"
            overflow="hidden"
            borderRadius="md"
            href="https://drive.google.com/file/d/1zclVxBxeUZFUxX2kxVXCoAW8CnFr3p40/view?usp=sharing"
            title="Dossier de sponsoring"
            target="_blank"
          >
            <GatsbyImage
              image={data.placeholderImage.childImageSharp.gatsbyImageData}
              alt="Première page du dossier de sponsoring"
            />
          </A>
        </Box>
        <Box>
          <Stack spacing={8}>
            <Text>
              Codeurs en Seine est à la recherche de sponsors pour proposer un
              événement d'une qualité toujours meilleure.
            </Text>
            <Text>
              Les partenaires des éditions précédentes ont confirmé la
              visibilité offerte par ce sponsoring, surtout dans le cadre d'une
              politique de recrutement.
            </Text>
            <Text>
              Si vous souhaitez soutenir l'événement, téléchargez{" "}
              <A
                href="https://drive.google.com/file/d/1zclVxBxeUZFUxX2kxVXCoAW8CnFr3p40/view?usp=sharing"
                target="_blank"
              >
                le dossier de sponsoring
              </A>
              ,{" "}
              <A
                href="https://docs.google.com/document/d/14dtwH8QfzXuvPddlbo2fYgRy78RPtwwU1vPsH9tdgr4/edit?usp=sharing"
                target="_blank"
              >
                la convention de sponsoring
              </A>{" "}
              et contactez-nous à l'adresse{" "}
              <A href="mailto:contact@codeursenseine.com">
                contact@codeursenseine.com
              </A>
              .
            </Text>
            <ButtonGroup>
              <Button
                as="a"
                href="https://drive.google.com/file/d/1zclVxBxeUZFUxX2kxVXCoAW8CnFr3p40/view?usp=sharing"
                target="_blank"
                colorScheme="brand"
              >
                Dossier de sponsoring
              </Button>
              <Box display="flex" flexDir="column">
                <Button
                  as="a"
                  href="https://docs.google.com/document/d/14dtwH8QfzXuvPddlbo2fYgRy78RPtwwU1vPsH9tdgr4/edit?usp=sharing"
                  target="_blank"
                  colorScheme="brand"
                  variant="outline"
                >
                  Convention de sponsoring
                </Button>
                <Button
                  as="a"
                  href="https://docs.google.com/document/d/1oI6vAZBttTuSgxHH__LCVS1XV8j7wdiozc1TEzuVEhk/edit?usp=sharing"
                  target="_blank"
                  colorScheme="brand"
                  variant="outline"
                  marginTop={4}
                >
                  🇬🇧 Sponsoring agreement
                </Button>
              </Box>
            </ButtonGroup>
          </Stack>
        </Box>
      </Grid>
      <Divider mb={6} />
      <Stack spacing={6}>
        {sponsors.length > 0 && (
          <Stack spacing={6}>
            <Heading size="lg" color="brand.700" fontWeight="normal">
              Sponsors
            </Heading>
            <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap={8}>
              {sponsors.map((sponsor, index) => (
                <SponsorCard
                  key={index}
                  name={sponsor.frontmatter.name}
                  link={sponsor.frontmatter.link}
                  logoSrc={sponsor.frontmatter?.logo?.publicURL}
                  excerpt={sponsor.excerpt}
                  isDonator={sponsor.frontmatter.isDonator}
                >
                  {sponsor.body}
                </SponsorCard>
              ))}
            </SimpleGrid>
            <Divider />
          </Stack>
        )}
      </Stack>
    </Layout>
  );
};

export default SponsorsPage;
