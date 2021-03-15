import React from "react";
import { Button, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { Card } from "../Card";

const propTypes = {
  metadata: PropTypes.shape({
    meetup_register_link: PropTypes.string.isRequired,
    meetup_date: PropTypes.string.isRequired,
    meetup_start_time: PropTypes.string.isRequired,
    meetup_end_time: PropTypes.string.isRequired,
    meetup_location: PropTypes.string.isRequired,
  }).isRequired,
};

export const MeetupRegistration = ({ metadata, ...props }) => {
  return (
    <Card
      alignItems="center"
      as="a"
      href={metadata.meetup_register_link}
      variant="primary"
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
    </Card>
  );
};

MeetupRegistration.propTypes = propTypes;
