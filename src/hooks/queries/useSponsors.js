import { useStaticQuery, graphql } from "gatsby"

export const useSponsors = () =>
  useStaticQuery(graphql`
    {
      allFile(
        filter: {
          sourceInstanceName: { eq: "sponsors" }
          childMdx: { frontmatter: { isMeetupSponsor: { eq: true } } }
        }
        sort: { order: ASC, fields: childMdx___frontmatter___name }
      ) {
        nodes {
          childMdx {
            frontmatter {
              name
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
