import { RedirectCodeursEnSeine } from '@/components/RedirectCodeursEnSeine';
import {
  Box,
  Divider,
  Flex,
  Heading,
  Link,
  List,
  ListItem,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';

export async function generateMetadata(
  _: unknown,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const title = 'Devoxx4Kids | ' + (await parent).title?.absolute;
  const description = 'Ateliers de programmation pour les 8-14 ans à Rouen';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: '/images/devoxx4kids/social.jpg',
          alt: 'Devoxx4Kids Codeurs en Seine',
        },
      ],
    },
    alternates: {
      canonical: 'devoxx4kids',
    },
  };
}

export default function Home() {
  return (
    <>
      <RedirectCodeursEnSeine path="/devoxx4kids" />
      <Box maxWidth="300px" mx="auto" my={8}>
        <Image
          src="/images/devoxx4kids/devoxx4kids.png"
          alt="Devoxx4Kids"
          width={300}
          height={100}
        />
      </Box>
      <Stack spacing={8}>
        <Heading as="h2">Le principe</Heading>
        <Text>
          L&apos;objectif de devoxx 4 kids est de donner aux enfants le goût de
          la programmation, de la robotique et de l&apos;ingénierie en général.
        </Text>
        <Text>
          Il existe des logiciels ludiques et pédagogiques open source
          permettant de découvrir les techniques de programmation et commencer à
          réaliser ses propres programmes facilement.
        </Text>
        <Text>
          Les informaticiens qui animeront l&apos;atelier ont déjà partagé leur
          expérience avec des jeunes dans le cadre d&apos;événements tels que
          Programmatoo, Breizh Kids ou Devoxx4Kids.
        </Text>
        <Text>
          Mais... pourquoi donc apprendre la programmation quand on a moins de
          14 ans ?
        </Text>
        <List styleType="disc">
          <ListItem>Parce qu&apos;on aime jouer</ListItem>
          <ListItem>
            Parce qu&apos;on veut comprendre ce que nos parents font comme
            métier !
          </ListItem>
          <ListItem>
            Parce qu&apos;un ordinateur ne permet pas que de naviguer sur
            internet !
          </ListItem>
          <ListItem>
            Parce que c&apos;est tout à fait à notre portée, et pourtant on
            n&apos;en fait pas à l&apos;école !
          </ListItem>
        </List>
        <Text>
          Devoxx 4 Kids, c&apos;est tout ça à la fois : un atelier où les
          enfants pourront jouer ensemble, accompagnés par les adultes, pour
          mieux comprendre l&apos;outil informatique en découvrant la
          programmation avec des outils adaptés à leur âge.
        </Text>
        <Divider />
        <Flex justifyContent="center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ZszuY9bmIRk"
            frameBorder="0"
            title="Devoxx4kids 19 Janvier 2019"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
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
            Thymio (Petit robot éducatif pour découvrir l&apos;univers robotique
            pour les plus petits)
          </ListItem>
          <ListItem>
            CodeCombat (Jeux OpenSource pour découvrir les bases de la
            programmation)
          </ListItem>
          <ListItem>Lego Mindstorm (Programmation de robots)</ListItem>
          <ListItem>Creation de Site Web</ListItem>
          <ListItem>Minecraft</ListItem>
          <ListItem>
            Makey Makey (Jeux d&apos;élétricité pour les plus petits)
          </ListItem>
        </List>

        <Divider />

        <Heading as="h2">Plus d&apos;informations</Heading>
        <Text>
          Pour plus d&apos;informations, veuillez consulter les liens suivants :
        </Text>

        <List styleType="disc">
          <ListItem>
            <Link href="https://twitter.com/Devoxx4KidsFR" isExternal>
              Le twitter @Devoxx4KidsFR
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/CodeursEnSeine" isExternal>
              Le twitter @CodeursEnSeine
            </Link>
          </ListItem>
          <ListItem>
            <Link href="http://www.devoxx4kids.org/" isExternal>
              La page officielle (en anglais)
            </Link>
          </ListItem>
          <ListItem>
            <Link href="http://www.devoxx4kids.org/france/" isExternal>
              La page officielle (partie française)
            </Link>
          </ListItem>
        </List>
      </Stack>
    </>
  );
}
