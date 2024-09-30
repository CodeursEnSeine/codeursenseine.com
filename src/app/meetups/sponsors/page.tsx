import { allSponsors } from 'contentlayer/generated';
import { Metadata, ResolvingMetadata } from 'next';
import { SponsorCard } from '@/components/Sponsors';
import { Heading, Link, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { RedirectCodeursEnSeine } from '@/components/RedirectCodeursEnSeine';

export async function generateMetadata(
  _: unknown,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const previousTitle = 'Sponsors Meetups | ' + (await parent).title?.absolute;

  return {
    title: previousTitle,
    alternates: {
      canonical: 'meetups/sponsors',
    },
  };
}

export default function MeetupSponsors() {
  const sponsors = allSponsors
    .filter((meetup) => meetup.isMeetupSponsor)
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <Stack spacing="8">
      <RedirectCodeursEnSeine path="/meetups/sponsors" />

      <Heading as="h1">Devenir Sponsor ?</Heading>
      <Text>
        Codeurs en Seine est à la recherche de sponsors pour proposer un
        événement d&apos;une qualité toujours meilleure.
      </Text>
      <Text>
        Les partenaires des éditions précédentes ont confirmé la visibilité
        offerte par ce sponsoring, surtout dans le cadre d&apos;une politique de
        recrutement.
      </Text>
      <Text>
        Si vous souhaitez soutenir l&apos;événement, téléchargez{' '}
        <Link
          href="https://drive.google.com/file/d/1WP6AZ5RIvPfyBC-k_tdqaqTNoVU7ocoW/view?usp=sharing"
          isExternal
          textDecoration="underline"
        >
          le dossier de sponsoring
        </Link>
        ,{' '}
        <Link
          href="https://drive.google.com/file/d/1bhG3vWewbLd8x7X8wUiq89IiqJl-dhNe/view?usp=sharing"
          isExternal
          textDecoration="underline"
        >
          la convention de sponsoring
        </Link>{' '}
        et contactez-nous à l&apos;adresse{' '}
              <Link href="mailto:sponsors@codeursenseine.com"
                    textDecoration="underline">
                sponsors@codeursenseine.com
              </Link>
      </Text>
      <SimpleGrid columns={{ base: 1, sm: 2 }} gap={8}>
        {sponsors.map((sponsor) => (
          <SponsorCard key={sponsor._id} sponsor={sponsor} />
        ))}
      </SimpleGrid>
    </Stack>
  );
}
