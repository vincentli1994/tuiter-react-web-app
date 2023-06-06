import React, {useEffect} from "react";
import TuitItem from "./TuitItem";
import { useSelector } from "react-redux";

const TuitList = () => {
  const {tuits} = useSelector(state => state.tuits)
  return (
    <ul className="list-group">
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
              replies: tuit.replies,
              retuits: tuit.retuits,
              likes: tuit.likes,
              handle: tuit.handle,
              tuit: tuit.tuit
            }} />)
          }
    </ul>
  );
};
export default TuitList;