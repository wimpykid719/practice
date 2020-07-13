import random

dic = {'url_1':{
	'name':'https://',
	'flag':0
	},
	'url_2':{
	'name':'https://',
	'flag':0
	}
}

urlplace = random.choice(list(dic.items()))
# リストと辞書が一緒になってる
print(urlplace[1]['name'])