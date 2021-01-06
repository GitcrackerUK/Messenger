import React, { useState } from "react"
import styled from "styled-components"
import tickImg from 'img/Component21.svg';

const Wrapper = styled.div`
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
${p=>p.tick?"opacity:1":"opacity:0"};
top:9px;
right:0px;
position:absolute;
height:10px;
width:10px;
`
function Cel({ ...props }) {
 const [user, setUser]= useState('')
 const [tick,setTick] = useState(false)

 function getSet(e){
     setUser(e)
     props.getUser(e)
     setTick(true)
 }
    return (
        <Wrapper onClick={(e)=> getSet(e.target.src)}>
            <Img src={props.src}></Img>
            { props.tick===user ? <Tick tick={tick}  src={tickImg}></Tick> : null}
        </Wrapper >
    )
}

export default Cel