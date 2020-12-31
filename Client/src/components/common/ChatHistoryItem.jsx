import React from 'react';
import styled from 'styled-components';
import StImg from './Thumbnail';
import Text from './historyText';
import Button from 'components/common/Button'
import {Link} from 'react-router-dom'

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
const ButtonWrapper = styled.div`
margin:auto;
width:54px;
height:45px;
`

function SingleChat({srcLeft,srcRight}) {
    return (
        <Wrapper>
            <Half>
                <Text>10:40</Text>
                <StImg src={srcLeft}></StImg>
                <Text>Name 1</Text>
            </Half>
            <Half>
                <Text>Name 2</Text>
                <StImg src={srcRight}></StImg>
                <ButtonWrapper>
                    <Button>delete</Button>
                    <Link to='/single-history'><Button>view</Button></Link>
                    
                </ButtonWrapper>
            </Half>

        </Wrapper>
    )
}

export default SingleChat