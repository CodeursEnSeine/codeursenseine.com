import { Heading, Link, Stack, Text, List, ListItem } from '@chakra-ui/react';
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
          Le site <strong>codeursenseine.com</strong> collecte uniquement deux
          types de données :
        </Text>
        <List spacing={4} pl="4">
          <ListItem>
            <Text as="span" fontWeight="bold">
              Adresses e-mail
            </Text>{' '}
            pour l'envoi de la newsletter, via le service{' '}
            <strong>Brevo (Sendinblue SAS)</strong>, 106 boulevard Haussmann,
            75008 Paris, France. Ces adresses sont utilisées exclusivement pour
            diffuser des informations sur les évènements Codeurs en Seine. Elles
            ne sont ni revendues ni partagées et sont supprimées sur demande ou
            à la fin de leur usage.
          </ListItem>
          <ListItem>
            <Text as="span" fontWeight="bold">
              Données d'inscription a l'évènement
            </Text>{' '}
            (nom, prénom, adresse e-mail) fournies par la plateforme{' '}
            <strong>Tropevent.com</strong>. Ces données sont communiquées a
            Codeurs en Seine uniquement afin de vérifier les droits d'entrée et
            de garantir la sécurité le jour J. Elles ne sont{' '}
            <strong>ni conservées, ni réutilisées, ni transmises</strong> après
            l'évènement. Les utilisateurs sont invités à consulter la{' '}
            <Link
              href="https://www.tropevent.com/fr/info/privacy"
              isExternal
              textDecoration="underline"
            >
              politique de confidentialité de Tropevent
            </Link>{' '}
            pour plus d'informations sur leur propre traitement des données.
          </ListItem>
        </List>
        <Text>
          Conformément au Règlement Général sur la Protection des Données
          (RGPD), vous pouvez exercer vos droits d'accès, de rectification ou de
          suppression en écrivant a{' '}
          <Link href="mailto:contact@codeursenseine.com">
            contact@codeursenseine.com
          </Link>
          .
        </Text>
        <Text>
          Aucun cookie ni traceur d'audience n'est déposé sur votre appareil
          lors de la navigation sur le site.
        </Text>
      </Stack>
    </Stack>
  );
}
