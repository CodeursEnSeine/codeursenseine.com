import { Card } from '@/components/Card';
import Layout from '@/components/layout';
import { Flex, Grid, Heading, Stack } from '@chakra-ui/react';
import { allAssociations, allSponsors } from 'contentlayer/generated';
import Image from 'next/image';
import { ReactNode } from 'react';

export default function MeetupLayout(props: { children: ReactNode }) {
  const sponsors = allSponsors
    .filter((sponsor) => sponsor.isMeetupSponsor)
    .sort((a, b) => a.name.localeCompare(b.name));

  const associations = allAssociations.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <Layout theme="meetups">
      <Grid templateColumns={{ base: '1fr', md: '2.5fr 1fr' }} gap={8}>
        {props.children}

        <Stack spacing={10}>
          <Stack spacing={6}>
            <Heading as="h2" size="lg" fontWeight="normal">
              Sponsors meetups
            </Heading>
            <Grid templateColumns="1fr 1fr" gap={4}>
              {sponsors.map((sponsor) => (
                  <Card
                      isLink
                      as="a"
                      href={sponsor.link}
                      title={sponsor.name}
                      key={sponsor.name}
                      p={0}
                      m="auto"
                  >
                    <Image
                        src={sponsor.logoSrc}
                        alt={sponsor.name}
                        width="200"
                        height="100"
                    />
                  </Card>
              ))}
            </Grid>
            <a
                href="https://www.devoxx.fr/"
                target="_blank"
                rel="noopener noreferrer"
            >
              <Image
                  src="/images/meetups/devoxx-france-logo-2024-carre.png"
                  alt="Devoxx France 2024"
                  width="250"
                  height="100"
              />
            </a>
          </Stack>
          <Stack spacing={6}>
            <Heading as="h2" size="lg" fontWeight="normal">
              Associations
            </Heading>
            <Grid templateColumns="1fr 1fr" gap={4}>
              {associations.map((association) => (
                  <Card
                      isLink
                      as="a"
                  href={association.link}
                  title={association.name}
                  key={association.name}
                  p={0}
                >
                  <Flex align="center" justify="center">
                    <Image
                      src={association.logoSrc}
                      alt={association.name}
                      width="300"
                      height="300"
                    />
                  </Flex>
                </Card>
              ))}
            </Grid>
          </Stack>
        </Stack>
      </Grid>
    </Layout>
  );
}
