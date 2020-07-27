//ES5 クラスみたいなもの
function Car(options) {
	this.title = options.title;
}

Car.prototype.drive = function() {
	return 'ウィーン';
}

var car = new Car({ title: 'プリウス' });

console.log(car);
console.log(car.drive());

//ES5での継承をプロトタイプチェーンで作成
function Toyota(options) {
	Car.call(this, options);
	this,color = options.color;
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function() {
	return 'ブブー';
}

const toyota = new Toyota({ color: 'red', title: 'アクア'});

console.log(toyota);
console.log(toyota.drive());
console.log(toyota.honk());

//ES6 javascriptにはclassはなくプロトタイプチェーンを使用して似た機能を作成する。classの後ろではプロトタイプチェーンの仕組みが動作している。

//ここからがclass
// class Car1 {
// 	constructor({ title }) {
// 		this.title = title;
// 	}

// 	drive() {
// 		return 'ウィーン';
// 	}
// }

// const car1 = new Car1({ title: 'アクア' });
// console.log(car1)
// console.log(car1.drive());

class Car1 {
	constructor({ title }) {
		this.title = title;
	}

	drive() {
		return 'ウィーン';
	}
}

class Toyota1 extends Car1 {
	constructor(options){
		//toyotaのコンストラクタからCar1側のコンストラクタを呼びたい親の同じメソッドを呼んでるこの場合はconstructor
		super(options); //Car.constructor()
		this.color = options.color;
	}
	honk() {
		return 'ブブー'
	}
}

const car2 = new Toyota1({ color: 'red', title: 'アクア' });
console.log(car2)
console.log(car2.honk());
console.log(car2.drive());

//問題

// class Monster {
// 	constructor(options){
// 		this.name = options.name;
// 		this.health = 100;
// 	}
// }

class Monster {
	constructor(options) {
		this.health = 100;
		this.name = options.name;
	}
}

class Snake extends Monster {
	bite(targetSnake) {
		targetSnake.health -= 10;
		return 'ダメージを与えた';
	}
 }

let monster1 = new Monster( {name: 'あくま'} );
console.log(monster1);

let snake1 = new Snake( { name: 'Python' } );
console.log(snake1.bite(monster1));
console.log(monster1.health);