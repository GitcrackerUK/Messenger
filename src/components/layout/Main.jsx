import React from 'react';
import { Link } from 'react-router-dom'
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
const StLink = styled(Link)`
text-decoration:none;
color:rgba(0, 0, 0, 0.7);
font-size:13px;
`

function MainLayout({ children, header, left, leftLink, right, rightLink }) {
    return (
        <MainWrapper>
            <MidWrapper>
                <Header>{header}</Header>
                <MenuWrapper>
                    <NavButton>  <StLink to={leftLink}>{left}</StLink></NavButton>
                    <NavButton>  <StLink to={rightLink}>{right}</StLink></NavButton>
                </MenuWrapper>
            </MidWrapper>
            <Background>
                {children}
            </Background>

        </MainWrapper>
    )
}

export default MainLayout