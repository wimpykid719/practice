var computers = [
	{ name: 'Apple', ram: 24 },
	{ name: 'compaq', ram: 4 },
	{ name: 'Acer', ram: 32 }
];

// 16GB romが必要なソフト

//全てで動かせるフラグ
var allComputersCanRun = true;

//どれかでは動かせるフラグ
var someComputersCanRun = false;

for (var i = 0; i < computers.length; i++) {
	var computer = computers[i];

	if (computer.ram < 16) {
		allComputersCanRun = false;
	} else {
		someComputersCanRun = true;
	}
}

//every使用ケース 一つでもfalseがある場合はfalse
computers.every(function(computer) {
	return computer.ram >= 16;
});

//someのケース 一つでもtrueがあればtrue
computers.some(function(computer) {
	return computer.ram >= 16;
});

var names = [
	'けん',
	'はなこ',
	'そういちろう'
];

var what = names.every(function(name) {
	return name.length >= 3;
});

console.log(what);//false

var what2 = names.some(function(name) {
	return name.length >= 3;
});

console.log(what2);//true
 
function Field(value) {
	this.value = value;
}

Field.prototype.validate = function() {
	return this.value.length > 0;
}

var username = new Field('my_username');
var password = new Field('my_password');
var birthday = new Field('2010/10/10');

var fields = [
	username,
	password,
	birthday
];

var formIsvaild = fields.every(function(field) {
	return field.validate();
});

if (formIsvaild) {
	//サーバにリクエストを投げる
} else {
	//エラーを表示する。
}

username.validate() && password.validate()

//演習

var users = [
	{ id: 21, hasSubmitted: true },
	{ id: 62, hasSubmitted: false },
	{ id: 4, hasSubmitted: true }
  ];
  
  var hasSubmitted = users.every(function(user) {
	  return user['hasSubmitted']
  });

  var requests = [
	{ url: '/photos', status: 'complete' },
	{ url: '/albums', status: 'pending' },
	{ url: '/users', status: 'failed' }
  ];
  
  var inProgress = requests.some(function(request) {
	  return request['status'] === 'pending';
  });