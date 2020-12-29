import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BotChat from 'components/pages/BotChat';
import Chat from 'components/pages/Chat';
import ChatHistory from 'components/pages/ChatHistory';
import SingleHistory from 'components/pages/SingleHistory';
import StartChat from 'components/pages/StartChat';
import { createGlobalStyle } from 'styled-components';

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
            <Router>
                <Switch>
                    <Route path="/">
                        <BotChat></BotChat>
                    </Route>
                    <Route path="start">
                        <StartChat></StartChat>
                    </Route>
                    <Route path="chat">
                        <Chat></Chat>
                    </Route>

                    <Route path="history">
                        <ChatHistory></ChatHistory>
                    </Route>

                    <Route path="single-history">
                        <SingleHistory></SingleHistory>
                    </Route>

                </Switch>

            </Router>

        </div>
    )
}


export default App