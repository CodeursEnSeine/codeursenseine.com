import React from "react"
import { Heading, Image, Stack, Text, Box } from "@chakra-ui/core"
import { Remarkable } from "remarkable"
import { A } from "components/A"

export const MeetupSpeaker = ({ speaker, ...props }) => {
  const md = new Remarkable({
    html: true,
  })
  const bio = md.render(speaker.bio)

  console.log(bio)

  return (
    <Stack spacing={2} {...props}>
      <Heading as="h5" size="sm" color="brand.900">
        {speaker.name}
      </Heading>
      <Stack isInline spacing={6}>
        <Image
          size={{ base: "5rem", sm: "7.5rem" }}
          flex="none"
          objectFit="cover"
          src={speaker.avatar}
          alt={speaker.name}
          fallbackSrc="/default.jpg"
          borderRadius={4}
        />
        <Stack>
          <Box dangerouslySetInnerHTML={{ __html: bio }} />
          {speaker.twitter && (
            <Text>
              Twitter :{" "}
              <A
                href={`https://twitter.com/${speaker.twitter}`}
                target="_blank"
              >
                @{speaker.twitter}
              </A>
            </Text>
          )}
        </Stack>
      </Stack>
    </Stack>
  )
}
