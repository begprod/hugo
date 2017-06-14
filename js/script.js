$(document).ready(function() {
	activeMenu();
    createBgfromAlbum();
	countDownTimer();
	getPhotoData();
	showUpBtn();
	anchorScroll();
});


function activeMenu() {
	$('.header__menu').click(function() {
		$('.menu').toggleClass('menu--active');
	});
}

function createBgfromAlbum() {
    var albumCoverImg = $('.featured-music__current-albm img');
    var srcAlbumCoverImg = albumCoverImg.attr('src');
		var albumBgBlock = $('.featured-music__unit--album');
    albumBgBlock.css('background-image', 'url(' + srcAlbumCoverImg + ')');
}


function countDownTimer() {
	var daysEl = $('.timer__days');
	var hoursEl = $('.timer__hours');
	var minutesEl = $('.timer__minutes');
	var secondsEl = $('.timer__seconds');
	var dateEl = $('.js-date');
	var placeEl = $('.js-place');
	var place = 'Red Square, Moscow, Russia.';
	var date = 'Jun 9, 2017 18:00:00';

	dateEl.text(date);
	placeEl.text(place);


	var countDownDate = new Date(date).getTime();
	var timer = setInterval(function() {
		var currentTime = new Date().getTime();

		var timeDistance = countDownDate - currentTime;

		var days = Math.floor(timeDistance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((timeDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((timeDistance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((timeDistance % (1000 * 60)) / 1000);

		daysEl.text(days);
		hoursEl.text(hours);
		minutesEl.text(minutes);
		secondsEl.text(seconds);
	}, 1000);
}



function getPhotoData() {
	var photoBlock = $('.insta');
	$.getJSON('photo-data.json', function(data) {
			for(var i = 0; i < 12; i++) {
				//console.log(data[i].url);
				photoBlock.append(
					// '<div class="insta__unit">' + '<img src="' + data[i].url + '" alt="' + data[i].title + '">' + '</div>'
					'<div class="insta__unit" style="background-image:url('+ data[i].url +')"></div>'
				);
			}
		}
	);
}

function showUpBtn() {
	var scrollBtn = $('.up-btn');
	$(window).scroll(function () {
		if ($(document).scrollTop() > 400) {
			scrollBtn.fadeIn(300);
		} else {
			scrollBtn.fadeOut(300);
		}
	});
}


function anchorScroll() {
	var anchorEl = $('.js-anchor');
	anchorEl.click(function () {
		var getScrollEl = $(this).attr('data-to-scroll');
		$('html, body').animate({
			scrollTop: $(getScrollEl).offset().top
		}, 800);
	});
}