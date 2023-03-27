const PostSummaryItem = (post) => {
    return(`
        <div class="list-group-item pt-2 pb-4">
            <div class="col-10">
                <div class="text-muted">
                    ${post.topic}
                </div>
                <div>
                    <b>${post.userName}</b>
                    <i class="fas fa-check-circle"></i>
                    <span class="text-muted">
                        - ${post.time}
                    </span>
                </div>
                <div class="fw-bold">
                    ${post.title}
                </div>
                <div class="text-muted">
                    ${post.tuits === undefined ? `` : `<span>${post.tuits} Tuits</span>`}
                </div>
            </div>
            <div class="col-2 position-absolute top-50 end-0 translate-middle-y pe-1">
                <img class="rounded img-fluid wd-ps-img" src="../media/${post.image}">
            </div>
        </div>
    `);
}

export default PostSummaryItem;