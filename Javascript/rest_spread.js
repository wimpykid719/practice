function addNumbers(...numbers) {
	return numbers.reduce((sum, number) => {
		return sum + number;
	}, 0);
}

console.log(addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

const defaultColors = ['赤', '緑'];
const userFavoriteColors = ['オレンジ', '黄'];
const fallColors = ['茶', '紅葉'];

//concatを使用する事で配列は合体出来る。
// console.log(defaultColors.concat(userFavoriteColors));

//これでもconcatを同じ意味になる。
console.log(['青',...fallColors, '紫', ...defaultColors, ...userFavoriteColors]);

//restとspread演算子を使用した例

function validateShoppinglist(...items) {
	if (items.indexOf('牛乳') < 0) {
		return ['牛乳', ...items];
	}
	return items;
}

console.log(validateShoppinglist('オレンジ', 'パン', '牛乳'));

const MathLibrary = {
	calculateProduct(...rest) {
		return this.multiply(...rest);
	},
	multiply(a, b) {
		return a * b;
	}
};

//a,bにしか引数として取られないので追加してもエラーは出ないそのまま。
console.log(MathLibrary.calculateProduct(2, 3, 5));


//演習問題
function product(...numbers) {
 
  
	return numbers.reduce(function(acc, number) {
	  return acc * number;
	}, 1)
  }

console.log(product(1, 4, 5, 6))

function unshift(array, ...numbers) {
	return [ ...numbers, ...array];
}