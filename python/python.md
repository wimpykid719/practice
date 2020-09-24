# Python分からない所
学習する過程でつまづいた所を残して行きます。

## Enum型
普通の変数見たいで無い変数を呼び出した際にエラー処理がプログラムで制御出来るのでそのまま処理を続けられる。

## format()
これは文字列の中で変数を展開する時に使用する。

    name = 'david'
    great ='hello {}'.format(name)
    print(great)
    結果：hello david

## join()

これを使用すると文字列のリストを一つの文字列に連結できる。

    l = ['aaa', 'bbb', 'ccc']

    s = ''.join(l)
    print(s)
    # aaabbbccc

    s = ','.join(l)
    print(s)
    # aaa,bbb,ccc

    s = '-'.join(l)
    print(s)
    # aaa-bbb-ccc

    s = '\n'.join(l)
    print(s)
    # aaa
    # bbb
    # ccc


## try-except
エラーと例外処理を追加する際に使用する。
例外が発生するとプログラムが止まってしまうので、それを回避するために使用する。

## update()

辞書型の変数を扱う時に使用する。複数の辞書オブジェクトを連結（結合）したり、複数の要素を一気に追加する事ができる。

## sys.argv

>コマンドライン引数とは、コンピュータのコマンド入力画面(コマンドライン)からプログラムを起動する際に指定するパラメータのことです。
>プログラムの実行時にオプションや処理対象のデータなどを与えるために利用されます。

コマンドプロンプトで引数を一緒に入力する事でそれを変数に格納してプログラムに渡す事ができる。

    import sys

    for x in sys.argv:
        print(x)

これに対してコマンドラインで

    $ python argv.py foo bar

    #実行結果
    argv.py
    foo
    bar

こんな感じに引数がリストで格納される。


## unescape()
スクレイピングした時とかに文字列が`'&#12354;'`になっている事があってそれを回避するために使用する。
unescape()はhtmlのパッケージ含まれている。

    import html
    html.unescape('&#12354;')

    実行結果：'あ'

htmlなんて変数で付けそうだからややこしいね。


## pop()とは
配列の先頭の値を削除する。

    fruits = ['apple', 'banana', 'lemon', 'orange']
    fruits.pop(0)

これで先頭の`'apple'`が削除される。

## @classmesthodとは

毎回調べて理解した気になって忘れている。
元々のクラスか何かに機能を追加する際に用いるんだったと思う。

>クラスにくっついている関数のようなもので、インタンス化していないクラスのものから呼び出せます。 

    class A:
    @classmethod
    def my_cls_method(cls):
        return "Hello"
    
    A.my_cls_method()  # "Hello" が返ります

こんな感じでインスタンス化してないクラスから関数を実行できる。ク
ラスに書かれたメソッドと大きく違うのはここ！

本来クラスを使用するなら`classA = A()`のような事が必要だがクラスメソッドを使用する際は必要ない。javascriptのオブジェクトに書かれた関数みたいな感じなのかな🤔

## 各種モジュールについて
ここでは知らなかったモジュールで調べたものについて紹介します。

### codecs()

pythonの標準モジュールで任意の文字コードでファイルを開く事ができるらしい。

    codecs.open(filename, mode='r', encoding=None, option)

最後の`option`では`ignore`を指定する事で自動変換でエラーが発生するものなどを無視する事ができる詳しくは分からないので勉強する必要がありそう。

### csv.reader()

これも標準モジュールでcsvファイルを使用する時に使用される

    csv.reader(file, delimiter='\t', quotechar='"')

これも色々引数が取れて`delimiter`は区切る箇所を指定する。`\t`は水平タブを表す特殊文字である。
ここで特殊文字などによる改行をおさらいしてみる。

| エスケープシーケンス | 意味 |
| :---: | :---: |
| \a | ベル |
| \b | バックスペース |
| \f | 改ページ |
| \n | 改行 |
| \r | キャリッジリターン |
| \t | 水平タブ |
| \v | 垂直タブ |
| \\ | 「バックスラッシュ」そのもの |
| \" | ダブルクォーテーション |
| \' | シングルクォーテーション |
| \nnn | 8進数nnnでASCIIコードの文字を指定 |
| \xhh | 16進数nnでASCIIコードの文字を指定 |
| \uhhhh | 16進数hhhhでUnicodeの文字を指定 |
| \0 | NULL |


次にquotecharについて
>quotechar=‘”‘は、特別な値を含むフィールドを囲むための文字列を一文字で指定します。“が標準的なquotecharです。具体的に囲む際は、“囲む対象の文字“のようにして使用します。
分からない。

### 参照
[Enum型](https://techacademy.jp/magazine/33675)
[format関数](https://www.headboost.jp/python-strings-variables/)
[format関数、時間無い向け](https://note.nkmk.me/python-f-strings/)
[クラスメソッドについて](https://blog.pyq.jp/entry/Python_kaiketsu_190205)
[codecsのignoreについて](https://qiita.com/butada/items/33db39ced989c2ebf644)
[特殊文字について](https://techacademy.jp/magazine/18915)
[quotechar](https://techacademy.jp/magazine/15638)
[sys.argv](https://techacademy.jp/magazine/20629)
[join()](https://note.nkmk.me/python-string-concat/)