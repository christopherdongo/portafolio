import React from "react"
import loadable from '@loadable/component';
import { timeout } from 'promise-timeout'  
import Spinner from '../spinner'
const CardSkill = ({myskill}) => {

   const OtherComponent = loadable(() => timeout(import('./card'),2000), {
    fallback: <Spinner />,
   } )

  return (
    <>
     {
       myskill.map((skill, index) =>(
        <OtherComponent key={index} skill={skill} />
       ))
     }
    </>
  )
}

export default CardSkill
