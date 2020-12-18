// const posts = posts_cicd.concat(posts_intro);

$(document).ready(function(){
    for (var i = 0; i < posts.length; i++) {
        // console.log(posts[i]);
        if (i % 2 !== 0) {
            $(".timeline").append(`
            <li>
            <div class="direction-r">
                <div class="flag-wrapper">
                    <span class="hexa"></span>
                    <span class="flag">${posts[i].tag}</span>
                    <span class="time-wrapper">
                    <span class="time">${posts[i].date}</span></span>
                </div>
                <div class="desc">
                    <div class="fb-post" data-href="${posts[i].link}" data-show-text="true" data-width="400"></div>
                </div>
            </div>
            </li>`);
        } else {
            $(".timeline").append(`
            <li>
            <div class="direction-l">
                <div class="flag-wrapper">
                    <span class="hexa"></span>
                    <span class="flag">${posts[i].tag}</span>
                    <span class="time-wrapper">
                    <span class="time">${posts[i].date}</span></span>
                </div>
                <div class="desc">
                    <div class="fb-post" data-href="${posts[i].link}" data-show-text="true" data-width="400"></div>
                </div>
            </div>
            </li>`);
        }
    }
});
