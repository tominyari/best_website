
$(window).ready(function() {
	if (window.matchMedia('(min-width: 768px').matches) {
		$(".main-content").css("margin-bottom", $(".fixed-footer").css('height'));
		console.log($(".fixed-footer").css("height"))
	} else $(".main-content").css("margin-bottom", 0);
	$('.main-content').css('margin-top', $('.navbar-top').css('height'));
})

$(window).resize(function() {
	if(window.matchMedia('(min-width: 768px').matches) {

		$(".main-content").css("margin-bottom", $(".fixed-footer").css('height'));

		$('.top-comp').css('display', 'inline');
		$('.ham-btn').css('display', 'none')

	} else {

		$(".main-content").css("margin-bottom", 0);

		$(".top-comp").css('display', 'none');
		$(".ham-btn").css('display', 'block')

	}

	$('.main-content').css('margin-top', $('.navbar-top').css('height'));
})

$('#open-dialog').on('click', function() {
	$('.manual-modal').css('display', 'block');
	console.log("opened")
})

$('#close-modal').on('click', function() {

	$('.manual-modal').css('display', 'none');

})

$('.menu-button').click(function() {
	$('.navbar-side').css('display', 'block')
	$('.menu-button').css('display', 'none')
})

$(".manual-navbar").click( function(e) {
	e.stopPropagation();
})

$(".menu-button").click( function(e) {
	e.stopPropagation();
})


$(document.body).click(function() {
	$('.navbar-side').css('display', 'none');
	$('.menu-button').css('display', 'block');
	$('.body').css('background-color', '#f2f6e9')
})

$(".ham-btn").click(function (e) {
	if(window.matchMedia('(max-width: 768px').matches) {

		$('.top-comp').css('display', 'block');
		$('.ham-btn').css('display', 'none')

	}
})

$(".ham-btn").click(function (e) {
	e.stopPropagation();
})

$(document.body).click(function () {
	if(window.matchMedia('(max-width: 768px').matches) {

		$(".top-comp").css('display', 'none');
		$(".ham-btn").css('display', 'block')

	}
})
