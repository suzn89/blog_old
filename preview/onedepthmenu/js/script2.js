jQuery(document).ready(function(){
	var tab = $('#wrap > #tab > li');
	var content = $('#content > div');
	
	tab.on('click',function(e){
		e.preventDefault();
		var tg = $(this);
		var tc = tg.find('a');
		tab.find('a').removeClass();
		tc.addClass('on');
		i = tg.index();
		content.css('display','none');
		content.eq(i).css('display','block');
	});
});