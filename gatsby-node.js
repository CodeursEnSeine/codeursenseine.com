const path = require(`path`)
const slugify = require(`slugify`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  createRedirect({
    fromPath: "/2019",
    toPath: "https://archive.codeursenseine.com/2019",
    isPermanent: true,
  })

  // -------------------- CREATING MEETUPS PAGE ---------------------
  const meetups = await graphql(
    `
      {
        allMdx(
          sort: { fields: frontmatter___meetup_date, order: DESC }
          filter: { frontmatter: { published: { ne: false } } }
        ) {
          edges {
            node {
              id
              frontmatter {
                slug
                published
              }
              parent {
                ... on File {
                  name
                  relativeDirectory
                  sourceInstanceName
                }
              }
            }
          }
        }
      }
    `
  )

  if (meetups.errors) {
    throw meetups.errors
  }

  // Create meetup post pages.
  const meetupsEdges = meetups.data.allMdx.edges

  meetupsEdges.forEach((meetup) => {
    if (meetup.node.parent.sourceInstanceName === "meetups") {
      createPage({
        path: `/meetups/events/${slugify(meetup.node.frontmatter.slug, {
          strict: true,
          lower: true,
        })}`,
        component: path.resolve(`./src/templates/MeetupPost/index.js`),
        context: {
          id: meetup.node.id,
        },
      })
    }
  })

  const metadataQuery = await graphql(`
    {
      site {
        siteMetadata {
          currentYear
          description
        }
      }
    }
  `)

  // -------------------------- CREATING ORGANISERS PAGE -----------------------
  const organisersQuery = await graphql(`
    {
      allFile(
        filter: {
          sourceInstanceName: { eq: "organisers" }
          extension: { eq: "mdx" }
        }
        sort: { fields: childMdx___frontmatter___name }
      ) {
        nodes {
          childMdx {
            frontmatter {
              name
              image {
                publicURL
              }
              twitter
              github
              linkedin
            }
          }
        }
      }
    }
  `)

  createPage({
    path: `/${metadataQuery.data.site.siteMetadata.currentYear}/organisateurs`,
    component: path.resolve(`./src/templates/Organisers/index.js`),
    context: {
      organisers: organisersQuery.data.allFile.nodes,
      siteMetadata: metadataQuery.data.site.siteMetadata,
    },
  })

  // -------------------- CREATING SPONSORS PAGE ---------------------
  const sponsorsPageQuery = await graphql(`
    {
      allFile(
        filter: {
          sourceInstanceName: { eq: "sponsors" }
          childMdx: { frontmatter: { sponsor: { ne: null } } }
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
              sponsor
            }
            body
          }
        }
      }
    }
  `)

  createPage({
    path: `/${metadataQuery.data.site.siteMetadata.currentYear}/sponsors`,
    component: path.resolve(`./src/templates/SponsorsPage/index.js`),
    context: {
      siteMetadata: metadataQuery.data.site.siteMetadata,
      sponsors: sponsorsPageQuery.data.allFile.nodes,
    },
  })

  return null
}
