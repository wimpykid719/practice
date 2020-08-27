const obj = {
	first_name: 'Mafia',
	last_name: 'Code',
	printFullName: function() {
		console.log('hello')
	}
}

class MyObj {
	constructor() {
		this.first_name = 'Mafia_from_class';
		this.last_name = 'Code_from_class';
	}

	printFullName() {
		console.log('hello_from_class');
	}
}

obj.printFullName();

const obj2 = new MyObj();
obj2.printFullName();