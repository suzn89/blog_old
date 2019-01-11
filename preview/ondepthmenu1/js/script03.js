$(function(){
	/* alert('hi'); */
	var menu = $('#nav > li');
	open();		//맨 처음에 열려있을수있게 호출해줌
	menu.hover(
		function(){
			close();
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
			open();
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
	
	//기본으로 3번째꺼 열려있게 하기
	//사용자 함수 쓰니까 호출해줘야함.. 	
	
	function open(){
		var tg = $('#nav > li').eq(2);
		var onImg = tg.find('.text_image > .on');
		var offImg = tg.find('.text_image > .off');
		var menuImage = tg.find('.menu_image');
		var imageWidth = menuImage.find('img').innerWidth();	// innerHeight 높이갚이 얼마야
		
		onImg.css('display','block');
		offImg.css('display','none');
		menuImage.animate({width:imageWidth},{duration:500,queue:false,easing:'easeOutCubic'});		
		
	}
	function close(){
		var tg = $('#nav > li').eq(2);
		var onImg = tg.find('.text_image > .on');
		var offImg = tg.find('.text_image > .off');
		var menuImage = tg.find('.menu_image');
		var imageWidth = 0
		onImg.css('display','none');
		offImg.css('display','block');
		menuImage.animate({width:imageWidth},{duration:500,queue:false,easing:'easeOutCubic'});				
		
	}
	
});

	