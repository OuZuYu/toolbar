define(['jquery', 'scrollto'], function($, scrollto) {
	//传入一个节点，为这个节点添加点击时返回顶部事件 和 出没事件。
/*	function ToTop(el, opt) {
		this.opt = $.extend({
			mode:'move', 
			speed: 800,
			dest: 0
		}, opt);

		this.scroll = new scrollto.scroll(this.opt);
		$(el).on('click', $.proxy(this.move,this));
	};*/

/*	ToTop.prototype.move = function() {
		// $('html, body').animate({scrollTop: 0}, this.opt.speed);
		this.scroll.move();
	};*/

	function toTop(el, opt) {
		opt = $.extend({
			speed: 800,
			dest: 0
		}, opt);

		var move = function() {
			$('html, body').animate({scrollTop: opt.dest}, opt.speed);
		};
		$(el).on('click', move);

	}

	return {
		toTop: toTop
	};
});