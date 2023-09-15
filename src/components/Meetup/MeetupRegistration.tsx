import React from 'react';
import { Button, Text } from '@chakra-ui/react';

import { Card } from '@/components/Card';
import { Meetup } from 'contentlayer/generated';

type MeetupRegistrationProps = {
  metadata: Pick<
    Meetup,
    | 'meetup_register_link'
    | 'meetup_date'
    | 'meetup_start_time'
    | 'meetup_end_time'
    | 'meetup_location'
  >;
};

export const MeetupRegistration = ({
  metadata,
  ...props
}: MeetupRegistrationProps) => {
  return (
    <Card
      alignItems="center"
      as="a"
      href={metadata.meetup_register_link}
      variant="primary"
      {...props}
    >
      <Text fontWeight="bold" color="white" fontSize="lg">
        Meetup le{' '}
        {new Intl.DateTimeFormat('fr', {
          dateStyle: 'full',
        }).format(new Date(metadata.meetup_date))}{' '}
        de {metadata.meetup_start_time} à {metadata.meetup_end_time}
      </Text>
      <Text color="white">{metadata.meetup_location}</Text>
      <Button
        as="div"
        variant="outline"
        background="white"
        color="brand.600"
        mt={4}
      >
        Inscrivez-vous !
      </Button>
    </Card>
  );
};
