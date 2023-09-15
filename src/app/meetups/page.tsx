import { allMeetups } from 'contentlayer/generated';
import { Metadata, ResolvingMetadata } from 'next';
import { Card } from '@/components/Card';
import { generateMeetupLink } from '@/utils/meetup';
import { Badge, Box, Heading, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { RedirectCodeursEnSeine } from '@/components/RedirectCodeursEnSeine';

export async function generateMetadata(
  _: unknown,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const title = 'Meetups | ' + (await parent).title?.absolute;
  const description = "Retrouvez Codeurs en Seine toute l'année !";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: '/images/meetups/social.jpg',
          alt: 'Les meetups Codeurs en Seine',
        },
      ],
    },
  };
}

export default function Meetups() {
  const meetups = allMeetups
    .filter(
      (meetup) => meetup.published === undefined || meetup.published === true
    )
    .sort(
      (a, b) =>
        new Date(b.meetup_date).getTime() - new Date(a.meetup_date).getTime()
    );

  return (
    <>
      <RedirectCodeursEnSeine path="/meetups" />
      <Box>
        <Stack spacing={6}>
          <Heading as="h1" mb={6}>
            Tous les meetups
          </Heading>
          {meetups.map((meetup) => (
            <Card
              key={meetup._id}
              as={Link}
              href={generateMeetupLink(meetup)}
              isLink
            >
              <Stack>
                <Box>
                  <Heading
                    as="h3"
                    color="brand.700"
                    size="lg"
                    fontWeight="normal"
                    textDecoration={meetup.canceled ? 'line-through' : 'none'}
                  >
                    {meetup.title}
                  </Heading>
                  {meetup.canceled && (
                    <Badge colorScheme="orange">Annulé</Badge>
                  )}
                  {meetup.excerpt !== '' && <Text>{meetup.excerpt}</Text>}
                </Box>
                <Box>
                  <Text fontWeight="bold">
                    Meetup le{' '}
                    {new Intl.DateTimeFormat('fr', {
                      dateStyle: 'full',
                    }).format(new Date(meetup.meetup_date))}{' '}
                    de {meetup.meetup_start_time} à {meetup.meetup_end_time}
                  </Text>
                  <Text color="gray.500">{meetup.meetup_location}</Text>
                </Box>
              </Stack>
            </Card>
          ))}
        </Stack>
      </Box>
    </>
  );
}
