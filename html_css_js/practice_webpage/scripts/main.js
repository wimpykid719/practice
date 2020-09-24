document.addEventListener('DOMContentLoaded', function() {
	// const hero = new HeroSlider('.swiper-container');
	// hero.start({delay: 2000});

	// setTimeout(() => {
	// 	console.log('止まりました。')
	// 	hero.stop();
	// }, 9000);

	// const cb = function (el, isIntersecting) {
	// 	if(isIntersecting) {
	// 		const ta = new TweenTextAnimation(el);
	// 		ta.animate();

	// 	}
	// }

	// const so = new ScrollObserver('.tween-animate-title', cb);
	// //画面に要素が入った際にinviewはTrueになる。
	// const _inviewAnimation = function(el, inview) {
	// 	if(inview) {
	// 		el.classList.add('inview');
	// 	}else {
	// 		el.classList.remove('inview')
	// 	}

	// }
	// const so1 = new ScrollObserver('.cover-slide', _inviewAnimation)

	// const so2 = new ScrollObserver('.travel__title', _inviewAnimation)

	// const header = document.querySelector('.header')
	// const _naviewAnimation = function(el, inview) {
	// 	if(inview) {
	// 		header.classList.remove('triggered');
	// 	}else {
	// 		header.classList.add('triggered')
	// 	}

	// }
	// //.nav-triggerを軸にして画面にある際はheaderのtriggeredを消して、画面が外に出たら付与する。だから引数が.headerだと付いてくるからトリガーが発動しない。
	// const so3 = new ScrollObserver('.nav-trigger', _naviewAnimation, {once: false})

	// new MobileMenu();

	const main = new Main();

});

class Main {
	constructor() {
		this.header = document.querySelector('.header');
		this.sides = document.querySelectorAll('.side');
		this._observers = [];
		this._init();

	}

	set observers(val) {
		this._observers.push(val);
	}

	get observers() {
		return this._observers;
	}

	_init() {
		new MobileMenu();
		this.hero = new HeroSlider('.swiper-container');
		Pace.on('done', this._paceDone.bind(this));
	}

	_paceDone() {
		this._scrollInit();
	}

	_naviewAnimation(el, inview) {
		if(inview) {
			this.header.classList.remove('triggered');
		}else {
			this.header.classList.add('triggered')
		}

	}

	_sideAnimation(el, inview) {
		if(inview) {
			this.sides.forEach(side => {
				side.classList.add('inview');
			})
		} else {
			this.sides.forEach(side => {
				side.classList.remove('inview');
			})
		}

	}

	_inviewAnimation(el, inview) {
		if(inview) {
			el.classList.add('inview');
		}else {
			el.classList.remove('inview')
		}

	}

	_textAnimation(el, isIntersecting) {
		if(isIntersecting) {
			const ta = new TweenTextAnimation(el);
			ta.animate();

		}
	}

	_toggleSlideAnimation(el, inview) {
		if(inview) {
			this.hero.start();
		}else {
			this.hero.stop();
		}

	}

	_scrollInit() {
		this.observers = new ScrollObserver('.nav-trigger', this._naviewAnimation.bind(this), {once: false})
		this.observers = new ScrollObserver('.cover-slide', this._inviewAnimation)
		this.observers = new ScrollObserver('.travel__title', this._inviewAnimation)
		this.observers = new ScrollObserver('.appear', this._inviewAnimation)
		this.observers = new ScrollObserver('.tween-animate-title', this._textAnimation);
		this.observers = new ScrollObserver('.swiper-container', this._toggleSlideAnimation.bind(this), {once: false});
		this.observers = new ScrollObserver('#main-content', this._sideAnimation.bind(this), {once: false, rootMargin: "-300px 0px"});
	}
}