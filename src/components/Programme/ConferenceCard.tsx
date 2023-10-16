'use client';

import React from 'react';
import {
  Heading,
  Stack,
  Text,
  Badge,
  Flex,
  Box,
  HStack,
  Icon,
  Card,
  Hide,
} from '@chakra-ui/react';

import { MdHearingDisabled } from 'react-icons/md';
import { Speaker, Talk } from 'contentlayer/generated';
import Link from 'next/link';
import { formatHour, getDiff } from '@/utils/dates';
import { useFavoriteContext } from '@/contexts/FavoritesContext';
import { FavoriteButton } from '@/components/FavoriteButton';

export type ConferenceCardProps = {
  talk: Talk;
  speakers: Array<Speaker>;
};

export const ConferenceCard = ({ talk, speakers }: ConferenceCardProps) => {
  const { favorites } = useFavoriteContext();

  if (talk?.kind === 'pause') {
    return (
      <Card variant="primary" mt={2}>
        <Stack align="center">
          <Text>{talk?.title}</Text>
        </Stack>
      </Card>
    );
  }

  const KINDS: Array<Talk['kind']> = ['quicky', 'atelier'];

  return (
    <Card
      borderLeftWidth={2}
      borderLeftColor={favorites.includes(talk.slug) ? 'pink.600' : 'brand.600'}
      position="relative"
      w="full"
      h="full"
      _hover={{
        cursor: 'pointer',
      }}
      _focus={{
        borderColor: 'brand.600',
      }}
      p="4"
    >
      <Stack spacing={0} as={Link} href={`programme/${talk.slug}`}>
        <Flex
          justifyContent="space-between"
          display={{ base: 'flex', lg: 'none' }}
        >
          <HStack spacing="1">
            <Text
              as="time"
              dateTime={talk.start}
              fontWeight="bold"
              fontSize="sm"
              color="gray.600"
            >
              {formatHour(talk.start)}
            </Text>
            <span>-</span>
            <Text
              as="time"
              dateTime={talk.end}
              fontWeight="bold"
              fontSize="sm"
              color="gray.600"
            >
              {formatHour(talk.end)}
            </Text>
            <Text fontWeight="bold" fontSize="xs" color="gray.600" as="span">
              ({getDiff(talk.end, talk.start)})
            </Text>
          </HStack>
          <Box>
            {KINDS.includes(talk.kind) && (
              <Badge colorScheme="brand" fontSize="xs">
                {talk?.kind}
              </Badge>
            )}
          </Box>
        </Flex>

        <Heading fontSize={{ base: 'md', lg: 'sm' }} flexGrow="1">
          {talk.title}
        </Heading>
        <Text fontSize="sm" color="gray.600" pt="1">
          {speakers?.map((speaker) => speaker.name).join(', ')}
        </Text>

        <Stack spacing={0} pt="2">
          {talk.subtitled && (
            <Box>
              <Icon
                as={MdHearingDisabled}
                title="Icône sourds et malentendants"
              />
            </Box>
          )}
          <HStack spacing="1" fontSize="sm">
            <Text color="brand.700">Salle {talk.room}</Text>

            <HStack spacing="1" display={{ base: 'none', lg: 'flex' }}>
              <Text textTransform="capitalize">{talk.kind}</Text>
            </HStack>
          </HStack>
        </Stack>
      </Stack>
      <Hide above="md">
        <FavoriteButton
          position="absolute"
          slug={talk.slug}
          size="sm"
          isIconButton
          bottom={2}
          right={2}
          zIndex={1}
        />
      </Hide>
    </Card>
  );
};
