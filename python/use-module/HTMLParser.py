# -*- coding: utf-8 -*- 
#ページ中の外部リンクをすべて抽出するプログラムです。

import urllib2
import re
from HTMLParser import HTMLParser

class TestParser(HTMLParser):

    def __init__(self):
        HTMLParser.__init__(self)
        self.url = ""

    def handle_starttag(self, tag, attrs):
        if tag == "a": # 開始タグがaであるかどうか判定
            attrs = dict(attrs) # タプルを辞書に変換する
            if 'href' in attrs: # キー値(属性名)がhrefであるか判定
                self.url = attrs['href']

    def handle_endtag(self, tag): # 開始・終了タグに囲まれた中身の処理
        if self.url and re.match('^http', self.url): # 先頭がhttpであるか判定
            print self.url
            self.url = ""
                 
if __name__ == "__main__":

    url = "http://www.python.org/"

    response = urllib2.urlopen(url)
    
    parser = TestParser()
    parser.feed(response.read())

    parser.close()



'''
>>> dict([('a',1),('b',2),('c',3)])
{'a': 1, 'c': 3, 'b': 2}
'''