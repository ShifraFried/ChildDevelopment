import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { getData } from "../data"
import Options from "./options";


const Statistics = (props) => {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);

  const questionVaccine = [{
    name: "איזה חיסונים נותנים בכל גיל",
    // handler: props.actionProvider.handleOptions,
    handler: props.actionProvider.ageToGetVaccine,
    id: 1
  }]

 
  useEffect(() => {
    const getStats = async () => {
      // const stats = await getData();

      // const filteredFlights = flights.filter((item) => item.Status === null);

      setStats(stats);
      setLoading(false);
    };
    getStats();
  }, []);

  return (
    <div className="stats">
      <div className="column-left">
          <Options options={questionVaccine} {...props} />;
      </div>

      <div className="column-right">
        <ClipLoader color={"#fff"} loading={loading} />
        {/* <p>{stats.global_total_cases}</p>
        <p>{stats.global_new_cases}</p>
        <p>{stats.global_recovered}</p>
        <p>{stats.global_deaths}</p> */}
      </div>
    </div>
  );
};

export default Statistics;
