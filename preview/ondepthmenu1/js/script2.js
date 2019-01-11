jQuery(document).ready(function(){
	/* alert('hi'); */
	/* var active = $('#nav > li.on');
	active.
	 */
	
	var menu = $('#nav > li');
	menu.hover(
		function(){
			close();	//이게 왜 있어야 하는지 궁금하면 빼보셈
			var tg = $(this);
			var onImg = tg.find('.text_image > .on');
			var offImg = tg.find('.text_image > .off');
			var menuImage = tg.find('.menu_image');	
			var imageWidth = menuImage.find('img').innerWidth();	//.menu_image img태그의 높이값이 얼마야
			onImg.css('display','block');
			offImg.css('display','none');
			menuImage.animate({width:imageWidth},{duration:600,queue:false,easing:'easeOutCubic'});
		},
		function(){
			var tg = $(this);
			var onImg = tg.find('.text_image > .on');
			var offImg = tg.find('.text_image > .off');
			var menuImage = tg.find('.menu_image');	
			var imageWidth = 0;
			onImg.css('display','none');
			offImg.css('display','block');
			menuImage.animate({width:imageWidth},{duration:600,queue:false,easing:'easeOutCubic'});	
			open();		//이게 왜 있어야 하는지 궁금하면 빼보셈	
		}
	);	
	
	/* 처음에 열려있게 해볼까 */
	open();
		function open(){		//사용자 정의함수로 넣어주자!
			var tg = $('#nav > li.on');
			var onImg = tg.find('.text_image > .on');
			var offImg = tg.find('.text_image > .off');
			var menuImage = tg.find('.menu_image');	
			var imageWidth = menuImage.find('img').innerWidth();	//.menu_image img태그의 높이값이 얼마야
			onImg.css('display','block');
			offImg.css('display','none');
			menuImage.animate({width:imageWidth},{duration:600,queue:false,easing:'easeOutCubic'});
			
		};
		function close(){
			var tg = $('#nav > li.on');
			var onImg = tg.find('.text_image > .on');
			var offImg = tg.find('.text_image > .off');
			var menuImage = tg.find('.menu_image');	
			var imageWidth = 0;
			onImg.css('display','none');
			offImg.css('display','block');
			menuImage.animate({width:imageWidth},{duration:600,queue:false,easing:'easeOutCubic'});			
	};
});