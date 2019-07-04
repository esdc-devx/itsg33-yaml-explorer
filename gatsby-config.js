module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
  {
    resolve: "gatsby-source-apiserver",
    options: {
      // Type prefix of entities from server
      typePrefix: "internal__",

      // The url, this should be the endpoint you are attempting to pull data from
      url: `https://raw.githubusercontent.com/cds-snc/security-goals/master/docs/controls.json`,

      method: "get",


      // Name of the data to be downloaded.  Will show in graphQL or be saved to a file
      // using this name. i.e. posts.json
      name: `controls`,


      // Optionally include some output when building
      // Default is false
      verboseOutput: true, // For debugging purposes

      // Optionally skip creating nodes in graphQL.  Use this if you only want
      // The data to be saved locally
      // Default is false
      skipCreateNode: false, // skip import to graphQL, only use if localSave is all you want

      // Optionally re-source data when it changes and
      // `gatsby develop` is running.
      // Requires `ENABLE_GATSBY_REFRESH_ENDPOINT=true`.
      // See https://www.gatsbyjs.org/docs/environment-variables/#reserved-environment-variables
      // Default is false
      enableDevRefresh: true,

      // Optionally override key used to re-source data
      // when `gatsby develop` is running.
      // Requires `enableDevRefresh: true`.
      // See setting directly above this one.
      // See also https://github.com/gatsbyjs/gatsby/issues/14653
      // Default is `id`
      refreshId: `id`,

    }
  },
    `gatsby-transformer-json`,
    `gatsby-plugin-react-helmet`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
