function hello(callback, lastname) {
    console.log('hello ' + callback(lastname));
}

/*
すでにlastnameに'Mafia'の文字列が格納されているのでそれを
使用して関数を実行する。
*/
hello(function(name) {
    return 'Code' + name;
}, 'Mafia');

function doSomething(a, b, callback) {
    const result = callback(a, b);
    console.log(result);
}

function multiply(a, b) {
    return a * b;
}

function plus(a, b) {
    return a + b;
}

doSomething(2, 2, multiply);
doSomething(2, 9, plus);