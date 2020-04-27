import React from "react"
import { Button, Flex, Text, useTheme } from "@chakra-ui/core"
import PropTypes from "prop-types"

const propTypes = {
  metadata: PropTypes.shape({
    meetup_register_link: PropTypes.string.isRequired,
    meetup_date: PropTypes.string.isRequired,
    meetup_start_time: PropTypes.string.isRequired,
    meetup_end_time: PropTypes.string.isRequired,
    meetup_location: PropTypes.string.isRequired,
  }).isRequired,
}

export const MeetupRegistration = ({ metadata, ...props }) => {
  const theme = useTheme()

  return (
    <Flex
      p={4}
      direction="column"
      align="center"
      as="a"
      href={metadata.meetup_register_link}
      background={theme.gradients.brand}
      borderRadius="md"
      {...props}
    >
      <Text fontWeight="bold" color="white" fontSize="lg">
        Meetup le {metadata.meetup_date} de {metadata.meetup_start_time} à{" "}
        {metadata.meetup_end_time}
      </Text>
      <Text color="white">{metadata.meetup_location}</Text>
      <Button
        as="div"
        variant="outline"
        background="white"
        color="brand.600"
        mt={4}
      >
        Inscrivez-vous !
      </Button>
    </Flex>
  )
}

MeetupRegistration.propTypes = propTypes
