import {useSelector} from "react-redux";
import TuitItem from "./tuit-item";
import React from "react";

const TuitList = () => {
    const tuitsArray = useSelector(state => state.tuits)
    return(
        <div>
            <ul className="list-group pt-2">
                {
                    tuitsArray.map(item =>
                        <TuitItem
                            key={item._id} tuit={item}/> )
                }
            </ul>
        </div>

    );
};

export default TuitList;