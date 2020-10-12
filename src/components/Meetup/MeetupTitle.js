import React from "react";
import PropTypes from "prop-types";
import { Heading } from "@chakra-ui/core";
import parse from "html-react-parser";

const propTypes = {
  metadata: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export const MeetupTitle = ({ metadata, ...props }) => {
  return (
    <Heading as="h1" fontWeight="normal" {...props}>
      {parse(metadata.title)}
    </Heading>
  );
};

MeetupTitle.propTypes = propTypes;
