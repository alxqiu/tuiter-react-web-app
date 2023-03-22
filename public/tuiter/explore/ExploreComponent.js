import PostSummaryList from "./PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
        <!-- Search Bar -->
        <div class="row">
            <div class="input-group mb-2">
                <span class="position-absolute top-50 translate-middle-y rounded-pill input-group-prepend btn ps-2 pe-2">
                    <button class="btn rounded-pill border-0 form-control-feedback btn-sm" type="button">
                        <i class="fa fa-search"></i>
                    </button>
                </span>
                <input id="wd-search-bar" type="text" class="form-control rounded-pill ps-5 me-4" placeholder="Search Tuiter">
                <label for="wd-search-bar"
                       class="col-form-label">
                    <a href="#"><span class="fa fa-cog fa-2x"></span></a></label>
            </div>
        </div>
        
        <!-- Tabs -->
        <ul class="nav mb-2 nav-tabs">
            <a class="nav-item nav-link active" href="for-you.html">For You</a>
            <a class="nav-item nav-link" href="trending.html">Trending</a>
            <a class="nav-item nav-link" href="news.html">News</a>
            <a class="nav-item nav-link" href="sports.html">Sports</a>
            <a class="nav-item d-none d-md-block nav-link" href="entertainment.html">
                Entertainment
            </a>
        </ul>
        
        <!-- Headline Content -->
        <div class="card">
            <img class="card-img-top img-fluid w-100" src="../media/Starship-Mk1-Day.webp">
            <h2 class="card-img-overlay">
                <span class="position-absolute bottom-0 start-0 ps-2 text-white">
                    SpaceX's Starship
                </span>
            </h2>
        </div>
        
        <!-- List of Posts -->
        ${PostSummaryList()}
    `);
}
export default ExploreComponent;
