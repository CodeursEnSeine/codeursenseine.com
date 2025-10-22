'use client';

import { FavoriteButton } from '@/components/FavoriteButton';
import { MdxContent } from '@/components/MdxContent';
import { DEFAULT_AVATAR } from '@/constants/default';
import { formatHour, getDiff } from '@/utils/dates';
import {
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import { Speaker, Talk } from 'contentlayer/generated';
import Image from 'next/image';
import { ReactElement } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiGithub, FiTwitter, FiLinkedin, FiYoutube } from 'react-icons/fi';
import { SiTiktok } from '@icons-pack/react-simple-icons';
import { default as FiBluesky } from 'src/icons/FiBluesky';
import { MdHearingDisabled } from 'react-icons/md';
import { VscFeedback } from 'react-icons/vsc';

type TalkProps = { talk: Talk; speakers: Array<Speaker> };

type SocialName = 'twitter' | 'linkedin' | 'github' | 'youtube' | 'bluesky' | 'tiktok';
type SocialHref = `${SocialName}Href`;

type Social = {
  name: SocialName;
  icon: ReactElement;
  href: SocialHref;};

const socials: Array<Social> = [
  { name: 'twitter', icon: <FiTwitter />, href: 'twitterHref' },
  { name: 'linkedin', icon: <FiLinkedin />, href: 'linkedinHref' },
  { name: 'github', icon: <FiGithub />, href: 'githubHref' },
  { name: 'youtube', icon: <FiYoutube />, href: 'youtubeHref' },
  { name: 'bluesky', icon: <FiBluesky />, href: 'blueskyHref' },
  { name: 'tiktok', icon: <SiTiktok />, href: 'tiktokHref' },
];

export const TalkContent = ({ talk, speakers }: TalkProps) => {
  return (
    <Box>
      {talk.subtitled && (
        <HStack spacing="2" mb="4" color="brand.700" fontWeight="bold">
          <Icon as={MdHearingDisabled} title="Icône sourds et malentendants" />
          <Text as="em">Accessible aux sourds et malentendants</Text>
        </HStack>
      )}

      <Stack spacing="8">
        <Stack>
          <Heading as="h2" fontSize="xl">
            {talk.title}
          </Heading>
          <HStack>
            <Text color="brand.700">Salle {talk.room}</Text>
            <Text>
              ({formatHour(talk.start)} - {getDiff(talk.start, talk.end)})
            </Text>
          </HStack>

          {talk.kind === 'keynote' && (
            <Badge h="fit-content" colorScheme="brand" width="fit-content">
              Keynote
            </Badge>
          )}
        </Stack>

        <Box mb="4">
          <MdxContent>{talk.body.code}</MdxContent>
          <Stack spacing="4" direction={{ base: 'column', lg: 'row' }}>
            <FavoriteButton slug={talk.slug} size="sm" />
            {talk.feedback && (
              <Button
                variant="outline"
                leftIcon={<Icon as={VscFeedback} />}
                as="a"
                href={talk.feedback}
                size="sm"
              >
                Faire un retour sur cette conférence
              </Button>
            )}
            <Button
              variant="outline"
              as="a"
              href={`https://github.com/CodeursEnSeine/codeursenseine.com/edit/master/content/${talk._raw.sourceFilePath}`}
              leftIcon={<FaGithub />}
              size="sm"
            >
              Modifier le contenu
            </Button>
          </Stack>
        </Box>
      </Stack>
      <Divider borderColor="brand.100" />
      {speakers.length > 0 && (
        <Stack mt="4" spacing="4" divider={<StackDivider />}>
          {speakers?.map((speaker) => {
            return (
              <Stack key={speaker.slug}>
                <Flex gap="4">
                  <Box w="6rem" borderRadius={8} overflow="hidden">
                    <Image
                      src={speaker.image ? speaker.imageSrc : DEFAULT_AVATAR}
                      alt={speaker.name}
                      width={96}
                      height={96}
                    />
                  </Box>
                  <Flex justify="space-between" flex="1">
                    <Stack spacing="1">
                      <Text fontSize="lg" fontWeight="semibold">
                        {speaker.name}
                      </Text>
                      <Text fontSize="sm" color="gray.700">
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
                </Flex>
                <Box>
                  <MdxContent>{speaker.body.code}</MdxContent>
                </Box>
              </Stack>
            );
          })}
        </Stack>
      )}
    </Box>
  );
};
