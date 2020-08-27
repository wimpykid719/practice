#DOM（Document Object Model）とは
- HTMLをJSから操作できるようにしたインターフェイス
- HTMLの情報を取得・変更できる。

これでbodyタグの中身を取得できる。

    document.body

同様にheadの中身も取得する事ができる。

    document.head

より詳細に検索するなら

    document.querySelector('#main-title')

など適用されたcssで検索をかける事ができる。

昔の書き方

    document.getElementById('main-title')

昔はタグごとや要素ごとでメソッドを変えて書く必要があったため大変だった。

今はクラスを取得したいなら

    document.querySelector('.main-title')

とクラス要素に変更するだけで取得できるようになった。