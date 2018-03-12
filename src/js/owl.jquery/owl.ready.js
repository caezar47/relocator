'use strict';
$(function() {
	$('.owl-slider').owlCarousel({
		//navText: ['<svg class="icon-svg icon-owl-prev" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#owl-prev"></use></svg>', '<svg class="icon-svg icon-owl-next" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#owl-next"></use></svg> '],
		navText: ['<svg class="icon-svg icon-carousel-prev" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#carousel-prev"></use></svg>', '<svg class="icon-svg icon-carousel-next" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#carousel-next"></use></svg> '],
		nav: true,
		dots: true,
		smartSpeed: 500,
		items:1,
		margin: 0,
		loop: true,
		mouseDrag: false,
		responsive : {
			0 : {
				nav: false,
			},
			768 : {
				nav: true,
			}
		}
	});
	$('.owl-objacts').owlCarousel({
		//navText: ['<svg class="icon-svg icon-owl-prev" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#owl-prev"></use></svg>', '<svg class="icon-svg icon-owl-next" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#owl-next"></use></svg> '],
		navText: ['<svg class="icon-svg icon-carousel-prev" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#carousel-prev"></use></svg>', '<svg class="icon-svg icon-carousel-next" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#carousel-next"></use></svg> '],
		nav: true,
		dots: false,
		smartSpeed: 500,
		items: 3,
		margin: 15,
		//loop: true,
		mouseDrag: false,
		responsive : {
			0 : {
				items: 1,
			},
			768 : {
			}
		}
	});
	$('.owl-partners').owlCarousel({
		//navText: ['<svg class="icon-svg icon-owl-prev" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#owl-prev"></use></svg>', '<svg class="icon-svg icon-owl-next" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#owl-next"></use></svg> '],
		navText: ['<svg class="icon-svg icon-carousel-prev" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#carousel-prev"></use></svg>', '<svg class="icon-svg icon-carousel-next" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#carousel-next"></use></svg> '],
		nav: true,
		dots: false,
		mouseDrag: false,
		items:4,
		loop:true,
		margin:15,
		autoplay:true,
		autoplayTimeout: 100,
		autoplaySpeed: 1000,
		responsive : {
			0 : {
				items: 1,
			},
			768 : {
			}
		}
	});
});