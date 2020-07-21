const path = require(`path`)
const slugify = require(`slugify`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  const YEARS = [2013, 2014, 2015, 2016, 2017, 2018, 2019]

  YEARS.forEach((year) =>
    createRedirect({
      fromPath: `/${year}`,
      toPath: `https://archive.codeursenseine.com/${year}`,
      isPermanent: true,
    })
  )

  // -------------------- CREATING MEETUPS PAGE ---------------------
  const meetups = await graphql(
    `
      query {
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
    query {
      site {
        siteMetadata {
          currentYear
          description
        }
      }
    }
  `)

  if (metadataQuery.errors) {
    throw metadataQuery.errors
  }

  // -------------------------- CREATING ORGANISERS PAGE -----------------------
  const organisersQuery = await graphql(`
    query {
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

  if (organisersQuery.errors) {
    throw organisersQuery.errors
  }

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
    query {
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

  if (sponsorsPageQuery.errors) {
    throw sponsorsPageQuery.errors
  }

  createPage({
    path: `/${metadataQuery.data.site.siteMetadata.currentYear}/sponsors`,
    component: path.resolve(`./src/templates/SponsorsPage/index.js`),
    context: {
      siteMetadata: metadataQuery.data.site.siteMetadata,
      sponsors: sponsorsPageQuery.data.allFile.nodes,
    },
  })

  // -------------------- CREATING DYNAMIC PAGES --------------------------
  const pagesQuery = await graphql(`
    query {
      allFile(filter: { sourceInstanceName: { eq: "pages" } }) {
        nodes {
          childMdx {
            id
            frontmatter {
              title
              navigation
              order
            }
            body
          }
          name
          relativeDirectory
        }
      }
    }
  `)

  if (pagesQuery.errors) {
    throw pagesQuery.errors
  }

  pagesQuery.data.allFile.nodes.forEach((page) => {
    const pagePath =
      page.relativeDirectory === "ces"
        ? `/${metadataQuery.data.site.siteMetadata.currentYear}/${page.name}`
        : `/${page.relativeDirectory}/${page.name}`

    createPage({
      path: pagePath,
      component: path.resolve(`./src/templates/PageLayout.js`),
      context: {
        body: page.childMdx.body,
        theme: page.relativeDirectory,
      },
    })
  })

  return null
}
