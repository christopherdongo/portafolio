//PATH

require("dotenv").config({
  path:`.env.${process.env.NODE_ENV}`
})


module.exports = {
  siteMetadata: {
    title: "Portafolio",
    description:"Portafolio de mis proyectos Personales",
    author: "Christopher Dongo",
    data: {name:"christopher", year:28},
    twitterUsername:"@tdhris",
    facebookUsername: "Christopher Dongo H.",
    image:'/defaultBcg.jpeg',
    siteUrl:'https://www.google.com.pe'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `gfkx4627b3pb`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken:`4BuRXmFWAlaUFCYCApcd4upDJjLkZUshPIUv35cLj0E`
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.example.com',
        sitemap: 'https://www.example.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-playground`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
