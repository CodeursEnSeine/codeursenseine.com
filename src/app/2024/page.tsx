import { CallForPaperButton } from '@/components/CallForPaperButton';
import { Card } from '@/components/Card';
import { Newsletter } from '@/components/Newsletter';
import { SponsorsList } from '@/components/Sponsors';
import { Box, Button, Flex, Heading, Link, Stack, Text } from '@chakra-ui/react';
import { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';

export async function generateMetadata(
  _: unknown,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const previousTitle = 'Édition 2024 | ' + (await parent).title?.absolute;

  return {
    title: previousTitle,
    alternates: {
      canonical: '2024',
    },
  };
}

export default function Home() {
  return (
    <Stack spacing="16">
      <Card variant="primary">
        <Flex
          align="center"
          justify="center"
          direction={{ base: 'column', lg: 'row' }}
        >
          <Box maxW="60ch">
            <Heading fontSize="2xl">21 Novembre 2024</Heading>
            <Text mb="5">
              Codeurs en Seine aura de nouveau lieu cette année au{' '}
              <strong>Kindarena&nbsp;de&nbsp;Rouen</strong>, nous vous donnons
              rendez-vous le Jeudi 21 Novembre 2024 !
              <br/>
              Le Call For Paper est maintenant fermé, découvrez le programme très bientôt
            </Text>
            <Image
              src="/images/ces/logo-kindarena.svg"
              width={208}
              height={50}
              alt="Logo Kindarena"
            />
          </Box>
          <Box
            ml={{ lg: 'auto' }}
            pt={{ base: 4, lg: 0 }}
            pl={{ lg: 4 }}
            maxW={{ lg: '16rem' }}
            w="full"
          >
            <Stack
              spacing="4"
              justify="center"
              direction={{ base: 'column', sm: 'row', md: 'column' }}
            >
              { /* <CallForPaperButton cfpId="Su6sfM6SAhoHmg3GWKHS" /> */ }
              { <Button as={Link} href="/2024/inscription" color="brand.600">
                  Je m&apos;inscris
                </Button> }
                <Button as={Link} href="/2024/programme" color="brand.600">
                Découvrir le programme
              </Button>
            </Stack>
          </Box>
        </Flex>
      </Card>

      <Flex
        direction={{ base: 'column-reverse', md: 'row' }}
        gap="4"
        align={{ base: 'center', md: 'flex-start' }}
        justify="center"
      >
        <Stack maxW="60ch" spacing={4}>
          <Heading as="h3" size="md">
            Une journée par la communauté pour la communauté
          </Heading>
          <Text>
            Codeurs en Seine est une journée de conférences gratuite qui se
            déroule à Rouen, pour découvrir, apprendre et partager autour du
            monde du développement.
          </Text>
        </Stack>
        <Box borderRadius={4} flex="none" width="300px" overflow="hidden">
          <Image
            width="300"
            height="200"
            style={{ objectFit: 'cover' }}
            src="/images/ces/kindarena.jpg"
            alt="Le Kindarena de Rouen"
          />
        </Box>
      </Flex>

      <Stack spacing={4}>
        <Heading as="h3" size="md">
          Rendez-vous en novembre 2024 au Kindarena de Rouen !
        </Heading>
        <Text>
          Encore une édition en physique : l&apos;équipe Codeurs en Seine vous
          propose une journée complète en novembre (date à confirmer) sur des
          conférences aux thèmes divers et variés : Web, Devops, UX, Securité,
          Langages etc.
        </Text>
      </Stack>

      <Stack spacing="4">
        <Newsletter />
        <Text textAlign="center">
          Suivez nous sur{' '}
          <Link
            isExternal
            textDecoration="underline"
            href="https://twitter.com/codeursenseine"
          >
            Twitter
          </Link>
          ,{' '}
          <Link
            isExternal
            textDecoration="underline"
            href="http://facebook.com/codeursenseine"
          >
            Facebook
          </Link>{' '}
          ou{' '}
          <Link
            isExternal
            textDecoration="underline"
            href="https://fr.linkedin.com/company/codeurs-en-seine"
          >
            Linkedin
          </Link>{' '}
          pour connaître rapidement toutes les news.
        </Text>
      </Stack>

      {/* TODO: Rajoutez les photos 2023 */}
      {/* <SimpleGrid columns={{ base: 1, md: 2 }} gap="4">
        <Box rounded="md" overflow="hidden" textAlign="center">
          <Image
            src="/images/ces/benevoles.jpg"
            alt="Les bénévoles de Codeurs en Seine dans la salle 1000 places du Kindarena"
            width="500"
            height="300"
          />
        </Box>
        <Stack justify="space-around">
          <Text>
            Retrouvez les photos de l&apos;événement Codeurs en Seine 2023
          </Text>
          <Button
            colorScheme="brand"
            as="a"
            href="https://drive.google.com/drive/folders/1U1EAqulWmO5567uQIoRNrMALDp49hy_z?usp=share_link"
          >
            Photo de Cédric Munsch
          </Button>
          <Button
            colorScheme="brand"
            as="a"
            href="https://drive.google.com/drive/folders/1ONNu9szbirIWUjmzjNa9vnFx_khSmvIl?usp=share_link"
          >
            Photo de Frédéric Bisson
          </Button>
          <Button
            colorScheme="brand"
            as="a"
            href="https://drive.google.com/drive/folders/1ZxXTP29W_N_IHQ824K9BME-z0gB_NlST?usp=share_link"
          >
            Photo de Matthieu Coulon
          </Button>
          <Button
            colorScheme="brand"
            as="a"
            href="https://drive.google.com/drive/folders/1gTpaL4V4zm_5mjC8iPURklXsbyxO6Bvf?usp=share_link"
          >
            Photo de Thibault Dandré
          </Button>
        </Stack>
      </SimpleGrid> */}

      <SponsorsList />

      <Flex align="center" justify="center" mt={8}>
        <a href="https://www.netlify.com">
          <Image
            width={114}
            height={50}
            src="https://www.netlify.com/img/global/badges/netlify-light.svg"
            alt="Deploys by Netlify"
          />
        </a>
      </Flex>
    </Stack>
  );
}
