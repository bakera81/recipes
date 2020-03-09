/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

 module.exports = {
   siteMetadata: {
     title: `Anthony W. Baker`,
   },
   plugins: [
     `gatsby-plugin-emotion`,
     `gatsby-transformer-yaml`,
     `gatsby-plugin-sharp`,
     `gatsby-transformer-sharp`,
     {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
     resolve: `gatsby-source-filesystem`,
     options: {
       name: `fonts`,
       path: `${__dirname}/src/fonts`,
     },
   },
   {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  ],
 }
