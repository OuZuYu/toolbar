require.config({
	paths: {
		"jquery" : "jquery.min"
	}

});

require(['jquery','backtop'], function($, backtop) {
	backtop.toTop($('#backTop'),{
		speed: 3000,
		dest: 300
	});

//	new backtop.toTop($('#backTop'));

/*	var scrollto = new scrollto.scroll({dest:500, speed:2000});
	$('#backTop').on('click', scrollto.move.bind(scrollto));
*/

/*	$('#backTop').on('click', move);
	$(window).on('scroll', checkPosition);
	function move() {
		$('html, body').animate({scrollTop: 0}, 800);
	}

	function go() {
		$('html, body').scrollTop(0);
	}

	function checkPosition() {
		if($(window).scrollTop() > $(window).height()) {
			$('#backTop').fadeIn();
		} else {
			$('#backTop').fadeOut();
		}
	}*/
});