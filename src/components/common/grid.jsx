import { user, user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, user11 } from 'img/index';
import React , { useState } from 'react';
import styled from 'styled-components';
import StImg from './Thumbnail';


const Wrapper = styled.div`
margin:20px auto;
width:220px;
height:147px;
display:flex;
flex-wrap:wrap;
`


export default function Grid() {
    const [users] = useState([user, user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, user11])

    return (
        <Wrapper>
            {
                users.map((p) => {
                    return(
                        <StImg src={p} id={p.substring(p.length-10)} >
                        </StImg>
                    )

                })
            }

        </Wrapper>
    )


}