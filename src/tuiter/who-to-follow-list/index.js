import React from "react";
import whoArray from './who.json';
import WhoToFollowListItem from "./who-to-follow-list-item";
const WhoToFollowList = () => {
 return(
   <ul className="list-group">
     <li className="list-group-item">
       <h3>Who to follow</h3>
     </li>
     {
       whoArray.map(who =>
         <WhoToFollowListItem follow = {{
            tuiter_id: who.id,
            userName: who.userName,
            tuiterAccount: who.tuiterAccount,
            profilePicture: who.profilePicture }} />
       )
     }
   </ul>
 );
};
export default WhoToFollowList;