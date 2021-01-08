import React from 'react'
import bot from 'img/bot.jpg'
 import styled from 'styled-components'
import MainLayout from 'components/layout/Main'
import Text from 'components/common/text'

const Robo = styled.img`
display:flex;
height:120px;
width:120px;
border-radius:5px;
margin:auto;
`
function sendChat(){
  
}

export default function BotChat() {
    return (
        <MainLayout  sendChat={sendChat} header="Bot Chat" left="Chat to Bot" right="Chat History" leftLink="/start" rightLink="history">
          <Text>Chat Bot is simple app allowing any one to  have conversation with AI. It’s simple and fun. Choose you avatar and type your name.</Text>
          <Robo src={bot} alt="bot-img"></Robo>
        </MainLayout>
    )
}
