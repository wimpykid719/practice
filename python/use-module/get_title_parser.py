# -*- coding: utf-8 -*- 

import urllib.request
from html.parser import HTMLParser

class TestParser(HTMLParser): # HTMLParserを継承したクラスを定義する

    def __init__(self):
        HTMLParser.__init__(self)
        self.flag = False # タイトルタグの場合のフラグ

    def handle_starttag(self, tag, attrs): # 開始タグを扱うためのメソッド
        '''
        tagにはこんな感じにデータが入ってる。
        html
        head
        meta
        meta
        link
        script
        title
        '''
        #print(tag)

        #print(attrs)
        '''
        attrsにはこんな感じにデータが入っている。
        [('class', 'subnav menu')]
        [('class', 'tier-2 element-1'), ('role', 'treeitem')]

        [('class', 'text-shrink'), ('title', 'Make Text Smaller'), ('href', 'javascript:;')]
        ここで言ったらtagはaでattrsは('class', 'text-shrink'), ('title', 'Make Text Smaller'), ('href', 'javascript:;')で
        dataはSmaller
        <a class="text-shrink" title="Make Text Smaller" href="javascript:;">Smaller</a>
        '''
        if tag == "title":
            
            self.flag = True
    
    def handle_data(self, data): # 要素内用を扱うためのメソッド
        if self.flag:
            print(data)
            self.flag = False
    

if __name__ == "__main__":

    url = "http://www.python.org/"
    #print(urllib.request.urlopen(url))
    response = urllib.request.urlopen(url)

    
    parser = TestParser()        # パーサオブジェクトの生成
    parser.feed(response.read().decode("utf-8")) # パーサにHTMLを入力する

    parser.close()
    response.close()