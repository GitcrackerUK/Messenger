import React from 'react';
import styled from 'styled-components';
import Header from 'components/common/Header';
import NavButton from 'components/common/Nav-item';

const MainWrapper = styled.div`
position:relative;
background-color:#fff;
font-family:roboto;
height:500px;
width:500px;
`;
const MenuWrapper = styled.div`
display:flex;
width:350px;
margin:7px auto;
`
const MidWrapper = styled.div`

`

function MainLayout() {
    return (
        <MainWrapper>
            <MidWrapper>
                <Header>Main</Header>
                <MenuWrapper>
                    <NavButton>Chat to Bot</NavButton>
                    <NavButton>Chat History</NavButton>
                </MenuWrapper>
            </MidWrapper>


        </MainWrapper>
    )
}

export default MainLayout