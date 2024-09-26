import { SponsorCard } from '@/components/Sponsors';
import { Box, Button, Divider, Heading, Image, Link, SimpleGrid, Stack, Text, Wrap } from '@chakra-ui/react';
import { allSponsors } from 'contentlayer/generated';
import { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata(
  _: unknown,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const title = 'Sponsors | ' + (await parent).title?.absolute;

  return {
    title,
    alternates: {
      canonical: 'sponsors',
    },
  };
}

export default function Sponsors() {
  const sponsors = allSponsors
    .filter((sponsor) => sponsor.sponsor !== 'disabled')
    .sort((a, b) => a.name.localeCompare(b.name));

  const sponsorLevels = ['platinium', 'gold', 'silver', 'bronze', 'partners'];

  return (
    <>
      <Heading as="h1" mb="8">
        Devenir Sponsor
      </Heading>

      <Stack direction={{ base: 'column', md: 'row' }} spacing="8" mb="8">
        <Box maxWidth="250px" minW="200px" flex="none">
          <Link
            isExternal
            display="block"
            boxShadow="brand"
            overflow="hidden"
            borderRadius="md"
            href="https://drive.google.com/file/d/1WP6AZ5RIvPfyBC-k_tdqaqTNoVU7ocoW/view?usp=sharing"
          >
            <Image
              src="/images/ces/dossier-sponsoring.jpg"
              alt="Première page du dossier de sponsoring de Codeurs en Seine"
              width="250"
              height="350"
            />
          </Link>
        </Box>
        <Box flex="1">
          <Stack spacing={8}>
            <Text>
              Codeurs en Seine est à la recherche de sponsors pour proposer un
              événement d&apos;une qualité toujours meilleure.
            </Text>
            <Text>
              Les partenaires des éditions précédentes ont confirmé la
              visibilité offerte par ce sponsoring, surtout dans le cadre
              d&apos;une politique de recrutement.
            </Text>
            <Text>
              Si vous avez des questions contactez nous à l&apos;adresse{' '}
              <Link href="mailto:sponsors@codeursenseine.com">
                sponsors@codeursenseine.com
              </Link>
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
              <Link href="mailto:sponsors@codeursenseine.com">
                sponsors@codeursenseine.com
              </Link>
              .
            </Text>
            <Wrap>
              <Button
                as="a"
                href="https://drive.google.com/file/d/1WP6AZ5RIvPfyBC-k_tdqaqTNoVU7ocoW/view?usp=sharing"
                target="_blank"
                colorScheme="brand"
                w={{ base: 'full', lg: 'auto' }}
              >
                Dossier de sponsoring
              </Button>

              <Button
                as="a"
                href="https://drive.google.com/file/d/1bhG3vWewbLd8x7X8wUiq89IiqJl-dhNe/view?usp=sharing"
                target="_blank"
                colorScheme="brand"
                variant="outline"
                w={{ base: 'full', lg: 'auto' }}
              >
                Convention de sponsoring
              </Button>
              <Button
                as="a"
                href="https://drive.google.com/file/d/1gYC75ad8iIPm7hE8nICMxXmnRwUNAHwP/view?usp=sharing"
                target="_blank"
                colorScheme="brand"
                variant="outline"
                w={{ base: 'full', lg: 'auto' }}
              >
                🇬🇧 Sponsorship agreement
              </Button>
            </Wrap>
          </Stack>
        </Box>
      </Stack>
      <Divider mb="6" />
      <Stack spacing="6">
        {sponsorLevels.map((level) => {
          const thisLevelSponsors = sponsors.filter(
            (sponsor) => sponsor.sponsor === level
          );

          return (
            thisLevelSponsors.length > 0 && (
              <Stack spacing="6" key={level}>
                <Heading size="lg" color="brand.700" fontWeight="normal">
                  Sponsors{' '}
                  {level === 'partners' ? 'partenaire logistique' : level}
                </Heading>
                <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap={8}>
                  {thisLevelSponsors.map((sponsor, index) => (
                    <SponsorCard key={index} sponsor={sponsor} />
                  ))}
                </SimpleGrid>
                <Divider />
              </Stack>
            )
          );
        })}
      </Stack>
    </>
  );
}
