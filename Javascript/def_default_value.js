// //es5
// function makeAjaxRequest(url, method) {
// 	if(!method) {
// 		method = 'GET'
// 	}
// 	//ajaxのリクエストをするロジックがここにあると想定
// 	return method;
// }

// //es6
// function makeAjaxRequest(url, method = 'GET') {
// 	//ajaxのリクエストをするロジックがここにあると想定
// 	return method;
// }

// makeAjaxRequest('google.com');//本当に空にしたい場合はnullを渡す、undefindはデフォルト値に置き換えられる。
// makeAjaxRequest('google.com', 'GET');

// function User(id) {
// 	this.id = id;
// }

// function generateId() {
// 	return Math.random() * 999999;
// }

// function createAdminUser(user) {
// 	user.admin = true;
// 	return user;
// }

// console.log(createAdminUser(new User(generateId())));

//よりコンパクトにする
function User(id) { //id = generateId()でさらにスッキリ可能
	this.id = id;
}

function generateId() {
	return Math.random() * 999999;
}

function createAdminUser(user = new User(generateId())) {
	user.admin = true;
	return user;
}

const user = new User(10);

console.log(user);

console.log(createAdminUser());