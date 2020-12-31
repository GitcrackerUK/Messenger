import React from 'react'
import BlueMessage from 'components/common/BlueResponse'
import WhiteMessage from 'components/common/WhiteMessage'
import ChatWindow from 'components/common/chatWrapper'
import MainLayout from 'components/layout/Main'


export default function BotChat() {
    return (
        <MainLayout header="Chat History" left="Chat to Bot" right="Go Back" leftLink="/start" rightLink="/history">
          <ChatWindow>
              <WhiteMessage>Hi</WhiteMessage>
              <BlueMessage>Hello</BlueMessage>
              <WhiteMessage>How are you??</WhiteMessage>


          </ChatWindow>
        </MainLayout>
    )
}
