import React from "react"
import { Grid, Heading, Text, Image, Stack, IconButton } from "@chakra-ui/core"
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Organisers = ({ pageContext }) => {
  const { organisers } = pageContext

  return (
    <Layout theme="ces">
      <SEO title="Organisateurs | Codeurs en Seine" />
      <Heading>Équipe</Heading>
      <Text mb={8}>
        Codeurs en Seine est propulsé par une équipe de bénévoles passionnés :
      </Text>
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        {organisers.map((organiser) => (
          <Stack alignItems="center">
            <Image
              src={organiser.childMdx.frontmatter.image.publicURL}
              size="100px"
              borderRadius={4}
            />
            <Text textAlign="center" color="brand.500">
              {organiser.childMdx.frontmatter.name}
            </Text>
            <Stack isInline>
              {organiser.childMdx.frontmatter.twitter && (
                <IconButton
                  as="a"
                  target="_blank"
                  href={organiser.childMdx.frontmatter.twitter}
                  aria-label={`${organiser.childMdx.frontmatter.name} Twitter`}
                  icon={FaTwitter}
                  variant="ghost"
                  variantColor="brand"
                  size="sm"
                  d="inline-flex"
                />
              )}
              {organiser.childMdx.frontmatter.linkedin && (
                <IconButton
                  as="a"
                  target="_blank"
                  href={organiser.childMdx.frontmatter.linkedin}
                  aria-label={`${organiser.childMdx.frontmatter.name} Linkedin`}
                  icon={FaLinkedin}
                  variant="ghost"
                  variantColor="brand"
                  size="sm"
                  d="inline-flex"
                />
              )}
              {organiser.childMdx.frontmatter.github && (
                <IconButton
                  as="a"
                  target="_blank"
                  href={organiser.childMdx.frontmatter.github}
                  aria-label={`${organiser.childMdx.frontmatter.name} GitHub`}
                  icon={FaGithub}
                  variant="ghost"
                  variantColor="brand"
                  size="sm"
                  d="inline-flex"
                />
              )}
            </Stack>
          </Stack>
        ))}
      </Grid>
    </Layout>
  )
}

export default Organisers
