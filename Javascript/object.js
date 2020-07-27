//オブジェクト基礎編
//javascriptには2種類のオブジェクト記法がある。
let = obj = {};
//nameのプロパティにtomが追加された。
obj.name = 'Tom'
//ドット記法と辞書型みたいな2種類の取り出し方法がある。
obj['name']
let name = 'obj'
obj[name]//{name: 'John'}となる入れ子になったnameオブジェクトを取り出せる

//配列も格納できる。
obj.arry = ['1', 1]
//オブジェクトにオブジェクトも定義可能
obj.obj = {name: 'john'}

//コンストラクタ 関数同じようオブジェクトを大量に生産する際の関数？

let obj2 = {
	first: 'First',
	last: 'last'
}

// function factoryPerson(first, last) {
// 	let person = { first, last };
// 	return person;

// }
//たくさん作成できる
// let me = factoryPerson('First', 'last');
// let me1 = factoryPerson('First', 'last');
// let me2 = factoryPerson('First', 'last');
// let me3 = factoryPerson('First', 'last');

//コンストラクタ 関数は最初を大文字にする
// function Person(first, last) {
// 	this.first = first;
// 	this.last = last;
// 	// this.introduce = function() {
// 	// 	console.log('My name is' + first + '' + last);
// 	// }
// }
// Person.prototype.introduce = function() {
// 	//thisはPersonのことをポイントしているインスタンス化された後はme0をポイントしている
// 	console.log('My name is' + this.first + ' ' + this.last);
// }
// //sayJapaneaseをintroduceにすると優先順位はJapaneaseの方が高いので上書きされる。
// Japanease.prototype.sayJapanease = function(){
// 	console.log('こんにちは' + this.first + ' ' + this.last);
// }
// //ダメな例　継承が適用されていない
// // function Japanease(first, last){
// // 	this.first = first;
// // 	this.last = last;
// // 	this.doSado = function(){
// // 		//茶道する
// // 	}
// // }
// function Japanease(first, last){
// 	//これでPersonを継承している
// 	/*
// 	Personというメソッドをcallを用いて初期化している
// 	第一引数のthisをバインドしている
// 	*/
// 	Person.call(this, first, last);
// 	this.lang = 'JA'

// }
// //これでPersonのプロトタイプを継承できる。
// Object.setPrototypeOf(Japanease.prototype, Person.prototype);

// //これで引数を変更する事で先ほどと同様の動作をする。
// //let me = new Person('First', 'Last');
// let me = new Japanease('First', 'Last');
// console.log(me);

// me.sayJapanease();
//let me1 = new Person('Me1', 'Desu');

/*
newが一体何をしているか
まず[]のオブジェクトを生成
me1 = {}
その後にthisで始まるプロパティを全部コピーしてくる
protoのコピーはあくまで参照をコピーしてるだけなので、呼び出されるのはコンストラクタ関数
のプロトタイプ
me1 = {first, last, __proto___}
Person内でintroduceを定義すると
me1 = { first, last, introduce, __proto__}
newを用いてコンストラクタからオブジェクトを生成する事をインスタンス化という
関数が実行される順番
person.introduce();
1.person内にintoroduceがある場合：実行ここはインスタンス内に止まる
2.ない場合はprotoプロパティに探しに行く：実行ここは参照なので変更が全体に及ぶ
3.さらにない場合はObject.prototypeに探しに行く：実行
この多層にプロトタイプが形成されている状態をプロトタイプチェーンと呼ぶ
*/




//どうしても書き換えたい場合ただ推奨はされてない。
// me1.__proto__.introduce = function(){
// 	console.log('I do not want to introduce myself ')
// }
// me.introduce();
// me1.introduce();
//この2つのintrosuce関数は別々の物を読み込んでいる。それを回避するには





//javascriptでobjはプロトタイプというプロパティを持っている。このプロトタイプを使用して擬似的に
//クラス、継承を表現している

//そのほかに配列型のオブジェクトプロトタイプのプロパティは持っている
//コンストラクタ で使用しているオブジェクト
let array = new Array();


//classが使用可能になったES6から上記のコードをclassで書き直す
class Person {
	constructor(first, last) {
		this.first = first;
		this.last = last;
	}
	introduce() {
		console.log('My name is' + this.first + ' ' + this.last);
	}
}

class  Japanease extends Person {
	constructor(first, last) {
		super(first, last);
		this.lang = 'ja';
		//アンダースコアはプライベート変数で直接参照しないでという意味でset getを通して操作する
		this._age = 0;
	}
	introduce() {
		console.log('こんにちは' + this.first + ' ' + this.last);
	}
	//これを使用するとコンストラクタから直接呼び出せるでも引数をとることは可能
	static sayHello(value) {
		console.log('こんにちは' + value)
	}
	//引数を通して値を変更するageという名前で_ageに値をセットできるようにしている。
	set age(value) {
		this._age = value;
	}
	//ageで値を取得できるようにする。me.ageないとme._ageで直接の参照になる
	get age() {
		return this._age;
	}
}
//インスタンス化されてないのでthisのオブジェクトを呼んでも未定義になる
Japanease.sayHello('ぺろ');



// function createBookShop(inventory) {
// 	return {
// 		inventory: inventory,
// 		inventoryValue: function() {
// 			return this.inventory.reduce((total, book) => total + book.price, 0);
// 		},
// 		priceForTitle: function(title) {
// 			return this.inventory.find(book => book.title === title).price;
// 		}
// 	};
// }

// //省略後
// function createBookShop(inventory) {
// 	return {
// 		inventory,
// 		inventoryValue() {
// 			return this.inventory.reduce((total, book) => total + book.price, 0);
// 		},
// 		priceForTitle(title) {
// 			return this.inventory.find(book => book.title === title).price;
// 		}
// 	};
// }

// const inventory = [
// 	{ title: 'ハリーポッター', price: 1000 },
// 	{ title: 'JavaScript入門', price: 1500}
// ];

// const bookshop = createBookShop(inventory);

// console.log(bookshop.inventoryValue());
// console.log('----');
// console.log(bookshop.priceForTitle('ハリーポッター'));

// function saveFile(url, data) {
// 	// $.ajax({method: 'POST', url: url, data: data});
// 	//$.ajax({method: 'POST', url, data});
// 	//こうするとさらに読みやすくなるらしい。
// 	$.ajax({ 
// 		url, 
// 		data, 
// 		method: 'POST'
// 	});

// }

// const url = 'http://fileupload.com';
// const data = { color: 'red'};
// saveFile(url, data);


