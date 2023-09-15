import React from 'react';
import { Heading } from '@chakra-ui/react';
import { Meetup } from 'contentlayer/generated';

type MeetupTitleProps = {
  metadata: Pick<Meetup, 'title'>;
};

export const MeetupTitle = ({ metadata, ...props }: MeetupTitleProps) => {
  return (
    <Heading as="h1" fontWeight="normal" {...props}>
      {metadata.title}
    </Heading>
  );
};
