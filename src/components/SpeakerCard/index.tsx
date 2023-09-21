import { MdxContent } from '@/components/MdxContent';
import { DEFAULT_AVATAR } from '@/constants/default';
import {
  AspectRatio,
  Box,
  Card,
  CardProps,
  Flex,
  HStack,
  IconButton,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Speaker } from 'contentlayer/generated';
import Image from 'next/image';
import { FaGithub, FaTwitter } from 'react-icons/fa';

type SpeakerCardProps = CardProps & {
  speaker: Speaker;
};

export const SpeakerCard = ({ speaker, ...rest }: SpeakerCardProps) => {
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
    </Card>
  );
};
