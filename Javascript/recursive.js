//typescriptのコードだった。
// const factorial = (n: number): number => {
//   if (n < 2) {
// 	return 1;
//   }
//   return n * factorial(n - 1);
// };

//上記のコードをjavascriptに直すとこんな感じ

const factorial = (n) => {
	if (n < 2) {
	  return 1;
	}
	return n * factorial(n - 1);
  };

//8の場合
let n = 1;
for (let i = 1; i < 9; i++) {
	n =  n * i;
	
}

console.log(n);