$(document).ready(function(){
	$('.scroll').click(function(e){
		e.preventDefault(); //prevents the normal action

		var target = $(this.hash),
			scrollToPosition = target.offset().top;

		console.log("target is" +target);

		$('html,body').animate({scrollTop: scrollToPosition}, 800);
	});
});