let pageNum = 1;

$(document).ready(function(){
    drawResults(posts[1], posts[0]);

    var btn = $('#button');

    var scroll = function() {
      var getScrolls = function() {
        return pageNum += 1;
      }
      return getScrolls;
    }
    onScroll = scroll();

    window.addEventListener('scroll', () => {
        if (pageNum * 2 <= posts.length) {
            if ( document.documentElement.scrollTop + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
                console.log("pageNum:", pageNum);
                onScroll();
                getData(pageNum);
            }
        } else {
        }
    });

    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, 900);
    });

    window.onscroll = function() {
        if (!window.pageYOffset) {
            btn.removeClass('show');
        } else {
            btn.addClass('show');
        }
    };
});

function getData(number) {
    let rPost = posts[number*2-2]
    let lPost = posts[number*2-1];
    drawResults(lPost, rPost);
}

function drawResults(lPost, rPost) {
    let rTag = rPost.tag
    let rDate = rPost.date
    let rLink = rPost.link
    let rPostID = rLink.split('/')[rLink.split('/').length-1]

    let lTag = lPost.tag
    let lDate = lPost.date
    let lLink = lPost.link
    let lPostID = lLink.split('/')[lLink.split('/').length-1]

	const html = `
            <li class="post">
            <div class="direction-r">
                <div class="flag-wrapper">
                    <span class="hexa"></span>
                    <span class="flag">${rTag}</span>
                    <span class="time-wrapper">
                    <span class="time">${rDate}</span></span>
                </div>
                <div id="p-${rPostID}" class="desc" style="visibility: hidden;">
                    <div class="fb-post"
                        data-lazy="true"
                        data-href="${rLink}"
                        data-show-text="true"
                        data-width="auto">
                        <blockquote cite="https://www.facebook.com/technologynoteniu/" class="fb-xfbml-parse-ignore"></blockquote>
                    </div>
                </div>
            </div>
            </li>
            <li class="post">
            <div class="direction-l">
                <div class="flag-wrapper">
                    <span class="hexa"></span>
                    <span class="flag">${lTag}</span>
                    <span class="time-wrapper">
                    <span class="time">${lDate}</span></span>
                </div>
                <div id="p-${lPostID}" class="desc" style="visibility: hidden;">
                    <div class="fb-post"
                        data-lazy="true"
                        data-href="${lLink}"
                        data-show-text="true"
                        data-width="auto">
                        <blockquote cite="https://www.facebook.com/technologynoteniu/" class="fb-xfbml-parse-ignore"></blockquote>
                    </div>
                </div>
            </div>
            </li>`;
	$(".timeline").append(html);

    if (pageNum > 1 ){
        FB.XFBML.parse(document.getElementById(`p-${rPostID}`));
        FB.XFBML.parse(document.getElementById(`p-${lPostID}`));
    }
}
