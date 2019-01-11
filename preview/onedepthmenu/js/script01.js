jQuery(document).ready(function(){
	/* alert('hi'); */
	var el = $('#nav > ul > li');
	var urls = [
		'http://www.daum.net',
		'http://nate.com',
		'http://naver.com',
		'http://www.hschool.co.kr'
	];
	el.on({
		mouseover:function(){
			var tg = $(this);	//마우스 올린  li
			tg.addClass('on');
		},
		mouseout:function(){
			var tg = $(this);	//마우스빠지면
			tg.removeClass();
		},
		click:function(e){
			var tg = $(this);
			e.preventDefault();
			var i = tg.index();	//eq는 몇번째를! 이거고 index는 몇번째야! 타겟이 몇번째임?
			var linkURL = urls[i];
			//	 location.href = linkURL;
			window.open(linkURL); 새창에서열기
		}
	});		//.on은 이벤트 메서드하고 function하고 묶어주는 거
});
