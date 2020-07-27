var scope = "Global";

function getValue() {
    console.log(scope);  // > undefined
    var scope = "Local";
    return scope;
}

console.log(getValue()); // > "Local" (ローカル変数を参照)
console.log(scope);      // > "Global" (グローバル変数を参照)

//内部で勝手に下記のような動作をする。

function getValue() {
    var scope;           // ホイスティングで関数宣言だけを先頭に移動
    console.log(scope);  // > undefined
    scope = "Local";     // 代入は元の位置にそのまま残る
    return scope;
}