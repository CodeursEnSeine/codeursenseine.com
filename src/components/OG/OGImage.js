import React from "react";
import Helmet from "react-helmet";

export const OGImage = ({ path }) => (
  <Helmet
    meta={[
      {
        property: `og:image`,
        content: `${process.env.GATSBY_ORIGIN}${path}`,
      },
    ]}
  />
);
