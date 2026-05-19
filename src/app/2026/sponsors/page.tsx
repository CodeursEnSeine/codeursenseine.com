import { Box, Button, Heading, Image, Link, Stack, Text, Wrap } from '@chakra-ui/react';
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
            href="https://drive.google.com/file/d/10a0nuwUEcKbr6hWQnRX4Jd2NYpwDW1XA/view"
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
              <Link href="mailto:sponsors@codeursenseine.com"
                    textDecoration="underline">
                sponsors@codeursenseine.com
              </Link>
            </Text>
            <Text>
              Si vous souhaitez soutenir l&apos;événement, téléchargez le dossier et la convention de sponsoring ci-dessous:
            </Text>
            <Wrap>
              <Button
                as="a"
                href="https://drive.google.com/file/d/10a0nuwUEcKbr6hWQnRX4Jd2NYpwDW1XA/view"
                target="_blank"
                colorScheme="brand"
                w={{ base: 'full', lg: 'auto' }}
              >
                Dossier de sponsoring
              </Button>
              <Button
                as="a"
                href="https://drive.google.com/file/d/1roOQR2w_K_F1bA6DjgEFwaz3GNmqq0qg/view"
                target="_blank"
                colorScheme="brand"
                variant="outline"
                w={{ base: 'full', lg: 'auto' }}
              >
                Convention de sponsoring
              </Button>
              </Wrap>
              <Wrap>
                <Button
                as="a"
                href="https://drive.google.com/file/d/1J9zA8NFugcwvt6ox9LNTv8Ry5oe3u6xQ/view"
                target="_blank"
                colorScheme="brand"
                w={{ base: 'full', lg: 'auto' }}
              >
                🇬🇧  Sponsorship file
              </Button>
              <Button
                as="a"
                href="https://drive.google.com/file/d/18D6JCGNN9h96-WF20nJ2esS6NQF1E_vw/view"
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
      {/* <Divider mb="6" />
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
      </Stack> */}
    </>
  );
}
