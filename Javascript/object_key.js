//空のオブジェクト生成
const obj1 = {}
const obj2 = new Object()

const obj = {
	name : '田中 太郎',
	age : 30,
	area : 'Tokyo'
}

const result = Object.keys(obj);

console.log(result) // ["name", "age", "area"]
