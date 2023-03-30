import React from "react";
const WhoToFollowListItem = (
    {
        who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.png' }
    }
) => {
    return(
        <li className="list-group-item pb-2 pt-2">
            <span className="position-absolute top-50 start-0 translate-middle-y ms-2">
                <div className="col-2">
                    <img className="rounded-circle img-fluid wd-wtf-icon"
                         src={`/tuiter/media/${who.avatarIcon}`}
                         alt={`Not available`}
                    />
                </div>
            </span>
            <div className="ms-5 ps-2">
                <div>
                    <b>{who.userName} </b>
                    <i className="bi bi-check-circle-fill"></i>
                </div>
                <div>
                    @{who.handle}
                </div>
            </div>
            <span className="position-absolute top-50 end-0 translate-middle-y me-3">
                <button className="btn rounded-pill btn-primary pt-2 pb-2" type="button">
                    Follow
                </button>
            </span>
        </li>
    );
};
export default WhoToFollowListItem;