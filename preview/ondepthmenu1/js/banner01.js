$(function(){
	var current = 0; 
	var banner = $('#wrapper ul li');
	
	setInterval(function(){
		var prev = banner.eq(current);	//현재 보여지는놈
		move(prev,'0','-100%');
		current++;
		if(current===banner.size()) current = 0;
		//if 한줄에 쓸때는 {} 안써두됨
		// current의 수가 배너 갯수(.size)와 같아지면 다시 0으로 돌림
		var next = banner.eq(current);	// 다음 보여질놈
		move(next,'100%','0')
	},2000);		//2초마다 function실행
	function move(tg,start,end){	//var tg, var start, var end 선언한거하고 똑같음. move는 사용자 함수
		tg.css('top',start)		// start = 0%
			.stop()
			.animate({top:end},{duration:500,ease:'easeOutCubic'});	// end = 100%
	}
});