class HeroSlider {
	constructor(el) {
		this.el = el;
		this.swiper = this._initSwiper();
	}

	_initSwiper() {
		return new Swiper(this.el, {
			loop: true,
			grabCursor: true,
			effect: 'coverflow',
			centeredSlides: true,
			slidePerView: 1,
			speed: 1000,
			breakpoints: {
				1024: {
					slidesPerView: 2,
				}
			},
		});
	}

	start(options = {}) {
		options = Object.assign({
			//1000だと動かんとかある？？？
			delay: 3000,
			disableOnInteraction: false
		}, options);
		this.swiper.params.autoplay = options;
		this.swiper.autoplay.start();
	}

	


	stop() {
		this.swiper.autoplay.stop();
	}

	// start(options = {}) {
	// 	options = Object.assign({
	// 		delay: 100,
	// 		//ここがfalseだとマウスでオブジェクト操作しても4秒後にスライドが動作する
	// 		disableOnInteraction: false
	// 	}, options);
	// 	this.swiper.params.autoplay = options;
	// 	this.swiper.autoplay.start();
	// }
	// stop() {
	// 	this.swiper.autoplay.stop();
	// }
}

// const mySwiper = new Swiper('.swiper-container', {
// 		// Optional parameters
// 		// direction: 'vertical',
// 		loop: true,
// 		effect: 'coverflow',
// 	})