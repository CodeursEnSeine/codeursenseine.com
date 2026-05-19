import { Heading, SimpleGrid, Stack } from '@chakra-ui/react';
import { allSponsors } from 'contentlayer/generated';
import { SponsorCard } from "@/components/Sponsors/SponsorCard";

export const SponsorsList = ({ ...props }) => {
  // changer ça pour afficher ou non la liste des sponsors
  // sur toutes les pages lorsqu'on en aura
  const isDown = false;

  const sponsors = allSponsors
    .filter((sponsor) => sponsor.sponsor !== 'disabled')
    .sort((a, b) => a.name.localeCompare(b.name));

  if (isDown) return null;

  return (
    <Stack spacing={8} {...props}>
      <Heading as="h2" size="md">
        Sponsors 2026 : {sponsors.length} sponsor
        {sponsors.length > 1 ? 's' : ''}.
      </Heading>
      <SimpleGrid columns={{base: 1, sm: 2, lg: 3}} gap={8}>
        {sponsors.map((sponsor) => (
          <SponsorCard key={sponsor._id} sponsor={sponsor}/>
        ))}
      </SimpleGrid>
    </Stack>
  );
};
