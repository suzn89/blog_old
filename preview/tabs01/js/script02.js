jQuery(document).ready(function(){
	
	var changeImage = $('#image');
	
	$('#nav > ul > #springBtn').bind('click', function(){
		changeImage.removeClass().addClass('spring');
	});
	$('#nav > ul > #summerBtn').bind('click', function(){
		changeImage.removeClass().addClass('summer');
	});
	$('#nav > ul > #fallBtn').bind('click', function(){
		changeImage.removeClass().addClass('fall');
	});
	$('#nav > ul > #winterBtn').bind('click', function(){
		changeImage.removeClass().addClass('winter');
	});
});