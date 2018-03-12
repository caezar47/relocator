$('.czr__select .czr__selected').on("click", function(){
	var options=$(this).parents('.czr__select').find('.czr__options');
	$('.czr__options:visible').not(options).slideUp();
	$(this).toggleClass("is--open");
	$(this).next().slideToggle();
})
$('.czr__select .czr__option').on("click", function(){
	var text=$(this).text();	
	var parent=$(this).parents('.czr__select');
	parent.find('.czr__selected').text(text).toggleClass("is--open");
	$(this).parent().slideUp();
	parent.find('.is--selected').removeClass('is--selected')
	$(this).addClass('is--selected');
})

$('.czr__select .czr__option').on("click", function(){
	var phone=$(this).data('phone');
	var address=$(this).data('address');
	$('.czr__tel').text(phone);
	$('.czr__address').text(address);
})