import React from "react"
import loadable from '@loadable/component'
import Spinner from '../spinner'
const CardSkill = ({myskill}) => {

   const OtherComponent = loadable(() => import('./card'), {
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
