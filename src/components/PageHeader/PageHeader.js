import React from "react"
import { Link } from "gatsby"
import {
  useTheme,
  Box,
  Button,
  Flex,
  Stack,
  Text,
  Heading,
} from "@chakra-ui/core"

export const PageHeader = () => {
  const { themeName, data } = useTheme()

  const getButtons = () => {
    switch (themeName) {
      case "meetup":
        return (
          <Button as={Link} to="/meetups/sponsors" variantColor="brand">
            Devenir sponsor
          </Button>
        )

      case "devoxx4kids":
        return null

      default:
        return (
          <Button as={Link} to="/2020/sponsors" variantColor="brand">
            Devenir sponsor
          </Button>
        )
    }
  }

  return (
    <Flex alignItems="center" justify="space-between" mb={10}>
      <Box>
        <Text fontFamily="heading" fontSize="sm" color="brand.900">
          {data.pretitle}
        </Text>
        <Heading as="h4" color="brand.900" fontSize="lg">
          {data.title}
        </Heading>
      </Box>
      <Stack isInline>{getButtons()}</Stack>
    </Flex>
  )
}
