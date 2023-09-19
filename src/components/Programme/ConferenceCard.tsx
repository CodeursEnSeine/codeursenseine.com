'use client';

import React from 'react';
import {
  useDisclosure,
  Heading,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerOverlay,
  Stack,
  Text,
  Button,
  Badge,
  Flex,
  Divider,
  Box,
  IconButton,
  HStack,
  StackDivider,
  Icon,
  Card,
} from '@chakra-ui/react';

import { FiGithub, FiTwitter } from 'react-icons/fi';
import { MdHearingDisabled } from 'react-icons/md';
import { Speaker, Talk } from 'contentlayer/generated';
import Link from 'next/link';
import { formatHour, getDiff } from '@/utils/dates';
import { MdxContent } from '@/components/MdxContent';
import Image from 'next/image';
import { DEFAULT_AVATAR } from '@/constants/default';

export type ConferenceCardProps = {
  conference: Talk;
  speakers: Array<Speaker>;
};

export const ConferenceCard = ({
  conference,
  speakers,
}: ConferenceCardProps) => {
  const drawer = useDisclosure();

  if (conference?.kind === 'pause') {
    return (
      <Card variant="primary" mt={2}>
        <Stack align="center">
          <Text>{conference?.title}</Text>
        </Stack>
      </Card>
    );
  }

  const KINDS: Array<Talk['kind']> = ['quicky', 'atelier'];

  return (
    <>
      <Card
        borderLeftWidth={2}
        borderLeftColor="brand.600"
        onClick={drawer.onOpen}
        w="full"
        h="full"
        _hover={{
          borderColor: 'brand.600',
          cursor: 'pointer',
        }}
        _focus={{
          borderColor: 'brand.600',
        }}
        p="4"
      >
        <Flex
          justifyContent="space-between"
          display={{ base: 'flex', lg: 'none' }}
        >
          <HStack spacing="1">
            <Text
              as="time"
              dateTime={conference.start}
              fontWeight="bold"
              fontSize="sm"
              color="gray.600"
            >
              {formatHour(conference.start)}
            </Text>
            <span>-</span>
            <Text
              as="time"
              dateTime={conference.end}
              fontWeight="bold"
              fontSize="sm"
              color="gray.600"
            >
              {formatHour(conference.end)}
            </Text>
            <Text fontWeight="bold" fontSize="xs" color="gray.600" as="span">
              ({getDiff(conference.end, conference.start)})
            </Text>
          </HStack>
          <Box>
            {KINDS.includes(conference.kind) && (
              <Badge colorScheme="brand" fontSize="xs">
                {conference?.kind}
              </Badge>
            )}
          </Box>
        </Flex>

        <Heading fontSize={{ base: 'md', lg: 'sm' }} flexGrow="1">
          {conference.title}
        </Heading>
        <Text fontSize="sm" color="gray.600" pt="1">
          {speakers?.map((speaker) => speaker.name).join(', ')}
        </Text>

        <Stack spacing={0} pt="2">
          {conference.subtitled && (
            <Box>
              <Icon
                as={MdHearingDisabled}
                title="Icône sourds et malentendants"
              />
            </Box>
          )}
          <HStack spacing="1" fontSize="sm">
            <Text color="brand.700">Salle {conference.room}</Text>

            <HStack spacing="1" display={{ base: 'none', lg: 'flex' }}>
              <Text textTransform="capitalize">{conference.kind}</Text>
            </HStack>
          </HStack>
        </Stack>
      </Card>

      <Drawer
        size="md"
        isOpen={drawer.isOpen}
        placement="right"
        onClose={drawer.onClose}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <Stack alignItems="center" display="flex" flexDirection="row">
                <Text fontSize="sm" mt={2} textTransform="capitalize">
                  {new Intl.DateTimeFormat('fr-FR', {
                    weekday: 'long',
                    day: '2-digit',
                    month: 'short',
                  }).format(Date.parse(conference.start))}{' '}
                  {formatHour(conference.start)} - {formatHour(conference.end)}
                </Text>
                {conference.kind === 'keynote' && (
                  <Badge
                    ml={3}
                    h="fit-content"
                    colorScheme="brand"
                    width="fit-content"
                  >
                    Keynote
                  </Badge>
                )}
              </Stack>
              <Text>{conference.title}</Text>
            </DrawerHeader>
            <DrawerBody overflow="auto">
              {conference.subtitled && (
                <HStack spacing="2" mb="4" color="brand.700" fontWeight="bold">
                  <Icon
                    as={MdHearingDisabled}
                    title="Icône sourds et malentendants"
                  />
                  <Text as="em">Accessible aux sourds et malentendants</Text>
                </HStack>
              )}

              <MdxContent>{conference.body.code}</MdxContent>
              <Divider borderColor="brand.100" />
              {speakers.length > 0 && (
                <Stack mt="4" spacing="4" divider={<StackDivider />}>
                  {speakers?.map((speaker) => {
                    return (
                      <Stack key={speaker.slug}>
                        <Flex gap="4">
                          <Box w="6rem" borderRadius={8} overflow="hidden">
                            <Image
                              src={
                                speaker.image
                                  ? speaker.imageSrc
                                  : DEFAULT_AVATAR
                              }
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
                                {speaker.twitterHref && (
                                  <Box>
                                    <IconButton
                                      as="a"
                                      aria-label={`Lien vers le Twitter de ${speaker.name}`}
                                      href={speaker.twitterHref}
                                      target="_blank"
                                      rel="noopenner"
                                      colorScheme="brand"
                                      icon={<FiTwitter />}
                                    />
                                  </Box>
                                )}
                                {speaker.github && (
                                  <Box>
                                    <IconButton
                                      as="a"
                                      aria-label={`Lien vers le GitHub de ${speaker.name}`}
                                      href={speaker.githubHref}
                                      target="_blank"
                                      rel="noopenner"
                                      colorScheme="brand"
                                      icon={<FiGithub />}
                                    />
                                  </Box>
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
            </DrawerBody>

            <DrawerFooter display="flex" flexDirection="column">
              <Button
                width="full"
                variant="outline"
                mb={3}
                onClick={drawer.onClose}
              >
                Fermer
              </Button>
              <Button
                colorScheme="brand"
                as={Link}
                target="_blank"
                href="/2023/inscription"
                width="full"
              >
                S&apos;inscrire
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};
