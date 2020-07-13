

list_mydata = ['https://www.pinterest.jp/r/pin/554505772869102844/4995915543595742901/ab9290928e62760b540f32156fb9686925897abcbda51275fe2866dd3442d330','https://www.pinterest.jp/r/pin/554505772869102844/4995915543595742901/ab9290928e62760b540f32156fb9686925897abcbda51275fe2866dd3442d330','https://www.behance.net/gallery/67141435/X-O-Highlight-Messenger']

target_url = list_mydata[2]
i = 0
while 'www.pinterest' in target_url:
	if 3 < i:
		break
	print(1)
	i += 1