//animasi form login
const inputs = document.querySelectorAll(".input");


function addcl() {
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl() {
	let parent = this.parentNode.parentNode;
	if (this.value == "") {
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

// preloader
$(window).bind("load", function () {
	$(".preloader").fadeOut();
})

// navbar
$(window).scroll(function () {
	if ($(window).scrollTop() > 10) {
		$('.navbar').addClass('nav-fixed-top hijau shadow')
		$('.navbar').removeClass('nav-fixed')
	} else {
		$('.navbar').removeClass('nav-fixed-top hijau shadow')
		$('.navbar').addClass('nav-fixed')
	}
})


$(window).scroll(function () {
	if ($(window).scrollTop() > 100) {
		$('.top').removeClass('d-none')
	} else {
		$('.top').addClass('d-none')
	}
})

// scrollTop
function gotop() {
	$("html,body").animate({
		scrollTop: 0
	}, 800, 'easeInOutExpo');
}

// animasi paralax
$(window).scroll(function () {
	var wScroll = $(this).scrollTop();

	if (wScroll > $('.judullayanan').offset().top - 650) {
		$('.judullayanan').addClass('judullayanan-muncul');

		// $('.judullayanan').each(function(i) {
		// 	setTimeout(function() {
		// 		$('.judullayanan').eq(i).addClass('judullayanan-muncul');
		// 	}, 1000 * (i+1));
		// });
	} else {
		$('.judullayanan').removeClass('judullayanan-muncul')
	}

});

//smooth-scroll
$(function () {
	$(".smooth-scroll").click(function () {
		var self = this;
		$("html,body").animate({
			scrollTop: $($(self).attr("href")).offset().top - 90
		}, 800, 'easeInOutExpo');
		return false;
	});
});



// swiper
var appendNumber = 4;
var prependNumber = 1;
var swiper = new Swiper('.swiper-container', {
	slidesPerView: 3,
	loop: true,
	centeredSlides: true,
	spaceBetween: 30,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-next',
		prevEl: '.swiper-prev',
	},
	autoplay: {
		delay: 3000,
		disableOnInteraction: false
	}
});
document.querySelector('.prepend-2-slides').addEventListener('click', function (e) {
	e.preventDefault();
	swiper.prependSlide([
		'<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>',
		'<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>'
	]);
});
document.querySelector('.prepend-slide').addEventListener('click', function (e) {
	e.preventDefault();
	swiper.prependSlide('<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>');
});
document.querySelector('.append-slide').addEventListener('click', function (e) {
	e.preventDefault();
	swiper.appendSlide('<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>');
});
document.querySelector('.append-2-slides').addEventListener('click', function (e) {
	e.preventDefault();
	swiper.appendSlide([
		'<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>',
		'<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>'
	]);
});



