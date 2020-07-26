import React from "react"
import { Box, Button, Flex, Input, Stack, Text, Grid } from "@chakra-ui/core"

import { Card } from "components/Card"

export const Newsletter = ({ ...props }) => {
  return (
    <Card {...props}>
      <Stack spacing={4}>
        <Text as="strong">
          Renseignez votre email pour recevoir les news de Codeurs en Seine
        </Text>
        <Grid templateColumns={["1fr", "1fr", "1fr", "2fr 1fr"]} gap={4}>
          <Box flexGrow={1}>
            <Input placeholder="nom@domaine.fr" />
          </Box>
          <Button variantColor="brand">Recevoir les news par email</Button>
        </Grid>
      </Stack>
    </Card>
  )
}
