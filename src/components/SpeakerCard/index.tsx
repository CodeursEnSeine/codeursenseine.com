import { MdxContent } from '@/components/MdxContent';
import { DEFAULT_AVATAR } from '@/constants/default';
import { currentYear } from '@/constants/site';
import {
  AspectRatio,
  Box,
  Card,
  CardProps,
  Divider,
  Flex,
  HStack,
  IconButton,
  Link as ChakraLink,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Speaker, Talk } from 'contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, ReactElement } from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaYoutube, FaTiktok, FaInstagram } from 'react-icons/fa';
import { SiBluesky } from "@icons-pack/react-simple-icons";

type SpeakerCardProps = CardProps & {
  speaker: Speaker;
  talks: Array<Talk>;
};

type Social = {
  name: Extract<keyof Speaker, 'twitter' | 'linkedin' | 'github' | 'youtube' | 'bluesky' | 'instagram' | 'tiktok'>;
  icon: ReactElement;
  href: Extract<keyof Speaker, 'twitterHref' | 'linkedinHref' | 'githubHref' | 'youtubeHref' | 'blueskyHref' | 'instagramHref' | 'tiktokHref'>;
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

export const SpeakerCard = ({ speaker, talks, ...rest }: SpeakerCardProps) => {
  return (
    <Card
      borderLeftWidth={2}
      borderLeftColor="brand.600"
      p="4"
      gap="4"
      {...rest}
    >
      <Flex>
        <Box mr={4} borderRadius="4" overflow="hidden">
          <AspectRatio ratio={1} w="6em" maxW="100%">
            <Image
              src={speaker.image ? speaker.imageSrc : DEFAULT_AVATAR}
              alt={speaker.name}
              width={100}
              height={100}
            />
          </AspectRatio>
        </Box>

        <Stack spacing="0">
          <Text fontSize="lg" fontWeight="bold">
            {speaker.name}
          </Text>
          <Text fontSize="md" color="gray.600">
            {speaker.company}
          </Text>
          <HStack>
            {socials.map(
              (social) =>
                !!speaker[social.name] && (
                  <IconButton
                    key={social.name}
                    as="a"
                    target="_blank"
                    href={speaker[social.href]}
                    title={`${speaker.name} ${social.name}`}
                    icon={social.icon}
                    variant="ghost"
                    colorScheme="brand"
                    rel="noopener noreferrer"
                    aria-label={`Lien ${social.name} du speaker`}
                  />
                )
            )}
          </HStack>
        </Stack>
      </Flex>

      <MdxContent>{speaker.body.code}</MdxContent>

      <Divider borderColor="gray.200" />

      <Text fontWeight="bold">
        {talks.length} conférence{talks.length > 1 ? 's' : ''}&nbsp;:
      </Text>
      {talks.map((talk) => (
        <Fragment key={talk._id}>
          <ChakraLink
            color="brand.800"
            as={Link}
            href={`/${currentYear}/programme/${talk.slug}`}
          >
            {talk.title}
          </ChakraLink>
        </Fragment>
      ))}
    </Card>
  );
};
