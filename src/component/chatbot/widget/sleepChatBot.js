import React, { useState, useEffect } from "react";
import Options from "./options";

const SleepChatBot = (props) => {
    const [stats, setStats] = useState([]);
    const [loading, setLoading] = useState(true);


    const questionSleep = [{

        name: "הכנות לשינה",
        
        handler: props.actionProvider.preparationsForSleep,
        
        id: 1
    },
    {
        name: "אופן ההשכבה",
        handler: props.actionProvider.mannerToLay,
        id: 2
    },
    {
        name: "בטיחות בשינה",
        handler: props.actionProvider.safetyInSleep,
        id: 3
    },
    {
        name: "מספר שעות שינה",
        handler: props.actionProvider.hoursToSleep,
        id: 4
    }]

    return (
        <div>
            <Options options={questionSleep} {...props} />;
        </div>
    )
}

export default SleepChatBot;
