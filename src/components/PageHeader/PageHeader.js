import React from 'react';
import { useTheme, Box, Button, Flex, Text, Heading } from '@chakra-ui/react';
import { ButtonGroup } from '@/components/ButtonGroup';
import { Card } from '@/components/Card';
import { StackInline } from '@/components/StackInline';
import Link from 'next/link';

export const PageHeader = () => {
  const { themeName, data } = useTheme();

  const getButtons = () => {
    const donationButton = (
      <Button
        variant="outline"
        colorScheme="brand"
        as="a"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.helloasso.com/associations/codeurs-en-seine/formulaires/1/widget"
      >
        Faire un don
      </Button>
    );

    switch (themeName) {
      case 'meetups':
        return (
          <ButtonGroup justifyContent="center" flexGrow={{ base: 1, md: 0 }}>
            <Button as={Link} href="/meetups/sponsors" colorScheme="brand">
              Devenir sponsor
            </Button>
            {donationButton}
          </ButtonGroup>
        );

      case 'devoxx4kids':
        return (
          <ButtonGroup justifyContent="center" flexGrow={{ base: 1, md: 0 }}>
            {donationButton}
          </ButtonGroup>
        );

      default:
        return (
          <ButtonGroup justifyContent="center" flexGrow={{ base: 1, md: 0 }}>
            {donationButton}
            {/* <Button colorScheme="brand" as={Link} href="/2022/inscription">
              Inscription
            </Button> */}
          </ButtonGroup>
        );
    }
  };

  return (
    <>
      <Flex
        alignItems="center"
        justify="space-between"
        pb={5}
        my={{ base: 0, md: '4vh' }}
      >
        <Box display={{ base: 'none', md: 'block' }} color="brand.800">
          <Text fontFamily="heading" fontSize="sm">
            {data.pretitle}
          </Text>
          <Heading as="h4" fontSize="lg" lineHeight="1rem">
            {data.title}
          </Heading>
        </Box>
        {getButtons()}
      </Flex>
      {process.env.NEXT_PUBLIC_ARCHIVE_YEAR && (
        <Card bg="red.600" color="white" mb={8}>
          <StackInline alignItems="center">
            <Text fontWeight="bold" flex={1} fontSize="lg">
              Vous visitez le site d&apos;une édition précédente.
            </Text>
            <Button
              as="a"
              rel="nopener norefferer"
              href="https://www.codeursenseine.com"
              color="brand.600"
            >
              Voir l&apos;édition actuelle
            </Button>
          </StackInline>
        </Card>
      )}
    </>
  );
};
