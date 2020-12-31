import React from 'react'
import MainLayout from 'components/layout/Main'
import Input from 'components/common/input'
import BlueMessage from 'components/common/BlueResponse'
import WhiteMessage from 'components/common/WhiteMessage'
import ChatWindow from 'components/common/chatWrapper'

export default function Chat() {
    const input = <Input label="Chat" placeholder="Input text" underText="Type in whatever you like"></Input>
    return (
        <MainLayout header="Chat" left="Go Back" right="Quit" leftLink="/start" rightLink="/">
            <ChatWindow input={input}>
                <BlueMessage>Hello</BlueMessage>
                <WhiteMessage>Hello,sdasdasd sdfsd sdfsa dsafsadsaffdsa</WhiteMessage>
                <BlueMessage>Ok, thats great</BlueMessage>
                <WhiteMessage>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repellendus, quisquam voluptates dolor laudantium nostrum excepturi nam molestias temporibus quam soluta maiores necessitatibus perferendis tenetur porro nemo cupiditate quis sed!</WhiteMessage>
            </ChatWindow>
        </MainLayout>
    )
}
