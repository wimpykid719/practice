# 正規表現
苦手意識の強い正規表現をケースごとに解決していこうと思う。

## ケース1

    <a[\s\S]*?class="product-card__image-link"[\s\S]*?data-index=".*?"[\s\S]*?href="(.*?)"

おそらく`[\s\S]`はスペースの事を指していると思われる。`*?`はメタ文字で直前にスペースが一個以上あっても検索する対象となる。classの中身が追加されて、先ほどと同様にスペースが入ってdata-index属性に入る文字列が検索対象となる。同様にスペースでhref属性に入る文字列が何でも検索対象となる。

正解

上記の`[\S]`は空白以外全ての文字をさす事で`[\s]`と組み合わせると全ての文字でマッチするという意味になる。

>- アンカータグ `<a>` で、かつ
>- `class="product-card__image-link" と data-index=` を含むもの
>- ただしその他の属性も含まれる可能性があるので、曖昧な箇所には `[\s\S]` や `.*?` を当てている

この`"(.*?)"`の`()`はこの部分に含まれた文字列を後で取り出すために囲っているらしい。

下記のような文字列がマッチする対象になる。

    <!-- 思惑通り -->
    <a class="product-card__image-link" data-index="abcd" href="/path/to/dir"

    <!-- aの後はスペースでなくてもよい -->
    <astronaut class="product-card__image-link"data-index="abcd" href="/path/to/dir"

    <a  hogehoge class="product-card__image-link"  hogehoge data-index="" hogehoge   href="/path/to/dir"

    <!-- 改行があってもよい -->
    <a  
    class="product-card__image-link" 
    data-index="abcd" 
    href="/path/to/dir"

### 参照
[ケース1](https://ja.stackoverflow.com/questions/69567/%e6%ad%a3%e8%a6%8f%e8%a1%a8%e7%8f%be%e3%81%ae-s-s-%e3%81%ab%e3%81%a4%e3%81%84%e3%81%a6/69589#69589)