"use strict";$(function(){$(".owl-slider").owlCarousel({navText:['<svg class="icon-svg icon-carousel-prev" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#carousel-prev"></use></svg>','<svg class="icon-svg icon-carousel-next" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#carousel-next"></use></svg> '],nav:!0,dots:!0,smartSpeed:500,items:1,margin:0,loop:!0,mouseDrag:!1,autoplay:!0,responsive:{0:{nav:!1},768:{nav:!0}}}),$(".owl-objacts").owlCarousel({navText:['<svg class="icon-svg icon-carousel-prev" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#carousel-prev"></use></svg>','<svg class="icon-svg icon-carousel-next" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#carousel-next"></use></svg> '],nav:!0,dots:!1,smartSpeed:500,items:3,margin:15,mouseDrag:!1,responsive:{0:{items:1},567:{items:2},1025:{items:3}}}),$(".owl-partners").owlCarousel({navText:['<svg class="icon-svg icon-carousel-prev" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#carousel-prev"></use></svg>','<svg class="icon-svg icon-carousel-next" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#carousel-next"></use></svg> '],nav:!0,dots:!1,mouseDrag:!1,items:4,loop:!0,margin:15,autoplay:!0,autoplayTimeout:100,autoplaySpeed:1e3,responsive:{0:{items:2,nav:!1},567:{items:3,nav:!1},768:{}}})});