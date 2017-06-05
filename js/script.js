$(document).ready(function() {
    console.log('Alive!!!');
    createBgfromAlbum();
	countDownTimer();
});




function createBgfromAlbum() {
    var albumCoverImg = $('.featured-music__current-albm img');
    var srcAlbumCoverImg = albumCoverImg.attr('src');
		var albumBgBlock = $('.featured-music__unit--album');
    albumBgBlock.css('background-image', 'url(' + srcAlbumCoverImg + ')');
}


function countDownTimer() {
	var timerElement = $('.timer');
	var place = 'Red Square, Russia, Moscow';
	var date = 'Jun 9, 2017 18:00:00';
	var countDownDate = new Date(date).getTime();

	var timer = setInterval(function() {
		var currentTime = new Date().getTime();

		var timeDistance = countDownDate - currentTime;

		var days = Math.floor(timeDistance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((timeDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((timeDistance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((timeDistance % (1000 * 60)) / 1000);


		timerElement.text(days + ' ' + hours + ' ' + minutes + ' ' + seconds);
	}, 1000);
}
