const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item pb-2 pt-2">
            <span class="position-absolute top-50 start-0 translate-middle-y ms-2">
                <div class="col-2">
                    <img class="rounded-circle img-fluid wd-wtf-icon" src="../media/${who.avatarIcon}"/>
                </div>
            </span>
            <div class="ms-5 ps-2">
                <div>
                    <b>${who.userName}</b>
                    <i class="fas fa-check-circle"></i>
                </div>
                <div>
                    @${who.handle}
                </div>
            </div>
            <span class="position-absolute top-50 end-0 translate-middle-y">
                <button class="btn rounded-pill btn-primary pt-2 pb-2 me-3" type="button">
                    Follow
                </button>
            </span>
        </li>
    `);
}
export default WhoToFollowListItem