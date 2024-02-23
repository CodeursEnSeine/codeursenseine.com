import { Card } from '@/components/Card';
import { AspectRatio, Heading, SimpleGrid, Stack } from '@chakra-ui/react';
import { allSponsors } from 'contentlayer/generated';
import Image from 'next/image';

export const SponsorsList = ({ ...props }) => {
  // changer ça pour afficher ou non la liste des sponsors
  // sur toutes les pages lorsqu'on en aura
  const isDown = true;

  const sponsors = allSponsors
    .filter((sponsor) => sponsor.sponsor !== 'disabled')
    .sort((a, b) => a.name.localeCompare(b.name));

  if (isDown) return null;

  return (
    <Stack spacing={8} {...props}>
      <Heading as="h2" size="md">
        Sponsors 2024 : {sponsors.length} sponsor
        {sponsors.length > 1 ? 's' : ''}.
      </Heading>
      <SimpleGrid columns={{ base: 3, sm: 4, lg: 5 }} gap={4}>
        {sponsors.map((sponsor) => (
          <Card key={sponsor._id} p={0} isLink as="a" href={sponsor.link}>
            <AspectRatio ratio={320 / 190}>
              <Image
                src={sponsor.logoSrc ?? ''}
                width={320}
                height={190}
                alt={sponsor.name}
              />
            </AspectRatio>
          </Card>
        ))}
      </SimpleGrid>
    </Stack>
  );
};
