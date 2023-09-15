import React from 'react';
import { Box, Heading, Stack, HStack, Text, Link } from '@chakra-ui/react';
import Image from 'next/image';

export const MeetupSpeakers = ({ speakers, ...props }: TODO) => (
  <Stack spacing={10} {...props}>
    {speakers?.map((speaker: TODO) => (
      <Box key={speaker.twitter}>
        <HStack align="start" spacing="4">
          <Box
            boxSize={{ base: '5rem', sm: '7.5rem' }}
            flex="none"
            borderRadius={4}
            objectFit="cover"
            overflow="hidden"
            bg="gray.200"
          >
            <Image
              src={speaker.avatar}
              alt={speaker.name}
              width={300}
              height={300}
            />
          </Box>
          <Stack>
            <Heading as="h5" size="sm" color="brand.900">
              {speaker.name}
            </Heading>
            {!!speaker.bio && <Text>{speaker.bio}</Text>}
            {!!speaker.twitter && (
              <Link
                href={`https://twitter.com/${speaker.twitter}`}
                color="brand.600"
                textDecoration="underline"
                isExternal
              >
                @{speaker.twitter}
              </Link>
            )}
          </Stack>
        </HStack>
      </Box>
    ))}
  </Stack>
);
