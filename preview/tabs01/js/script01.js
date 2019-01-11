jQuery(document).ready(function(){
	/* alert('hi'); */
	$('#nav > ul > #springBtn').bind('click',function(){
		$('#image > img').attr({src:'images/spring.jpg',alt:'봄'});
	});
	$('#nav > ul > #summerBtn').bind('click',function(){
		$('#image > img').attr({src:'images/summer.jpg',alt:'여름'});
	});
	$('#nav > ul > #fallBtn').bind('click',function(){
		$('#image > img').attr({src:'images/fall.jpg',alt:'가을'});
	});
	$('#nav > ul > #winterBtn').bind('click',function(){
		$('#image > img').attr({src:'images/winter.jpg',alt:'겨울'});
	});
});