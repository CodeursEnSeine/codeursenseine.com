import React from "react";
import "dayjs/locale/fr";
import {
  Heading,
  Flex,
  Box,
  AspectRatio,
  IconButton,
  HStack,
  Text,
  Stack,
} from "@chakra-ui/react";
import { FaTwitter, FaGithub } from "react-icons/fa";
import { Card } from "components/Card";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export const SpeakerCard = ({ speaker, ...rest }) => {
  const { name, company, twitterLink, githubLink } =
    speaker?.childMdx?.frontmatter;

  const { body } = speaker?.childMdx;

  const image = getImage(speaker?.childMdx?.frontmatter?.image);

  return (
    <Card borderLeftWidth={2} borderLeftColor="brand.600" {...rest}>
      <Flex>
        <Box mr={4} borderRadius="4" overflow="hidden">
          <AspectRatio ratio={1} w="6em" maxW="100%">
            <GatsbyImage
              image={image}
              alt={speaker.childMdx.frontmatter.name}
            />
          </AspectRatio>
        </Box>
        <Stack spacing="0">
          <Text fontSize="lg" fontWeight="bold">
            {name}
          </Text>
          <Text fontSize="md" color="gray.600">
            {company}
          </Text>
          <HStack>
            {twitterLink && (
              <IconButton
                as="a"
                target="_blank"
                href={twitterLink}
                title={`${name} Twitter`}
                icon={<FaTwitter />}
                variant="ghost"
                colorScheme="brand"
                rel="noopener noreferrer"
              />
            )}
            {githubLink && (
              <IconButton
                as="a"
                target="_blank"
                href={githubLink}
                title={`${name} Github`}
                icon={<FaGithub />}
                variant="ghost"
                colorScheme="brand"
                rel="noopener noreferrer"
              />
            )}
          </HStack>
        </Stack>
      </Flex>
      {body && (
        <Box mt={4}>
          <MDXRenderer mt={4}>{body}</MDXRenderer>
        </Box>
      )}
    </Card>
  );
};
