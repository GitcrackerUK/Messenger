import { user, user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, user11 } from 'img/index';import React , { useState } from 'react'
import styled from 'styled-components'





const Wrapper = styled.div`
margin:20px auto;
width:220px;
height:147px;
display:flex;
flex-wrap:wrap;
`
const StImg = styled.img`
height:45px;
width:45px;
margin:5px;
border-radius:5px;
`

export default function Grid() {
    const [users] = useState([user, user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, user11])
    return (
        <Wrapper>
            {
                users.map((p) => {
                    console.log(p)
                    return(
                        <StImg src={p} id={p.substring(p.length-10)} >
                        </StImg>
                    )

                })
            }

        </Wrapper>
    )


}