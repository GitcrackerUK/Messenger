import styled from 'styled-components'
import React from 'react'

const Wrapper = styled.div`
min-height:314px;
width:300px;
margin:7px auto;
background-color:#fff;
border-radius:15px;
`

const ChatWrapper = styled.div`
overflow-y:auto;
height:242px;
width:100%;
padding-top:7px;
`


function ChatWindow({children, input}) {
  

    return (
        <Wrapper>
            <ChatWrapper id="wrapper">
                {children}
            </ChatWrapper>
            {input}
        </Wrapper>
    )

}
export default ChatWindow