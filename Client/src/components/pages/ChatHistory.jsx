import React from 'react'
import SingleChat from 'components/common/ChatHistoryItem'
import MainLayout from 'components/layout/Main'
import { bot, user, user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, user11 } from 'img';

export default function ChatHistory() {
    function sendChat(){
       
    }
    return (
        <MainLayout sendChat={sendChat} header="Chat History" left="Chat to Bot" right="Go Back" leftLink="/start" rightLink="/">
            <SingleChat srcLeft={user} srcRight={bot}></SingleChat>
            <SingleChat ></SingleChat>
            <SingleChat ></SingleChat>
            <SingleChat ></SingleChat>
          
        </MainLayout>
    )
}
