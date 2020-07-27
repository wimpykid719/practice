//url = "https://jsonplaceholder.typicode.com/posts/";
//404を発生させる。
//url = "https://jsonplaceholder.typicode.com/posts123456/";
url = "https://jsonplaceholder.typicode.com123456/posts/";


//これだとレスポンスのデータが返ってくる。statusとか
// fetch(url)
// 	.then(data => console.log(data));

//まだ微妙な点があるので外部ライブラリの方がいいらしい
// fetch(url)
// 	.then(response => response.json())
// 	.then(data => console.log(data));

//fetchの欠点status404の場合問題発生のlogが出てこないcatchを通らないサーバがレスポンスを返しているため
//ドメインのエラーの場合はcatchに向かう
fetch(url)
	.then(response => console.log(response))
	.catch(error => console.log('問題発生', error));
