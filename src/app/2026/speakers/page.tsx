import { SpeakerCard } from '@/components/SpeakerCard';
import { Box, Heading, SimpleGrid, Stack } from '@chakra-ui/react';
import { allSpeakers, allTalks } from 'contentlayer/generated';
import { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata(
  _: unknown,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const previousTitle = 'Speakers | ' + (await parent).title?.absolute;

  return {
    title: previousTitle,
    alternates: {
      canonical: 'speakers',
    },
  };
}

export default function SpeakerPage() {
  const speakers = allSpeakers;
  const talks = allTalks;

  return (
    <Stack>
      <Heading as="h1" mb={8}>
        Intervenants
      </Heading>
      <Stack my={5}>
        <SimpleGrid columns={{ base: 1, lg: 1, xl: 2 }} spacing="6">
          {speakers?.map((speaker) => (
            <SpeakerCard
              key={speaker._id}
              speaker={speaker}
              talks={talks.filter(
                (talk) => talk.speakers?.includes(speaker.slug)
              )}
            />
          ))}
        </SimpleGrid>
      </Stack>
    </Stack>
  );
}
