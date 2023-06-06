import React from "react";
import { useSelector } from "react-redux";
import WhoToFollowListItem from "./who-to-follow-list-item";
import "./index.css";

const WhoToFollowList = () => {
  const whoArray = useSelector((state) => state.who);
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <h3>Who to follow</h3>
      </li>
      {
        whoArray.map(who =>
          <WhoToFollowListItem key={who.id} follow={{
            tuiter_id: who.id,
            userName: who.userName,
            tuiterAccount: who.tuiterAccount,
            profilePicture: who.profilePicture
          }} />
        )
      }
    </ul>
  );
};
export default WhoToFollowList;