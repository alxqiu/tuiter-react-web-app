import React from "react";
import PostSummaryList from "../post-summary-list";

const ExploreComponent = () => {
    return (
        <>
        <div className="row">
            <div className="input-group mb-2">
                <span className="position-absolute top-50 translate-middle-y rounded-pill input-group-prepend btn ps-2 pe-2">
                    <button className="btn rounded-pill border-0 form-control-feedback btn-sm" type="button">
                        <i className="bi bi-search"></i>
                    </button>
                </span>
                <input id="wd-search-bar"
                       type="text"
                       className="form-control rounded-pill ps-5 me-4 pt-2 pb-2"
                       placeholder="Search Tuiter"/>
                <label htmlFor="wd-search-bar"
                       className="col-form-label">
                    <a href="."><span className="fs-2 mb-2 bi bi-gear-fill "></span></a></label>
            </div>
        </div>

        <ul className="nav mb-2 nav-tabs">
            <a className="nav-item nav-link active" href="for-you.html">For You</a>
            <a className="nav-item nav-link" href="trending.html">Trending</a>
            <a className="nav-item nav-link" href="news.html">News</a>
            <a className="nav-item nav-link" href="sports.html">Sports</a>
            <a className="nav-item d-none d-md-block nav-link" href="entertainment.html">
                Entertainment
            </a>
        </ul>

        <div className="card">
            <img className="card-img-top img-fluid w-100"
                 src="/tuiter/media/Starship-Mk1-Day.webp"
                 alt="Not Available"/>
                <h2 className="card-img-overlay">
                    <span className="position-absolute bottom-0 start-0 ps-2 text-white">
                        SpaceX's Starship
                    </span>
                </h2>
        </div>
        <PostSummaryList/>
        </>
    );
};

export default ExploreComponent;