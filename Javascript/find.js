// var users = [
// 	{name: '太郎'},
// 	{name: '次郎'},
// 	{name: '三郎'}
// ];

// var user;

// for (var i = 0; i < users.length; i++) {
// 	if (users[i].name === '次郎') {
// 		user = users[i];
// 		break
// 	}
// }

//最初に見つけた次郎だけ返す
// user = users.find(function(user) {
// 	return user.name === '次郎';
// })


// console.log(user);

// function Car(model) {
// 	this.model = model;
// }

// var cars = [
// 	new Car('プリウス'),
// 	new Car('ノート'),
// 	new Car('アクア')
// ];

// car = cars.find(function(car) {
// 	return car.model === 'アクア';
// });

// console.log(car);

// var posts = [
// 	{ id: 1, title: '古い投稿' },
// 	{ id: 2, title: '新しい投稿' }
// ];

// var comment = { postId: 2, content: 'いいね' };

// function postForComment(posts, comment) {
// 	return posts.find(function(post){
// 		return post.id === comment.postId;
// 	});
// }

// var good = postForComment(posts, comment);

// console.log(good);

// //問題

// var users = [
// 	{ id: 1, admin: false },
// 	{ id: 2, admin: false },
// 	{ id: 3, admin: true }
//   ];
  
//   var admin = users.find(function(user) {
// 	  return user['admin'];
//   });
  
//   console.log(admin);

//   var accounts = [
// 	{ balance: -10 },
// 	{ balance: 12 },
// 	{ balance: 0 }
//   ];
  
//   var account = accounts.find(function(account) {
// 	  return account['balance'] === 12;
//   });

//演習応用問題

var ladders = [
	{ id: 1, height: 20 },
	{ id: 3, height: 25 }
];

function findWhere(array, criteria) {
	var property = Object.keys(criteria)[0]
	return array.find(function(object) {
		return object[property] === criteria[property];
	})
  
}

console.log(findWhere(ladders, { height: 25}));