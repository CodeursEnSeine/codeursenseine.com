import React from "react";
import {
  useDisclosure,
  Heading,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerOverlay,
  Stack,
  Text,
  Button,
  Badge,
  Flex,
  Divider,
  Box,
  IconButton,
  HStack,
  StackDivider,
} from "@chakra-ui/react";
import { Link } from "gatsby";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import { Card } from "components/Card";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FiGithub, FiTwitter } from "react-icons/fi";

export const ConferenceCard = ({ conference, speakers }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (conference?.childMdx?.frontmatter?.type === "break") {
    return (
      <Card variant="primary" mt={2}>
        <Stack align="center">
          <Text>{conference?.childMdx?.frontmatter?.title}</Text>
        </Stack>
      </Card>
    );
  }

  const formatHour = (hour) => {
    return dayjs(hour).format("HH:mm");
  };

  return (
    <>
      <Card
        borderLeftWidth={2}
        borderLeftColor="brand.600"
        onClick={onOpen}
        w="full"
        h="full"
        isLink
      >
        <Heading fontSize="md" flexGrow="1">
          {conference.childMdx.frontmatter.title}
        </Heading>

        <Text>
          {speakers
            ?.map((speaker) => speaker?.childMdx?.frontmatter?.name)
            .join(", ")}
        </Text>

        <Text fontSize="sm" color="brand.700">
          Salle {conference.childMdx.frontmatter.room}
        </Text>
      </Card>

      <Drawer size="md" isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <Stack alignItems="center" display="flex" flexDirection="row">
                <Text fontSize="sm" mt={2} textTransform="capitalize">
                  {dayjs(conference.childMdx.frontmatter.start).format(
                    "dddd D MMM"
                  )}{" "}
                  {`${formatHour(
                    conference.childMdx.frontmatter.start
                  )} - ${formatHour(conference.childMdx.frontmatter.end)}`}
                </Text>
                {conference.childMdx.frontmatter.isKeynote && (
                  <Badge
                    ml={3}
                    h="fit-content"
                    colorScheme="brand"
                    width="fit-content"
                  >
                    Keynote
                  </Badge>
                )}
              </Stack>
              <Text>{conference.childMdx.frontmatter.title}</Text>
            </DrawerHeader>
            <DrawerBody overflow="auto">
              <MDXRenderer>{conference.childMdx.body}</MDXRenderer>
              <Divider borderColor="brand.100" />
              {speakers.length > 0 && (
                <Stack mt="4" spacing="4" divider={<StackDivider />}>
                  {speakers?.map((speaker) => {
                    const image = getImage(speaker.childMdx.frontmatter.image);
                    return (
                      <Stack key={speaker.childMdx.frontmatter.slug}>
                        <Flex gap="4">
                          <Box w="6rem" borderRadius={8} overflow="hidden">
                            <GatsbyImage
                              image={image}
                              alt={speaker.childMdx.frontmatter.name}
                            />
                          </Box>
                          <Flex justify="space-between" flex="1">
                            <Stack spacing="1">
                              <Text fontSize="lg" fontWeight="semibold">
                                {speaker.childMdx.frontmatter.name}
                              </Text>
                              <Text fontSize="sm" color="gray.700">
                                {speaker.childMdx.frontmatter.company}
                              </Text>
                              <HStack>
                                {speaker.childMdx.frontmatter.twitterLink && (
                                  <Box>
                                    <IconButton
                                      as="a"
                                      href={
                                        speaker.childMdx.frontmatter.twitterLink
                                      }
                                      target="_blank"
                                      rel="noopenner"
                                      colorScheme="brand"
                                      icon={<FiTwitter />}
                                    />
                                  </Box>
                                )}
                                {speaker.childMdx.frontmatter.githubLink && (
                                  <Box>
                                    <IconButton
                                      as="a"
                                      href={
                                        speaker.childMdx.frontmatter.githubLink
                                      }
                                      target="_blank"
                                      rel="noopenner"
                                      colorScheme="brand"
                                      icon={<FiGithub />}
                                    />
                                  </Box>
                                )}
                              </HStack>
                            </Stack>
                          </Flex>
                        </Flex>
                        <Box>
                          <MDXRenderer>{speaker.childMdx.body}</MDXRenderer>
                        </Box>
                      </Stack>
                    );
                  })}
                </Stack>
              )}
            </DrawerBody>

            <DrawerFooter display="flex" flexDirection="column">
              <Button width="full" variant="outline" mb={3} onClick={onClose}>
                Fermer
              </Button>
              <Button
                colorScheme="brand"
                as={Link}
                target="_blank"
                to="/2022/inscription"
                width="full"
              >
                S'inscrire
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};
