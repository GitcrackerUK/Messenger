import React from 'react';
import Main from 'components/layout/Main';
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
            <Main></Main>
        </div>
    )
}

export default App