import axios from 'axios';
import React, { useState,useEffect } from 'react'
import {useLocation} from 'react-router-dom'
import MainLayout from 'components/layout/Main'
import Input from 'components/common/input'
import BlueMessage from 'components/common/BlueResponse'
import WhiteMessage from 'components/common/WhiteMessage'
import ChatWindow from 'components/common/chatWrapper'
const parseString = require('xml2js').parseString;




export default function Chat() {
    useEffect(() => {
        console.log(data);
    }, )
    
    const [formInput, setInput] = useState('');
    const [chat, setChat] = useState([])
    const data = useLocation() // value of name and id from start component


   
    function toBottom(){
        const wrapper = document.getElementById("wrapper");
        if(wrapper.scrollHeight!==null){return wrapper.scrollTop = wrapper.scrollHeight - wrapper.clientHeight}
        else{return};  
    }
  
    function Submit(e) {
        e.preventDefault();
        setChat(prevState =>{
            return ([...prevState,{
                user: true,
                text: formInput
            }])
        })
        axios.get(`https://www.botlibre.com/rest/api/form-chat?&application=4120366723131427615&instance=165&message=${formInput}`)
            .then((r) => {
                parseString(r.data, (err, result) => {
                      setChat(prevState =>{
                        return [...prevState,{
                            user: false,
                            text: result.response.message[0]
                        }]
                    })
                });
                toBottom()
            }
            )
            document.getElementById("field").reset();
            toBottom();
    }


    function handleChange(e) {
        setInput(e.target.value)
    }



    const inputField = <form id="field" onSubmit={(e) => {Submit(e)}} onChange={(e) => handleChange(e)}>
        <Input label="Chat"  placeholder="Input text" underText="Type in whatever you like"  ></Input>
    </form>

    return (
        <MainLayout header="Chat" left="Go Back" right="Quit" leftLink="/start" rightLink="/">
            <ChatWindow input={inputField}>
                {chat.map((p)=>{
                return p.user?<WhiteMessage>{p.text}</WhiteMessage>:<BlueMessage>{p.text}</BlueMessage> 
                })}
            </ChatWindow>
        </MainLayout>
    )
}
