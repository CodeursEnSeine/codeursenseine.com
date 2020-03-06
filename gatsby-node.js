exports.createPages = ({ graphql, actions }) => {
  const { createRedirect } = actions
  createRedirect({
    fromPath: "/2019",
    toPath: "https://archive.codeursenseine.com/2019",
    isPermanent: true,
  })
}
