import NavButton from 'components/common/Nav-item'
import MainLayout from 'components/layout/Main'
import Input from 'components/common/input'
import Grid from 'components/common/grid'
import Text from 'components/common/text'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import styled from 'styled-components'

const InputWrapper = styled.div`
margin-top:30px;
`
const ButtonWrapper = styled.div`
margin-top:25px;
`
const StLink = styled(Link)`
text-decoration:none;
color:rgba(0, 0, 0, 0.7);
font-size:13px;
`
const StText = styled(Text)`
position:absolute;
left:95px;
top:-12px;
padding:0px;
margin:5px;
`
const GridWrapper = styled.div`
position:relative;
`

export default function StartChat() {
    const [name, setName] = useState({ name: '', minLength: false })
    const [user, setUser] = useState({ icon: '', name: '' })

    function updateName(e) {
        setUser(prev => { return { ...prev, name: e.target.value } })
        setName({ name: e.target.value })
        if (name.name.length > 2) {
            setName(p => ({ ...p, minLength: true }))
        } else {
            setName(p => ({ ...p, minLength: false }))
        }
    }

    function getId(e) {
        setUser(prev => { return { ...prev, icon: e } })
    }

    function sendChat(){
    }
    return (
        <MainLayout  sendChat={sendChat} header="Start Chat" left="Chat History" leftLink="/history" rightLink="/" right="Go Back" >
            <InputWrapper onChange={(e) => updateName(e)}>
                <Input red={!name.minLength ? "red" : null}
                    label="Name"
                    placeholder="Input text"
                    underText="Type yor name, min 4 symbols">
                </Input>
            </InputWrapper>
            <GridWrapper>
                <StText>
                    Choose picture to start.
                </StText>
                <Grid getId={getId} ></Grid>
            </GridWrapper>
            <ButtonWrapper >
                <StLink onCLick={updateName} to={name.minLength ? { pathname: '/chat', state: { user } } : '/start'}>
                    <NavButton red={name.minLength ? null : "red"}> Start Chat</NavButton>
                </StLink>
            </ButtonWrapper>
        </MainLayout>
    )
}
