import React from 'react';
import BotChat from 'components/pages/BotChat';
import Chat from 'components/pages/Chat';
import ChatHistory from 'components/pages/ChatHistory';
import SingleHistory from 'components/pages/SingleHistory';
import StartChat from 'components/pages/StartChat';
import {createGlobalStyle} from 'styled-components';
 
const GlobalStyles = createGlobalStyle`
body{
background-color:#E5E5E5;
display:flex;
align-items:center;
justify-content:center;
padding:0px;
margin:0px;
min-height:1000px;
}
`


function App() {
    return (
        <div>
            <GlobalStyles></GlobalStyles>
            <BotChat></BotChat>
            <StartChat></StartChat>
            <Chat></Chat>
            <ChatHistory></ChatHistory>
            <SingleHistory></SingleHistory>
        </div>
    )
}


export default App