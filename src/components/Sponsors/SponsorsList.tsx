import React from 'react';
import { AspectRatio, Heading, SimpleGrid, Stack } from '@chakra-ui/react';
import { Card } from '@/components/Card';
import { allSponsors } from 'contentlayer/generated';
import Image from 'next/image';

export const SponsorsList = ({ ...props }) => {
  const sponsors = allSponsors
    .filter((sponsor) => sponsor.sponsor !== 'disabled')
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <Stack spacing={8} {...props}>
      <Heading as="h2" size="md">
        Sponsors 2023 : {sponsors.length} sponsor
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
