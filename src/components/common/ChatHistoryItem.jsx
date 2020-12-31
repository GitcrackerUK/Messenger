import React from 'react';
import styled from 'styled-components';
import StImg from './Thumbnail';
import Text from './historyText';
import Button from 'components/common/Button'

const Wrapper = styled.div`
margin:auto;
display:flex;
width:370px;
height:58px;
border-bottom:1px solid rgba(33, 33, 33, 0.08);
&:hover{
    background-color:rgba(196, 196, 196, 0.2);
}
`
const Half = styled.div`
display:flex;
justify-content:center;
height:100%;
width:50%;
`

function SingleChat() {
    return (
        <Wrapper>
            <Half>
                <Text>10:40</Text>
                <StImg></StImg>
                <Text>Name 1</Text>
            </Half>
            <Half>
                <Text>Name 2</Text>
                <StImg></StImg>
                <Button>delete</Button>

            </Half>

        </Wrapper>
    )
}

export default SingleChat