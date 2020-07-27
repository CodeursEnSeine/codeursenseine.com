import React from "react"
import { Button, Input, Stack, Text } from "@chakra-ui/core"

import { Card } from "components/Card"
import { StackInline } from "components/StackInline"

export const Newsletter = ({ ...props }) => {
  return (
    <Card {...props}>
      <Stack spacing={4}>
        <Text as="strong">
          Renseignez votre email pour recevoir les news de Codeurs en Seine
        </Text>
        <form
          action="https://codeursenseine.us16.list-manage.com/subscribe/post?u=e89c02673c1526190f38a8e68&amp;id=942ec797d0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_blank"
          noValidate
        >
          <StackInline spacing={4}>
            <Input
              placeholder="nom@domaine.fr"
              type="email"
              id="mce-EMAIL"
              name="EMAIL"
              width="auto"
              flexGrow={1}
            />
            <Button
              variantColor="brand"
              type="submit"
              name="subscribe"
              id="mc-embedded-subscribe"
              flexGrow={{ base: 1, md: 0 }}
            >
              Recevoir les news par email
            </Button>
          </StackInline>
        </form>
      </Stack>
    </Card>
  )
}
