import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { SimpleGrid } from "@chakra-ui/core"
import { SponsorCard } from "components/Sponsors"

export const MeetupSponsors = () => {
  const data = useStaticQuery(graphql`
    query {
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
            body
            excerpt(pruneLength: 1000)
          }
        }
      }
    }
  `)

  return (
    <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap={8}>
      {data.allFile.nodes.map((sponsor, index) => (
        <SponsorCard
          key={index}
          name={sponsor.childMdx.frontmatter.name}
          link={sponsor.childMdx.frontmatter.link}
          logoSrc={sponsor.childMdx.frontmatter.logo.publicURL}
          excerpt={sponsor.childMdx.excerpt}
        >
          {sponsor.childMdx.body}
        </SponsorCard>
      ))}
    </SimpleGrid>
  )
}
