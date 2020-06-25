import React from "react"
import { Link } from "gatsby"
import { Box, Button, Flex, Text } from "@chakra-ui/core"

export const MeetupHeader = () => {
  return (
    <Flex justify="space-between" my={10}>
      <Box>
        <Text>Retrouvez Codeurs en Seine toute l'année !</Text>
        <Text as="strong">Meetups Codeurs en Seine</Text>
      </Box>
      <Box>
        <Button
          as={Link}
          to="/meetups/sponsors"
          variant="outline"
          variantColor="brand"
        >
          Devenir sponsor
        </Button>
      </Box>
    </Flex>
  )
}
