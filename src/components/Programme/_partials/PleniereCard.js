import React from "react";
import { Stack, Text } from "@chakra-ui/react";

export const PleniereCard = ({ title, room, ...rest }) => {
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
        Accueil par l'équipe de Codeurs en Seine
      </Text>
      <Text fontSize="sm" color="gray.600" fontWeight="semibold">
        Salle {room}
      </Text>
    </Stack>
  );
};
