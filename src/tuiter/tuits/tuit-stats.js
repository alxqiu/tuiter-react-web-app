import {updateLiked} from "./tuits-reducer"
import {updateTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";
import React from "react";

const TuitStats = ({tuit = {}}) => {
    const dispatch = useDispatch();
    const onLikeButton = () => {
        dispatch(updateLiked(tuit))
    }
    return (
        <div>
            <div className="row pt-3">
                <div className="col-2">
                    <i className="bi bi-chat"></i>
                    {'\u00A0\u00A0'}
                    {tuit.replies}
                </div>
                <div className="col-2">
                    <i className="bi bi-arrow-repeat"></i>
                    {'\u00A0\u00A0'}
                    {tuit.retuits}
                </div>
                <div className="col-2">
                    <i onClick={() => dispatch(updateTuitThunk({
                        ...tuit,
                        likes: tuit.likes + 1
                    }))} className="bi bi-heart-fill me-2 text-danger"></i>
                    {'\u00A0\u00A0'}
                    {tuit.likes}
                </div>
                <div className="col-2">
                    <i onClick={() => dispatch(updateTuitThunk({
                        ...tuit,
                        dislikes: tuit.dislikes + 1
                    }))} className="bi bi-hand-thumbs-down me-2 text-danger"></i>
                    {'\u00A0\u00A0'}
                    {tuit.dislikes}
                </div>
                <div className="col-2">
                    <i className="bi bi-share"></i>
                </div>
            </div>
        </div>
    )
}
export default TuitStats;