'use client';

import { SponsorsList } from '@/components/Sponsors';
import {
  Box,
  Heading,
  Icon,
  Link,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi';

export default function InfoPage() {
  return (
    <Stack spacing="8">
      {/*<Stack as="section">
        <Heading as="h2" fontSize="xl">
          Plan de Codeurs en Seine
        </Heading>
        <Image
          src="/images/ces/plan-sponsors.png"
          alt="Plan de Codeurs en Seine"
          width={1200}
          height={1000}
        />
      </Stack>*/}

      <Stack as="section">
        <Heading as="h2" fontSize="xl">
          Comment venir à Codeurs en Seine&nbsp;?
        </Heading>

        <Stack spacing="4" mt="4">
          <Box>
            <Heading as="h3" fontSize="lg">
              Lieu de l&apos;événement{' '}
              <span role="img" aria-label="Emoji de point sur carte">
                📍
              </span>
            </Heading>
            <Text as="address">
              Kindarena - Palais des sports de Rouen
              <br />
              40 rue de Lillebonne
              <br />
              76000 ROUEN, FRANCE
            </Text>
          </Box>

          <Box width={{ base: '100%' }} textAlign="center" px="4">
            <iframe
              title="Carte montrant l'emplacement du Kindarena, le palais des sports de Rouen"
              width="100%"
              height="350"
              src="https://www.openstreetmap.org/export/embed.html?bbox=1.0586571693420412%2C49.44463553274022%2C1.067626476287842%2C49.45076679110293&amp;layer=mapnik&amp;marker=49.44769777013715%2C1.0631418228149414"
              style={{ border: '1px solid black', margin: 'auto' }}
            />

            <Text as="small">
              <Link
                href="https://www.openstreetmap.org/?mlat=49.44770&amp;mlon=1.06314#map=17/49.44770/1.06314"
                title="Lien vers le site d'OpenStreetMap pour afficher la carte en plus grande"
                isExternal
              >
                Afficher une carte plus grande{' '}
                <Icon as={FiExternalLink} mx="1" />
              </Link>
            </Text>
          </Box>

          <Stack spacing="4" divider={<StackDivider />}>
            <Box>
              <Heading as="h3" fontSize="lg">
                Venir en vélo{' '}
                <span role="img" aria-label="Emoji de vélo">
                  🚲
                </span>
              </Heading>
              <Text fontWeight="bold">
                Il existe plusieurs parking à vélo autour du Kindarena
              </Text>
              <Link
                color="brand.700"
                href="https://www.cyclosm.org/#map=17/49.44759/1.06432/cyclosm"
                isExternal
              >
                Il est possible de les consulter sur CyclOSM
                <Icon as={FiExternalLink} mx="1" />
              </Link>
            </Box>
            <Box>
              <Heading as="h3" fontSize="lg">
                Venir en transport public{' '}
                <span role="img" aria-label="Emoji de train">
                  🚆
                </span>
              </Heading>
              <Text fontWeight="bold">TEOR T1, T2 ou T3</Text>
              <Text>Arrêt Mont-Riboudet/Kindarena</Text>
            </Box>

            <Box>
              <Heading as="h3" fontSize="lg">
                Venir en voiture{' '}
                <span role="img" aria-label="Emoji de voiture">
                  🚗
                </span>
              </Heading>

              <Stack spacing={4}>
                <Box>
                  <Text fontWeight="bold">
                    Parking du Mont Riboudet (payant)
                  </Text>
                  <Text mb="">Rue Micheline Ostermeyer, 76000 Rouen</Text>
                </Box>
                <Box>
                  <Text fontWeight="bold">
                    Parking des Docks76 (gratuit 3h00){' '}
                  </Text>
                  <Text mb="">8-12 Rue Netien, 76000 Rouen</Text>
                </Box>
                <Box>
                  <Text fontWeight="bold">Parking des quais de Seine </Text>
                  <Text mb="1">
                    Hangar 10, Quai Ferdinand de Lesseps, 76000 Rouen
                  </Text>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Stack>

      <Box as="section">
        <Heading as="h2" fontSize="xl">
          Avis
        </Heading>
        <Text>
          Vous pouvez donner vos avis sur les conférences que vous avez vu le
          jour même sur{' '}
          <Link
            color="brand.700"
            href="https://openfeedback.io/jLatxj2p4GVAkWoMLDnl/2026-11-19"
            isExternal
          >
            OpenFeedback <Icon as={FiExternalLink} mx="1" />
          </Link>
        </Text>
      </Box>

      <SponsorsList />
    </Stack>
  );
}
