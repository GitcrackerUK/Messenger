import React from 'react';
import {Link} from 'react-router-dom'
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

function MainLayout({ children,header,left,leftLink,right,rightLink }) {
    return (
        <MainWrapper>
            <MidWrapper>
                <Header>{header}</Header>
                <MenuWrapper>
                    <Link to={leftLink}><NavButton>{left}</NavButton></Link>
                   <Link to={rightLink}><NavButton>{right}</NavButton></Link> 
                </MenuWrapper>
            </MidWrapper>
            <Background>
            {children}
            </Background>
           
        </MainWrapper>
    )
}

export default MainLayout