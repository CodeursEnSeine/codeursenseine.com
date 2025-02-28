import {
  Heading,
  Link,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';

export async function generateMetadata(
  _: unknown,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const previousTitle = 'Review 2023 | ' + (await parent).title?.absolute;

  return {
    title: previousTitle,
    alternates: {
      canonical: 'review-2023',
    },
  };
}

export default function Home() {
  return (
    <Stack spacing="4">
      <Heading as="h1">Codeurs en Seine : Bilan de l’édition 2023</Heading>
      <Heading as="h2" size="xl">
        Bilan participants
      </Heading>
      <Heading as="h3" size="lg">
        Meetups
      </Heading>
      <Text>
        Coté meetup, c&apos;est 6 meetups en physique et 3 meetups sur twitch.
      </Text>
      <Text>
        Les rediffusions des 3 meetups sur twitch se retrouvent sur notre chaîne
        Youtube.
      </Text>
      <Text>
        <Link
          isExternal
          href="https://www.youtube.com/playlist?list=PLbbYL6fWx8Wzw2zc_5W5D7iny9XTtkZDp"
        >
          Playlist Youtube Meetup Codeurs en Seine 2023
        </Link>
      </Text>

      <Text>
        Le bilan YouTube: 386 vues sur les vidéos des meetups streamés sur
        twitch de 2023.
      </Text>

      <Heading as="h3" size="lg">
        Conférence
      </Heading>
      <Text>
        Coté conférence annuelle, elle s&apos;est déroulée le jeudi 28 octobre
        2023 et été composée de 26 orateurs.
      </Text>

      <Text>
        <Link
          isExternal
          href="https://www.youtube.com/playlist?list=PLbbYL6fWx8WybrUDhYES0JgqfANVME4OV"
        >
          Playlist Youtube Conférence Codeurs en Seine 2023
        </Link>
      </Text>

      <Text>
        Le bilan YouTube: ~2500 vues sur l&apos;ensemble des vidéos (toujours en
        cours de publication).
      </Text>

      <Heading as="h4">La participation</Heading>
      <Heading as="h5">Répartition par région et département</Heading>
      <Table>
        <Thead>
          <Tr>
            <Th>Zone</Th>
            <Th>Nb de participants</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Seine-Maritime</Td>
            <Td>605</Td>
          </Tr>
          <Tr>
            <Td>Eure</Td>
            <Td>69</Td>
          </Tr>

          <Tr>
            <Td>Calvados</Td>
            <Td>37</Td>
          </Tr>

          <Tr>
            <Td>Ile de France</Td>
            <Td>34</Td>
          </Tr>

          <Tr>
            <Td>Autres</Td>
            <Td>32</Td>
          </Tr>

          <Tr>
            <Td>Inconnu</Td>
            <Td>32</Td>
          </Tr>
        </Tbody>
      </Table>

      <Image
        width={418}
        height={455}
        src="/images/review/2023/chart_repart_departements.png"
        alt="Répartitions par départements 2023"
      />

      <Heading as="h5">Répartition par statuts socio-profesionnel</Heading>
      <Table>
        <Thead>
          <Tr>
            <Th>Status</Th>
            <Th>Nb de participants</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Professionnel</Td>
            <Td>723</Td>
          </Tr>
          <Tr>
            <Td>Étudiant</Td>
            <Td>471</Td>
          </Tr>
          <Tr>
            <Td>Chômeur</Td>
            <Td>34</Td>
          </Tr>
          <Tr>
            <Td>Autre</Td>
            <Td>38</Td>
          </Tr>
          <Tr>
            <Td>Inconnu</Td>
            <Td>11</Td>
          </Tr>
        </Tbody>
      </Table>

      <Image
        width={515}
        height={326}
        src="/images/review/2023/chart_statuts_prof.png"
        alt="Répartitions par statuts socio-professionnels 2023"
      />

      <Heading as="h2" size="xl">
        Bilan comptable
      </Heading>
      <Heading as="h3" size="lg">
        Les revenus
      </Heading>

      <Table>
        <Thead>
          <Tr>
            <Th>Catégories</Th>
            <Th>Montants</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Platinum</Td>
            <Td>10&nbsp;000,00 €</Td>
          </Tr>
          <Tr>
            <Td>Gold</Td>
            <Td>10&nbsp;000,00 €</Td>
          </Tr>
          <Tr>
            <Td>Silver</Td>
            <Td>35&nbsp;500,00 €</Td>
          </Tr>
          <Tr>
            <Td>Bronze</Td>
            <Td>3&nbsp;750 € </Td>
          </Tr>
          <Tr>
            <Td>Dons</Td>
            <Td>1&nbsp;193,84 €</Td>
          </Tr>

          <Tr>
            <Td>Subventions / Aides</Td>
            <Td>5&nbsp;000,00 € </Td>
          </Tr>
          <Tr>
            <Td>Total</Td>
            <Td>65&nbsp;443,84 €</Td>
          </Tr>
        </Tbody>
      </Table>

      <Image
        width={600}
        height={300}
        src="/images/review/2023/Repartitions_des_financements.png"
        alt="Revenus 2023"
      />

      <Heading as="h3" size="lg">
        Les dépenses
      </Heading>

      <Table>
        <Thead>
          <Tr>
            <Th>Catégories</Th>
            <Th>Montants</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Kindarena + Sono</Td>
            <Td>38&nbsp;649,48 €</Td>
          </Tr>
          <Tr>
            <Td>Buffet & Boissons</Td>
            <Td>7&nbsp;507,59 €</Td>
          </Tr>
          <Tr>
            <Td>Défraiement Speakers</Td>
            <Td>3&nbsp;928,62 €</Td>
          </Tr>
          <Tr>
            <Td>Accessibilité S&M</Td>
            <Td>2&nbsp;520,00 €</Td>
          </Tr>

          <Tr>
            <Td>Logistiques et divers</Td>
            <Td>1&nbsp;224,85 €</Td>
          </Tr>
          <Tr>
            <Td>Communication</Td>
            <Td>697,66 €</Td>
          </Tr>
          <Tr>
            <Td>Total</Td>
            <Td>54&nbsp;528,20 €</Td>
          </Tr>
        </Tbody>
      </Table>

      <Image
        width={600}
        height={300}
        src="/images/review/2023/depenses-2023.png"
        alt="Dépenses 2023"
      />

      <Heading as="h3" size="lg">
        Bilan
      </Heading>

      <Text>Une édition 2023 qui s&apos;est soldée par une réussite.</Text>
      <Text>
        Ce sont 1028 personnes qui ont sillonées les allées du Kindarena tout au
        long de la journée. (sur 1277 inscrits)
      </Text>
      <Text>
        L&apos;édition 2024 aura également lieu en physique au Kindarena,
        cependant elle devrait se dérouler cette année au mois de novembre!
      </Text>
      <Text>Restez à l&apos;écoute !</Text>
    </Stack>
  );
}
