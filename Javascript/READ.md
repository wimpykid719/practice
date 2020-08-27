# javascript es6 習得
野生のプログラマがjavascript習得するまでの練習で書いたコードをここに残して置きます。あとはes6に加わった記法がどんな時に使用するのか下記でまとめてみました。

## JSについて
変数の大文字、小文字は区別する。

## 配列

    const arry = [1, 2, 3, 4, 5];

constに配列を代入しても中身の値は変更する事ができる。新しい配列を代入する事はできない。オブジェクトも同様。javascriptでは数字、文字列を同じ配列に格納できる。他の言語で出来ない物もある。

## オブジェクト
オブジェクトの値を取得するにはドット記法、ブラケット記法がある。

### Personというオブジェクトに対して
ドット記法

    person.name;

ブラケット記法

    person['name'];

使い分けは変数を使用したい場合はブラケット記法を使用する。

## for文

    const arry = [1, 2, 3, 4, 5, 6];

    for(let i = 0; i < arry.length; i = i + 1) {
        console.log(i);
    }

配列の内容文ループ処理をする。`i = i + 1`この部分を`i++`で書き換える事ができる。

    const arry = [1, 2, 3, 4, 5, 6];

    for(let i in arry) {
        console.log(arry[i]);
    }

最初のfor文よりもコンパクトに記述する事ができる。`i`には配列の値が渡っているわけではない。`interger`の頭文字だと思われる。

    const arry = [1, 2, 3, 4, 5, 6];

    for(let v of arry) {
        console.log(v);
    }

この場合は`v`には配列の値が代入されている。`value`の頭文字

## if文

    if(1 === '1') {
        処理
    }

上記の条件では一致しないので処理は実行されない。`===`はデータの型まで比較するため、一致しないとなる。`==`の場合はデータの型を合わせた後で比較するので処理が実行される。
型を含めた比較で否定で処理を走らせたい場合は`!==`とする。型まで含めない場合は`!=`とする。

## アロー関数

関数

    const hello = function(name = 'tom') {
        console.log('hello' + name);
    }

これをアロー関数に変えていく

    const hello = (name = 'tom') => console.log('hello' + name)
    //デフォルト値がない場合はさらに短くできる。
    const hello = name => console.log('hello' + name)

引数が2つの場合も`()`が必要なので注意、処理が一行でない場合は`{}`が必要なのでそこも注意が必要。そして一行の場合で`return`の戻り値がある場合は`return`を使用しなくても値がhelloに戻す事ができる。

## コールバック関数

引数に渡す関数のことを指す。

## thisについて
オブジェクトを参照するキーワード
この変数は呼ばれたタイミングで値が変わってくるので、どこで呼ばれるのかに注意して見ていく必要がある。直近で囲まれたオブジェクトを参照する。

    const ta = new TextAnimation('.animate-title');
    //クラスの外で行うとwindowオブジェクト（ブラウザのグローバルオブジェクト）が取得される
    //これはJSがブラウザ内で実行された時に限ると思う。
    console.log(this);


    class TextAnimation {
        constructor(el) {
            //TextAnimationというオブジェクトが取得できる。
            console.log(this);
            this.el = 'hello'
        }
        animate() {
            setTimeout(function () {
                //windowオブジェクトが取得される。
                //ここだと直近のオブジェクトはsetTimeoutの持つ
                //windowオブジェクトになる。
                console.log(this);
                //参照できないとエラーになる。
                console.log(this.el);
            })
        }
    }

**thisの参照を解決する方法**

### bindの使用


    class TextAnimation {
        constructor(el) {
            //TextAnimationというオブジェクトが取得できる。
            console.log(this);
            this.el = 'hello'
        }
        animate() {
            setTimeout(function () {
                //windowオブジェクトが取得される。
                //ここだと直近のオブジェクトはsetTimeoutの持つ
                //windowオブジェクトになる。
                console.log(this);
                //参照できないとエラーになる。
                console.log(this.el);
            }.bind(this));
        }
    }

### 引数を用いる

    class TextAnimation {
        constructor(el) {
            //TextAnimationというオブジェクトが取得できる。
            console.log(this);
            this.el = 'hello'
        }
        animate() {
            //ここでthisの直近参照を代入する事で止める
            const _that = this

            setTimeout(function (_that) {
                //windowオブジェクトが取得される。
                //ここだと直近のオブジェクトはsetTimeoutの持つ
                //windowオブジェクトになる。
                console.log(this);
                //参照できないとエラーになる。
                console.log(_that.el);
            })
        }
    }

もう一つ不思議な記法がある。

    btn.addEventLinstener('click', ta.animate.bind(ta));

クラスメソッドをコールバック関数として渡すと関数として認識するためオブジェクトの`ta`は無視される。
そのため`ta`を`bind`しないとメソッドないの`this`は直近の`btn`になる。
ここを詳しく見るとややこしくなるらしい。

## forEach
配列があってそれを作成した関数に一個ずつ、渡してイテレート（各要素に対して繰り返し処理を行う）する。`配列.forEach(関数);`

## map
forEachとmapの動作はほぼ一緒であるがmapは値を配列して返してくれる。forEachの場合は空の要素を用意しそこにpushする必要がある。

## filter
これも配列を一個、一個渡すのは同じで、mapと同様に配列を返す、`return 条件文（ifなしで）`で条件を絞り込んだ物だけ配列に入れるというような使い方が可能

## find
これはfilterと似ているが条件に最初に一致したものだけを返して処理を終了してしまう。

## every
これも配列を渡して一つ一つ条件に一致するかみる。そして全て一致して`true`の場合に`true`を返す。なので返り値は`trueかfalse`となる。

## some
これは逆に一つでも条件が一致する場合は`true`を返す。

## reduce
`配列.reduce(function(累積値, 要素) { },[, initialValue])`この最後の引数が他のforEach等にはないからややこしい。何か値を取り出してそれを合体したい場合に使用するといい気がする。それならforEachの方が簡単に出来そうだが...

>callback の最初の呼び出しの最初の引数として使用する値。 initialValue が与えられなかった場合、配列の最初の要素がアキュムレーターの初期値として使用され、 currentValue としてスキップされます。空の配列に対して reduce() を呼び出した際、 initialValue が指定されていないと TypeError が発生します。

この後ろの引数が最初の処理で初期値として使用されるという事なぜこの使用にしたんだろう。野生のプログラマにはわからない。

## 各種関数
HTMLを操作したりする関数を紹介する。

### element.outerHTML

これは`.querySelector`などで取得した要素のオブジェクトから値を文字列で取り出して操作しやすくしてくれる。逆に要素に対して代入する事もできる。
そのためHTMLファイルの変更を用意にしてくれる。


### 参照
[forEachとmapの使い分け](https://yukimonkey.com/data/map-foreach/)
[initialValue](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
[outerHTML](https://developer.mozilla.org/ja/docs/Web/API/Element/outerHTML)