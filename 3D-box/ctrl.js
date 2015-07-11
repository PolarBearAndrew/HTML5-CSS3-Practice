$(document).ready( function(){

	var autoRolling = function(){
		$('#cube').toggleClass('autoRolling');
	};

	var background = function(){
		$('figure').toggleClass('background');
	};

	var show1 = function(){
		$('#cube').removeClass('autoRolling');
	};



	$('body').on('click', '#auto-Rolling', autoRolling );
	$('body').on('click', '#background', background );
	$('body').on('click', '#show1', show1 );

});