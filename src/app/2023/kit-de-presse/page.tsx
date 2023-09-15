import { SponsorsList } from '@/components/Sponsors';
import { Button, Heading, Link, Stack, Text } from '@chakra-ui/react';
import { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata(
  _: unknown,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const previousTitle = 'Kit de presse | ' + (await parent).title?.absolute;

  return {
    title: previousTitle,
  };
}

export default function PressKit() {
  return (
    <Stack spacing="10">
      <Stack spacing="4">
        <Heading as="h1">Presse</Heading>
        <Text>
          Pour toute demande, contacter l&apos;association Codeurs en Seine :{' '}
          <Link href="mailto:contact@codeursenseine.com">
            contact@codeursenseine.com
          </Link>
        </Text>
        <Heading size="lg" fontWeight="medium">
          Kit Presse et Média
        </Heading>
        <Text>
          Si vous souhaitez parler de Codeurs en Seine sur votre site, blog ou
          autre média, vous pouvez utiliser les ressources suivantes.
        </Text>
        <Button
          colorScheme="brand"
          w="fit-content"
          as="a"
          href="https://drive.google.com/drive/folders/15jRZ0f3HY1ohc6RyRHp6f4CXmv28tf1V?usp=sharing"
          target="_blank"
          rel="noopener noreferer"
        >
          Logos et photos
        </Button>
      </Stack>
      <SponsorsList />
    </Stack>
  );
}
