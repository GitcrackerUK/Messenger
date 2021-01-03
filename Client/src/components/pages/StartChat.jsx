import React, { useState } from 'react'
import Input from 'components/common/input'
import MainLayout from 'components/layout/Main'
import styled from 'styled-components'
import Grid from 'components/common/grid'
import NavButton from 'components/common/Nav-item'
import { Link } from 'react-router-dom'


const InputWrapper = styled.div`
margin-top:44px;
`
const ButtonWrapper = styled.div`
margin-top:25px;
`
const StLink = styled(Link)`
text-decoration:none;
color:rgba(0, 0, 0, 0.7);
font-size:13px;
`

export default function StartChat() {
    const [name,setName] = useState({name:'',minLength:false})
    const [user, setUser] = useState({ id: '', name: '' })
    function handleClick(e) {
        setUser(prev=>{return{...prev,id: e}})
    }
    function updateName(e) {
        setUser(prev=>{return{...prev,name:e.target.value}})
        setName({name:e.target.value})
        if(name.name.length>2){
            setName(p=>({...p,minLength:true}))
        }else{
            setName(p=>({...p,minLength:false}))
        }
    }

    //change color theme for input
    //grid
    //StLink
    return (
        <MainLayout header="Start Chat" left="Chat History" leftLink="/history" rightLink="/" right="Go Back" >
            <InputWrapper  onChange={(e)=>updateName(e)}>
                <Input label="Name"  underText="Type your name" placeholder="Input text"></Input>
            </InputWrapper>
            <Grid handleClick={e => handleClick(e)} ></Grid>
            <ButtonWrapper >
                <StLink onCLick={updateName} to={name.minLength?{ pathname: '/chat', state: { user } }:'/start'}><NavButton>Start Chat</NavButton></StLink>
            </ButtonWrapper>


        </MainLayout>
    )
}
