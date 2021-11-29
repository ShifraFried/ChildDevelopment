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
  
      //ניתן אפשרות של כתיבת טקסט חופשי לגבי השלמת חיסונים
      if (
        message.includes("complete") ||
        message.includes("השלמת חיסונים") ||
        message.includes("השלמה") ||
        message.includes("לא קיבלתי חיסון") ||
        message.includes("לא קיבלתי") 
      ) {
        return this.actionProvider.completeVaccine();
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
  
      if (message.includes("תופעות לוואי") || message.includes("חום ")
      || message.includes("אודם ")  || message.includes("נפיחות ")) {
        return this.actionProvider.vaccineSideEffects();
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
  