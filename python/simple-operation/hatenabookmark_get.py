from bs4 import BeautifulSoup
import requests
from time import sleep

payload = {
    'name': 'はてなのアカウント',
    'password': 'パスワード'
}
url = 'http://b.hatena.ne.jp/' + payload['name'] + '/bookmark'

s = requests.Session()
#前回のセッションを保ったままにする。
# ログイン
s.post('https://www.hatena.ne.jp/login', data=payload)

r = s.get(url)
page = 1

while True:
    soup = BeautifulSoup(r.text, 'html.parser')

    #　ブックマークを取得するコードを書く

    # 「次のページ」がなくなると最終ページということを使用
    if soup.find_all(class_="centerarticle-pager-next"):
        page += 1
        r = s.get(url + '?page=' + str(page))
    else:
        break
    sleep(10)