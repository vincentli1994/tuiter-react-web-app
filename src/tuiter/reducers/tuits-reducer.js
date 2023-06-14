import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';
import { updateTuitThunk, createTuitThunk, deleteTuitThunk, findTuitsThunk } from ".././services/tuits-thunks";
const initialState = {
  tuits: [],
  loading: false
}


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
  initialState,
  extraReducers: {
    [updateTuitThunk.fulfilled]:
      (state, { payload }) => {
        state.loading = false
        const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id)
        state.tuits[tuitNdx] = { ...state.tuits[tuitNdx], ...payload }
      },

    [createTuitThunk.fulfilled]:
      (state, { payload }) => {
        state.loading = false
        state.tuits.unshift({
          ...payload,
          ...templateTuit,
          _id: (new Date()).getTime(),
        })
      },

    [deleteTuitThunk.fulfilled]:
      (state, { payload }) => {
        state.loading = false
        state.tuits = state.tuits.filter(t => t._id !== payload)
      },

    [findTuitsThunk.pending]:
      (state) => {
        state.loading = true
        state.tuits = []
      },
    [findTuitsThunk.fulfilled]:
      (state, { payload }) => {
        state.loading = false
        state.tuits = payload
      },
    [findTuitsThunk.rejected]:
      (state, action) => {
        state.loading = false
        state.error = action.error
      }
  },
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