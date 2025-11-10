import { Heading, Link, Stack, Text } from '@chakra-ui/react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de confidentialité | Codeurs en Seine',
  description:
    'Comprenez comment le site codeursenseine.com traite vos données personnelles.',
  alternates: {
    canonical: 'confidentialite',
  },
  openGraph: {
    title: 'Politique de confidentialité | Codeurs en Seine',
    description:
      'Comprenez comment le site codeursenseine.com traite vos données personnelles.',
  },
};

export default function ConfidentialitePage() {
  return (
    <Stack spacing={6}>
      <Heading as="h1" size="xl">
        Politique de confidentialité
      </Heading>
      <Stack spacing={4}>
        <Text>
          Le site <strong>codeursenseine.com</strong> collecte uniquement les
          adresses e-mail des personnes souhaitant recevoir la newsletter de
          l'association. Cette collecte se fait via un formulaire géré par le
          service <strong>Brevo (Sendinblue SAS)</strong>, situé : 106 boulevard
          Haussmann, 75008 Paris, France.
        </Text>
        <Text>
          Les adresses sont utilisées exclusivement pour l'envoi d'informations
          liées aux événements Codeurs en Seine et ne sont ni vendues ni
          transmises à des tiers. Elles sont supprimées sur demande ou à la fin
          de leur utilisation.
        </Text>
        <Text>
          Conformément au Règlement Général sur la Protection des Données
          (RGPD), vous pouvez exercer vos droits d'accès, de rectification et de
          suppression en écrivant à{' '}
          <Link href="mailto:contact@codeursenseine.com">
            contact@codeursenseine.com
          </Link>
          .
        </Text>
        <Text>
          Aucun cookie ou traceur d'audience n'est déposé sur votre appareil
          lors de la navigation sur le site.
        </Text>
      </Stack>
    </Stack>
  );
}
