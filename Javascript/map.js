var numbers= [1, 2, 3];
var doubledNumbers = [];//元々ある配列を変更するのは避けるミューテイトしない

//for文を用いる場合
// for (var i = 0; i < numbers.length; i++) {
// 	doubledNumbers.push(numbers[i] * 2);
// }

var doubled = numbers.map(function(number){
	return number * 2;
});

console.log(doubled);

var cars = [
	{type: '軽自動車', price: '安い'},
	{type: '高級車', price: '高い'},
];

var prices = cars.map(function(car){
	return car.price;
});

console.log(prices);

//演習問題
var trips = [
	{ distance: 34, time: 10 },
	{ distance: 90, time: 50 },
	{ distance: 59, time: 25 }
];

var speeds = trips.map(function(trip){
	return trip.distance/trip.time
});

speeds;

//応用問題
// function pluck(array, property) {
// 	// pluck関
// 	var colorObjrcts = array;
// 	var color = property;
// 	var onlynames = colorObjects.map(function(colorObject){
// 		return colorObject.color
// 	});
// 	return onlynames
// }

function pluck(array, property) {
	// pluck関
	var onlynames = array.map(function(colorObject){
		return colorObject[property]
	});
	return onlynames
}

var colorObjects = [{ color: '赤' }, { color: '青' }, { color: '黄色' }];

var colorNames = pluck(colorObjects, 'color');

console.log(colorNames);