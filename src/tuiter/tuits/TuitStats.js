import React, {useState} from "react";
import { useSelector, useDispatch} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faComment, faRetweet, faHeart, faUpload} from '@fortawesome/free-solid-svg-icons';
import "./TuitStats.css"
import { incrementLike, decrementLike } from "../reducers/tuits-reducer";

const TuitStats = ({tuitStats}) => {
  const { _id, liked, replies, retuits, likes } = tuitStats;
  const [like, setLikes] = useState(likes);
  const [isLiked, setIsLiked] = useState(liked);

  const dispatch = useDispatch();
  const handleLikeClick = () => {
    console.log("Inside handleLikeClick");
    if(isLiked){
      console.log("Inside decrement");
      dispatch(decrementLike({id: _id}));
      setLikes(like - 1);
      setIsLiked(false);
    } else {
      console.log("Inside increment");
      dispatch(incrementLike({id: _id}));
      setLikes(like + 1);
      setIsLiked(true);
    }
  };
  return (
    <ul className="stats">
      <li className="stat-item"><FontAwesomeIcon icon={faComment} /><span style={{ marginLeft: '5px' }}></span>{replies}</li>
      <li className="stat-item second-stat"><FontAwesomeIcon icon={faRetweet} /><span style={{ marginLeft: '5px' }}></span>{retuits}</li>
      <li className="stat-item" onClick={handleLikeClick}><FontAwesomeIcon icon={faHeart} style={{color: isLiked? 'red': 'black'}} /><span style={{ marginLeft: '5px' }}></span>{like}</li>
      <li className="stat-item"><FontAwesomeIcon icon={faUpload} /></li>
    </ul>
  )
}

export default TuitStats;
