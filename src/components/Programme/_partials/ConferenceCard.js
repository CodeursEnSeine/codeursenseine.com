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
      <Flex mt={3}>
        <Stack flex="0.3" p={5}>
          <Flex align="center">
            <Text>
              {capitalizeFirstLetter(
                dayjs(conference.childMdx.frontmatter.eventDate).format(
                  "dddd D MMM"
                )
              )}
            </Text>
            <Icon name="chevron-right" ml={2} />
          </Flex>
          <Text>
            {`${conference.childMdx.frontmatter.startHour} - ${conference.childMdx.frontmatter.endHour}`}
          </Text>
          {conference.childMdx.frontmatter.isKeynote && (
            <Badge variantColor="brand" width="fit-content">
              Keynote
            </Badge>
          )}
        </Stack>
        <Card
          borderLeftWidth={2}
          borderLeftColor="brand.600"
          flex="0.7"
          onClick={onOpen}
          as="a"
          isLink
        >
          <Heading fontSize="md">
            {conference.childMdx.frontmatter.title}
          </Heading>
          <Text mt={2}>{conference.childMdx.frontmatter.speaker}</Text>
          <Button
            as="a"
            variantColor="brand"
            variant="link"
            width="fit-content"
            mt={2}
            onClick={onOpen}
          >
            Voir le détails et s'inscrire
          </Button>
        </Card>
      </Flex>

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

            <DrawerBody>
              {conference.childMdx.frontmatter.description}
            </DrawerBody>

            {conference.childMdx.frontmatter.meetupLink && (
              <DrawerFooter display="flex" flexDirection="column">
                <Button variant="outline" mb={3} onClick={onClose}>
                  Annuler
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
            )}
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Stack>
  );
};
