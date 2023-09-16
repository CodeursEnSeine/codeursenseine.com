import React from 'react';
import { useTheme, Box, Button, Flex, Text, Heading } from '@chakra-ui/react';
import { Card } from '@/components/Card';

export const PageHeader = () => {
  const { data } = useTheme();

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

        <Flex justifyContent="end" gap="2" flex="1">
          {/* <Button
            colorScheme="brand"
            as={Link}
            href="/2023/inscription"
            w={{ base: 'full', md: 'auto' }}
          >
            Inscription
          </Button> */}
          <Button
            variant="outline"
            colorScheme="brand"
            as="a"
            target="_blank"
            rel="noopener noreferrer"
            w={{ base: 'full', md: 'auto' }}
            href="https://www.helloasso.com/associations/codeurs-en-seine/formulaires/1/widget"
          >
            Faire un don
          </Button>
        </Flex>
      </Flex>
      {process.env.NEXT_PUBLIC_ARCHIVE_YEAR && (
        <Card bg="red.600" color="white" mb={8}>
          <Flex alignItems="center">
            <Text fontWeight="bold" flex={1} fontSize="lg">
              Vous visitez le site d&apos;une édition précédente.
            </Text>
            <Button
              as="a"
              rel="nopener norefferer"
              href="https://www.codeursenseine.com"
            >
              Voir l&apos;édition actuelle
            </Button>
          </Flex>
        </Card>
      )}
    </>
  );
};
