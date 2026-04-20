'use client';

import { useMDXComponent } from 'next-contentlayer2/hooks';
import { Button } from '@chakra-ui/react';
import { components } from '@/renderers/mdx';
import { MeetupSpeakers, MeetupSpeaker } from '@/components/Meetup';

export const MdxContent = ({ children }: { children: string }) => {
  const MDXContent = useMDXComponent(children);

  return (
    <MDXContent
      components={{
        ...components,
        MeetupSpeakers,
        MeetupSpeaker,
        Button,
      }}
    />
  );
};
