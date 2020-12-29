import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
background-color:rgba(196, 196, 196, 0.1);
position:absolute;
top:120px;
left:50px;
width:400px;
height:330px;
`
export default function Background({ children }) {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}