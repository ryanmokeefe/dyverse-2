$(window).scroll(function() {
    var h1 = $("h1");
    if ($(window).scrollTop() >= 2)
    {
        h1.addClass("h1-bgcolor");
    } else 
    {
        h1.removeClass("h1-bgcolor");
    }
});

// // Materialize Carousel:

$(document).ready(function(){
    $('.carousel').carousel();
  });

  $('.carousel').carousel({
    dist: 0,
    padding: 100,
    indicators: true
  });


// // Popout Video:

var w = $(window).width();
var h = $(window).height();
var popout = document.getElementById('popout');
var divW = $(popout).width();
var divH = $(popout).height();

popout.style.position="fixed";
popout.style.top = (h/2)-(divH/2)+"px";
popout.style.left = (w/2)-(divW/2)+"px";

var videos = $("video");

var popoutVid = $(popout).find("video");
var oldSource = $(popoutVid).find("source");


videos.click(function() {
    var sources = $(this).find( "source" );
    $(sources).clone().appendTo(popoutVid);
    var video = $(popoutVid).get(0);
    video.load();
    popout.style.display = "flex";
    video.play();
});


// Exit when clicked or esc is pressed

var exit = $(".exit-popout");

$(document).keydown(function(e) {
    if (e.keyCode == 27) {
        clearPopout();
    }
});

exit.click(function() {
    clearPopout();
});

var clearPopout = () => {
    var video = $(popoutVid).get(0);
    video.pause();
    oldSource = $(popoutVid).find("source");
    $(oldSource).remove();

    popout.style.display = "none";
};




// Create array of vids on page

// create # of vids to display based on screen size
    // on resize, add/remove if neccessary

// Scroll through array onClick prev/next button

// Change video array shown for each category clicked

var vids = {
    commercials: [],
    film: [
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/Jkai9C3G4_c?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>', 
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/5cybCrOCp8M?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>', 
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/vI6RnogzKVM?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'

    ],

}

function createVids() {

    var filmReelContainer = $("#filmReel");
    var vid = $(".video").width();
    
    var windowWidth = $(window).width();

    var vidAmount;

    if (windowWidth < 1080)
    {
        vidAmount = Math.ceil(windowWidth / vid);
    } else 
    {
        vidAmount = Math.floor(windowWidth / vid);
    }

    for (i = 1; i < vidAmount; i++)
    {
        var div = $("<div>");
        div.addClass("video");
        filmReelContainer.append(div);
    }

}

// createVidDivs();

// $(window).resize(function() {
//     createVidDivs();
// });


