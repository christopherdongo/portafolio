import React from "react"
import loadable from '@loadable/component'
import Spinner from '../spinner'
import { timeout } from 'promise-timeout';
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
