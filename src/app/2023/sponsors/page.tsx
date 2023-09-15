import { allSponsors } from 'contentlayer/generated';
import { Metadata, ResolvingMetadata } from 'next';
import { SponsorCard } from '@/components/Sponsors';
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Grid,
  Heading,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Wrap,
} from '@chakra-ui/react';
import Image from 'next/image';

export async function generateMetadata(
  _: unknown,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const previousTitle = 'Sponsors | ' + (await parent).title?.absolute;

  return {
    title: previousTitle,
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

      <Stack direction={{ base: 'column', md:'row'}} spacing="8" mb="8">
        <Box maxWidth="250px" minW="200px" flex="none">
          <Link
            isExternal
            display="block"
            boxShadow="brand"
            overflow="hidden"
            borderRadius="md"
            href="https://drive.google.com/file/d/1zclVxBxeUZFUxX2kxVXCoAW8CnFr3p40/view?usp=sharing"
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
              Si vous souhaitez soutenir l&apos;événement, téléchargez{' '}
              <Link
                href="https://drive.google.com/file/d/1zclVxBxeUZFUxX2kxVXCoAW8CnFr3p40/view?usp=sharing"
                isExternal
                textDecoration="underline"
              >
                le dossier de sponsoring
              </Link>
              ,{' '}
              <Link
                href="https://docs.google.com/document/d/14dtwH8QfzXuvPddlbo2fYgRy78RPtwwU1vPsH9tdgr4/edit?usp=sharing"
                isExternal
                textDecoration="underline"
              >
                la convention de sponsoring
              </Link>{' '}
              et contactez-nous à l&apos;adresse{' '}
              <Link href="mailto:contact@codeursenseine.com">
                contact@codeursenseine.com
              </Link>
              .
            </Text>
            <Wrap>
              <Button
                as="a"
                href="https://drive.google.com/file/d/1DiJViRo4s8PxlcD7yklEOSEZ2lnFb-f0/view?usp=share_link"
                target="_blank"
                colorScheme="brand"
                w={{base: 'full', lg: 'auto'}}
              >
                Dossier de sponsoring
              </Button>

              <Button
                as="a"
                href="https://docs.google.com/document/d/166Nwbe7Z19wAQhVh1i8Y1UUjLhloeiwRJ1oF87YDfGE/edit?usp=share_link"
                target="_blank"
                colorScheme="brand"
                variant="outline"
                w={{base: 'full', lg: 'auto'}}
              >
                Convention de sponsoring
              </Button>
              <Button
                as="a"
                href="https://docs.google.com/document/d/1GR7_HU9-WQwtNa7ZNi6_vKXj3zTSNNq8trwPaIIQbmU/edit?usp=sharing"
                target="_blank"
                colorScheme="brand"
                variant="outline"
                w={{base: 'full', lg: 'auto'}}
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
