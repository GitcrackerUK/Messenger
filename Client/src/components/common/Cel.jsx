import React from "react"
import styled from "styled-components"
import tickImg from 'img/Component21.svg';

const Wrapper= styled.div`
position:relative;
margin:auto;
height:45px;
width:45px;
margin:5px;
border-radius:5px;
`

const Img = styled.img`
position:absolute;
margin:auto;
height:45px;
width:45px;
margin:5px;
border-radius:5px;
`
const Tick = styled.img`
top:9px;
right:0px;
position:absolute;
height:10px;
width:10px;
`

function Cel({ ...props }) {
    return (
        <Wrapper>
            <Img src={props.src}></Img>
            {props.tick ? <Tick src={tickImg}></Tick> : null}
        </Wrapper>



    )
}

export default Cel