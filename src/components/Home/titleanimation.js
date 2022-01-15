import React, {useRef} from "react"
import Typist from "react-typist"
import * as styles from '../../css/descripcion.module.css'

export default function TitleAnimation({words}) {

    const typistRef = useRef();

    const handleTypingDone = () => {
        typistRef.current.setState({ isDone: false });
        typistRef.current.typeAllLines();
      };
  return (
    <>
      <Typist
        onTypingDone={handleTypingDone}
        ref={typistRef}
      >
        {words.map((word, index) => (
          <span key={index}>
            <Typist.Delay ms={500} />
            <span className={styles.titleAnimation}>{word}</span>
            <Typist.Backspace count={word.length} delay={1000}/>
          </span>
        ))}
      </Typist>
    </>
  )
}
