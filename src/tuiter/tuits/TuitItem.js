import React from "react";
import TuitStats from "./TuitStats";
import "./TuitItem.css"
import { useDispatch } from "react-redux";
import {deleteTuitThunk} from ".././services/tuits-thunks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons';

const TuitItem = ({ tuitInfo }) => {
  const { id, topic, userName, title, time , image, liked,disliked, replies, retuits, likes, dislikes, handle, tuit } = tuitInfo;
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  }
  return (
    <div className="tuit-item">
      <li className="list-group-item">
        <div className="row">

          <div className="col-2">
            <img className="rounded-circle profile-picture" src={`/images/${image}`} />
          </div>

          <div className="col-8">
          <FontAwesomeIcon icon={faTimes} className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(id)} />
            <div className="tuit-info"><span className="tesla-name">{userName}</span><img className="blue-verified" src="images/blue-badge.jpeg" /><span className="tesla-date">{handle} · {time}</span></div>
            <div className="tuit-title">{tuit}</div>
          </div>

          <div className="stats">
            <TuitStats tuitStats={{
              id: id,
              liked: liked,
              disliked: disliked,
              replies: replies,
              retuits: retuits,
              likes: likes,
              dislikes: dislikes,
            }} />
          </div>

        </div>
      </li>
    </div>
  );
};
export default TuitItem;

