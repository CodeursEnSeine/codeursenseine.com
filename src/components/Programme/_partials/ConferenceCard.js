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
  Box,
  AspectRatio,
  Image,
  Center,
} from "@chakra-ui/react";
import { Link } from "gatsby";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import { Card } from "components/Card";
import { MDXRenderer } from "gatsby-plugin-mdx";

const SpeakerPreview = ({ speaker }) => (
  <Flex mt={1} align="center">
    <Box mr={4}>
      <AspectRatio ratio={1} w="2rem" maxW="100%">
        <Image
          src={speaker?.childMdx?.frontmatter?.image?.publicURL}
          borderRadius={4}
        />
      </AspectRatio>
    </Box>
    <Text>{speaker?.childMdx?.frontmatter?.name}</Text>
  </Flex>
);

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
            <Text color="blue.600">
              {conference.childMdx.frontmatter.startHour}
            </Text>

            <Text color="blue.600">
              {conference.childMdx.frontmatter.endHour}
            </Text>
          </Flex>
          <Stack display={["block", "none"]} mb={2}>
            <Text color="blue.600">
              {`${conference.childMdx.frontmatter.startHour} - ${conference.childMdx.frontmatter.endHour}`}
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

          {speakers?.map((speaker) => (
            <SpeakerPreview
              key={speaker.childMdx.frontmatter.slug}
              speaker={speaker}
            />
          ))}

          <Center>
            <Button
              colorScheme="brand"
              variant="link"
              width="fit-content"
              mt={2}
            >
              Voir les détails et s'inscrire
            </Button>
          </Center>
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
                    dayjs(conference.childMdx.frontmatter.eventDate).format(
                      "dddd D MMM"
                    )
                  )}{" "}
                  {`${conference.childMdx.frontmatter.startHour} - ${conference.childMdx.frontmatter.endHour}`}
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

              <Stack mt={3}>
                {speakers?.map((speaker) => (
                  <SpeakerPreview
                    key={speaker.childMdx.frontmatter.slug}
                    speaker={speaker}
                  />
                ))}
              </Stack>
            </DrawerHeader>

            <DrawerBody overflow="auto">
              <MDXRenderer>{conference.childMdx.body}</MDXRenderer>
            </DrawerBody>

            {conference.childMdx.frontmatter.meetupLink && (
              <DrawerFooter display="flex" flexDirection="column">
                <Button isFullWidth variant="outline" mb={3} onClick={onClose}>
                  Fermer
                </Button>
                <Button
                  colorScheme="brand"
                  as={Link}
                  target="_blank"
                  to={conference.childMdx.frontmatter.meetupLink}
                  isFullWidth
                >
                  S'inscrire
                </Button>
              </DrawerFooter>
            )}
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Stack>
  );
};
