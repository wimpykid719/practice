import json
import os

file_pass = os.path.abspath('WebDesign.json')
temporary_data = open(file_pass, 'r')
json_dict = json.load(temporary_data)#ダブルをシングルに変換

n = 0
l = len(json_dict['data'])
print(l)
dict_mydata = {'data':[]}
for i in json_dict['data']:
	# print(i['num'])
	i['num'] = l - n
	n += 1
	dict_mydata['data'].extend([i])

print(dict_mydata)
path = os.getcwd()
with open(path + '/rWebDesign.json', 'w') as f:
	json.dump(dict_mydata, f)
#0スタートで引かないとひっくり返せない