// 数字の配列を用意する
var numbers = [1, 2, 3, 4, 5];

//合計を保持する変数を用意する
var sum = 0;

function adder(number) {
	sum += number;
}

numbers.forEach(adder);
//numbers.forEach(adder())これは違うらしい

//配列の一つ一つの数字を合計に足す（無名関数を用いる婆愛）
// numbers.forEach(function(number){
// 	sum += number;
// });

//合計を表示する
console.log(sum);

//演習問題

// function handlePosts() {
//     var posts = [
//       { id: 23, title: 'JSニュース' },
//       { id: 52, title: 'リファクター・シティ' },
//       { id: 105, title: 'Rubyの良いところ' }
//     ];
	
//     posts.forEach(savePost);
// }

var images = [
	{ height: 10, width: 30 },
	{ height: 20, width: 90 },
	{ height: 54, width: 32 }
];
var areas = [];
console.log(images[0].height);

function multiplication(image) {
	var area = image['height'] * image['width'];
	areas.push(area);
}

images.forEach(multiplication);

console.log(areas);