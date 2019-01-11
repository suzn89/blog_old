$(function(){
	/* alert('hi'); */
	var menu = $('#nav > li');
	menu.hover(
		function(){
			var tg = $(this);
			var onImg = tg.find('.text_image > .on');
			var offImg = tg.find('.text_image > .off');
			var menuImage = tg.find('.menu_image');
			var imageWidth = menuImage.find('img').innerWidth();	// innerHeight 높이갚이 얼마야
			
			onImg.css('display','block');
			offImg.css('display','none');
			menuImage.animate({width:imageWidth},{duration:500,queue:false,easing:'easeOutCubic'});	
		},
		function(){
			var tg = $(this);
			var onImg = tg.find('.text_image > .on');
			var offImg = tg.find('.text_image > .off');
			var menuImage = tg.find('.menu_image');
			var imageWidth = 0
			onImg.css('display','none');
			offImg.css('display','block');
			menuImage.animate({width:imageWidth},{duration:500,queue:false,easing:'easeOutCubic'});				
		}
	);
});

	// queue == 쌓인다는 의미. animate가 적립되어서 다 나옴 궁금하면 true로 바꿔보셈