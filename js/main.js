
var openmodal = function(){
	//$('.modal').css('display','block');
	$('.modal').show();
});

var closemodal = function(){
	$('.modal').hide();
});

//$('.signin').on('click',openmodal);
$('.signin').click(openmodal);
$('.close').click(closemodal);

var('.submit').click(function(){
	$('.input').addClass('error');
});

var('.input').focus(function(){
	//"this" is the element that fired the event
	$(this).removeClass('error');
});

$('.modal').click(closemodal);

$(',getstarted').click(function(){
	// Advance solution: don;t
	event.stopPropagation();
});
