import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HiArchive } from 'react-icons/hi';
import { faImage, faFile, faPoll, faFaceSmile, faMapMarked } from '@fortawesome/free-solid-svg-icons';
import {createTuitThunk} from "./services/tuits-thunks";
import { useDispatch } from "react-redux";

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening] = useState('');
  const dispatch = useDispatch();
  const tuitClickHandler = () => {
    const newTuit = {
      tuit: whatsHappening
    }
    dispatch(createTuitThunk(newTuit));
    setWhatsHappening("");
  }
  return (
    <div className="row">
      <div className="col-auto">
        <img src={require("./tuiter-images/nasa.jpeg")} width={60} />
      </div>
      <div className="col-10">
        <textarea value={whatsHappening} placeholder="What's happening?"
          className="form-control border-0"
          onChange={(event) => setWhatsHappening(event.target.value)}>
        </textarea>
        <div>
          <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
            onClick={tuitClickHandler}>
            Tuit
          </button>
          <div className="text-primary fs-2">
            <FontAwesomeIcon icon={faImage} className="me-3" />
            <FontAwesomeIcon icon={faFile} className="me-3" />
            <FontAwesomeIcon icon={faPoll} className="me-3" />
            <FontAwesomeIcon icon={faFaceSmile} className="me-3" />
            <FontAwesomeIcon icon={faMapMarked} className="me-3" />
          </div>
        </div>
      </div>
      <div className="col-12"><hr /></div>
    </div>
  );
}
export default WhatsHappening;

