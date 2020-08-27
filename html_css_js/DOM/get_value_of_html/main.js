//documentというオブジェクトにhtmlの情報が格納されている。
//doument.bodyでbodyタグの中身にアクセスする事ができる。headでheadタグの中身にアクセス可能

console.log(document.querySelector('#main-title'));
console.log(document.querySelector('.sub-title'));
console.log(document.querySelectorAll('.item'));
console.log(document.querySelectorAll('ul > li'));

const h1 = document.querySelector('#main-title');

console.log(h1.innerHTML);

//html情報の取得変更はこのメソッド
h1.innerHTML = 'hahahahah <span style="color: blue">BBBB</span>'

//text情報を取得変更したい場合はこのメソッド
console.log(h1.textContent)

h1.style.color = 'red'
h1.style.backgroundColor = 'gray'
console.log(h1.style.backgroundColor);

h1.classList.add('underline')
h1.classList.remove('underline')

const ul = document.querySelector('ul')
ul.style.color = 'red'

const firstli = ul.querySelector('li')
firstli.style.color = 'black'

const li = document.querySelectorAll('li')
//最初のliのみ
li[0].style.color = 'purple'

//全てに対して
li.forEach(node => node.style.color = 'purple')