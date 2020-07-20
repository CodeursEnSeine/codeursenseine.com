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
      case "meetups":
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
      <Box d={{ base: "none", md: "block" }} color="brand.800">
        <Text fontFamily="heading" fontSize="sm">
          {data.pretitle}
        </Text>
        <Heading as="h4" fontSize="lg">
          {data.title}
        </Heading>
      </Box>
      <Stack isInline>{getButtons()}</Stack>
    </Flex>
  )
}
