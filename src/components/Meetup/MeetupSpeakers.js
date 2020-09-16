import React from "react"
import PropTypes from "prop-types"
import { Box, Heading, Image } from "@chakra-ui/core"
import { A } from "components/A"
import { StackInline } from "components/StackInline"

export const MeetupSpeakers = ({ speakers, ...props }) => (
  <StackInline spacing={10} {...props}>
    {speakers &&
      speakers.map((speaker) => (
        <Box>
          <Heading as="h5" size="sm" color="brand.900">
            {speaker.name}
          </Heading>
          <Image
            size="7.5rem"
            objectFit="cover"
            src={speaker.avatar}
            alt={speaker.name}
            fallbackSrc="/default.jpg"
            borderRadius={4}
            mt={2}
          />
          {speaker.twitter && (
            <A href={`https://twitter.com/${speaker.twitter}`} target="_blank">
              @{speaker.twitter}
            </A>
          )}
        </Box>
      ))}
  </StackInline>
)

MeetupSpeakers.propTypes = {
  speakers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.string,
      twitter: PropTypes.string,
    })
  ),
}
