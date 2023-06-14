import React, { useEffect } from "react";
import TuitItem from "./TuitItem";
import { useDispatch, useSelector } from "react-redux";
import { findTuitsThunk } from ".././services/tuits-thunks";

const TuitList = () => {
  const { tuits, loading } = useSelector(state => state.tuits)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk())
  }, [])

  return (
    <ul className="list-group">
      {loading &&
        <li className="list-group-item">
          Loading...
        </li>
      }

      {

        tuits.map(tuit =>
          <TuitItem key={tuit._id} tuitInfo={{
            id: tuit._id,
            topic: tuit.topic,
            userName: tuit.userName,
            title: tuit.title,
            time: tuit.time,
            image: tuit.image,
            liked: tuit.liked,
            disliked: tuit.disliked,
            replies: tuit.replies,
            retuits: tuit.retuits,
            likes: tuit.likes,
            dislikes: tuit.dislikes,
            handle: tuit.handle,
            tuit: tuit.tuit
          }} />)
      }
    </ul>
  );
};
export default TuitList;