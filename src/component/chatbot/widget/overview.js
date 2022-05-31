import Options from "./options";

const GeneralOptions = (props) => {
  const options = [
    {
      name: "חיסונים",
      handler: props.actionProvider.handleChatBotVaccine,
      id: 1
    },
    {
      name: "שינה",
      handler: props.actionProvider.handleChatBotSleep,
      id: 2
    },
  ];
  return <Options options={options} title="Options" {...props} />;
};

export default GeneralOptions;
