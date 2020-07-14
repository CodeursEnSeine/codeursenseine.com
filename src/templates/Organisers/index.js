import React from "react"
import { Grid, Heading, Text, Image, Stack, IconButton } from "@chakra-ui/core"
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import { A } from "../../components/A"
import { Header } from "../../components/Header"

const Organisers = ({ pageContext }) => {
  const { organisers, siteMetadata } = pageContext

  const socials = [
    { name: "twitter", icon: FaTwitter },
    { name: "linkedin", icon: FaLinkedin },
    { name: "github", icon: FaGithub },
  ]

  return (
    <Layout theme="ces">
      <SEO title="Organisateurs | Codeurs en Seine" />
      <Header description={siteMetadata.description}>Codeurs en Seine</Header>
      <Heading as="h1" mb={8}>
        Organisateurs
      </Heading>

      <Stack spacing={6}>
        <Heading size="lg">Associations</Heading>
        <Text>
          Codeurs en Seine est une association dont le but est la promotion et
          le partage des pratiques et des nouveautés technologiques entre les
          acteurs du développement informatique.
        </Text>

        <Text>
          En plus de la conférence annuelle Codeurs en Seine, nous organisons
          des meetups et des ateliers tout au long de l'année, sur Rouen et ses
          environs.
        </Text>

        <Text>
          Codeurs en Seine représente le Normandy Java User Group et Normandy
          Agile User Group.
        </Text>

        <Text>
          Elle est également une étape de l'
          <A href="http://www.agiletour.org/">Agile Tour</A>.
        </Text>
        <Heading size="lg">Équipe</Heading>
        <Text mb={8}>
          Codeurs en Seine est propulsé par une équipe de bénévoles passionnés :
        </Text>
        <Grid
          templateColumns={[
            "repeat(2, 1fr)",
            "repeat(4, 1fr)",
            "repeat(3, 1fr)",
            "repeat(5, 1fr)",
            "repeat(6, 1fr)",
          ]}
          gap={6}
        >
          {organisers.map((organiser) => (
            <Stack
              alignItems="center"
              key={organiser.childMdx.frontmatter.name}
            >
              <Image
                boxShadow="brand"
                src={organiser.childMdx.frontmatter.image.publicURL}
                size="100px"
                borderRadius={4}
              />
              <Text textAlign="center" color="brand.500">
                {organiser.childMdx.frontmatter.name}
              </Text>
              <Stack isInline>
                {socials.map(
                  (social) =>
                    organiser.childMdx.frontmatter[social.name] && (
                      <IconButton
                        key={social.name}
                        as="a"
                        target="_blank"
                        href={organiser.childMdx.frontmatter[social.name]}
                        aria-label={`${organiser.childMdx.frontmatter.name} ${social.name}`}
                        icon={social.icon}
                        variant="ghost"
                        variantColor="brand"
                        size="sm"
                        d="inline-flex"
                      />
                    )
                )}
              </Stack>
            </Stack>
          ))}
        </Grid>
      </Stack>
    </Layout>
  )
}

export default Organisers
