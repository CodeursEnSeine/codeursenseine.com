import { MdxContent } from '@/components/MdxContent';
import { DEFAULT_AVATAR } from '@/constants/default';
import { currentYear } from '@/constants/site';
import {
  AspectRatio,
  Box,
  Card,
  CardProps,
  Divider,
  Flex,
  HStack,
  IconButton,
  Link as ChakraLink,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Speaker, Talk } from 'contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { FaGithub, FaTwitter } from 'react-icons/fa';

type SpeakerCardProps = CardProps & {
  speaker: Speaker;
  talks: Array<Talk>;
};

export const SpeakerCard = ({ speaker, talks, ...rest }: SpeakerCardProps) => {
  return (
    <Card
      borderLeftWidth={2}
      borderLeftColor="brand.600"
      p="4"
      gap="4"
      {...rest}
    >
      <Flex>
        <Box mr={4} borderRadius="4" overflow="hidden">
          <AspectRatio ratio={1} w="6em" maxW="100%">
            <Image
              src={speaker.image ? speaker.imageSrc : DEFAULT_AVATAR}
              alt={speaker.name}
              width={100}
              height={100}
            />
          </AspectRatio>
        </Box>

        <Stack spacing="0">
          <Text fontSize="lg" fontWeight="bold">
            {speaker.name}
          </Text>
          <Text fontSize="md" color="gray.600">
            {speaker.company}
          </Text>
          <HStack>
            {speaker.twitter && (
              <IconButton
                as="a"
                target="_blank"
                href={`https://www.twitter.com/${speaker.twitter}`}
                title={`${speaker.name} Twitter`}
                icon={<FaTwitter />}
                variant="ghost"
                colorScheme="brand"
                rel="noopener noreferrer"
                aria-label="Lien Twitter du speaker"
              />
            )}
            {speaker.github && (
              <IconButton
                as="a"
                target="_blank"
                href={`https://www.github.com/${speaker.github}`}
                title={`${speaker.name} Github`}
                icon={<FaGithub />}
                variant="ghost"
                colorScheme="brand"
                rel="noopener noreferrer"
                aria-label="Lien GitHub du speaker"
              />
            )}
          </HStack>
        </Stack>
      </Flex>

      <MdxContent>{speaker.body.code}</MdxContent>

      <Divider borderColor="gray.200" />

      <Text fontWeight="bold">
        {talks.length} conférence{talks.length > 1 ? 's' : ''}&nbsp;:
      </Text>
      {talks.map((talk) => (
        <Fragment key={talk._id}>
          <ChakraLink
            color="brand.800"
            as={Link}
            href={`/${currentYear}/programme/${talk.slug}`}
          >
            {talk.title}
          </ChakraLink>
        </Fragment>
      ))}
    </Card>
  );
};
