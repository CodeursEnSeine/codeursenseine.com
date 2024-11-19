import React from 'react';
import { HStack, Stack, StackProps, Text } from '@chakra-ui/react';
import { Talk } from 'contentlayer/generated';
import { formatHour, getDiff } from '@/utils/dates';

export type PleniereCardProps = StackProps & {
  pleniere: Pick<Talk, 'title' | 'feedback' | 'room' | 'start' | 'end'>;
};

export const PleniereCard = ({ pleniere, ...rest }: PleniereCardProps) => {
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
      <HStack display={{ base: 'flex', lg: 'none' }}>
        <Text
          as="time"
          dateTime={pleniere.start}
          fontWeight="bold"
          fontSize="sm"
          color="gray.600"
        >
          {formatHour(pleniere.start)}
        </Text>
        <span>-</span>
        <Text
          as="time"
          dateTime={pleniere.end}
          fontWeight="bold"
          fontSize="sm"
          color="gray.600"
        >
          {formatHour(pleniere.end)}
        </Text>
        <Text fontWeight="bold" fontSize="xs" color="gray.600" as="span">
          ({getDiff(pleniere.end, pleniere.start)})
        </Text>
      </HStack>
      <Text fontWeight="bold" color="brand.800">
        {pleniere.title}
      </Text>
      <Text fontSize="sm" color="gray.600">
        {pleniere.feedback}
      </Text>
      <Text fontSize="sm" color="gray.600" fontWeight="semibold">
        Salle {pleniere.room}
      </Text>
    </Stack>
  );
};
