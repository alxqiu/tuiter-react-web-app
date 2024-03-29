import who from "./who.js"
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return (`
         <ul class="list-group">
                <li class="list-group-item fw-bold">Who to follow</li>
                ${who.map(item =>WhoToFollowListItem(item)).join('')}
         </ul>
    `);
}

export default WhoToFollowList;