import React from "react";
import { Helmet } from "react-helmet";

export const OGURL = ({ path }) => (
  <Helmet
    meta={[
      {
        property: `og:url`,
        content: `${process.env.GATSBY_ORIGIN}${path}`,
      },
    ]}
  />
);
