import React from "react";
import { Link } from "gatsby";
import { useTheme, Box, Button, Flex, Text, Heading } from "@chakra-ui/core";
import { ButtonGroup } from "components/ButtonGroup";

export const PageHeader = () => {
  const { themeName, data } = useTheme();

  const getButtons = () => {
    switch (themeName) {
      case "meetups":
        return (
          <Button as={Link} to="/meetups/sponsors" variantColor="brand">
            Devenir sponsor
          </Button>
        );

      case "devoxx4kids":
        return null;

      default:
        return null;
    }
  };

  return (
    <Flex
      alignItems="center"
      justify="space-between"
      pb={5}
      my={{ base: 0, md: "4vh" }}
    >
      <Box d={{ base: "none", md: "block" }} color="brand.800">
        <Text fontFamily="heading" fontSize="sm">
          {data.pretitle}
        </Text>
        <Heading as="h4" fontSize="lg">
          {data.title}
        </Heading>
      </Box>
      <ButtonGroup justifyContent="center" flexGrow={{ base: 1, md: 0 }}>
        {getButtons()}
      </ButtonGroup>
    </Flex>
  );
};
