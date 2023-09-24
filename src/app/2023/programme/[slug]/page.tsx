import { allSpeakers, allTalks } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { Metadata, ResolvingMetadata } from 'next';
import { Button, Stack } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { SponsorsList } from '@/components/Sponsors';
import { TalkContent } from '@/components/TalkContent';
import Link from 'next/link';
import { currentYear } from '@/constants/site';

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const talk = allTalks.find((talk) => talk.slug === params.slug);

  const previousTitle = `${talk?.title} | ` + (await parent).title?.absolute;

  return {
    title: previousTitle,
    alternates: {
      canonical: `programme/${talk?.slug}`,
    },
  };
}

export const generateStaticParams = async () =>
  allTalks.map((talk) => ({ slug: talk.slug }));

export default function MeetupPage({ params }: { params: { slug: string } }) {
  const talk = allTalks.find((talk) => talk.slug === params.slug);
  const speakers = allSpeakers.filter(
    (speaker) => talk?.speakers?.includes(speaker.slug)
  );

  if (!talk) {
    return notFound();
  }

  return (
    <Stack spacing={8} align="star">
      <Button
        variant="link"
        as={Link}
        href={`/${currentYear}/programme`}
        alignSelf="flex-start"
      >
        Retour au programme
      </Button>
      <TalkContent talk={talk} speakers={speakers} />
      <Button
        variant="outline"
        as="a"
        href={`https://github.com/CodeursEnSeine/codeursenseine.com/edit/master/content/${talk._raw.sourceFilePath}`}
        leftIcon={<FaGithub />}
      >
        Modifier le contenu
      </Button>
      <SponsorsList />
    </Stack>
  );
}
