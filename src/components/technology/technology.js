import React from "react"
import Skill from "../constants/skill"
import Card from './card'
const Technology = ({ Tecnologies }) => {
  const tech = () => {
    let result = []
        Tecnologies.map( (tech)=>{ 
      return(
        result.push(Skill.filter(node => node.name === tech))
      )
    })
    return result.filter(node => node.length !== 0)
  }
  //recibe el array
 const techproject = tech();

  return (
    <>
      <Card techproject={techproject} />
    </>
  )
}

export default Technology
