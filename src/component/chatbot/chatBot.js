import React from 'react'
import Chatbot from 'react-chatbot-kit'
import ActionProvider from './actionProvider';
import MessageParser from './messageParser';
import config from './config';

export default function chatBot() {
    return (
        <div>
      {/* <header > */}
        <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
      {/* </header> */}

        </div>
    )
}
