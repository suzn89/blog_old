jQuery(document).ready(function(){
	$('.quick_icon > li').hover(
		function(){
			var num = $(this).index()+1;
			$(this).find('>a>img').attr({'src':'image/quick_on_0'+num+'.png'});
		},
		function(){
			var num = $(this).index()+1;
			$(this).find('>a>img').attr({'src':'image/quick_0'+num+'.png'});
		}
	);
	
	bb = true;
	$('.quick_toggle').click(function(){
		if(bb) {
			$(this).addClass('quick_open');
			$(this).stop(true, true).animate({'margin-right':'-70px'},500);
			$('.quickmenu').stop(true,true).animate({'margin-right':'-70px'},500,function(){bb=false;});
			// .animate 실행한 다음에 ㅇㅣ러케 해! 세번째 인자로 들어가는거 요게 폴스여야 엘스가 실행이 되니까 다시 열람 폴스로해줘야함
		} else {
			$(this).removeClass('quick_open');
			$(this).stop(true, true).animate({'margin-right':'0px'},500);
			$('.quickmenu').stop(true,true).animate({'margin-right':'0px'},500,function(){bb=true;});
		}
	});
});