import React from "react";
import TuitSummaryItem from "./tuit-summary-item";
import { useSelector } from "react-redux";

const TuitSummaryList = () => {
  const { tuits } = useSelector(state => state.tuits)
  return (
    <ul className="list-group">
      <li>
        {
          tuits.map(tuit =>
            <TuitSummaryItem tuitItem={{
              id: tuit._id,
              topic: tuit.topic,
              userName: tuit.userName,
              title: tuit.title,
              time: tuit.time,
              image: tuit.image
            }} />)
        }</li>
    </ul>
  );
};
export default TuitSummaryList;