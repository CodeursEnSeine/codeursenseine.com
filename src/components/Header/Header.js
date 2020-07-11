import React from "react"
import { Box, Flex, Text } from "@chakra-ui/core"

export const Header = ({ description, children, actions }) => (
  <Flex justify="space-between" mb={10}>
    <Box>
      <Text color="brand.900">{description}</Text>
      <Text color="brand.900" as="strong">
        {children}
      </Text>
    </Box>
    {actions && <Box>{actions}</Box>}
  </Flex>
)
