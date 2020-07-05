import { useStaticQuery, graphql } from "gatsby"

export const useAssociations = () =>
  useStaticQuery(graphql`
    query Associations {
      allFile(
        filter: {
          sourceInstanceName: { eq: "associations" }
          internal: {}
          extension: { eq: "mdx" }
        }
        sort: { fields: childMdx___frontmatter___name }
      ) {
        nodes {
          childMdx {
            frontmatter {
              link
              logo {
                publicURL
              }
            }
          }
        }
      }
    }
  `)
