import React from "react";
import PropTypes from "prop-types";
import { Box, Heading, Image, Stack, HStack, Text } from "@chakra-ui/react";
import { A } from "components/A";

export const MeetupSpeakers = ({ speakers, ...props }) => (
  <Stack spacing={10} {...props}>
    {speakers?.map((speaker) => (
      <Box key={speaker.twitter}>
        <HStack align="start" spacing="4">
          <Image
            boxSize="7.5rem"
            objectFit="cover"
            src={speaker.avatar}
            alt={speaker.name}
            fallbackSrc="/default.jpg"
            borderRadius={4}
          />
          <Stack>
            <Heading as="h5" size="sm" color="brand.900">
              {speaker.name}
            </Heading>
            {!!speaker.bio && <Text>{speaker.bio}</Text>}
            {!!speaker.twitter && (
              <A
                href={`https://twitter.com/${speaker.twitter}`}
                target="_blank"
              >
                @{speaker.twitter}
              </A>
            )}
          </Stack>
        </HStack>
      </Box>
    ))}
  </Stack>
);

MeetupSpeakers.propTypes = {
  speakers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.string,
      twitter: PropTypes.string,
    })
  ),
};
