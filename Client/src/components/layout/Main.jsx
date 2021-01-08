import React,{useEffect} from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import Header from 'components/common/Header';
import NavButton from 'components/common/Nav-item';
import Background from 'components/common/Background';

const MainWrapper = styled.div`
border-radius:5px;
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
margin:auto;
text-decoration:none;
color:rgba(0, 0, 0, 0.7);
font-size:13px;
`

function MainLayout({ ...props}) {
   
    function sendUser(props){
        props.sendChat(props);
    }

    return (
        <MainWrapper >
            <MidWrapper>
                <Header>{props.header}</Header>
                <MenuWrapper>
                    <StLink onClick={
                       ()=> sendUser(props)
                    } id="leftButton" to={props.leftLink}><NavButton>{props.left}  </NavButton></StLink>
                    <StLink  onClick={
                       ()=> sendUser(props)} id="rightButton" to={props.rightLink}><NavButton> {props.right}</NavButton></StLink>
                </MenuWrapper>
            </MidWrapper>
            <Background>
                {props.children}
            </Background>
        </MainWrapper>
    )
}

export default MainLayout