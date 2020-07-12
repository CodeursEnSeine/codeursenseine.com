import React from "react"
import { useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import {
  Button,
  Grid,
  Heading,
  Text,
  Image,
  Stack,
  Link,
  Box,
  Divider,
} from "@chakra-ui/core"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import { A } from "../../components/A"
import { Header } from "../../components/Header"
import { Card } from "../../components/Card"
import { MDXRenderer } from "gatsby-plugin-mdx"

const SponsorsPage = ({ pageContext }) => {
  const { siteMetadata, sponsors } = pageContext

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "ces/dossier-sponsoring.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const platiniumSponsors = sponsors.filter(
    (sponsor) => sponsor.childMdx.frontmatter.sponsor === "platinium"
  )
  const goldSponsors = sponsors.filter(
    (sponsor) => sponsor.childMdx.frontmatter.sponsor === "gold"
  )
  const silverSponsors = sponsors.filter(
    (sponsor) => sponsor.childMdx.frontmatter.sponsor === "silver"
  )
  const bronzeSponsors = sponsors.filter(
    (sponsor) => sponsor.childMdx.frontmatter.sponsor === "bronze"
  )

  return (
    <Layout theme="ces">
      <SEO title="Sponsors | Codeurs en Seine" />
      <Header description={siteMetadata.description}>Codeurs en Seine</Header>
      <Heading as="h1" mb={8}>
        Devenir Sponsor
      </Heading>

      <Grid templateColumns="1fr 2fr" mb={8}>
        <Box maxWidth="250px" shadow="0 .25rem 1.25rem rgba(0,102,179,0.2)">
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
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
              <A href="https://drive.google.com/file/d/193DWebJh2DGqPQjj5xPQlJ2jkx1CBuBr/view?usp=sharing">
                le dossier de sponsoring
              </A>
              ,{" "}
              <A href="https://docs.google.com/document/d/11vZJ_M08rcrFLDBu2NaeMRpD7zv7ZWSqWEvxR6xGXYw/edit?usp=sharing">
                la convention de sponsoring
              </A>{" "}
              et contactez-nous à l'adresse{" "}
              <A href="mailto:contact@codeursenseine.com">
                contact@codeursenseine.com.
              </A>
            </Text>
            <Stack spacing={8} isInline>
              <Button
                as="a"
                href="https://drive.google.com/file/d/193DWebJh2DGqPQjj5xPQlJ2jkx1CBuBr/view?usp=sharing"
                variantColor="brand"
              >
                Dossier de sponsoring
              </Button>
              <Button
                as="a"
                href="https://docs.google.com/document/d/11vZJ_M08rcrFLDBu2NaeMRpD7zv7ZWSqWEvxR6xGXYw/edit?usp=sharing"
                variantColor="brand"
                variant="outline"
              >
                Convention de sponsoring
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Grid>
      <Divider />
      <Stack spacing={6}>
        {goldSponsors.length > 0 && (
          <>
            <Heading>Sponsors gold</Heading>
            <Grid templateColumns="1fr 1fr" gap={8}>
              {goldSponsors.map((sponsor) => (
                <Card key={sponsor.childMdx.frontmatter.name} as="article">
                  <Link
                    href={sponsor.childMdx.frontmatter.link}
                    title={sponsor.childMdx.frontmatter.name}
                  >
                    <Image
                      src={sponsor.childMdx.frontmatter.logo.publicURL}
                      alt={sponsor.childMdx.frontmatter.name}
                      m="auto"
                    />
                  </Link>
                  <Divider />
                  <Heading as="h3" size="lg">
                    <A
                      href={sponsor.childMdx.frontmatter.link}
                      title={sponsor.childMdx.frontmatter.name}
                    >
                      {sponsor.childMdx.frontmatter.name}
                    </A>
                  </Heading>

                  <MDXRenderer>{sponsor.childMdx.body}</MDXRenderer>
                </Card>
              ))}
            </Grid>
          </>
        )}
      </Stack>
    </Layout>
  )
}

export default SponsorsPage
