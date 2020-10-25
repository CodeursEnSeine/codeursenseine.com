import React from "react";
import "dayjs/locale/fr";
import { Card } from "components/Card";

export const SpeakerCard = ({ speaker }) => {
  const {
    name,
    image: {
      publicUrl
    },
    company,
    bio,
    References,
    twitterLink,
    githubLink,
  } = speaker?.childMdx?.frontmatter;

  return (
    <Card
      borderLeftWidth={2}
      borderLeftColor="brand.600"
    >
      {name}
    </Card>
  );
};
