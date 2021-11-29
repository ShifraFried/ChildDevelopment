// import Login from "../login/login"
import vaccineTable from '../../assets/vaccineTable.pdf'
// import { getData } from "./data"

class ActionProvider {

    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
    }

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
            // <div>
            <iframe width="75%" src={vaccineTable} />
            // </div>
            // { getData }
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
        const message = this.createChatBotMessage(
       "סביבה שקטה"
        );
        this.addMessageToState(message);
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
    // handleLocalStats = () => {
    //     const message = this.createChatBotMessage(
    //         "Here's the latest stats in Sri Lanka.",
    //         {
    //             widget: "localStatistics",
    //             loading: true,
    //             terminateLoading: true,
    //             withAvatar: true
    //         }
    //     );

    //     this.addMessageToState(message);
    // };

    // handleContact = () => {
    //     const message = this.createChatBotMessage(
    //         "Call 1999 for Trilingual Health Assistance.",
    //         {
    //             widget: "emergencyContact",
    //             loading: true,
    //             terminateLoading: true,
    //             withAvatar: true
    //         }
    //     );

    //     this.addMessageToState(message);
    // };

    // handleMedicine = () => {
    //     const message = this.createChatBotMessage(
    //         "To have clinical medicine safely delivered to your home, please refer to the link below.",
    //         {
    //             widget: "medicineDelivery",
    //             loading: true,
    //             terminateLoading: true,
    //             withAvatar: true
    //         }
    //     );

    //     this.addMessageToState(message);
    // };

    // handleJoke = () => {
    //     var jokes = [
    //         "So many coronavirus jokes out there, it’s a pundemic!",
    //         "I’ll tell you a coronavirus joke now, but you’ll have to wait two weeks to see if you got it!",
    //         "Did you hear the joke about coronavirus? Never mind, I don’t want to spread it around!",
    //         "What should you do if you don’t understand a coronavirus joke? Be patient!",
    //         "Why do they call it the novel coronavirus? It’s a long story...",
    //         "Since we’re all in quarantine I guess we’ll be making only inside jokes from now on!"
    //     ];

    //     var randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

    //     const message = this.createChatBotMessage(randomJoke);

    //     this.addMessageToState(message);
    // };

    // handleThanks = () => {
    //     const message = this.createChatBotMessage("You're welcome, and stay safe!");

    //     this.addMessageToState(message);
    // };

    addMessageToState = (message) => {
        this.setState((state) => ({
            ...state,
            messages: [...state.messages, message]
        }));
    };
}

export default ActionProvider;
