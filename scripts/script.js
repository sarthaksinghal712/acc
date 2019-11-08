// JavaScript Document
$(document).ready(function(){
	$("#lal1, #lal2").hide();
	setTimeout(
	function(){
		$("#lal").hide();
		$("#lal1").fadeIn();
		setTimeout(
			function(){
			$("#lal1").hide();
			$("#lal2").fadeIn();
			}, 3000);
		setTimeout(
		function(){
			$("#lal1, #lal2").hide();
			$("#lal").fadeIn();
		}, 6000);
	}, 1500);

	
	
var videos = document.getElementsByTagName("video");

function checkScroll() {

    for(var i = 0; i < videos.length; i++) {

        var video = videos[i];

        var x = video.offsetLeft, y = video.offsetTop, w = video.offsetWidth, h = video.offsetHeight, r = x + w, //right
            b = y + h, //bottom
            visibleX, visibleY, visible;

            visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
            visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

            visible = visibleX * visibleY / (w * h);
			var fraction = 0.8; 

            if (visible > fraction) {
                video.play();
            } else {
                video.pause();
            }

    }

}

window.addEventListener('scroll', checkScroll, false);
window.addEventListener('resize', checkScroll, false);
$("#ck").click(function() {
    $('html, body').animate({
        scrollTop: $("#v01").offset().top
    }, 2000);
});
});
