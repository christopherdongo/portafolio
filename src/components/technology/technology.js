import React from "react"
import Skill from "../constants/skill"

const Technology = ({ Tecnologies }) => {
  
  /*const tech = () => {
    for(let i=0; i<Tecnologies.length; i++){
       return Tecnologies[i];  
     }
  }*/
 
  const result = Skill.filter(skill => skill.name === function(){for(let i=0; i<Tecnologies.length; i++){return Tecnologies[i] }})
  console.log(result)
  
  return (
    <>
      <h1>holaa</h1>
    </>
  )
}

export default Technology
