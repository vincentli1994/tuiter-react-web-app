import React from "react";

const TuitSummaryItem = ({tuitItem}) => {
  const {_id, topic, userName, title, time, image } = tuitItem;
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-10">
          <div>{userName} . {time}</div>
          <div className="fw-bolder">{topic}</div>
          <div>{title}</div>
        </div>
        <div className="col-2">
          <img width={70} className="float-end rounded-3" src={`/images/${image}`} />
        </div>
      </div>
    </li>
  );
};
export default TuitSummaryItem;