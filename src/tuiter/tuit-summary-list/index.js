import React from "react";
import tuitsArray from './tuits.json';
import TuitSummaryItem from "./tuit-summary-item";

const TuitSummaryList = () => {
 return(
   <ul className="list-group">
    <li>
     {
       tuitsArray.map(tuit =>
         <TuitSummaryItem tuitItem={{
          id: tuit._id,
          topic: tuit.topic,
          userName: tuit.userName,
          title: tuit.title,
          time: tuit.time,
          image: tuit.image}} />)
     }</li>
   </ul>
 );
};
export default TuitSummaryList;