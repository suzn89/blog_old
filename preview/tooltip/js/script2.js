jQuery(document).ready(function(){
	/* alert('hi'); */
	var balloon = $('<div class="balloon"></div>').appendTo('body');
	function updateBalloonPosition(x,y){
		balloon.css({left:x + 15, top:y});	// +15는 마우스 움직였을때 막 깜빡거리는거처럼 보여서 +15해주면 방지가됨
	};
	function showBalloon(){
		balloon.stop();
		balloon.css('opacity',0);
		balloon.show();
		balloon.animate({opacity:1},2000);
	}
	function hideBalloon(){
		balloon.stop();		
		balloon.animate({opacity:0},2000,function(){balloon.hide()});		
	}
	element.hover(
		$('.showBalloon').each(function(){
		var element = $(this);
		var text = element.attr('title');	//element 타이틀이뭐야
		element.attr('title','');
			function(event){
				balloon.text(text);
				updateBalloonPosition(event.pageX,event.pageY);	//마우스 좌표 받아오는 이벤트
				showBalloon();
			},
			function(){
				hideBalloon();
			}
		);
		element.mousemove(
			function(event){
				updateBalloonPosition(event.pageX,event.pageY);
			}
		);
	});
});