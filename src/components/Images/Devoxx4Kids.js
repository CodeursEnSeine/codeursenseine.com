import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const Devoxx4Kids = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "devoxx4kids/devoxx4kids.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}
