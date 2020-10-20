import React from "react";
import { Link } from "gatsby";
import { useTheme, Box, Button, Flex, Text, Heading } from "@chakra-ui/core";
import { ButtonGroup } from "components/ButtonGroup";

export const PageHeader = () => {
  const { themeName, data } = useTheme();

  const getButtons = () => {
    const donationButton = (
      <Button
        variant="outline"
        variantColor="brand"
        as="a"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.helloasso.com/associations/codeurs-en-seine/formulaires/1/widget"
      >
        Faire un don
      </Button>
    );

    switch (themeName) {
      case "meetups":
        return (
          <ButtonGroup justifyContent="center" flexGrow={{ base: 1, md: 0 }}>
            <Button as={Link} to="/meetups/sponsors" variantColor="brand">
              Devenir sponsor
            </Button>
            {donationButton}
          </ButtonGroup>
        );

      case "devoxx4kids":
        return (
          <ButtonGroup justifyContent="center" flexGrow={{ base: 1, md: 0 }}>
            {donationButton}
          </ButtonGroup>
        );

      default:
        return (
          <ButtonGroup justifyContent="center" flexGrow={{ base: 1, md: 0 }}>
            {donationButton}
          </ButtonGroup>
        );
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
      {getButtons()}
    </Flex>
  );
};
