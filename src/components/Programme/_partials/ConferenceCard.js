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
  Flex,
  Badge,
  Icon,
  Grid,
} from "@chakra-ui/core";
import { Link } from "gatsby";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import { Card } from "components/Card";

export const ConferenceCard = ({ conference }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  return (
    <Stack>
      <Grid templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr) repeat(1, 2fr)"]} mt={3}>
        <Stack p={5}>
          <Stack display={["flex", "block"]} flexDir="row" align="center">
            <Flex align="center">
              <Text mt={[2, 0]}>
                {capitalizeFirstLetter(
                  dayjs(conference.childMdx.frontmatter.eventDate).format(
                    "dddd D MMM"
                  )
                )}
              </Text>
              <Icon display={["none", "block"]} name="chevron-right" ml={2} />
            </Flex>
            <Text ml={[2, 0]} mt={[2, 0]}>
              {`${conference.childMdx.frontmatter.startHour} - ${conference.childMdx.frontmatter.endHour}`}
            </Text>
            <Icon display={["block", "none"]} name="chevron-down" ml={2} />
          </Stack>
          {conference.childMdx.frontmatter.isKeynote && (
            <Badge variantColor="brand" width="fit-content">
              Keynote
            </Badge>
          )}
        </Stack>
        <Card
          borderLeftWidth={2}
          borderLeftColor="brand.600"
          onClick={onOpen}
          as="a"
          href="#"
          isLink
        >
          <Heading fontSize="md">
            {conference.childMdx.frontmatter.title}
          </Heading>
          <Text mt={2}>{conference.childMdx.frontmatter.speaker}</Text>
          <Button
            variantColor="brand"
            variant="link"
            width="fit-content"
            mt={2}
          >
            Voir le détails et s'inscrire
          </Button>
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
                    variantColor="brand"
                    width="fit-content"
                  >
                    Keynote
                  </Badge>
                )}
              </Stack>
              <Text>{conference.childMdx.frontmatter.title}</Text>
              <Text mt={2} fontSize="md">
                {conference.childMdx.frontmatter.speaker}
              </Text>
            </DrawerHeader>

            <DrawerBody overflow="auto">
              {conference.childMdx.frontmatter.description}
            </DrawerBody>

            {
              conference.childMdx.frontmatter.meetupLink && (
                <DrawerFooter display="flex" flexDirection="column">
                  <Button variant="outline" mb={3} onClick={onClose}>
                    Fermer
                  </Button>
                  <Button
                    variantColor="brand"
                    as={Link}
                    target="_blank"
                    to={conference.childMdx.frontmatter.meetupLink}
                  >
                    S'inscrire 
                  </Button>
                </DrawerFooter>
              )
            }
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Stack>
  );
};
