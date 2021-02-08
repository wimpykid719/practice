# webフロントのコードを保守的に組み立てるTips集
webの基礎であるhtml, css(scss)を用いて保守がしやすい構成を学んでいく上で勉強した事を記していく。


## z-indexとスタッキングコンテキスト
CSSで要素の重なりを表現する時はスタッキングコンテキスト（Stacking Context）によって決められています。
z-index53万がz-index5に負ける事がある。
それは`z-index:53万`の親要素に`z-index:1`を追加した際に起こる。イメージだと`53万`と比較するのではなくてその下にある`1`と比較している。
親要素にスタッキングコンテキストが生成されるために優先順位が変更されます。z-indexで重なりを比較するのは同一スタック上の要素です。つまり`z-idex:53万`と`z-index:1`は別のスタッキングコンテキスト上のため`53万`が`1`に負ける状況がうまれた。
`opacity: 0.99`でもコンテキストが生成される。
`display: flex`、`display: grid`でも生成される。

`zindex`がマイナスでも親スタックより後ろには行かない。

### floatとスタッキングコンテキストの関係
フロートの方が重なりは下になります。
## BEM記法について
cssの書き方見たいなんですが、初めて見るのでここでまとめて慣れていこうと思います。

コードが見やすくなり、修正しやすくなるらしい。

BEMはBlock, Element, Modifierの頭文字をとってBEMという名前になっている。

BlockとElementは__（アンダースコア2つ)でつなぐ、ElementとModifierは--(ハイフン2つ)でつなぐ。

Blockはナビゲーションは入力フォームなど部品やヘッダーやフッターなどの大きなセクションです。

Elementはその部品を構成する中身というイメージらしい。

Modifierは同じパーツではあるけど他とは状態や見た目が異なる場合に使います。

### 参照
[BEMの記法について](https://tech-dig.jp/bem-css-html/)