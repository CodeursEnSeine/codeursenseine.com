import React from "react"
import Layout from "../../components/layout"
import { graphql } from "gatsby"
import {
  Grid,
  Image,
  Link,
  Divider,
  Heading,
  Text,
  Stack,
} from "@chakra-ui/core"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Card } from "../../components/Card"
import SEO from "../../components/seo"
import { MeetupHeader } from "../../components/Meetup"
import { A } from "../../components/A"

const Sponsors = ({ data }) => {
  return (
    <Layout theme="meetup">
      <SEO title="Sponsors" />

      <MeetupHeader />

      <Heading as="h1" fontWeight="normal" mb={6}>
        Devenir Sponsor ?
      </Heading>

      <Stack spacing={6}>
        <Text>
          Codeurs en Seine est à la recherche de sponsors pour proposer un
          événement d'une qualité toujours meilleure.
        </Text>

        <Text>
          Les partenaires des éditions précédentes ont confirmé la visibilité
          offerte par ce sponsoring, surtout dans le cadre d'une politique de
          recrutement.
        </Text>

        <Text>
          Si vous souhaitez soutenir l'événement, téléchargez{" "}
          <A
            href="https://drive.google.com/file/d/1BCENZDDhQPDt7ACX2OF0hXq1513iPVXD/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            le dossier de sponsoring
          </A>
          ,{" "}
          <A
            href="https://docs.google.com/document/d/1KgMSEcv3OSitJq53yfW-vNcb7RrH6rnEqgGWgMTlgy0/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            la convention de sponsoring
          </A>{" "}
          et contactez-nous.
        </Text>
      </Stack>

      <Divider my={10} />

      <Heading as="h2" fontWeight="normal" size="lg" mb={6}>
        Sponsors
      </Heading>
      <Grid templateColumns="1fr 1fr 1fr" gap={8}>
        {data.allFile.nodes.map((sponsor) => (
          <Card as="article">
            <Link
              href={sponsor.childMdx.frontmatter.link}
              title={sponsor.childMdx.frontmatter.name}
            >
              <Image
                src={sponsor.childMdx.frontmatter.logo.publicURL}
                alt={sponsor.childMdx.frontmatter.name}
              />
            </Link>
            <Divider />
            <A
              href={sponsor.childMdx.frontmatter.link}
              title={sponsor.childMdx.frontmatter.name}
            >
              {sponsor.childMdx.frontmatter.name}
            </A>
            <MDXRenderer>{sponsor.childMdx.body}</MDXRenderer>
          </Card>
        ))}
      </Grid>
    </Layout>
  )
}

export default Sponsors

export const meetupsSponsorsPageQuery = graphql`
  query MeetupsSponsors {
    allFile(
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
          body
        }
      }
    }
  }
`
