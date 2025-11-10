import { Heading, Link, Stack, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions légales | Codeurs en Seine',
  description: "Informations légales de l'association Codeurs en Seine.",
  alternates: {
    canonical: 'mentions-legales',
  },
  openGraph: {
    title: 'Mentions légales | Codeurs en Seine',
    description: "Informations légales de l'association Codeurs en Seine.",
  },
};

export default function MentionsLegalesPage() {
  return (
    <Stack spacing={6}>
      <Heading as="h1" size="xl">
        Mentions légales
      </Heading>
      <Stack spacing={4}>
        <Text>
          Le site <strong>codeursenseine.com</strong> est édité par{' '}
          <strong>Codeurs en Seine</strong>, association loi 1901 déclarée à
          Rouen (SIREN 849 622 543), dont le siège social est situé :
          <br />
          18 rue Jacques Anquetil - 76190 Allouville-Bellefosse, France.
        </Text>
        <Text>
          Responsable de la publication : <strong>Yann Petit</strong>
          <br />
          Email :{' '}
          <Link href="mailto:contact@codeursenseine.com">
            contact@codeursenseine.com
          </Link>
        </Text>
        <Text>
          Hébergement :
          <br />
          <strong>Netlify, Inc.</strong>
          <br />
          2325 3rd Street, Suite 296, San Francisco, CA 94107, USA
          <br />
          Site :{' '}
          <Link
            href="https://www.netlify.com"
            isExternal
            textDecoration="underline"
          >
            www.netlify.com
          </Link>
        </Text>
        <Text>
          Pour toute information sur la collecte et le traitement des données,
          notamment des adresses e-mail nécessaires à l'envoi de la newsletter,
          veuillez consulter notre{' '}
          <Link as={NextLink} href="/confidentialite" textDecoration="underline">
            Politique de confidentialité
          </Link>
          .
        </Text>
      </Stack>
    </Stack>
  );
}
