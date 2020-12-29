import React from 'react'
import bot from 'components/img/bot.jpg'
 // import styled from 'styled-components'
import MainLayout from 'components/layout/Main'
import Text from 'components/common/text'


export default function BotChat() {
    return (
        <MainLayout header="Bot Chat" left="Chat to Bot" right="Chat History" leftLink="/start" rightLink="history">
          <Text>Chat Bot is simple app allowing any one to  have conversation with AI. It’s simple and fun. Choose you avatar and type your name.</Text>
          <img src={bot} alt="bot-img"></img>
        </MainLayout>
    )
}
