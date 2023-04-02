import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import TuitStats from "./tuit-stats";

const TuitItem = ({tuit = {}}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    return (
        <div className="list-group-item pt-2 pb-2">
            <span className="position-absolute top-0 start-0 ms-3 mt-2">
                <div className="col-2">
                    <img className="rounded-circle img-fluid wd-wtf-icon"
                         src={`/tuiter/media/${tuit.image}`}
                         alt={`Not available`}
                    />
                </div>
            </span>
            <div className="ms-5 ps-3">
                <div>
                    <span className="fw-bold">{tuit.userName}</span>
                    <span>
                        {'\u00A0'}
                        <i className="bi bi-check-circle-fill"></i>
                        {'\u00A0'}
                        {tuit.handle}
                        <i className="bi bi-dot"></i>
                        {tuit.time}
                    </span>
                </div>
                {tuit.tuit}
                <TuitStats tuit={tuit}/>
            </div>
            <button
                className="position-absolute btn btn-outline-info btn-sm top-0 end-0 bi bi-x-lg me-1 mt-1"
                onClick={() => deleteTuitHandler(tuit._id)}>
            </button>

        </div>
    );
};
export default TuitItem;