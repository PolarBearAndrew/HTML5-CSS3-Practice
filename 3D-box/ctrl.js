$(document).ready( function(){

	var autoRolling = function(){

		$('#cube').toggleClass('autoRolling');
	};

	var background = function(){

		$('figure').toggleClass('background');
	};

	var rollto = function( show ){

		$('#cube').removeClass('autoRolling')
					.removeClass()
					.addClass(show);
	}

	var show1 = function(){ rollto('show1'); };
	var show2 = function(){ rollto('show2'); };
	var show3 = function(){ rollto('show3'); };
	var show4 = function(){ rollto('show4'); };
	var show5 = function(){ rollto('show5'); };
	var show6 = function(){ rollto('show6'); };

	$('body').on('click', '#auto-Rolling', autoRolling );
	$('body').on('click', '#background', background );
	$('body').on('click', '#show1', show1 );
	$('body').on('click', '#show2', show2 );
	$('body').on('click', '#show3', show3 );
	$('body').on('click', '#show4', show4 );
	$('body').on('click', '#show5', show5 );
	$('body').on('click', '#show6', show6 );

});