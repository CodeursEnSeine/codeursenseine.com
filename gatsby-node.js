const path = require(`path`)
const slugify = require(`slugify`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  createRedirect({
    fromPath: "/2019",
    toPath: "https://archive.codeursenseine.com/2019",
    isPermanent: true,
  })

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
                }
              }
            }
          }
        }
      }
    `
  )

  // TODO Check if it is really useful.
  if (meetups.errors) {
    throw meetups.errors
  }

  // Create meetup post pages.
  const meetupsEdges = meetups.data.allMdx.edges

  meetupsEdges.forEach((meetup) => {
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
  })

  return null
}
