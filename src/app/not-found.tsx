import Layout from '@/components/layout';
import { Box, Heading, Text } from '@chakra-ui/react';

export default function NotFound() {
  return (
    <Layout>
      <Box bg="white">
        <Heading fontSize="lg" as="h2">
          Page non trouvée
        </Heading>
        <Text>La page que vous avez demandez n&apos;existe pas ou plus</Text>
      </Box>
    </Layout>
  );
}
