# javascript es6 習得
野生のプログラマがjavascript習得するまでの練習で書いたコードをここに残して置きます。あとはes6に加わった記法がどんな時に使用するのか下記でまとめてみました。

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


### 参照
[forEachとmapの使い分け](https://yukimonkey.com/data/map-foreach/)

[initialValue](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)