import { user, user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, user11 } from 'img';
import React, { useState } from 'react';
import styled from 'styled-components';
import Cel from './Cel'

const Wrapper = styled.div`
margin:20px auto;
width:220px;
height:147px;
display:flex;
flex-wrap:wrap;
`


export default function Grid(props) {
    const [users] = useState([user, user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, user11])
    const [tick, setTick]= useState(false)

    function handleTick(){
        
    }
    return (
        <Wrapper>
            {
                users.map((p) => {
                    return (
                        <Cel  tick={true} onClick={e => props.handleClick(e.target.id,)}  src={p} id={p.substring(p.length - 10)} key={p.substring(p.length - 10)}></Cel>
                        
                    )

                })

            }
           
        </Wrapper>
    )

}