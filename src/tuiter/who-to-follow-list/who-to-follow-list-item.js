import React from "react";
import "./index.css";

const WhoToFollowListItem = ({follow}) => {
  const {id, userName, tuiterAccount, profilePicture} = follow;
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-2" >
          <img className="rounded-circle" height={48} src={require(`.././tuiter-images/${profilePicture}`)} />
        </div>
        <div className="col-8">
          <div className="fw-bold">{userName}</div>
          <div>@{tuiterAccount}</div>
        </div>
        <div className="col-2">
          <button className="btn btn-primary rounded-pill float-end">Follow</button>
        </div>
      </div>
    </li>
  );
};
export default WhoToFollowListItem;

