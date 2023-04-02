import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";

import {Routes, Route} from "react-router";
import whoReducer
    from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import { configureStore }
    from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import PostSummaryList from "./post-summary-list";
import Labs from "../labs";
import HelloWorld from "../labs/a6/hello-world";
import Home from "./home"
import {BrowserRouter} from "react-router-dom";
const store = configureStore(
    {reducer: {who: whoReducer, tuitsData: tuitsReducer}});

function Tuiter() {
    return (
        <Provider store={store}>
            <div className="row mt-2 mb-2">
                {/* Left Column */}
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <Routes>
                        <Route path='home' element={<NavigationSidebar active="home"/>}/>
                        <Route path='explore' element={<NavigationSidebar active="explore"/>}/>
                    </Routes>
                </div>
                {/* middle Column */}
                <div className="col-10 col-md-10 col-lg-7 col-xl-6" style={{"position": "relative"}}>
                    <Routes>
                        <Route path='home' element={<Home/>}/>
                        <Route path='explore' element={<ExploreComponent/>}/>
                    </Routes>
                </div>
                {/* Right Column */}
                <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <Routes>
                        <Route path='home' element={<PostSummaryList/>}/>
                        <Route path='explore' element={<WhoToFollowList/>}/>
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}

export default Tuiter