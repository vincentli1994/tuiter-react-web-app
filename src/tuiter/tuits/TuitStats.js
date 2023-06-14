import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown, faComment, faRetweet, faHeart, faUpload } from '@fortawesome/free-solid-svg-icons';
import "./TuitStats.css"
import { incrementLike, decrementLike } from "../reducers/tuits-reducer";
import { updateTuitThunk } from ".././services/tuits-thunks";

const TuitStats = ({ tuitStats }) => {
  const { _id, liked, disliked, replies, retuits, likes, dislikes } = tuitStats;
  const [like, setLikes] = useState(likes);
  const [isLiked, setIsLiked] = useState(liked);
  const [dislike, setDisLikes] = useState(dislikes);
  const [isDisLiked, setIsDisLiked] = useState(disliked);

  const dispatch = useDispatch();
  // const handleLikeClick = () => {
  //   if (isLiked) {
  //     dispatch(decrementLike({ id: _id }));
  //     setLikes(like - 1);
  //     setIsLiked(false);
  //   } else {
  //     dispatch(incrementLike({ id: _id }));
  //     setLikes(like + 1);
  //     setIsLiked(true);
  //   }
  // };
  const handleLikeClick = () => {
    if (isLiked) {
      dispatch(updateTuitThunk({ ...tuitStats, liked: false, likes: tuitStats.likes - 1 }))
      setLikes(like - 1);
      setIsLiked(false);
    } else {
      dispatch(updateTuitThunk({ ...tuitStats, liked: true, likes: tuitStats.likes + 1 }))
      setLikes(like + 1);
      setIsLiked(true);
    }
  };

  const handleDislikeClick = () => {
    if (isDisLiked) {
      dispatch(updateTuitThunk({ ...tuitStats, disliked: false, dislikes: tuitStats.dislikes - 1 }))
      setDisLikes(dislike - 1);
      setIsDisLiked(false);
    } else {
      dispatch(updateTuitThunk({ ...tuitStats, disliked: true, dislikes: tuitStats.dislikes + 1 }))
      setDisLikes(dislike + 1);
      setIsDisLiked(true);
    }
  };

  return (
    <ul className="stats">
      <li className="stat-item"><FontAwesomeIcon icon={faComment} /><span style={{ marginLeft: '5px' }}></span>{replies}</li>
      <li className="stat-item second-stat"><FontAwesomeIcon icon={faRetweet} /><span style={{ marginLeft: '5px' }}></span>{retuits}</li>
      <li className="stat-item" onClick={handleLikeClick}><FontAwesomeIcon icon={faHeart} style={{color: isLiked? 'red': 'black'}} /><span style={{ marginLeft: '5px' }}></span>{like}</li>
      <li className="stat-item" onClick={handleDislikeClick}><FontAwesomeIcon icon={faThumbsDown} style={{color: isDisLiked? 'red': 'black'}} /><span style={{ marginLeft: '5px' }}></span>{dislike}</li>
      {/* <faHeart className="text-danger" onClick={() => dispatch(updateTuitThunk({ ...tuitStats, likes: tuitStats.likes + 1 }))}/><span className="ms-2">{tuitStats.likes}</span> */}
      <li className="stat-item"><FontAwesomeIcon icon={faUpload} /></li>
    </ul>
  )
}

export default TuitStats;