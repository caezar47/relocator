(function() {
	"use strict";
	$(window).on('load', 
		function(){
			var toggle_navbar = $(".navbar__hamburger-btn").data("toggle-nav"),
				toggle_body = $(".navbar__hamburger-btn").data("body"),
				toggle_collapse = $(".navbar__hamburger-btn").data("collapse-nav"); 
			$(".navbar__hamburger-btn").on('click',function() {				
				$(toggle_body).toggleClass("is--open-navbar");
				$(toggle_navbar).toggleClass("is--open");
				$(toggle_collapse).toggleClass("is--open");
				$(this).toggleClass("is--active");
				//$(this).closest(".navbar").find(".navbar__form").addClass("is--active");
			});	
			$(document.body).on('click', function(event) {
				if($(event.target).closest('.navbar').length == 0){	
					$(toggle_body).removeClass("is--open-navbar");
					$(toggle_navbar).removeClass("is--open");
					$(toggle_collapse).removeClass("is--open");
					$(".navbar__hamburger-btn").removeClass("is--active");
				}		
			});		
		}
	);

	/*$(document).ready(function() {
	    var container = $('.owl-objacts.is--cat');


	    container.isotope({
	        animationEngine: 'best-available',
	        animationOptions: {
	            duration: 200,
	            queue: false
	        },
	        layoutMode: 'fitRows'
	    });

	    $('.card-item__card.is--objacts-cat').click(function() {
	        $('.card-item__card.is--objacts-cat').removeClass('active');
	        $(this).addClass('active');
	        var selector = $(this).attr('data-filter');
	        container.isotope({
	            filter: selector
	        });
	        setProjects();
	        return false;
	    });

	    function splitColumns() {
	        var winWidth = $(window).width(),
	            columnNumb = 1;


	        if (winWidth > 1024) {
	            columnNumb = 4;
	        } else if (winWidth > 900) {
	            columnNumb = 2;
	        } else if (winWidth > 479) {
	            columnNumb = 2;
	        } else if (winWidth < 479) {
	            columnNumb = 1;
	        }

	        return columnNumb;
	    }
		
	    function setColumns() {
	        var winWidth = $(window).width(),
	            columnNumb = splitColumns(),
	            postWidth = Math.floor(winWidth / columnNumb);

	        container.find('.portfolio-item').each(function() {
	            $(this).css({
	                width: postWidth + 'px'
	            });
	        });
	    }

	    function setProjects() {
	        setColumns();
	        container.isotope('reLayout');
	    }

	    container.imagesLoaded(function() {
	        setColumns();
	    });


	    $(window).bind('resize', function() {
	        setProjects();
	    });
	});*/
})();