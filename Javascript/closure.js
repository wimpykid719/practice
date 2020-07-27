/*
1：関数の中にさらに関数を作る
2：外側の関数のスコープ内で変数を定義する
3：関数の中で入れ子になった関数を戻り値として返す
4：内側の関数から、外側の変数を参照する
*/


function fn(n) {//コンストラクトの役割をする。
    var cnt = n;//initみたいな感じ？
    return function() { // この無名関数がクロージャ
        return ++cnt;   // スコープチェーンにより、外側のローカル変数 cnt を参照
    }
}
var f = fn(0);    // fn 関数の実行
console.log(f()); // > 1
console.log(f()); // > 2
console.log(f()); // > 3


//独立したクロージャ

// function fn(n) {
//     var cnt = n;
//     return function() {
//         return ++cnt;
//     }
// }
// var f1 = fn(0);    // fn 関数の実行 1
// var f2 = fn(10);   // fn 関数の実行 2
// console.log(f1()); // > 1
// console.log(f2()); // > 11
// console.log(f1()); // > 2
// console.log(f2()); // > 12

//クロージャの使いどころ

/*
<form name="frm" id="frm">
<input type="submit" value="注文する" />
</form>
*/
//jQueryにて
// $(function(){
//     var isClicked = false;

//     $('#frm').submit(function(){
//         if (isClicked) {
//             alert('すでにクリック済みです。');
//             return false;
//         }
//         isClicked = true;
//     });
// });