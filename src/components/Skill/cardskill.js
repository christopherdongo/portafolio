import React, {Suspense} from "react"
import lazy from '@loadable/component'
import Spinner from '../spinner'

const CardSkill = ({myskill}) => {

   const OtherComponent = lazy(() => import('./card'))

  return (
    <>
     {
       myskill.map((skill, index) =>(
        <Suspense key={index} fallback={<Spinner />}>
          <OtherComponent key={index} skill={skill} />
        </Suspense>
       ))
     }
    </>
  )
}

export default CardSkill
