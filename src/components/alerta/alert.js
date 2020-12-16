import React from 'react';
import styled from 'styled-components'

const MensajeDiv=styled.div`
 min-width:100%;
 background:red;
 display:flex;
 justify-content:center;
 border-radius:5px;
 margin-top:3px;
`
const Messageh=styled.p`
 font-size:1rem;
 font-weight:500;
 text-align:center;
 font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`

const Alert =({message})=>{
    return(
        <MensajeDiv>
            <Messageh>{message}</Messageh>
        </MensajeDiv>
    )
}

export default Alert;