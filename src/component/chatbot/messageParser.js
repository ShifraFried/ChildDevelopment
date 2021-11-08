class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      message = message.toLowerCase();
      console.log(message);
  
      //מטפל במה שיכתוב המשמתמש בתיבת טקסט 
      if (
        message.includes("options") ||
        message.includes("help") ||
        message.includes("do for me")
      ) {
        return this.actionProvider.handleOptions({ withAvatar: true });
      }
  
      if (
        message.includes("talk") ||
        message.includes("speak") ||
        message.includes("real person") ||
        message.includes("call") ||
        message.includes("emergency") ||
        message.includes("contact")
      ) {
        return this.actionProvider.handleContact();
      }
  
      if (
        message.includes("חיסונים") ||
        message.includes("vaccine") ||
        message.includes("חיסון")
      ) {
        return [
          this.actionProvider.handleChatBotVaccine(),
          // this.actionProvider.handleLocalStats()
        ];
      }
  
      if (message.includes("medicine") || message.includes("delivery")) {
        return this.actionProvider.handleMedicine();
      }
  
      if (
        message.includes("joke") ||
        message.includes("jokes") ||
        message.includes("funny")
      ) {
        return this.actionProvider.handleJoke();
      }
  
      if (message.includes("thanks") || message.includes("thank you")) {
        return this.actionProvider.handleThanks();
      }
  
      return this.actionProvider.handleOptions({ withAvatar: true });
    }
  }
  
  export default MessageParser;
  