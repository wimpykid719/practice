import json
import os
import requests
from time import sleep
from bs4 import BeautifulSoup

# file_pass = os.path.abspath('rWebDesign.json')
# temporary_data = open(file_pass, 'r')
# json_dict = json.load(temporary_data)#ダブルをシングルに変換

# get_url_info = requests.get(json_dict['data'][1]['from'], headers=headers)
# print(get_url_info.text)

# print(requests.get(json_dict['data'][1]['from']).url)



def get_redirect():
	target_url = 'https://www.pinterest.com/r/pin/554505772865723124/4995915543595742901/4cf0b7ee262acd41d1b0176d1e3ef047f3209215e827b790dc718ca5c1ea0bf6'
	i = 0
	# with requests.Session() as s:
	# 	p = s.post(login_url, data=payload, headers=headers)
		# cookies = p.cookies
		# print(type(cookies))
		# print(json_dict['data'][1]['from'])
	try:
		while 'www.pinterest' in target_url:
			if i > 20 or 'www.pinterest' in target_url and '/r/' not in target_url:
				return target_url

			sleep(0.5)
			r = requests.get(target_url)
			# print(r.url)
			target_url = r.url
			# print(r.url)
			i += 1
		url = r.url
		done = 'これを保存' + url
	except requests.exceptions.ConnectionError as e:
		url = e.request.url
		done = 'これを保存リンク切れ' + url
	
	print(done)
	return url

def confirmation_url(got_url):
	check_url = got_url
	
	if 'www.pinterest' in check_url and '/pin/' in check_url and '/r/' not in check_url:
		r = requests.get(check_url)
		html = BeautifulSoup(r.text, 'html.parser')
		head = html.find('head')
		metatag = head.find('meta', attrs={'property':'og:see_also', 'content':True})
		# print(metatag)
		if metatag['content']:
			check_url = metatag['content']
		
	return check_url

got_url = get_redirect()
got_url = confirmation_url(got_url)
print(got_url)

# result = [login(login_url, payload) for _ in range(9)]; print(result.count(True))

# import requests
# link = 'https://www.pinterest.com/r/pin/554505772869102844/4995915543595742901/ab9290928e62760b540f32156fb9686925897abcbda51275fe2866dd3442d330'
# ua = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36'
# headers = {'User-Agent': ua}

# link = requests.get(link, headers=headers)
# print(link.url)