import React from 'react';
import { Stack, StackProps, Text } from '@chakra-ui/react';
import { Talk } from 'contentlayer/generated';

export type PleniereCardProps = StackProps & Pick<Talk, 'title' | 'room'>;

export const PleniereCard = ({ title, room, ...rest }: PleniereCardProps) => {
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
        Accueil par l&apos;équipe de Codeurs en Seine
      </Text>
      <Text fontSize="sm" color="gray.600" fontWeight="semibold">
        Salle {room}
      </Text>
    </Stack>
  );
};
