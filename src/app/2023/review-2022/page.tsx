import { Metadata, ResolvingMetadata } from 'next';
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
import Image from 'next/image';

export async function generateMetadata(
  _: unknown,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const previousTitle = 'Review 2022 | ' + (await parent).title?.absolute;

  return {
    title: previousTitle,
  };
}

export default function Home() {
  return (
    <Stack spacing="4">
      <Heading as="h1">
        Codeurs en Seine : Bilan de l’édition 2022 - L&apos;après COVID
      </Heading>
      <Heading as="h2" size="xl">
        Bilan participants
      </Heading>
      <Heading as="h3" size="lg">
        Meetups
      </Heading>
      <Text>
        Coté meetup, c&apos;est 2 meetups en physique et 2 meetups sur twitch.
      </Text>
      <Text>
        L&apos;ensemble des vidéos se retrouvent sur notre chaîne Youtube.
      </Text>
      <Text>
        <Link
          isExternal
          href="https://www.youtube.com/playlist?list=PLbbYL6fWx8Wx2W9Z1vamMJrow6_oE-xmn"
        >
          Playlist Youtube Meetup Codeurs en Seine 2022
        </Link>
      </Text>

      <Text>
        Le bilan YouTube: 305 vues sur l&apos;ensemble des vidéos des meetups de
        2022.
      </Text>

      <Heading as="h3" size="lg">
        Conférence
      </Heading>
      <Text>
        Coté conférence annuelle, elle s&apos;est déroulée le jeudi 17 novembre
        2022 et été composée de 35 orateurs.
      </Text>

      <Text>
        <Link
          isExternal
          href="https://www.youtube.com/watch?v=duSKKN_53xQ&list=PLbbYL6fWx8WyCEehq-sZx_iM3a4NVAoi-"
        >
          Playlist Youtube Conférence Codeurs en Seine 2022
        </Link>
      </Text>

      <Text>Le bilan YouTube: ~6215 vues sur l&apos;ensemble des vidéos.</Text>

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
            <Td>736</Td>
          </Tr>
          <Tr>
            <Td>Eure</Td>
            <Td>96</Td>
          </Tr>

          <Tr>
            <Td>Calvados</Td>
            <Td>31</Td>
          </Tr>

          <Tr>
            <Td>Ile de France</Td>
            <Td>45</Td>
          </Tr>

          <Tr>
            <Td>Autres</Td>
            <Td>19</Td>
          </Tr>
        </Tbody>
      </Table>

      <Image
        width={600}
        height={300}
        src="/images/review/2022/chart_repart_departements.png"
        alt="Répartitions par départements 2022"
      />
      <Image
        width={600}
        height={300}
        src="/images/review/2022/chart_repart_regions.png"
        alt="Répartitions par Régions 2022"
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
            <Td>594</Td>
          </Tr>
          <Tr>
            <Td>Étudiant</Td>
            <Td>296</Td>
          </Tr>
          <Tr>
            <Td>Autre</Td>
            <Td>23</Td>
          </Tr>
          <Tr>
            <Td>Chômeur</Td>
            <Td>21</Td>
          </Tr>
        </Tbody>
      </Table>

      <Image
        width={600}
        height={300}
        src="/images/review/2022/chart_statuts_prof.png"
        alt="Répartitions par statuts socio-professionnels 2022"
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
            <Td>Gold</Td>
            <Td>10&nbsp;500,00 €</Td>
          </Tr>
          <Tr>
            <Td>Silver</Td>
            <Td>31&nbsp;500,00 €</Td>
          </Tr>
          <Tr>
            <Td>Bronze</Td>
            <Td>3&nbsp;000 € </Td>
          </Tr>
          <Tr>
            <Td>Dons</Td>
            <Td>1&nbsp;371,68 €</Td>
          </Tr>

          <Tr>
            <Td>Subventions / Aides</Td>
            <Td>5&nbsp;000,00 € </Td>
          </Tr>
          <Tr>
            <Td>Total</Td>
            <Td>51&nbsp;371,68 €</Td>
          </Tr>
        </Tbody>
      </Table>

      <Image
        width={600}
        height={300}
        src="/images/review/2022/Repartitions_des_financements.png"
        alt="Revenus 2022"
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
            <Td>35 473,80 €</Td>
          </Tr>
          <Tr>
            <Td>Buffet & Boissons</Td>
            <Td>8 341,19 €</Td>
          </Tr>
          <Tr>
            <Td>Défraiement Speakers</Td>
            <Td>3 524,45 €</Td>
          </Tr>
          <Tr>
            <Td>Accessibilité S&M</Td>
            <Td>2 520,00 €</Td>
          </Tr>

          <Tr>
            <Td>Logistiques et divers</Td>
            <Td>1 322,68 €</Td>
          </Tr>
          <Tr>
            <Td>Enregistrement vidéo</Td>
            <Td>776,36 €</Td>
          </Tr>
          <Tr>
            <Td>Communication</Td>
            <Td>674,99 €</Td>
          </Tr>
          <Tr>
            <Td>Total</Td>
            <Td>52 633,47 €</Td>
          </Tr>
        </Tbody>
      </Table>

      <Image
        width={600}
        height={300}
        src="/images/review/2022/depenses-2022.png"
        alt="Dépenses 2022!"
      />

      <Heading as="h3" size="lg">
        Bilan
      </Heading>

      <Text>Une édition 2022 qui s&apos;est soldée par une réussite.</Text>
      <Text>
        Les craintes de participation à l&apos;événement suite à 2 ans de
        COVID/confinement, ne se sont pas réalisées.
      </Text>
      <Text>
        Ce sont pas loin de 1100 personnes qui ont sillonées les allées du
        Kindarena tout au long de la journée.
      </Text>
      <Text>
        L&apos;édition 2023 aura également lieu en physique au Kindarena,
        cependant il est envigé qu&apos;elle se déroule 1 mois plus tôt!
      </Text>
      <Text>
        Il est aussi prévu que la fréquence des meetups revienne à 1 fois par
        mois l&apos;instar de 2022 où peu de meetup ont été organisés.
      </Text>
      <Text>Restez à l&apos;écoute !</Text>
    </Stack>
  );
}
