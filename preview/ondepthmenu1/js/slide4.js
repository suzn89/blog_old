$(function(){
	var current = 0;
	var banner = $('#wrapper li');
	var stop;	// 지역변수로 선언
	timer();
	
	$('#wrapper li').hover(		// banner.hover();
		function(){
			clearInterval(stop);
		},
		function(){
			timer();
		}
	);
	
	function timer(){
		stop = setInterval(function(){
		var prev = banner.eq(current);
		move(prev,0,'-100%');
		current++;
		if(current===banner.size()){
			current=0;
		};	
		var next = banner.eq(current);
		move(next,'100%',0);
		},1000);
	}
	
	
	function move(tg,start,end){
		tg.css('left',start).stop().animate({left:end},{duration:500, ease:'easeOutCubic'});
	}	
	
	
});