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
        Si vous souhaitez soutenir l&apos;événement, téléchargez le{' '}
        <Link
          href="https://drive.google.com/file/d/1DiJViRo4s8PxlcD7yklEOSEZ2lnFb-f0/view?usp=share_link"
          isExternal
        >
          dossier de sponsoring
        </Link>
        , la{' '}
        <Link
          href="https://docs.google.com/document/d/166Nwbe7Z19wAQhVh1i8Y1UUjLhloeiwRJ1oF87YDfGE/edit?usp=share_link"
          isExternal
        >
          convention de sponsoring
        </Link>{' '}
        et contactez-nous.
      </Text>
      <SimpleGrid columns={{ base: 1, sm: 2 }} gap={8}>
        {sponsors.map((sponsor) => (
          <SponsorCard key={sponsor._id} sponsor={sponsor} />
        ))}
      </SimpleGrid>
    </Stack>
  );
}
