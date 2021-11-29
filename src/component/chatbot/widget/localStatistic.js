import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { getData } from "../data";
import { getAllVaccine } from "../../api/vaccineApi";
import Options from "./options";
import actionProvider from "../actionProvider";


const Statistics = (props) => {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [vaccine, setVaccine] = useState();

  useEffect(() => {
    getAllVaccine().then((data) => {
      console.log(data);
      setVaccine(data)
  })
      .catch(err => { })
    // const getStats = async () => {
    //   // const stats = await getData();
    //   // setStats(stats);
    //   // setLoading(false);
    // };
    // getStats();
  }, []);

  // const aaa=(info)=>{
  // //  { ActionProvider.aaa}
  // console.log(info,"??????????????????????");
  // }
  return (
    // <div className="stats">
    //   <div className="column-left">
    //     <p> חצבת :</p>
    //     <p> ????? :</p>
    //   </div>
      <div className="column-right">
        {vaccine && vaccine.map(vacc => <button onClick={()=>{actionProvider.aaa(vacc.vaccineName)}}>
        {  vacc.vaccineName }
        </button>)}
        {/* <ClipLoader color={"#fff"} loading={loading} />
        <p>{stats.local_total_cases}</p>
        <p>{stats.local_new_cases}</p>
        <p>{stats.local_recovered}</p>
        <p>{stats.local_deaths}</p>
        <p>{stats.local_new_deaths}</p>
        <p>{stats.local_active_cases}</p> */}
      </div>
    // </div>
  );
};

export default Statistics;
