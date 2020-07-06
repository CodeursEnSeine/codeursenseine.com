import React from "react"
import { useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import {
  Heading,
  Text,
  Box,
  Stack,
  List,
  ListItem,
  Divider,
  Flex,
} from "@chakra-ui/core"

import { A } from "../../components/A"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "devoxx4kids/devoxx4kids.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout theme="devoxx4kids">
      <SEO title="Devoxx4Kids" />

      <Text as="small">
        Ateliers de programmation pour les 8-14 ans à Rouen
      </Text>
      <Heading as="h1">Devoxx4kids Rouen</Heading>

      <Box maxWidth="300px" mx="auto" my={8}>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </Box>

      <Stack spacing={8}>
        <Heading as="h2">Le principe</Heading>
        <Text>
          L'objectif de devoxx 4 kids est de donner aux enfants le goût de la
          programmation, de la robotique et de l'ingénierie en général.
        </Text>
        <Text>
          Il existe des logiciels ludiques et pédagogiques open source
          permettant de découvrir les techniques de programmation et commencer à
          réaliser ses propres programmes facilement.
        </Text>
        <Text>
          Les informaticiens qui animeront l'atelier ont déjà partagé leur
          expérience avec des jeunes dans le cadre d'événements tels que
          Programmatoo, Breizh Kids ou Devoxx4Kids.
        </Text>
        <Text>
          Mais... pourquoi donc apprendre la programmation quand on a moins de
          14 ans ?
        </Text>
        <List styleType="disc">
          <ListItem>Parce qu'on aime jouer</ListItem>
          <ListItem>
            Parce qu'on veut comprendre ce que nos parents font comme métier !
          </ListItem>
          <ListItem>
            Parce qu'un ordinateur ne permet pas que de naviguer sur internet !
          </ListItem>
          <ListItem>
            Parce que c'est tout à fait à notre portée, et pourtant on n'en fait
            pas à l'école !
          </ListItem>
        </List>
        <Text>
          Devoxx 4 Kids, c'est tout ça à la fois : un atelier où les enfants
          pourront jouer ensemble, accompagnés par les adultes, pour mieux
          comprendre l'outil informatique en découvrant la programmation avec
          des outils adaptés à leur âge.
        </Text>
        <Divider />
        <Flex justifyContent="center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ZszuY9bmIRk"
            frameborder="0"
            title="Devoxx4kids 19 Janvier 2019"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Flex>
        <Box textAlign="center">
          <Text>
            Vidéo de présentation du Devoxx4kids Rouen le 19 Janvier 2019.
          </Text>
          <Text as="small">
            Merci a <strong>Jeanne Grenet</strong> pour la réalisation de cette
            vidéo et son implication le jour J !
          </Text>
        </Box>
        <Divider />
        <Heading as="h2">Les ateliers</Heading>

        <List styleType="disc">
          <ListItem>Scratch (Programmation visuelle)</ListItem>
          <ListItem>
            Thymio (Petit robot éducatif pour découvrir l'univers robotique pour
            les plus petits)
          </ListItem>
          <ListItem>
            CodeCombat (Jeux OpenSource pour découvrir les bases de la
            programmation)
          </ListItem>
          <ListItem>Lego Mindstorm (Programmation de robots)</ListItem>
          <ListItem>Creation de Site Web</ListItem>
          <ListItem>Minecraft</ListItem>
          <ListItem>
            Makey Makey (Jeux d'élétricité pour les plus petits)
          </ListItem>
        </List>

        <Divider />

        <Heading as="h2">Plus d'informations</Heading>

        <Text>
          Pour plus d'informations, veuillez consulter les liens suivants :
        </Text>

        <List styleType="disc">
          <ListItem>
            <A href="https://twitter.com/Devoxx4KidsFR" target="_blank">
              Le twitter @Devoxx4KidsFR
            </A>
          </ListItem>
          <ListItem>
            <A href="https://twitter.com/CodeursEnSeine" target="_blank">
              Le twitter @CodeursEnSeine
            </A>
          </ListItem>
          <ListItem>
            <A href="http://www.devoxx4kids.org/" target="_blank">
              La page officielle (en anglais)
            </A>
          </ListItem>
          <ListItem>
            <A href="http://www.devoxx4kids.org/france/" target="_blank">
              La page officielle (partie française)
            </A>
          </ListItem>
        </List>
      </Stack>
    </Layout>
  )
}

export default IndexPage
