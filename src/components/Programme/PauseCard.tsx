import React from 'react';
import { HStack, Stack, StackProps, Text } from '@chakra-ui/react';
import { Talk } from 'contentlayer/generated';
import { formatHour, getDiff } from '@/utils/dates';

export type PauseCardProps = StackProps & {
  pause: Pick<Talk, 'title' | 'start' | 'end'>;
};

export const PauseCard = ({ pause, ...rest }: PauseCardProps) => {
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
          dateTime={pause.start}
          fontWeight="bold"
          fontSize="sm"
          color="gray.600"
        >
          {formatHour(pause.start)}
        </Text>
        <span>-</span>
        <Text
          as="time"
          dateTime={pause.end}
          fontWeight="bold"
          fontSize="sm"
          color="gray.600"
        >
          {formatHour(pause.end)}
        </Text>
        <Text fontWeight="bold" fontSize="xs" color="gray.600" as="span">
          ({getDiff(pause.end, pause.start)})
        </Text>
      </HStack>
      <Text fontWeight="bold" color="brand.800">
        {pause.title}
      </Text>
      <Text fontSize="sm" color="gray.600">
        Boire un coup, papoter, visiter les stands{' '}
        <span role="img" aria-label="Clin d'œil">
          😉
        </span>
      </Text>
    </Stack>
  );
};
