jQuery(document).ready(function(){
	/* alert('hi'); */
	var balloon = $('<div class="balloon"></div>').appendTo('body');
	function updateBalloonPosition(x,y){
		balloon.css({left:x + 15, top:y});	// +15는 마우스 움직였을때 막 깜빡거리는거처럼 보여서 +15해주면 방지가됨
	};
	$('.showBalloon').each(function(){
		var element = $(this);
		var text = element.attr('title');	//element 타이틀이뭐야
		element.attr('title','');
		element.hover(
			function(event){
				balloon.text(text);
				updateBalloonPosition(event.pageX,event.page)	//마우스 좌표 받아오는 이벤트
				balloon.show();
			},
			function(){
				balloon.hide();
			}
		);
		element.mousemove(
			function(event){
				updateBalloonPosition(event.pageX,event.pageY);
			}
		);
	});
});