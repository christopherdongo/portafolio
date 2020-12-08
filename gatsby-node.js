/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

exports.createPages= async ({graphql, actions})=>{
   const {createPage} = actions;
   const {data} = await graphql(`
   query{
    projects:allContentfulProjects{
      edges{
        node{
          slug
        }
      }
    }
  }
   `)

   data.projects.edges.forEach(({node})=>{
       createPage({
           path:`proyectos/${node.slug}`,
           component: path.resolve("src/templatePage/project-template.js"),
           context:{
               singleslug: node.slug,
           },
       })
   })
}