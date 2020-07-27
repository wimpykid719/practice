function getMessage() {
	const year = new Date().getFullYear();
	//return "今年は" + year + "年です。"
	return `今年は${year}年です。`;
}

console.log(getMessage());

const device_id = 4;
const guid = 20;
const username = "hello";

// const data = '{"device_id":"'+ device_id +'", "guid":"' + guid + '", "username":"' + username + '","}';
const data = `{"device_id":"${device_id} ", "guid":"${guid}",  "username":"${username}","}`;
console.log(data);

//問題

const number = 10;

function doubleMessage(number) {
	return `${number}を2倍すると${2 * number}になります`;
}
console.log(doubleMessage(number));
