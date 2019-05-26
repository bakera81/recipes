/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

 module.exports = {
   siteMetadata: {
     title: `ANTHONY W. BAKER`,
   },
   plugins: [
     `gatsby-plugin-emotion`,
     `gatsby-transformer-yaml`,
     {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
 }
