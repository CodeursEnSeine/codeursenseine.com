import React from "react";
import "dayjs/locale/fr";
import {
  Heading,
  Text,
  Flex,
  Box,
  Image,
  AspectRatioBox,
  IconButton,
} from "@chakra-ui/core";
import { FaTwitter, FaGithub} from "react-icons/fa";
import { Card } from "components/Card";

export const SpeakerCard = ({ speaker }) => {
  const {
    name,
    image: {
      publicURL
    },
    company,
    bio,
    twitterLink,
    githubLink,
  } = speaker?.childMdx?.frontmatter;

  console.log(publicURL);
  return (
    <Card
      borderLeftWidth={2}
      borderLeftColor="brand.600"
    >
      <Flex>
        <Box mr={4}>
          <AspectRatioBox ratio={1} w="6em" maxW="100%">
            <Image src={publicURL} borderRadius={4}/>
          </AspectRatioBox>
        </Box>
        <Box>
          <Heading fontSize="lg">
            {name}
          </Heading>
          <Heading fontSize="md">
            {company}
          </Heading>
          {twitterLink && (
            <IconButton
              mt={2}
              key="Twitter"
              as="a"
              target="_blank"
              href={twitterLink}
              aria-label={`${name} Twitter`}
              icon={FaTwitter}
              variant="ghost"
              variantColor="brand"
              size="md"
              d="inline-flex"
            />
          )}
          {githubLink && (
            <IconButton
              mt={2}
              key="Github"
              as="a"
              target="_blank"
              href={githubLink}
              aria-label={`${name} Github`}
              icon={FaGithub}
              variant="ghost"
              variantColor="brand"
              size="md"
              d="inline-flex"
            />
          )}
        </Box>
      </Flex>
        {bio && (
          <Text mt={4}>{bio}</Text>
        )}
    </Card>
  );
};
