import { allMeetups } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { Metadata, ResolvingMetadata } from 'next';
import { Box, Button, Stack } from '@chakra-ui/react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { MeetupRegistration, MeetupTitle } from '@/components/Meetup';
import { MdxContent } from '@/components/MdxContent';
import { RedirectCodeursEnSeine } from '@/components/RedirectCodeursEnSeine';

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const meetup = allMeetups.find((meetup) => meetup.slug === params.slug);

  const previousTitle = `${meetup?.title} | ` + (await parent).title?.absolute;

  return {
    title: previousTitle,
    alternates: {
      canonical: `meetups/events/${meetup?.slug}`,
    },
  };
}

export const generateStaticParams = async () =>
  allMeetups.map((meetup) => ({ slug: meetup.slug }));

export default function MeetupPage({ params }: { params: { slug: string } }) {
  const meetup = allMeetups.find((meetup) => meetup.slug === params.slug);

  if (!meetup) {
    return notFound();
  }

  return (
    <Stack spacing={8}>
      <RedirectCodeursEnSeine path={`/meetups/events/${meetup.slug}`} />

      <Link href="/meetups">Retour à la liste des meetups</Link>
      <MeetupTitle metadata={meetup} />
      <MeetupRegistration metadata={meetup} />
      <Box>
        <MdxContent>{meetup?.body.code ?? ''}</MdxContent>
      </Box>
      <MeetupRegistration metadata={meetup} />
      <Button
        variant="outline"
        as="a"
        href={`https://github.com/CodeursEnSeine/codeursenseine.com/edit/master/content/${meetup._raw.sourceFilePath}`}
        leftIcon={<FaGithub />}
      >
        Modifier cette page
      </Button>
    </Stack>
  );
}
