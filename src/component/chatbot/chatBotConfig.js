import { createChatBotMessage } from "react-chatbot-kit";
import Overview from "./widget/overview"
import VaccineChatBot from "./widget/vaccineChatBot";
import SleepChatBot from "./widget/sleepChatBot";
import CoBotAvatar from "./coBotAvatar"

const config = {
    lang: "no",
    botName: "CoBot",
    customStyles: {
      botMessageBox: {
        backgroundColor: "#04668a"
      },
      chatButton: {
        backgroundColor: "#0f5faf"
      }
    },
    initialMessages: [
      createChatBotMessage(
        "Here's a quick overview of what I can help you with. You can also type in.",
        {
          withAvatar: false,
          delay: 400,
          widget: "overview"
        }
      )
    ],
    state: {},
    customComponents: { botAvatar: (props) => <CoBotAvatar {...props} /> },
    widgets: [
      {
        widgetName: "overview",
        widgetFunc: (props) => <Overview {...props} />,
        mapStateToProps: ["messages"]
      },
      {
        widgetName: "vaccineChatBot",
        widgetFunc: (props) => <VaccineChatBot {...props}/>
      },
      {
        widgetName: "sleepChatBot",
        widgetFunc: (props) => <SleepChatBot {...props} />
      }
    ]
  };
  
  export default config;
  