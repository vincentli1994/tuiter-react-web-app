import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
  "userName": "Nasa",
  "handle": "@Nasa",
  "image": "nasa.jpeg",
};

const templateTuit = {
  ...currentUser,
  "topic": "Space",
  "time": "1h",
  "liked": false,
  "replies": 0,
  "retuits": 0,
  "likes": 0,
};

const tuitsSlice = createSlice({
  name: 'tuits',
  initialState: { tuits: tuits },
  reducers: {
    incrementLike(state, action) {
      const { id } = action.payload;
      const tuit = state.tuits.find((tuit) => tuit._id === id);
      if (tuit) {
        tuit.likes += 1;
        tuit.liked = true;
      }
    },
    decrementLike(state, action) {
      const { id } = action.payload;
      const tuit = state.tuits.find((tuit) => tuit._id === id);
      if (tuit) {
        tuit.likes -= 1;
        tuit.liked = false;
      }
    },
    createTuit(state, action) {
      state.tuits.unshift({
        ...action.payload,
        ...templateTuit,
        _id: (new Date()).getTime(),
      })
    },
    deleteTuit(state, action) {
      const index = state.tuits
        .findIndex(tuit =>
          tuit._id === action.payload);
      state.tuits.splice(index, 1);
    },
  }
});

export const { incrementLike, decrementLike, createTuit, deleteTuit } = tuitsSlice.actions;
export default tuitsSlice.reducer;