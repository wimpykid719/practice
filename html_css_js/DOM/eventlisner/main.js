const btn = document.querySelector('#btn');
const h1 = document.querySelector('h1');
// btn.addEventListener('click', function() {
//     alert('hello');
// });

//こちらの方が再利用がきく
const hello = function() {
    this.style.color = 'red';
};
const changebg = function() {
    h1.style.backgroundColor = 'green';
};

//これでもいいよこっちの方がpythonの記法に近い
// function hello() {
//     alert('hello');
// };

// btn.addEventListener('click', hello);
// btn.addEventListener('click', changebg);
//btn.removeEventListener('click', hello);

//btn.addEventListener('mouseenter', hello);

//もう一つ似方法でonclickがあるがこれは複数の要素変更はできない。
btn.onclick = hello;
btn.onclick = changebg;//helloは上書きされるため実行されない。