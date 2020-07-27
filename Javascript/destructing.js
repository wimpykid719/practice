//E5
var expence = {
	type: '交通費',
	amount: '4500 JPY'
};

// var type = expence.type;
// var amount = expence.amount;

//E6

// const { type } = expence;
// const { amount } = expence;

//const { type, amount } = expence;
// console.log(type, amount);
// keyで指定してあげると呼び出す時の値を変更することが出来る。
const { type:myType, amount } = expence;//ここにプロパティに存在しない値を入れてもundefindになるだけでエラーは出ない。



console.log(myType, amount);

var savedFile = {
	expension: 'jpg',
	name: 'profile',
	size: 14040
}

// function fileSummary(file) {
// 	//毎回ファイルを記入するのはやぼだということで
// 	return `${file.name}.${file.expension}の容量は${file.size}です`
// }

function fileSummary({ name, expension, size}, { username }) {
	//短くスッキリ出来る
	return `${username}:${name}.${expension}の容量は${size}です`
}
//関数の第二引数でも使用することができる
console.log(fileSummary(savedFile, { username: 'ken' }));

// const companies = [
// 	'Google',
// 	'Facebook',
// 	'Uber'
// ];
//[大カッコ]は配列から要素を抽出、{中カッコ}はそのオブジェクトのプロパティから要素を抽出
//配列の要素数以上name4を書くとundefindとなる。
// const [ name, name2, name3 ] = companies;
// const firstCompany = companies[0];
//nameには一つだけ特定の要素を入れて残りには別で取っておきたい場合は以下のようにする。
// const [name, ...rest] = companies;

// console.log(name);
// console.log(rest);

//あんまり使用されていない

const companies = [
	{ name: 'Google', place: 'マウンテンビュー' },
	{ name: 'Facebook', place: 'メンロパーク' },
	{ name: 'Uber', place: 'サンフランシスコ' }
];

//これは従来のやり方
//const location = companies[0].location;

//分割代入を使用した方法
//配列1個目のlocationにアクセスする。
// const [first, {place}] = companies;

// console.log(place);

const Google = {
	place: ['マウンテンビュー', 'ニューヨーク', 'ロンドン']
};

// const { place } = Google;

// const [ first ] = place;

// console.log(first);

//上記をさらに短く
const {place: [first]} = Google;
console.log(first);

//分割代入の恩恵1

//プロパティ抽出なので順番を気にしなくて良い
//変数のままだと順番を覚えていないといけない。

function signup( {username, password, email, birthday, city} ) {
	//ここでユーザを作成してDBに保存する
}

const user = {
	username: 'myusername',
	password: 'mypassword',
	email: 'myemail@example.com',
	birthday: '1990/1/1',
	city: '東京'
};

signup(user);

signup('myusername', 'mypassword', 'myemail@example.com', '1990/1/1', '東京');

//分割代入の恩恵2

//ある座標に関するapiを叩いて受け取るデータ
const points = [
	[4, 5],
	[10, 1],
	[0, 40]
];

//そのデータからグラフを作成する。ライブラリがあるが、受け取るデータが下記でないと動作しない。
//つまり整形が必要
[
	{ x: 4, y: 5},
	{ x: 10, y: 1 },
	{ x: 0, y: 40 }
]

//変数x,yに代入する
points.map(point => {
	const x = point[0];
	const y = point[1];
});

//分割代入を使用すると
points.map(point => {
	const [x, y] = point;

});

//さらに
points.map(([x, y]) => {
	return { x: x, y: y};

});

//さらにオブジェクトリテラルとキーの名前が一緒なので省略します。
let result = points.map(([x, y]) => {
	return { x, y };

});

console.log(result);

//演習問題

const profile = {
	title: 'エンジニア',
	department: '開発部'
  };
  
  function isEngineer({ title, department }) {
	return title === 'エンジニア' && department === '開発部';
  }

  const classes = [
	[ '化学', '1時限目', '鈴木先生' ],
	[ '物理', '2時限目', '佐藤先生'],
	[ '数学', '3時限目', '木村先生' ]
  ];
  
  const classesAsObject = classes.map(([subject, time, teacher]) => {
	  return {subject, time, teacher }
  });

  //最終問題

// const numbers = [1, 2, 3];

// function double(numbers) {
// 	let doubled = []
// 	for (let i = 0; i < numbers.length; i++) {
// 		console.log(numbers[i]);
// 		doubled.push(numbers[i] * 2);
// 	}
// 	return doubled;
	
// }
// let result2 = double(numbers);
// console.log(result2);

//回答
const numbers = [1,2,3];//0が入ってたら終わりやけど
 
function double([ head, ...rest ]) {
	console.log(head);
	if (!head) { return []; }//ここのreturnはより下の階層return [ 2 * head, ...double(rest) ];よりも

	return [ 2 * head, ...double(rest) ];//rest[2, 3]がhead, ...restに分割されて入る
	// [2 * head = 1, 2 * head = 2, 2 * head = 3, ここにこずreturn 2 * head = undefinded = []]
	//最後はheadに[]のリストが入りif文で空のリストが返されるその際spread演算子で空リスト消えるので[2, 4, 6]となる。
}

console.log(double(numbers));

let e = [3];

function test([first, ...later]) {
	console.log(first);
	console.log(...later);//消えてなくなる。laterのみは空のリスト
}

test(e);