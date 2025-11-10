import { allOrganisers } from 'contentlayer/generated';
import { Metadata, ResolvingMetadata } from 'next';
import {
  AspectRatio,
  Box,
  Flex,
  Grid,
  Heading,
  IconButton,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import type { Organiser } from 'contentlayer/generated';
import Image from 'next/image';
import { ReactElement } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaTiktok, FaInstagram } from 'react-icons/fa';
import { SiBluesky } from "@icons-pack/react-simple-icons";

export async function generateMetadata(
  _: unknown,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const previousTitle = 'Organisateurs | ' + (await parent).title?.absolute;

  return {
    title: previousTitle,
    alternates: {
      canonical: 'organisateurs',
    },
  };
}

export default function Organisers() {
  const organisers = allOrganisers
    .filter((organiser) => organiser.active)
    .sort((a, b) => a.name.localeCompare(b.name));

  type SocialName = 'twitter' | 'linkedin' | 'github' | 'youtube' | 'bluesky' | 'instagram' | 'tiktok';
  type SocialHref = `${SocialName}Href`;
  type Social = {
    name: SocialName;
    icon: ReactElement;
    href: SocialHref;
  };

  const socials: Array<Social> = [
    { name: 'twitter', icon: <FaTwitter />, href: 'twitterHref' },
    { name: 'linkedin', icon: <FaLinkedin />, href: 'linkedinHref' },
    { name: 'github', icon: <FaGithub />, href: 'githubHref' },
    { name: 'youtube', icon: <FaYoutube />, href: 'youtubeHref' },
    { name: 'bluesky', icon: <SiBluesky />, href: 'blueskyHref' },
    { name: 'instagram', icon: <FaInstagram />, href: 'instagramHref' },
    { name: 'tiktok', icon: <FaTiktok />, href: 'tiktokHref' },
  ];

  return (
    <>
      <Heading as="h1" mb="8">
        Organisateurs
      </Heading>
      <Stack spacing="6">
        <Heading size="lg">Associations</Heading>
        <Text>
          Codeurs en Seine est une association dont le but est la promotion et
          le partage des pratiques et des nouveautés technologiques entre les
          acteurs du développement informatique.
        </Text>
        <Text>
          En plus de la conférence annuelle Codeurs en Seine, nous organisons
          des meetups et des ateliers tout au long de l&apos;année, sur Rouen et
          ses environs.
        </Text>
        <Text>
          Codeurs en Seine représente le Normandy Java User Group et Normandy
          Agile User Group.
        </Text>
        <Text>
          Elle est également une étape de l&apos;
          <Link isExternal href="http://www.agiletour.org/">
            Agile Tour.
          </Link>
        </Text>
        <Heading size="lg">Équipe</Heading>
        <Text>
          Codeurs en Seine est propulsé par une équipe de bénévoles passionnés :
        </Text>
        <Grid templateColumns="repeat(auto-fit, minmax(6rem, 1fr))" gap={6}>
          {organisers.map((organiser) => (
            <Stack alignItems="center" key={organiser._id}>
              <Box borderRadius="md" overflow="hidden">
                <AspectRatio ratio={1} w="6em" maxW="100%">
                  <Image
                    src={organiser.imageSrc}
                    width={200}
                    height={200}
                    alt={organiser.name}
                  />
                </AspectRatio>
              </Box>

              <Text textAlign="center" fontSize="sm">
                {organiser.name}
              </Text>
              <Flex flexWrap="wrap">
                {socials.map(
                  (social) =>
                    !!organiser[social.name] && (
                      <IconButton
                        key={social.name}
                        as={Link}
                        isExternal
                        href={organiser[social.name] ?? ''}
                        aria-label={`${organiser.name} ${social.name}`}
                        icon={social.icon}
                        variant="ghost"
                        colorScheme="brand"
                        size="sm"
                        display="inline-flex"
                      />
                    )
                )}
              </Flex>
            </Stack>
          ))}
        </Grid>
      </Stack>
    </>
  );
}
