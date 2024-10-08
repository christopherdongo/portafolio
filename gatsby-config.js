require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Portafolio",
    description:"Portafolio de mis proyectos Personales",
    author: "Christopher Dongo",
    data: {name:"christopher", year:29},
    twitterUsername:"@tdhris",
    facebookUsername: "Christopher Dongo H",
    image:'src/assets/images/christopher_dongo.jpg',
    siteUrl:'https://portafoliocd.netlify.app/'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
        
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
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets\/.*\.svg$/, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-plugin-mini-css-class-name`,
      options: {
        prefix: `x-`,
      },
    },
    {
      resolve: `gatsby-plugin-minify`,
      options: {
        debug: true, // debug optional, default false
        config:{
          collapseWhitespace: true,
          minifyCSS: true,
          minifyJS: true,
          removeComments: true,
          removeEmptyAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          processConditionalComments: true
        }
      }
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-remove-fingerprints`,
    `gatsby-plugin-playground`,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}