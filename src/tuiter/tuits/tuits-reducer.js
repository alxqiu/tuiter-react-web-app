import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.png",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers: {
        updateLiked(state, action) {
            const tuit = state.find((tuit) => tuit._id == action.payload._id)
            if (tuit.liked) {
                // take away a like if already liked
                tuit.likes -= 1
            } else {
                // add a like if unliked
                tuit.likes += 1
            }
            tuit.liked = !tuit.liked
        },
        deleteTuit(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.splice(index, 1);
        },
        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        }
    }
});

export const {
    updateLiked, createTuit, deleteTuit
} = tuitsSlice.actions
export default tuitsSlice.reducer;