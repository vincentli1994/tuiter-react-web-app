import React from "react";

const WhoToFollowListItem = ({follow}) => {
  const {id, userName, tuiterAccount, profilePicture} = follow;
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-2">
          <img className="rounded-circle" height={48} src={require(`.././tuiter-images/${profilePicture}`)} />
          {/* <img className="rounded-circle" height={48} src={require(".././tuiter-images/nasa.jpeg")} /> */}
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

