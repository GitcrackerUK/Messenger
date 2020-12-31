import React from 'react'
import SingleChat from 'components/common/ChatHistoryItem'
import MainLayout from 'components/layout/Main'


export default function ChatHistory() {
    return (
        <MainLayout header="Chat History" left="Chat to Bot" right="Go Back" leftLink="/start" rightLink="/">
            <SingleChat></SingleChat>
          
        </MainLayout>
    )
}
