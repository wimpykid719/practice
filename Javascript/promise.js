// promise = new Promise((resolve, reject) => {
// 	reject();
// });

//長い処理の中で使用すると
promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve();
	}, 3000);
	
});

//Ajaxリクエストにすると(実施には動作しない）上記のコードを
// promise = new Promise((resolve, reject) => {
// 	var request = new XMLHttpRequest();
// 	request.onload = () => {
// 		resolve();
// 	};
	
// });



// promise.then(() => {
// 	console.log('処理が完了しました。')
// })

//thenはいくらでも登録出来る。
// promise
// 	.then(() => {
// 		console.log('処理が完了しました。')
// 	})
// 	.then(() => {
// 		console.log('ここも実行されるよ')
// 	})

//resolveなのでcatchは実行されないがrejectが発生するとcatchが実行される
promise
	.then(() => console.log('処理が完了しました。'))
	.then(() => console.log('ここも実行されるよ'))
	.catch(() => console.log('問題発生!!'));
console.log(promise)
//pendingがpromiseの最初の状態