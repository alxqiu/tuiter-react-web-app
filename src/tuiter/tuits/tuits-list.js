import React, {useEffect} from "react";
import {useDispatch, useSelector}
    from "react-redux";
import TuitItem from "./tuit-item";
import {findTuitsThunk}
    from "../../services/tuits-thunks";

const TuitList = () => {
    const {tuits, loading} = useSelector(
        state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])
    return(
        <div>
            <ul className="list-group pt-2">
                {
                    loading &&
                    <li className="list-group-item">
                        Loading...
                    </li>
                }
                {
                    tuits.map(item =>
                        <TuitItem
                            key={item._id} tuit={item}/> )
                }
            </ul>
        </div>
    );
};

export default TuitList;