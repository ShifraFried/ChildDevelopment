// import {vaccineAnswer} from "./widget/vaccineChatBot"

class ActionProviderChatBot {


    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
    }
    vaccineAnswer = ["bbb", "ccc", "ddd", "eee"]

    aaa = () => {
        console.log("aaa");
        const message = this.createChatBotMessage(
            "bbb",
            //   {
            //     // widget: "vaccineChatBot",
            //     loading: true,
            //     terminateLoading: true,
            //     withAvatar: true
            //   }
        );
        this.addMessageToState(message);

    }

}

export default ActionProviderChatBot;