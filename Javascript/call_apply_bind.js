
//greet(id, id2)とする事で引数も取れる。
//greet.call(obj, 1,2,3);とあった時
//argumentsという変数に自動で格納される。このままでは使用しにくいので配列に変換する。
//let slicedArray = [].slice.call(arguments);とすると配列になる。(arguments, 0, 1)とすると最初の配列だけ取れる。
function greet() {
	
	let hi = `Hi, ${this.name}`;
	console.log(hi);
}

let obj = { name: "Tom" };
/*
関数のthisは関数を定義した時点では決まってなくて
呼び出される時に決まる。thisはオブジェクトでcallを
使ってこのthisをobjにしてと頼んでいる。
*/
//引数をとる場合はgreet.call(obj, id, id2)
greet.call(obj);
//applyを使用する場合は引数は配列にすると分解してくれる。
greet.apply(obj,[1,2,3])

//thisを上の関数のthisに紐付ける
let myObj = {
	id: 42,
	print() {
		setTimeout(function () {
			console.log(this.id);

		}.bind(this), 100);
	}
}

myObj.print();