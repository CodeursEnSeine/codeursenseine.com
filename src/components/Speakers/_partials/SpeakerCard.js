import React from "react";
import "dayjs/locale/fr";
import {
  Heading,
  Flex,
  Box,
  Image,
  AspectRatioBox,
  IconButton,
} from "@chakra-ui/core";
import { FaTwitter, FaGithub } from "react-icons/fa";
import { Card } from "components/Card";
import { MDXRenderer } from "gatsby-plugin-mdx";

export const SpeakerCard = ({ speaker }) => {
  const {
    name,
    image: { publicURL },
    company,
    twitterLink,
    githubLink,
  } = speaker?.childMdx?.frontmatter;

  const { body } = speaker?.childMdx;

  return (
    <Card borderLeftWidth={2} borderLeftColor="brand.600">
      <Flex>
        <Box mr={4}>
          <AspectRatioBox ratio={1} w="6em" maxW="100%">
            <Image src={publicURL} borderRadius={4} />
          </AspectRatioBox>
        </Box>
        <Box>
          <Heading fontSize="lg">{name}</Heading>
          <Heading fontSize="md">{company}</Heading>
          {twitterLink && (
            <IconButton
              mt={2}
              as="a"
              target="_blank"
              href={twitterLink}
              title={`${name} Twitter`}
              icon={FaTwitter}
              variant="ghost"
              variantColor="brand"
              size="md"
              d="inline-flex"
              rel="noopener noreferrer"
            />
          )}
          {githubLink && (
            <IconButton
              mt={2}
              as="a"
              target="_blank"
              href={githubLink}
              title={`${name} Github`}
              icon={FaGithub}
              variant="ghost"
              variantColor="brand"
              size="md"
              d="inline-flex"
              rel="noopener noreferrer"
            />
          )}
        </Box>
      </Flex>
      {body && (
        <Box mt={4}>
          <MDXRenderer mt={4}>{body}</MDXRenderer>
        </Box>
      )}
    </Card>
  );
};
