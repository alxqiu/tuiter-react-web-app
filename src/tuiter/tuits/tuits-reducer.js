import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

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
        }
    }
});

export const {
    updateLiked
} = tuitsSlice.actions
export default tuitsSlice.reducer;