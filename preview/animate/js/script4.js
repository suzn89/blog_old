jQuery(document).ready(function(){
	
	$('.sub_list > div').each(function(){
		$(this).hover(
			function(){
				$(this).find('a').stop().animate({'margin-top':'-97px'},500);
			},
			function(){
				$(this).find('a').stop().animate({'margin-top':'0px'},500);
			}
		);
	});
	
	
	
	/* $('.sub_list .box1').hover(
		function(){
			$('.sub_list .box1 a img').stop().animate({'margin-top':'-97px'},500);
		},
		function(){
			$('.sub_list .box1 a img').stop().animate({'margin-top':'0px'},500);
		}
	); */
});