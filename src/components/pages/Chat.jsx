import React from 'react'
import styled from 'styled-components'
import MainLayout from 'components/layout/Main'
import Input from 'components/common/input'
import BlueMessage from 'components/common/BlueResponse'
import WhiteMessage from 'components/common/WhiteMessage'

const Wrapper = styled.div`
height:314px;
width:300px;
margin:7px auto;
background-color:#fff;
border-radius:15px;
`
const ChatWrapper = styled.div`
height:242px;
width:100%;
padding-top:7px;
`
export default function Chat() {
    return (
        <MainLayout header="Chat" left="Go Back" right="Quit" leftLink="/start" rightLink="/">
            <Wrapper>
                <ChatWrapper>
                    <BlueMessage>Hello</BlueMessage>
                    <WhiteMessage>Hello,sdasdasd sdfsd sdfsa dsafsadsaffdsa</WhiteMessage>
                    <BlueMessage>Ok, thats great</BlueMessage>
                    <WhiteMessage>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repellendus, quisquam voluptates dolor laudantium nostrum excepturi nam molestias temporibus quam soluta maiores necessitatibus perferendis tenetur porro nemo cupiditate quis sed!</WhiteMessage>

                </ChatWrapper>
                <Input label="Chat" placeholder="Input text" underText="Type in whatever you like"></Input>
            </Wrapper>
        </MainLayout>
    )
}
