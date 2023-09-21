import React from 'react';
import { Stack, StackProps, Text } from '@chakra-ui/react';
import { Talk } from 'contentlayer/generated';

export type SponsorCardProps = StackProps & Pick<Talk, 'title' | 'room'>;

export const SponsorCard = ({ title, room, ...rest }: SponsorCardProps) => {
  return (
    <Stack
      bg="gray.50"
      borderRadius="4"
      border="1px solid"
      borderColor="gray.200"
      p="4"
      spacing="1"
      {...rest}
    >
      <Text fontWeight="bold" color="brand.800">
        {title}
      </Text>
      <Text fontSize="sm" color="gray.600">
        Présentation de 5 minutes
      </Text>
      <Text fontSize="sm" color="gray.600" fontWeight="semibold">
        Salle {room}
      </Text>
    </Stack>
  );
};
