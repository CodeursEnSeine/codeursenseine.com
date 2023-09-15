import React from 'react';
import { Heading, Stack, Text, Box, Link } from '@chakra-ui/react';
import { Remarkable } from 'remarkable';
import Image from 'next/image';

export const MeetupSpeaker = ({ speaker, children, ...props }: TODO) => {
  const md = new Remarkable('full', {
    html: true,
  });

  // Save original method to invoke.
  const originalRender = md.renderer.rules.link_open;

  md.renderer.rules.link_open = function () {
    // Invoke original method first.
    let result = originalRender.apply(null, arguments as TODO);

    result = result.replace(
      '>',
      'target="_blank" rel="noopener noreferrer" class="remarkable-link">'
    );

    return result;
  };

  return (
    <Stack spacing={2} {...props}>
      <Heading as="h5" size="sm" color="brand.900">
        {speaker.name}
      </Heading>
      <Stack direction="row" spacing={6}>
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
          {speaker.bio ? (
            <Box
              className="remarkable"
              dangerouslySetInnerHTML={{ __html: md.render(speaker.bio) }}
            />
          ) : (
            children
          )}

          {speaker.twitter && (
            <Text>
              Twitter :{' '}
              <Link href={`https://twitter.com/${speaker.twitter}`} isExternal>
                @{speaker.twitter}
              </Link>
            </Text>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};
