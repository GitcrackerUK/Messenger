import React from 'react';
import styled from 'styled-components';
import Header from 'components/common/Header';
import NavButton from 'components/common/Nav-item';
import Background from 'components/common/Background';

const MainWrapper = styled.div`
position:relative;
background-color:#fff;
font-family:roboto;
height:500px;
width:500px;
`;
const MidWrapper = styled.div`
position:absolute;
top:41px;
left:76px;
width:350px;
margin:auto;
`

const MenuWrapper = styled.div`
display:flex;
margin:7px auto;
`

function MainLayout({ children,header,left,right }) {
    return (
        <MainWrapper>
            <MidWrapper>
                <Header>{header}</Header>
                <MenuWrapper>
                    <NavButton>{left}</NavButton>
                    <NavButton>{right}</NavButton>
                </MenuWrapper>
            </MidWrapper>
            <Background>
            {children}
            </Background>
           
        </MainWrapper>
    )
}

export default MainLayout