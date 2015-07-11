var now = 1;

var sideData = [
	{ side: 1, right: 3, left: 4, bottom: 6, top: 5 },
	{ side: 2, right: 3, left: 4, bottom: 5, top: 6 },
	{ side: 3, right: 2, left: 1, bottom: 6, top: 5 },
	{ side: 4, right: 1, left: 2, bottom: 6, top: 5 },
	{ side: 5, right: 3, left: 4, bottom: 1, top: 2 },
	{ side: 6, right: 3, left: 4, bottom: 2, top: 1 },
]


$(document).ready( function(){

	//自動旋轉animation
	var autoRolling = function(){

		$('#cube').toggleClass('autoRolling');
	};

	//切換透明方塊
	var background = function(){

		$('figure').toggleClass('background');
	};


	//旋轉至指定面
	var rollto = function( side ){

		now = side;
		$('#cube').removeClass()
					.addClass( 'show' + side );
	}

	var roll = function(){
		$('#cube').css("transform","rotateX(" + x + "deg)" + "rotateY(" + y + "deg)");
	}

	//判定按鈕,啟動旋轉
	var showClick = function(){

		var side = $(this).attr('data-side');
		rollto(side);
	};

	var y = 0, x = 0;

	var toLeft = function(){ y += 90; roll()};
	var toRight = function(){ y -= 90; roll()};
	var toTop = function(){ x -= 90; roll()};
	var toBottom = function(){ x += 90; roll()};

	//委派
	$('body').on('click', '#auto-Rolling', autoRolling );
	$('body').on('click', '#background', background );

	$('body').on('click', '#toLeft', toLeft );
	$('body').on('click', '#toRight', toRight );
	$('body').on('click', '#toTop', toTop );
	$('body').on('click', '#toBottom', toBottom );

	$('body').on('click', '.show', showClick );

});