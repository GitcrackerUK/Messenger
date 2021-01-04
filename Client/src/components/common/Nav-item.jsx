import styled from 'styled-components'
import React,{useRef} from 'react'

const Wrapper = styled.div`
background-color:rgba(196, 196, 196, 0.25);
justify-content:center;
align-items:center;
border-radius:5px;
position:relative;
display:flex;
width:170px;
height:23px;
margin:auto;
font-size:13px;
`
const Line = styled.div`
position:absolute;
height:1px;
width:90%;
background-color:rgba(1, 87, 155, 1);
opacity:50%;
bottom:3px;
`

function NavButton({ children}){
    return(
        <Wrapper >
            {children}
            <Line ></Line>
        </Wrapper>
    )
}

 export default NavButton;