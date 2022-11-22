import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export const Devoxx4Kids = () => {
  const data = useStaticQuery(graphql`
    {
      placeholderImage: file(
        relativePath: { eq: "devoxx4kids/devoxx4kids.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 300, layout: CONSTRAINED)
        }
      }
    }
  `);

  return (
    <GatsbyImage
      image={data.placeholderImage.childImageSharp.gatsbyImageData}
      alt="Devoxx4Kids"
    />
  );
};
