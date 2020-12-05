module.exports = {
  siteMetadata: {
    title: "Portafolio",
    description:"Portafolio de proyectos",
    author: "Christopher Dongo",
    data: {name:"christopher", year:28},
    twitterUsername:"@tdhris",
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
