// var numbers = [10, 20, 30];
// var sum = 0;

// for (var i = 0; i < numbers.length; i++) {
// 	sum += numbers[i];
// }

//reduce
// numbers.reduce(function(sum, number) {
// 	return sum + number;
// 	/*このように処理が進む
// 	0 + 10
// 	10 + 20
// 	30 + 30
// 	*/
// }, 0);
//この第二引数は初期値でsum = 0とは関係ない１回目の処理終了時にsumに返却される？
//この場合は10が返却される？

// var primaryColors = [
// 	{ color: 'red' },
// 	{ color: 'yellow' },
// 	{ color: 'blue' }
// ];

// primaryColors.reduce(function(previous, primaryColor) {
// 	return previous.push(primaryColor.color);
// },[]);

/*
文字列：True
空の文字列:false
数値の「0]:falase
[0]以外の整数:true
null:false
undefined:false
*/

// function balancedParens(string) {
// 	//期待通りに動作すれば均衡を保ち0となりfalseになるが!で0でtrueにしてる
// 	return !string.split('').reduce(function(previous, char) {
// 		if (previous < 0) { return previous;}
// 		if (char === '(') { return previous + 1; }
// 		if (char === ')') { return previous - 1; }
// 	}, 0);
// }

// balancedParens(')(');

//演習
// var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

// var sum = 0;
// var totalDistance = trips.reduce(function(sum, trip) {
//     return sum + trip['distance'];
// }, 0);


var desks = [
	{ type: 'sitting' },
	{ type: 'standing' },
	{ type: 'sitting' },
	{ type: 'sitting' },
	{ type: 'standing' }
  ];
  

var deskTypes = desks.reduce(function(previous, desk) {
	if (desk['type'] === 'sitting') {
		previous.sitting++
	} else if (desk['type'] === 'standing') {
			previous.standing++
		}
	return previous;
	
}, { sitting: 0, standing: 0 });


console.log(deskTypes);

//accumulatorをaccと略して使用する事も意味は蓄える

var array = [1, 1, 2, 3, 4, 4];

function unique(array) {
	return array.reduce(function(acc, element) {
		
		//existingElementは毎回初期化されるため一つの値しか入らない。
		var existingElement = acc.find(function(target) {
			
			return target === element;
		});
		if (!existingElement) {
			acc.push(element);
		}
		return acc;
	},[]);
  
}

console.log(unique(array));
