# -*- coding: utf-8 -*-
import requests
from time import sleep


# 対象のURL
i = 1

while i < 211:
	url = 'url' + str(i) + '.jpg'
	file_name = '/vagrant/teststudy/img/' + str(i) + '.jpg'

	# 画像URL
	req = requests.get(url, stream=False)
	# リクエスト成功？
	if req.status_code == 200:
	     # ファイルの保存
	     f = open(file_name, 'wb')
	     f.write(req.content)
	     f.close()
	
	print(i)
	i += 1
	
	sleep(1)

print('finished')