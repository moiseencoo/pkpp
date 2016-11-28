var menuWidth = $(window).width();
$('.hack-me').width(menuWidth);
/*if($(window).width() < 769) {
	$('#footer-container').removeClass('container');
} */
$('.options').click(function () {
	$('.langs > p').toggleClass('bold');
	$('.contact-phone').toggle('slow');
});
$('.menu-btn').click(function () {
	$('.navbar').toggle('slow');
});
// Footer slider
$('#ftr-1  .footer-hdr').click(function (e) {
	if ($(this).hasClass("active")) {
		e.preventDefault();
		$(this).removeClass("active");
		$('#ftr-1  .plus-sign').show('slow');
		$('#ftr-1  .open-ftr-minus').hide('slow');
		$('#ftr-1  .ftr-slider').hide('slow');
	}
	else {
		if ($(window).width() < 980) {
			e.preventDefault();
			$(this).addClass("active");
			$('#ftr-1  .plus-sign').hide('slow');
			$('#ftr-1  .open-ftr-minus').show('slow');
			$('#ftr-1  .ftr-slider').show("slow");
		}
	}
});
$('#ftr-2  .footer-hdr').click(function (e) {
	if ($(this).hasClass("active")) {
		e.preventDefault();
		$(this).removeClass("active");
		$('#ftr-2  .plus-sign').show('slow');
		$('#ftr-2  .open-ftr-minus').hide('slow');
		$('#ftr-2  .ftr-slider').hide('slow');
	}
	else {
		if ($(window).width() < 980) {
			e.preventDefault();
			$(this).addClass("active");
			$('#ftr-2  .plus-sign').hide('slow');
			$('#ftr-2  .open-ftr-minus').show('slow');
			$('#ftr-2  .ftr-slider').show("slow");
		}
	}
});
$('#ftr-3  .footer-hdr').click(function (e) {
	if ($(this).hasClass("active")) {
		e.preventDefault();
		$(this).removeClass("active");
		$('#ftr-3  .plus-sign').show('slow');
		$('#ftr-3  .open-ftr-minus').hide('slow');
		$('#ftr-3  .ftr-slider').hide('slow');
	}
	else {
		if ($(window).width() < 980) {
			e.preventDefault();
			$(this).addClass("active");
			$('#ftr-3  .plus-sign').hide('slow');
			$('#ftr-3  .open-ftr-minus').show('slow');
			$('#ftr-3  .ftr-slider').show("slow");
		}
	}
});
$(window).resize(function () {
	if ($(window).width() > 980) {
		$('.ftr-slider').show('slow');
	}
});
$('#auto-directions').click(function () {
	$('#auto-directions .hidden-directions').toggle();
});
$('#metro-directions').click(function () {
	$('#metro-directions .hidden-directions').toggle();
});
$('#director-info li').click(function () {
	$('#director-info .hidden-directions').toggle();
});
$(function () {
	$('#clients-carousel').carousel({
		itemWidth: 360
		, itemHeight: 450
		, distance: 10
		, selectedItemDistance: 46
		, selectedItemZoomFactor: 0.8
		, unselectedItemZoomFactor: 0.6
		, unselectedItemAlpha: 1
		, motionStartDistance: 170
		, topMargin: 50
		, gradientStartPoint: 0.35
		, gradientOverlaySize: 0
		, reflectionDistance: 1
		, reflectionAlpha: 0.1
		, reflectionVisible: true
		, reflectionSize: 100
		, selectByClick: true
		, navigationButtonsVisible: true
		, enableMouseWheel: false
	});
});
$(function () {
	$('#news-carousel').carousel({
		itemWidth: 338
		, itemHeight: 265
		, distance: 20
		, selectedItemDistance: 60
		, selectedItemZoomFactor: 0.8
		, unselectedItemZoomFactor: 0.5
		, unselectedItemAlpha: 1
		, motionStartDistance: 200
		, topMargin: 250
		, gradientStartPoint: 0.35
		, gradientOverlaySize: 0
		, selectByClick: false
		, enableMouseWheel: false
		, navigationButtonsVisible: true
	});
});