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
  Grid,
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

  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

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
    <Stack>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr) repeat(1, 4fr)"]}
        mt={3}
      >
        <Stack mr={3}>
          <Flex
            display={["none", "flex"]}
            flexDirection="column"
            justifyContent="space-between"
            h="100%"
            borderColor="blue.50"
            borderStyle="solid"
            borderTopWidth={1}
            borderBottomWidth={1}
          >
            <Text
              color="blue.600"
              as="time"
              dateTime={conference.childMdx.frontmatter.start}
            >
              {formatHour(conference.childMdx.frontmatter.start)}
            </Text>

            <Text
              color="blue.600"
              as="time"
              dateTime={conference.childMdx.frontmatter.end}
            >
              {formatHour(conference.childMdx.frontmatter.end)}
            </Text>
          </Flex>
          <Stack display={["block", "none"]} mb={2}>
            <Text color="blue.600">
              {`${formatHour(
                conference.childMdx.frontmatter.start
              )} - ${formatHour(conference.childMdx.frontmatter.end)}`}
            </Text>
          </Stack>
          {conference.childMdx.frontmatter.isKeynote && (
            <Badge colorScheme="brand" width="fit-content">
              Keynote
            </Badge>
          )}
        </Stack>
        <Card
          borderLeftWidth={2}
          borderLeftColor="brand.600"
          onClick={onOpen}
          w="full"
          isLink
        >
          <Heading fontSize="md">
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
          {/* <Flex mt={1} align="center">
            <Box mr={4}>
              <AspectRatio ratio={1} w="2rem" maxW="100%">
                <Image
                  src={speaker?.childMdx?.frontmatter?.image?.publicURL}
                  borderRadius={4}
                />
              </AspectRatio>
            </Box>
          </Flex> */}
        </Card>
      </Grid>

      <Drawer size="md" isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <Stack alignItems="center" display="flex" flexDirection="row">
                <Text fontSize="sm" mt={2}>
                  {capitalizeFirstLetter(
                    dayjs(conference.childMdx.frontmatter.start).format(
                      "dddd D MMM"
                    )
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
                      <Stack>
                        <Flex
                          key={speaker.childMdx.frontmatter.slug}
                          gap="4"
                          alignItems="center"
                        >
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
                                      colorScheme="twitter"
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
                                      colorScheme="gray"
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
    </Stack>
  );
};
