import React from "react";
import {
  Stack,
  Grid,
} from "@chakra-ui/core";
import { Link } from "gatsby";
import "dayjs/locale/fr";
import { Card } from "components/Card";
import { MDXRenderer } from "gatsby-plugin-mdx";

export const SpeakerCard = ({ speaker }) => {
  return (
    <Stack>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr) repeat(1, 2fr)"]}
        mt={3}
      >
        <Card
          borderLeftWidth={2}
          borderLeftColor="brand.600"
          isLink
        >
          Test
        </Card>
      </Grid>
    </Stack>
  );
};
