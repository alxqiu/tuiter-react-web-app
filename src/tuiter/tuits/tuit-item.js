import React from "react";

const TuitItem = (
    {
        tuit = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png"
        }
    }
) => {
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
            <div className="ms-5 col-10 ps-3">
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
                <div className="row pt-3">
                    <div className="col-3">
                        <i className="bi bi-chat"></i>
                        {'\u00A0\u00A0'}
                        {tuit.replies}
                    </div>
                    <div className="col-3">
                        <i className="bi bi-arrow-repeat"></i>
                        {'\u00A0\u00A0'}
                        {tuit.retuits}
                    </div>
                    <div className="col-3">
                        <i className={tuit.liked ? "wd-icon-liked bi bi-heart-fill" : "bi bi-heart"}></i>
                        {'\u00A0\u00A0'}
                        {tuit.likes}
                    </div>
                    <div className="col-3">
                        <i className="bi bi-share"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default TuitItem;