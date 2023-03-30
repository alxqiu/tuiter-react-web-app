import React from "react";
const PostSummaryItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png"
        }
    }
) => {
    return (
        <div className="list-group-item pt-2 pb-4">
            <div className="col-10">
                <div className="text-muted">
                    {post.userName}
                    <span> <i className="bi bi-check-circle-fill"></i> - {post.time}</span>
                </div>
                <div className="fw-bold">
                    {post.topic}
                </div>
                {post.title}
                <div className="text-muted">
                    {post.tuits === undefined ? `` : `<span>${post.tuits} Tuits</span>`}
                </div>
            </div>
            <div className="col-2 position-absolute top-50 end-0 translate-middle-y pe-3">
                <img
                    className="rounded img-fluid wd-ps-img"
                    src={`/tuiter/media/${post.image}`}
                    alt={`Not available`}
                />
            </div>
        </div>
    );
};
export default PostSummaryItem;