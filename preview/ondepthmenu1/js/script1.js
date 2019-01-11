jQuery(document).ready(function(){
	/* alert('hi'); */
	var menu = $('#nav > li');
	menu.hover(
		function(){
			var tg = $(this);
			var onImg = tg.find('.text_image > .on');
			var offImg = tg.find('.text_image > .off');
			var menuImage = tg.find('.menu_image');	
			var imageHeight = menuImage.find('img').innerHeight();	//.menu_image img태그의 높이값이 얼마야
			onImg.css('display','block');
			offImg.css('display','none');
			menuImage.animate({height:imageHeight},{duration:600,queue:false,easing:'easeOutCubic'});
		},
		function(){
			var tg = $(this);
			var onImg = tg.find('.text_image > .on');
			var offImg = tg.find('.text_image > .off');
			var menuImage = tg.find('.menu_image');	
			var imageHeight = 0;
			onImg.css('display','none');
			offImg.css('display','block');
			menuImage.animate({height:imageHeight},{duration:600,queue:false,easing:'easeOutCubic'});			
		}
	);	
});