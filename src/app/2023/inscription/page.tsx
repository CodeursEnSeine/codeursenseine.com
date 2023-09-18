import { InscriptionTropEvent } from '@/components/InscriptionTropEvent';
import { Box, Heading, Text } from '@chakra-ui/react';
import { Metadata, ResolvingMetadata } from 'next';
import Script from 'next/script';
// import Script from 'next/script';

export async function generateMetadata(
  _: unknown,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const previousTitle = 'Inscription | ' + (await parent).title?.absolute;

  return {
    title: previousTitle,
  };
}

export default function CoC() {
  return (
    <>
      <Heading as="h1" mb={8}>
        Inscription
      </Heading>

      <Box mb={5}>
        <Text>
          <strong>
            L&apos;accès reste gratuit mais l&apos;inscription obligatoire
          </strong>
          . Si vous aimez cette journée et souhaitez soutenir
          l&apos;association, n&apos;hésitez pas à{' '}
          <strong>indiquer le montant auquel vous désirez participer</strong>{' '}
          lors de votre commande.
        </Text>
        <Text textAlign="right" mt={5} fontStyle="italic">
          L&apos;équipe Codeurs en Seine
        </Text>
      </Box>

      <InscriptionTropEvent />
    </>
  );
}
