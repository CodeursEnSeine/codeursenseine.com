import React from "react";
import { Stack, Text } from "@chakra-ui/react";

export const PauseCard = ({ title, ...rest }) => {
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
        Boire un coup, papoter, visiter les stands{" "}
        <span role="img" aria-label="Clin d'œil">
          😉
        </span>
      </Text>
    </Stack>
  );
};
