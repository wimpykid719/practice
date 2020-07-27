var a = "Global";
var b = "Global";

function outer() {
  var a = "Outer";

  function inner() {
    var c = "Inner";

    console.log(c); // > "Inner" (自身の Call Obj で発見)
    console.log(b); // > "Global" (inner なし → outer なし → Global Obj で発見)
    console.log(a); // > "Outer" (inner なし → outer の Call Obj で発見)
  }
  inner(); // 呼び出し
}
outer();   // 呼び出し

window.me = 'global';

const outer = function() {
    let me = 'outer'; //レキシカルスコープ

    return {
        me: 'inner',
        say: () => {
            console.log(this.me);
        }
    }
}
outer().say();

//実行時のouterはこうなってるだからme: 'inner'はアローファンクションに入ってる。
// {
//     me: 'inner',
//     say: () => {
//         console.log(this.me);
//     }
// }.say();