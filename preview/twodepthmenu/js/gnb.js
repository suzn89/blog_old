$(function(){
	/* alert('hi'); */
    var menu = $('#gnb > li');
	// menu = 1depth
	var wrap = $('#gnbWrap');
	// 1depth와 2depth 감싸고 있는 div
	var menuHeight = menu.children('a').height();
	// menuHeight = 1depth 메뉴 높이가 얼마야
	var pageURL = location.href;
	// pageURL = 현재 페이지 주소
	// 예를 들어 이 예제에서는 file:// ~ 우짜고 저짜고
	var activeMenu;
	
	menu.on({
		mouseover:function(){
			var tg = $(this);		//hover한 #gnb > li
			menu.removeClass('on');
			tg.addClass('on');
			var th = menuHeight + tg.find('>.sGnbArea').height();
			wrap.stop().animate({height:th});	//1뎁스+2뎁스 높이
		},
		mouseout:function(){
			var tg = $(this);		
			menu.removeClass('on');			
			wrap.stop().animate({height:menuHeight});	
			// 1depth높이갚으로 돌림
			onActive(); //다른데 마우스 올렷다오면 안열려있으니까 여기서 또 호출해줘야지
		}
	});
	
	menu.each(function(i){
		var tg = $(this);
		var sub = tg.find('>.sGnbArea > ul > li');
		var menuURL = tg.children('a').attr('href');	//1depth 바로밑에 a태그 href값이 모야
		// menuURL = 2depth_menu00.html
		var active = pageURL.indexOf(menuURL);
		// pageURL = file:\\F:TJA_PM2/ex09/2depth_menu.html
		// .indexOf 찾아보기 ★★★★★
		if(active>-1){activeMenu = tg;}
		sub.each(function(j){
			var tg = $(this);	//2depth_menu
			var subURL = tg.children('a').attr('href');
			active = pageURL.indexOf(subURL);
			if(active>-1) {activeMenu = tg;}
		});
		sub.on({
			mouseover:function(){
				var tg = $(this);
				sub.removeClass('on');
				tg.addClass('on');
			},
			mouseout:function(){
				var tg = $(this);
				tg.removeClass('on');	
				onActive();
			}
		});
	});		
	
	onActive();	// 실행햇을때 호출 한번
	function onActive(){
		if(activeMenu){
			activeMenu.trigger('mouseover');
		}
	}	//trigger 강제 이벤트 발생
});