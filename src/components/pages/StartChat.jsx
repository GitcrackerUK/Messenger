import React from 'react'
import Input from 'components/common/input'
import MainLayout from 'components/layout/Main'
import styled from 'styled-components'
import Grid from 'components/common/grid'
import NavButton from 'components/common/Nav-item'
import {Link} from 'react-router-dom'


const InputWrapper = styled.div`
margin-top:44px;
`
const ButtonWrapper = styled.div`
margin-top:25px;
`
const StLink = styled(Link)`
/* margin:auto; */
text-decoration:none;
color:rgba(0, 0, 0, 0.7);
font-size:13px;
`

export default function StartChat() {
    // const { images, setImages} = useState([])

    return (
        <MainLayout header="Start Chat" left="Chat History" leftLink="/history" rightLink="/" right="Go Back" >
            <InputWrapper>
                <Input label="Name" underText="Type your name" placeholder="Input text"></Input>
            </InputWrapper>
            <Grid></Grid>

            <ButtonWrapper>
               <StLink to='/chat'><NavButton>Start Chat</NavButton></StLink>
            </ButtonWrapper>


        </MainLayout>
    )
}
