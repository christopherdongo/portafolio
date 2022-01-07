
import {graphql, useStaticQuery} from 'gatsby'

const getData = graphql`
{
  projects:allContentfulProjects{
    edges{
      node{
        contentful_id
        title
        slug
        image{
    gatsbyImageData(width:700 quality:50)
        }
    }
    }
  }
}
`
export const useProjects = () => {
    //recibiendo data content
    const {projects} = useStaticQuery(getData)

    return {
       projects
    }

}
