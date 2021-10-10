import React from "react";
import { Helmet } from "react-helmet";

export const OgUrl = ({ path }) => (
  <Helmet
    meta={[
      {
        property: `og:url`,
        content: `${process.env.GATSBY_ORIGIN}${path}`,
      },
    ]}
  />
);
