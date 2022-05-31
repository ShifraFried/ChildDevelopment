// import Login from "../login/login"
import vaccineTable from '../../assets/vaccineTable.pdf'
// import { getData } from "./data"
import { BlobProvider, PDFDownloadLink } from '@react-pdf/renderer'
import { Document, Page, pdfjs } from "react-pdf";


class ActionProvider {

    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
    }
    handleOptions = () => {
        const message = this.createChatBotMessage(
            "Here's the vaccine information you need.",
            {
                widget: "overview",
                loading: true,
                terminateLoading: true,
                withAvatar: true
            }
        );
        this.addMessageToState(message);
    };


    handleChatBotVaccine = () => {
        const message = this.createChatBotMessage(
            "Here's the vaccine information you need.",
            {
                widget: "vaccineChatBot",
                loading: true,
                terminateLoading: true,
                withAvatar: true
            }
        );
        this.addMessageToState(message);
    };

    ///answer
    ageToGetVaccine = () => {
        const message = this.createChatBotMessage(
            // <iframe width="75%" src={vaccineTable} />
            <BlobProvider document={vaccineTable}>
                {() => (
                    <a href={vaccineTable} target="_blank">Open in new tab</a>
                )}
            </BlobProvider>  
        );

        this.addMessageToState(message);
    }
    vaccineSideEffects = () => {
        const message = this.createChatBotMessage(
            "מתן חיסון, כמו שימוש בתרופה,עלול לגרום לתופעות לוואי שונות." +
            " תופעות הלוואי האפשריות לאחר קבלת החיסון יכולות להיות תופעות לוואי קלות, כגון עליית חום, הרגשה כללית רעה, אודם ונפיחות במקום שבו ניתנה הזריקה."
         
        );

        this.addMessageToState(message);
    }
    completeVaccine = () => {
        const message = this.createChatBotMessage(
        "משרד הבריאות ממליץ למי שלא חוסנו בכל חיסוני השגרה הניתנים לילדים בישראל, להשלים את החיסונים. אם לא קיבלתם חיסון כלשהוא מחיסוני השגרה בתקופת הילדות או כתלמידים בבית הספר, תוכלו להשלים אותו בבית הספר או במרפאות החיסונים שבלשכות הבריאות"
        );
        this.addMessageToState(message);
    }

    unusualResponseVaccine= () => {
        const message = this.createChatBotMessage(
       "לשאול את אמא"
        );
        this.addMessageToState(message);
    }


    handleChatBotSleep = () => {
        const message = this.createChatBotMessage(
            "Here's the sleep information you need.",
            {
                widget: "sleepChatBot",
                loading: true,
                terminateLoading: true,
                withAvatar: true
            }
        );

        this.addMessageToState(message);
    };

    // sleep answer

    preparationsForSleep= () => {
         const messageChat = this.createChatBotMessage(
    "vvb"
            );
        const message = this.createChatBotMessage(
       "  סביבה רגועה ושקטה, טמפרטורת חדר מחוממת למצב נעים אור רך ומגע נעים"
        );
        this.addMessageToState(message);
        this.addMessageToState(messageChat);

    }

    
    mannerToLay= () => {
        const message = this.createChatBotMessage(
       "mannertoLay"
        );
        this.addMessageToState(message);
    }

    safetyInSleep= () => {
        const message = this.createChatBotMessage(
       "safetyInSleep"
        );
        this.addMessageToState(message);
    }
    hoursToSleep= () => {
        const message = this.createChatBotMessage(
       "hoursToSleep"
        );
        this.addMessageToState(message);
    }
    

    handleThanks = () => {
        const message = this.createChatBotMessage("we so happy to help you'! thank you too😊");

        this.addMessageToState(message);
    };

    addMessageToState = (message) => {
        this.setState((state) => ({
            ...state,
            messages: [...state.messages, message]
        }));
    };
}

export default ActionProvider;
