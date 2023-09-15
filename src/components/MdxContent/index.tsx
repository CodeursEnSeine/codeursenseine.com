'use client';

import { useMDXComponent } from 'next-contentlayer/hooks';
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
      }}
    />
  );
};
