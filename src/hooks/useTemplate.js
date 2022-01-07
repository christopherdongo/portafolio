
import {getImage} from 'gatsby-plugin-image'

export const useTemplate = (projects) => {

//destructuring
  const {
    title,
    repository,
    link,
    views,
    technology,
    description: { description },
  } = projects;

  //desctructuring imagen
  const [...Projectimages] = views

  /*convertir a arrays*/
  const Tecnologies = Object.values(technology[0]).filter(node => node != null)

  const imageTrans=(val)=>{
    const Image = getImage(val);
    return Image
  }
  
    return {
        imageTrans,
        Tecnologies,
        Projectimages,
        title,
        repository,
        link,
        description
    }
}
