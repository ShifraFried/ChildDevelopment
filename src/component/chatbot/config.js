import { createChatBotMessage } from 'react-chatbot-kit';
import DataOption from './dataOption';

const config = {

  initialMessages: [createChatBotMessage("Hi, I'm here to help. What do you want to learn?"),
  { widget: "dataOption" }],

  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
    widgets: [
      {
        widgetName: "dataOption",
        widgetFunc: (props) => <DataOption{...props} />,
      },
    ]
  },
}

export default config