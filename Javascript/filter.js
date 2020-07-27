var products = [
	{name: 'きゅうり', type: '野菜', quantity: 0, price: 1},
	{name: 'バナナ', type: 'フルーツ', quantity: 10, price: 15},
	{name: 'セロリ', type: '野菜', quantity: 30, price: 9},
	{name: 'オレンジ', type: 'フルーツ', quantity: 3, price: 5},
];

var fillteredproducts = [];

//for文の場合
// for (var i = 0; i < products.length; i++) {
// 	if (products[i].type === 'フルーツ') {
// 		fillteredproducts.push(products[i]);
// 	}
// }

// fillteredproducts;

//filterを使用した場合

// fillteredproducts = products.filter(function(product){
// 	return product.type === 'フルーツ';
// });

//種類が野菜で、量が0個より多くて、値段が10より小さい

fillteredproducts = products.filter(function(product){
	return product.type === '野菜' 
	&& product.quantity > 0 
	&& product.price < 10;
});

console.log(fillteredproducts);

var post = { id: 4, title: '初めての投稿'};
var comments = [
	{ postId: 4, content: 'いい記事ですね!'},
	{ postId: 3, content: '勉強になりました'},
	{ postId: 4, content: 'なるほど'}
];

function commentsForPost(post, comments) {
	return comments.filter(function(comment) {
		return comment.postId === post.id;
	});
}

console.log(commentsForPost(post, comments));

//演習問題

var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = [];

filteredNumbers = numbers.filter(function(number) {
	return number > 50;
});

console.log(filteredNumbers);//セミコロンは文の終末を意味する。

var users = [
	{ id: 1, admin: true },  
	{ id: 2, admin: false },
	{ id: 3, admin: false },
	{ id: 4, admin: false },
	{ id: 5, admin: true },
];

var filteredUsers = [];

filteredUsers = users.filter(function(user) {
	return user['admin'] ===  true;
});

console.log(filteredUsers);

//課題例 reject is not defined
// var numbers = [10, 20, 30];
// var lessThanFifteen = reject(numbers, function(number){
//     return number > 15;
// });

// console.log(lessThanFifteen);

//応用問題
var numbers = [10, 20, 30];

function reject(numbers) {
    return numbers.filter(function(number){
        return number < 15;
    });
}

console.log(reject(numbers));
