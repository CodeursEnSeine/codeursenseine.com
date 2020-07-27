module.exports = {
  siteMetadata: {
    title: `Codeurs en Seine`,
    description: `Rencontre de codeuses & codeurs à Rouen`,
    author: `@codeursenseine`,
    currentYear: `2020`,
  },
  plugins: [
    {
      resolve: `gatsby-alias-imports`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/meetups`,
        name: `meetups`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/sponsors`,
        name: `sponsors`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/associations`,
        name: `associations`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/organisers`,
        name: `organisers`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages`,
        name: `pages`,
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Codeurs en Seine`,
        short_name: `Codeurs en Seine`,
        start_url: `/`,
        background_color: `#034ea2`,
        theme_color: `#034ea2`,
        display: `minimal-ui`,
        icon: `src/images/ces.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

    // Must be at the end of the plugins
    `gatsby-plugin-client-side-redirect`,
  ],
}
