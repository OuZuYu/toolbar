define(['jquery'], function($) {
/*	function move(opt) {
		opt = $.extend({
			dest: 0,
			speed: 800	
		}, opt);
		$('html, body').animate({scrollTop: opt.dest},opt.speed);
	}

	function go(opt) {
		opt
	}*/

	function Scroll(opt) {
		this.opt = $.extend({
			dest: 0,
			speed: 800	
		}, opt);

		this.$el = $('html, body');
	}

	Scroll.prototype.move = function() {
		var opt = this.opt;
		if($(window).scrollTop() != this.opt.dest && !this.$el.is(':animated')) {
				this.$el.animate({scrollTop: opt.dest}, opt.speed);
		}

	};

	Scroll.prototype.go = function() {
		this.$el.scrollTop(this.opt.dest);
	};

	return {
		scroll: Scroll
	};
});