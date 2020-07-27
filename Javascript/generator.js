//geberatorとは何回も入ったりでたりできる関数
//何回も入ったりでたり出来る

function* numbers() {
	yield;//コメントアウトすると最初から{"done":true}になる。
}

const gen = numbers();
console.log(gen.next());
console.log(gen.next());


//console.log(numbers());

function* shopping() {
	//歩道
	//歩道を歩いてお店にいく
	//お店に到着したのでお金を持ってお店に入る
	const stuffFromStore =	yield 'お金';//１回目のnextはここで止まる
	const cleanClothes = yield '汚れた服';

	//家に歩いて帰る
	return [stuffFromStore, cleanClothes];//２回目は１回目の戻り値を持ってスタートする。
	
}
//お店の外の世界
const gen1 = shopping();
gen1.next();//家から歩道にでる。
gen1.next('日用品');//お店で買い物して日用品を持って歩道にでる。
gen1.next('綺麗な服')

function* colors() {
	yield 'red';
	yield 'blue';
	yield 'green';
}

const gen2  = colors();
console.log(gen2.next());
console.log(gen2.next());
console.log(gen2.next());
console.log(gen2.next());

//generatorによって配列以外の自身で作成した関数もイテレートすることが出来るようになった。
const myColors = [];
for (let color of colors()) {
	myColors.push(color);
}

console.log(myColors);

//オブジェクトの中身もイテレート出来る。

// const testingTeam = {
// 	lead: '典子',
// 	tester: 'たか'
// }

// const engineeringTeam = {
// 	testingTeam,//testingTeam: testingTeam,
// 	size: 3,
// 	department: '開発部',
// 	lead: '太郎',
// 	manager: '花子',
// 	engineer: '次郎'
// };

// function* TeamIterator(team) {
// 	yield team.lead;
// 	yield team.manager;
// 	yield team.engineer;
// 	//yield team.testingTeam.lead;これでチームを追加出来るが再利用性が少ない
// 	const testingTeamGenerator = TestingTeamIterator(team.testingTeam);
// 	yield* testingTeamGenerator;
// }

// function* TestingTeamIterator(team) {
// 	yield team.lead;
// 	yield team.tester;
// }

// const names = [];
// for(let name of TeamIterator(engineeringTeam)) {
// 	names.push(name);
// }

// console.log(names);


//さらにコンパクトにするためにオブジェクトの中にgeneratorを書いてゆく
const testingTeam = {
	lead: '典子',
	tester: 'たか',
	//動的プロパティ
	[Symbol.iterator]: function* () {
		yield this.lead;
		yield this.tester;
	}
}

//動的プロパティとはE6の機能
const hoge = {
	key: 'value',
	[1 + 2]: 'three'//3: 'three',となる
}



const engineeringTeam = {
	testingTeam,//testingTeam: testingTeam,
	size: 3,
	department: '開発部',
	lead: '太郎',
	manager: '花子',
	engineer: '次郎',
	[Symbol.iterator]: function* () {
		yield this.lead;
		yield this.manager;
		yield this.engineer;
		yield* this.testingTeam;
	}
};





const names = [];
//for ofはシンボルドットイテレーターの定義を見に行く配列は最初からシンボルドットイテレータを持っている。
//なので自身で作成した場合はシンボル.イテレータを記述する必要がある。
for(let name of engineeringTeam) {
	names.push(name);
}

console.log(names);


//コメントのツリー構造を例にイテレータを使用してみよう

class Comment {
	constructor(content, children) {
		this.content = content;
		this.children = children;
	}

	//クラスでシンボル.イテレータの記述方法
	*[Symbol.iterator]() {
		yield this.content;

		// generatorの中ではmap forEach使ってコレクションをイテレート使用することはできない。
		//for of のみ
		for (let child of this.children){
			yield* child;
		
		}
	}
}
const children2 = [
	new Comment('どうなのそれは',[]),
	new Comment('ちょっとね',[]),
	new Comment('世間は認めてくれないですよ',[]),
]

const children = [
	//ここで再帰処理になってる
	new Comment('賛成', children2),
	new Comment('反対', children2),
	new Comment('うーん', children2),
];

const tree = new Comment('非常に良い記事です', children);
const values = [];
for (let value of tree) {
	values.push(value);
}
console.log(values);
