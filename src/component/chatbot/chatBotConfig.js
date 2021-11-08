import { createChatBotMessage } from "react-chatbot-kit";
import Overview from "../chatBot/widget/overview"
import VaccineChatBot from "./widget/vaccineChatBot";
import LocalStatistics from "../chatBot/widget/localStatistic";
import Contact from "../chatBot/widget/contact";
import MedicineDelivery from "../chatBot/widget/medicineDelivery"
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
        "Here's a quick overview of what I can help you with. You can also type in."
      ),
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
        widgetFunc: (props) => <VaccineChatBot />
      },
      {
        widgetName: "localStatistics",
        widgetFunc: (props) => <LocalStatistics />
      },
      {
        widgetName: "emergencyContact",
        widgetFunc: (props) => <Contact />
      },
      {
        widgetName: "medicineDelivery",
        widgetFunc: (props) => <MedicineDelivery />
      }
    ]
  };
  
  export default config;
  