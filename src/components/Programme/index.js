import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  Heading,
  Stack,
  Text,
  Button,
  Flex,
  Badge,
  Icon,
  SimpleGrid,
} from "@chakra-ui/core"
import dayjs from "dayjs"
import "dayjs/locale/fr"
import { Card } from "components/Card"

export const Programme = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "conferences" }
        }
      ) {
        nodes {
          childMdx {
            frontmatter {
              title,
              eventDate,
              startHour,
              endHour,
              speaker,
              isKeynote
            }
          }
        }
      }
    }
  `)

  dayjs.locale('fr');

  const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

  return (
    <Stack mt={5}>
      <SimpleGrid columns={[1, 1, 1, 2, 2]}>
        {data.allFile.nodes.map((conference, index) => (
          <Flex key={`conference-${index}`} mt={3}>
            <Stack flex="0.3" p={5}>
              <Flex align="center">
                <Text>{capitalizeFirstLetter(dayjs(conference.childMdx.frontmatter.eventDate).format('dddd D MMM'))}</Text>
                <Icon name="chevron-right" ml={2} />
              </Flex>
              <Text>
                {`${conference.childMdx.frontmatter.startHour} - ${conference.childMdx.frontmatter.endHour}`}
              </Text>
              {conference.childMdx.frontmatter.isKeynote && (
                <Badge
                  variantColor="brand"
                  width="fit-content"
                >
                  Keynote
                </Badge>
              )}
            </Stack>
            <Card flex="0.7">
              <Heading fontSize="md">{conference.childMdx.frontmatter.title}</Heading>
              <Text mt={2}>{conference.childMdx.frontmatter.speaker}</Text>
              <Button
                as="a"
                variantColor="brand"
                variant="link"
                width="fit-content"
                mt={2}
              >
                Voir le détails et s'inscrire
              </Button>
            </Card>
          </Flex>
        ))}
      </SimpleGrid>
    </Stack>
  )
}
