/* rollover pluging */
$.fn.rollover = function(options){
	options = $.extend({off:'_off',on:'_on'},options);

/* jQuery(document).ready(function(){ */
	$('.rollover').each(function(){
		var a = $(this);
		var img = a.find('img');
		
		var src_off = img.attr('src');
		// src_off = images/menu01_off.png
		var src_on = src_off.replace(options.off,options.on);
		// src_on = images/menu01_on.png
		$('<img />').attr('src',src_on);
		// <img src="images/menu01_on.png"/>
		
		a.bind('mouseenter focus',function(){
			img.attr('src',src_on);
		});
		a.bind('mouseleave blur',function(){
			img.attr('src',src_off);
		});
		
/* 		a.bind('mouseenter focus',function(){
			
		});
		a.bind('mouseleave blur',function(){
			
		}); */
		
		/* a.hover(function(){
			img.attr('src',src_on);
		},function(){
			img.attr('src',src_off);			
		}); */
	});
/* }); */
	return this;
}
