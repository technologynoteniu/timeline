function loadPost(step) {
    for (var i = 0; i < 2; i++) {
        // console.log("i step", i, step)
        var index = i + step;
        // i step index
        // 0 0    0
        // 1 0    1

        // 0 2    2
        // 1 2    3

        // console.log("index", index)
        if ( index % 2 !== 0) {
            $(".timeline").append(`
            <li class="post">
            <div class="direction-r">
                <div class="flag-wrapper">
                    <span class="hexa"></span>
                    <span class="flag">${posts[index].tag}</span>
                    <span class="time-wrapper">
                    <span class="time">${posts[index].date}</span></span>
                </div>
                <div id="index-${index}" class="desc" style="visibility: hidden;">
                    <div class="fb-post"
                        data-lazy="true"
                        data-href="${posts[index].link}"
                        data-show-text="true"
                        data-width="auto">
                    </div>
                </div>
            </div>
            </li>`);
        } else {
            $(".timeline").append(`
            <li class="post">
            <div class="direction-l">
                <div class="flag-wrapper">
                    <span class="hexa"></span>
                    <span class="flag">${posts[index].tag}</span>
                    <span class="time-wrapper">
                    <span class="time">${posts[index].date}</span></span>
                </div>
                <div id="index-${index}" class="desc" style="visibility: hidden;">
                    <div class="fb-post"
                        data-lazy="true"
                        data-href="${posts[index].link}"
                        data-show-text="true"
                        data-width="auto">
                    </div>
                </div>
            </div>
            </li>`);
        }
        // reload all fb posts
        if (step !== 0 ){
            FB.XFBML.parse(document.getElementById(`index-${index}`));
        }
    }
}


$(document).ready(function(){
    loadPost(0);
    var counter = 0;
    var btn = $('#button');

    var click = function() {
      var getClicks = function() {
        return counter += 1;
      }
      return getClicks;
    }
    onClick = click();

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        var page = onClick()*2
        loadPost(page);
        btn.removeClass('show');
    });


    // $('.timeline').infiniteScroll({
    //   // options
    //   path: function() {
    //     // for (var i = 4; i < posts.length; i++) {
    //     //   if ( i % 2 !== 0 ) {
    //         if ( this.loadCount < 1 ) {
    //       	  return 'index2.html';
    //         }
    //     //   }
    //     // }
    //   },
    //   append: '.post',
    //   history: false,
    // });
});
